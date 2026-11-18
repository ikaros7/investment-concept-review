(() => {
  'use strict';

  const bank = window.REVIEW_BANK;
  const lessons = bank.lessons;
  const lessonById = new Map(lessons.map((lesson, index) => [lesson.id, { ...lesson, index }]));
  const chapterById = new Map(bank.chapters.map(chapter => [chapter.id, chapter]));
  const storageKey = 'investment-concept-review-v1';
  const drafts = new Map();
  const choiceOrders = new Map();
  let storageMessage = '';
  let directorySaveTimer;
  let pageScrollY = 0;
  const mobileLayout = window.matchMedia('(max-width: 720px)');
  const sidebar = document.getElementById('concept-sidebar');
  const directoryContent = document.getElementById('directory-content');
  const directoryList = document.getElementById('concept-list');
  const directoryToggle = document.getElementById('directory-toggle');

  function escapeHtml(value) {
    return String(value).replace(/[&<>"']/g, character => ({
      '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
    })[character]);
  }

  function validAnswers(lesson, answers) {
    return Array.isArray(answers) && answers.length === 2 && answers.every((answer, index) =>
      Number.isInteger(answer) && answer >= 0 && answer < lesson.questions[index].options.length
    );
  }

  function validOptionOrders(lesson, orders) {
    return Array.isArray(orders) && orders.length === lesson.questions.length && orders.every((order, index) => {
      const count = lesson.questions[index].options.length;
      return Array.isArray(order) && order.length === count && new Set(order).size === count &&
        order.every(option => Number.isInteger(option) && option >= 0 && option < count);
    });
  }

  function createOptionOrders(lesson) {
    return lesson.questions.map(question => {
      const order = question.options.map((_, index) => index);
      for (let index = order.length - 1; index > 0; index--) {
        const swapIndex = Math.floor(Math.random() * (index + 1));
        [order[index], order[swapIndex]] = [order[swapIndex], order[index]];
      }
      return order;
    });
  }

  function getOptionOrders(lesson, submitted) {
    if (submitted) {
      return state.records[lesson.id].optionOrders || lesson.questions.map(question => question.options.map((_, index) => index));
    }
    if (!choiceOrders.has(lesson.id)) choiceOrders.set(lesson.id, createOptionOrders(lesson));
    return choiceOrders.get(lesson.id);
  }

  function readState() {
    const initial = {
      records: {}, lastLesson: lessons[0].id, fontSize: 18,
      directory: { scrollTop: 0, expanded: null, query: '' }
    };
    try {
      const saved = JSON.parse(localStorage.getItem(storageKey) || 'null');
      if (!saved || typeof saved !== 'object') return initial;
      for (const lesson of lessons) {
        const answers = saved.records?.[lesson.id]?.answers;
        if (validAnswers(lesson, answers)) {
          initial.records[lesson.id] = { answers };
          const orders = saved.records[lesson.id].optionOrders;
          if (validOptionOrders(lesson, orders)) initial.records[lesson.id].optionOrders = orders.map(order => [...order]);
        }
      }
      if (lessonById.has(saved.lastLesson)) initial.lastLesson = saved.lastLesson;
      if (Number.isFinite(saved.fontSize)) initial.fontSize = Math.min(26, Math.max(16, Math.round(saved.fontSize)));
      if (Number.isFinite(saved.directory?.scrollTop)) initial.directory.scrollTop = Math.max(0, saved.directory.scrollTop);
      if (Array.isArray(saved.directory?.expanded)) {
        initial.directory.expanded = [...new Set(saved.directory.expanded.filter(id => chapterById.has(id)))];
      }
      if (typeof saved.directory?.query === 'string') initial.directory.query = saved.directory.query;
    } catch {
      storageMessage = '上次的练习记录未能读取，已按未练习状态打开。';
    }
    return initial;
  }

  const state = readState();
  const units = [undefined, window.CONNECTED_UNIT_11].map((config, index) => window.createConnectedUnit({
    config,
    panel: document.getElementById('lesson-panel'),
    onChange() {
      renderProgress();
      renderDirectory();
      document.getElementById('storage-status').textContent = storageMessages();
    },
    onExit() { goToLesson(index === 0 ? units[1].id : getProgressLesson().id, true); },
    onPrevious: index === 1 ? () => goToLesson(units[0].id, true) : undefined,
    nextLabel: index === 0 ? '第11单元' : '概念复习'
  }));
  const unitById = new Map(units.map(unit => [unit.id, unit]));
  const currentUnit = () => unitById.get(currentId);
  function storageMessages() { return [storageMessage, ...units.map(unit => unit.storageMessage)].filter(Boolean).join(' '); }
  let currentId = units.find(unit => unit.shouldResume())?.id || getProgressLesson().id;
  history.replaceState(null, '', `#${currentId}`);
  state.directory.expanded ??= [lessonById.get(currentId)?.chapter || 'accounts'];

  function saveState() {
    try {
      localStorage.setItem(storageKey, JSON.stringify(state));
      storageMessage = '';
    } catch {
      storageMessage = '当前浏览器未能保存记录。本页仍可练习，关闭后本次记录可能丢失。';
    }
    document.getElementById('storage-status').textContent = storageMessages();
  }

  function correctCount(lesson) {
    const record = state.records[lesson.id];
    if (!record) return 0;
    return lesson.questions.filter((question, index) => question.answer === record.answers[index]).length;
  }

  function getProgressLesson() {
    const practiced = lessons.filter(lesson => state.records[lesson.id]);
    const latest = practiced[practiced.length - 1];
    if (!latest) return lessons[0];
    const index = lessonById.get(latest.id).index;
    const nextIndex = correctCount(latest) === 2 ? index + 1 : index;
    return lessons[Math.min(nextIndex, lessons.length - 1)];
  }

  function reviewLessons() {
    return lessons.filter(lesson => state.records[lesson.id] && correctCount(lesson) < 2);
  }

  function renderProgress() {
    const unit = currentUnit();
    if (unit) {
      document.getElementById('completed-count').textContent = unit.step + 1;
      document.getElementById('total-count').textContent = 4;
      document.querySelector('.progress-label').textContent = '串联 ';
      document.getElementById('review-count').textContent = unit.needsReview ? 1 : 0;
      document.getElementById('progress-fill').style.transform = `scaleX(${(unit.step + 1) / 4})`;
      const track = document.getElementById('progress-track');
      track.setAttribute('aria-label', '串联单元当前步骤');
      track.setAttribute('aria-valuemax', 4);
      track.setAttribute('aria-valuenow', unit.step + 1);
      document.getElementById('progress-resume').setAttribute('aria-label', `串联单元第 ${unit.step + 1} / 4 步，回到当前学习步骤`);
      document.getElementById('review-needed').disabled = !unit.needsReview;
      document.getElementById('review-needed').setAttribute('aria-label', '回到串联单元待巩固练习');
      return;
    }
    document.querySelector('.progress-label').textContent = '复习 ';
    const completed = lessons.filter(lesson => state.records[lesson.id]).length;
    const needsReview = reviewLessons().length;
    document.getElementById('completed-count').textContent = completed;
    document.getElementById('total-count').textContent = lessons.length;
    document.getElementById('review-count').textContent = needsReview;
    document.getElementById('progress-fill').style.transform = `scaleX(${completed / lessons.length})`;
    const track = document.getElementById('progress-track');
    track.setAttribute('aria-label', '已练习概念');
    track.setAttribute('aria-valuemax', lessons.length);
    track.setAttribute('aria-valuenow', completed);
    const progressLesson = getProgressLesson();
    document.getElementById('progress-resume').setAttribute('aria-label', `已练习 ${completed} / ${lessons.length} 个概念，回到当前学习进度：${progressLesson.title}`);
    const reviewButton = document.getElementById('review-needed');
    reviewButton.disabled = needsReview === 0;
    reviewButton.setAttribute('aria-label', `复习待巩固概念，共 ${needsReview} 个`);
  }

  function renderDirectory() {
    const keyword = state.directory.query.trim().toLocaleLowerCase();
    const scrollTop = state.directory.scrollTop;
    const progressId = getProgressLesson().id;
    const matches = lessons.filter(lesson => !keyword ||
      `${lesson.title} ${lesson.summary} ${lesson.example}`.toLocaleLowerCase().includes(keyword)
    );
    const matchingUnits = units.filter(unit => !keyword || `${unit.title} ${unit.keywords} 第${unit.number}单元 串联学习`.toLocaleLowerCase().includes(keyword));
    document.getElementById('directory-count').textContent = keyword ? `${matches.length + matchingUnits.length} 项` : `${lessons.length} 概念·${units.length}单元`;
    const unitEntry = matchingUnits.map(unit => `<div class="unit-directory-entry"><button type="button" class="concept-item ${currentId === unit.id ? 'active progress-current' : ''}" data-lesson="${unit.id}" ${currentId === unit.id ? 'aria-current="page"' : ''} aria-label="第${unit.number}串联单元：${unit.title}"><span class="concept-number">${unit.number}</span><span class="concept-name">${unit.title}</span><span class="dot ${unit.done ? 'done' : unit.needsReview ? 'review' : ''}" aria-hidden="true"></span></button></div>`).join('');
    directoryList.innerHTML = unitEntry + bank.chapters.map(chapter => {
      const items = matches.filter(lesson => lesson.chapter === chapter.id);
      if (!items.length) return '';
      const chapterLessons = lessons.filter(lesson => lesson.chapter === chapter.id);
      const practiced = chapterLessons.filter(lesson => state.records[lesson.id]).length;
      const open = keyword || state.directory.expanded.includes(chapter.id);
      return `<details class="chapter" data-chapter="${chapter.id}" ${open ? 'open' : ''}>
        <summary><span class="chapter-name">${escapeHtml(chapter.title)}</span><small>${practiced}/${chapterLessons.length}</small></summary>
        ${items.map(lesson => {
          const record = state.records[lesson.id];
          const status = !record ? '未练习' : correctCount(lesson) === 2 ? '两题答对' : '待巩固';
          const dotClass = !record ? '' : correctCount(lesson) === 2 ? 'done' : 'review';
          const item = lessonById.get(lesson.id);
          return `<button type="button" class="concept-item ${lesson.id === currentId ? 'active' : ''} ${lesson.id === progressId ? 'progress-current' : ''}"
            data-lesson="${lesson.id}" ${lesson.id === currentId ? 'aria-current="page"' : ''}
            aria-label="${item.index + 1}. ${escapeHtml(lesson.title)}，${status}${lesson.id === progressId ? '，当前学习进度' : ''}">
            <span class="concept-number">${String(item.index + 1).padStart(2, '0')}</span>
            <span class="concept-name">${escapeHtml(lesson.title)}</span>
            <span class="dot ${dotClass}" title="${status}" aria-hidden="true"></span>
          </button>`;
        }).join('')}
      </details>`;
    }).join('') || '<p class="search-empty">没有找到这个概念。试试更短的关键词，或清空搜索。</p>';
    directoryList.scrollTop = scrollTop;
  }

  function locateProgressInDirectory() {
    const lesson = currentUnit() ? { id: currentId, chapter: 'accounts' } : getProgressLesson();
    state.directory.query = '';
    document.getElementById('concept-search').value = '';
    if (!state.directory.expanded.includes(lesson.chapter)) state.directory.expanded.push(lesson.chapter);
    renderDirectory();
    const item = directoryList.querySelector(`[data-lesson="${lesson.id}"]`);
    const offset = item.getBoundingClientRect().top - directoryList.getBoundingClientRect().top;
    directoryList.scrollTop += offset - (directoryList.clientHeight - item.offsetHeight) / 2;
    state.directory.scrollTop = directoryList.scrollTop;
  }

  function renderQuestion(question, questionIndex, answers, submitted, firstWrong, order) {
    const selected = answers[questionIndex];
    const correct = selected === question.answer;
    const choices = order.map((index, position) => {
      const option = question.options[index];
      const isCorrect = submitted && index === question.answer;
      const isWrong = submitted && index === selected && !correct;
      const mark = isCorrect ? '✓' : isWrong ? '×' : '';
      return `<label class="option ${submitted ? 'locked' : ''} ${isCorrect ? 'correct' : ''} ${isWrong ? 'incorrect' : ''}">
        <input type="radio" name="question-${questionIndex}" value="${index}" data-question="${questionIndex}"
          ${selected === index ? 'checked' : ''} ${submitted ? 'disabled' : ''} required>
        <span class="option-letter" aria-hidden="true">${String.fromCharCode(65 + position)}</span>
        <span>${escapeHtml(option)}</span>${mark ? `<span class="option-mark" aria-hidden="true">${mark}</span>` : ''}
      </label>`;
    }).join('');
    const feedback = submitted ? `<section class="feedback ${correct ? '' : 'wrong'}" aria-label="第 ${questionIndex + 1} 题解析">
      <strong>${correct ? '回答正确' : '回答有误'}</strong>
      <p class="reference-answer">参考答案 ${String.fromCharCode(65 + order.indexOf(question.answer))} · ${escapeHtml(question.options[question.answer])}</p>
      <p>${escapeHtml(question.explanation)}</p>
      ${firstWrong ? '<button class="text-button" type="button" data-action="retry">重新做两题</button>' : ''}
    </section>` : '';
    return `<div class="question ${submitted && !correct ? 'needs-review' : ''}" data-question-index="${questionIndex}" tabindex="-1">
      <fieldset class="question-fields"><legend><span class="question-number" aria-hidden="true">${questionIndex + 1}</span>${escapeHtml(question.prompt)}</legend>
        <div class="options">${choices}</div>
      </fieldset>${feedback}</div>`;
  }

  function renderLesson() {
    if (currentUnit()) { currentUnit().render(); return; }
    const lesson = lessonById.get(currentId);
    const record = state.records[currentId];
    const submitted = Boolean(record && !drafts.has(currentId));
    const optionOrders = getOptionOrders(lesson, submitted);
    const answers = submitted ? record.answers : drafts.get(currentId) || [null, null];
    const answered = answers.filter(Number.isInteger).length;
    const firstWrongIndex = submitted ? lesson.questions.findIndex((question, index) => question.answer !== answers[index]) : -1;
    const previous = lessons[lesson.index - 1];
    const next = lessons[lesson.index + 1];
    const chapter = chapterById.get(lesson.chapter);
    document.title = `${lesson.title} · 投资概念复习册`;
    document.getElementById('lesson-panel').innerHTML = `
      <div class="lesson-content">
      <div class="lesson-meta"><span class="lesson-position">第 ${String(lesson.index + 1).padStart(2, '0')} / ${lessons.length} 个概念</span><span>${escapeHtml(chapter.title)}</span></div>
      <h2 class="lesson-title" id="lesson-title" tabindex="-1">${escapeHtml(lesson.title)}</h2>
      <p class="concept-explanation">${escapeHtml(lesson.summary)}</p>
      <section class="example-box" aria-label="简单例子">
        <div class="example-label">教学示例</div>
        <p>${escapeHtml(lesson.example)}</p>
      </section>
      <section class="exercise-heading" aria-labelledby="exercise-title">
        <h3 id="exercise-title">练习</h3>
      </section>
      <form id="exercise-form" aria-labelledby="exercise-title">
        ${lesson.questions.map((question, index) => renderQuestion(question, index, answers, submitted, index === firstWrongIndex, optionOrders[index])).join('')}
        ${submitted ? '' : `<div class="submit-row"><span class="selection-status" id="selection-status" aria-live="polite">已选 ${answered} / 2 题</span><button class="primary-button" id="submit-answers" type="submit" ${answered === 2 ? '' : 'disabled'}>提交</button></div>`}
      </form>
      ${submitted && firstWrongIndex < 0 ? '<button class="text-button" type="button" data-action="retry">重新练习</button>' : ''}
      ${!next && submitted && firstWrongIndex < 0 ? '<p class="lesson-complete" id="lesson-complete" tabindex="-1" role="status">已完成最后一个概念。</p>' : ''}
      </div>
      <nav class="lesson-nav" aria-label="按顺序学习概念">
        <button type="button" data-action="previous" ${previous ? '' : 'disabled'}><span>← 上一页</span><strong>${previous ? escapeHtml(previous.title) : ''}</strong></button>
        <button type="button" data-action="next" ${next ? '' : 'disabled'}><span>下一页 →</span><strong>${next ? escapeHtml(next.title) : ''}</strong></button>
      </nav>
    `;
  }

  function applyFontSize() {
    document.documentElement.style.setProperty('--reading-size', `${state.fontSize}px`);
    document.getElementById('font-value').textContent = state.fontSize;
    document.getElementById('font-smaller').disabled = state.fontSize <= 16;
    document.getElementById('font-larger').disabled = state.fontSize >= 26;
  }

  function rememberDirectoryPosition() {
    if (!directoryContent.inert) state.directory.scrollTop = directoryList.scrollTop;
  }

  function setDirectoryOpen(open, returnFocus = false) {
    rememberDirectoryPosition();
    open = mobileLayout.matches && open;
    const wasOpen = directoryToggle.getAttribute('aria-expanded') === 'true';
    if (open && !wasOpen) {
      pageScrollY = window.scrollY;
      document.body.style.top = `-${pageScrollY}px`;
    }
    document.documentElement.classList.toggle('directory-open', open);
    if (!open && wasOpen) {
      document.body.style.top = '';
      window.scrollTo(0, pageScrollY);
    }
    directoryToggle.setAttribute('aria-expanded', String(open));
    directoryToggle.setAttribute('aria-label', open ? '收起概念目录' : '展开概念目录');
    directoryContent.inert = mobileLayout.matches && !open;
    document.getElementById('directory-backdrop').hidden = !open;
    for (const element of document.querySelectorAll('.brand, .font-tools, #review-needed, .lesson-panel, .skip-link')) {
      element.inert = open;
    }
    if (open) {
      locateProgressInDirectory();
      directoryContent.focus({ preventScroll: true });
    } else {
      if (returnFocus && mobileLayout.matches) directoryToggle.focus({ preventScroll: true });
    }
    clearTimeout(directorySaveTimer);
    saveState();
  }

  function closeDirectory(returnFocus = false) {
    setDirectoryOpen(false, returnFocus);
  }

  function goToLesson(id, clearSearch = false) {
    if (!lessonById.has(id) && !unitById.has(id)) return;
    currentId = id;
    if (!unitById.has(id)) state.lastLesson = id;
    units.forEach(unit => unit.setActive(id === unit.id));
    if (clearSearch) {
      state.directory.query = '';
      document.getElementById('concept-search').value = '';
    }
    if (location.hash !== `#${id}`) history.pushState(null, '', `#${id}`);
    closeDirectory();
    renderDirectory();
    renderProgress();
    renderLesson();
    const title = document.getElementById('lesson-title');
    title.focus({ preventScroll: true });
    document.getElementById('lesson-panel').scrollIntoView({ block: 'start' });
  }

  document.getElementById('concept-search').addEventListener('input', event => {
    state.directory.query = event.target.value;
    state.directory.scrollTop = 0;
    renderDirectory();
    saveState();
  });

  directoryList.addEventListener('scroll', () => {
    rememberDirectoryPosition();
    clearTimeout(directorySaveTimer);
    directorySaveTimer = setTimeout(saveState, 150);
  }, { passive: true });

  directoryList.addEventListener('toggle', event => {
    const chapter = event.target;
    if (!chapter.matches('details[data-chapter]') || state.directory.query.trim()) return;
    const expanded = new Set(state.directory.expanded);
    if (expanded.has(chapter.dataset.chapter) === chapter.open) return;
    if (chapter.open) expanded.add(chapter.dataset.chapter);
    else expanded.delete(chapter.dataset.chapter);
    state.directory.expanded = [...expanded];
    rememberDirectoryPosition();
    saveState();
  }, true);

  document.getElementById('concept-list').addEventListener('click', event => {
    const button = event.target.closest('[data-lesson]');
    if (button) goToLesson(button.dataset.lesson);
  });

  document.getElementById('lesson-panel').addEventListener('change', event => {
    if (currentUnit()) return;
    if (!event.target.matches('input[data-question]')) return;
    const answers = [...(drafts.get(currentId) || [null, null])];
    answers[Number(event.target.dataset.question)] = Number(event.target.value);
    drafts.set(currentId, answers);
    const answered = answers.filter(Number.isInteger).length;
    document.getElementById('selection-status').textContent = `已选 ${answered} / 2 题`;
    document.getElementById('submit-answers').disabled = answered !== 2;
  });

  document.getElementById('lesson-panel').addEventListener('submit', event => {
    if (currentUnit()) return;
    event.preventDefault();
    const lesson = lessonById.get(currentId);
    const answers = drafts.get(currentId);
    if (!validAnswers(lesson, answers)) return;
    state.records[currentId] = { answers: [...answers], optionOrders: getOptionOrders(lesson, false).map(order => [...order]) };
    drafts.delete(currentId);
    saveState();
    renderProgress();
    const firstWrongIndex = lesson.questions.findIndex((question, index) => question.answer !== answers[index]);
    const next = lessons[lesson.index + 1];
    if (firstWrongIndex < 0 && next) {
      goToLesson(next.id, true);
      return;
    }
    renderDirectory();
    renderLesson();
    const target = firstWrongIndex >= 0 ? document.querySelector(`[data-question-index="${firstWrongIndex}"]`) : document.getElementById('lesson-complete');
    target.focus({ preventScroll: true });
    target.scrollIntoView({ block: 'start' });
  });

  document.getElementById('lesson-panel').addEventListener('click', event => {
    if (currentUnit()) return;
    const button = event.target.closest('[data-action]');
    if (!button || button.disabled) return;
    const index = lessonById.get(currentId).index;
    if (button.dataset.action === 'retry') {
      choiceOrders.set(currentId, createOptionOrders(lessons[index]));
      drafts.set(currentId, [null, null]);
      renderLesson();
      const firstQuestion = document.querySelector('.question');
      firstQuestion.focus({ preventScroll: true });
      firstQuestion.scrollIntoView({ block: 'start' });
    } else if (button.dataset.action === 'previous') {
      goToLesson(lessons[index - 1].id, true);
    } else if (button.dataset.action === 'next') {
      goToLesson(lessons[index + 1].id, true);
    }
  });

  document.getElementById('progress-resume').addEventListener('click', () => {
    goToLesson(currentUnit() ? currentId : getProgressLesson().id, true);
  });

  document.getElementById('review-needed').addEventListener('click', () => {
    if (currentUnit()) { currentUnit().review(); return; }
    const pending = reviewLessons();
    if (!pending.length) return;
    const currentIndex = lessonById.get(currentId).index;
    const next = pending.find(lesson => lessonById.get(lesson.id).index > currentIndex) || pending[0];
    goToLesson(next.id, true);
  });

  for (const [id, change] of [['font-smaller', -1], ['font-larger', 1]]) {
    document.getElementById(id).addEventListener('click', () => {
      state.fontSize = Math.min(26, Math.max(16, state.fontSize + change));
      applyFontSize();
      saveState();
    });
  }

  document.getElementById('directory-toggle').addEventListener('click', () => {
    setDirectoryOpen(directoryToggle.getAttribute('aria-expanded') !== 'true');
  });

  document.getElementById('directory-backdrop').addEventListener('click', () => closeDirectory(true));
  document.addEventListener('keydown', event => {
    if (directoryToggle.getAttribute('aria-expanded') !== 'true') return;
    if (event.key === 'Escape') {
      event.preventDefault();
      closeDirectory(true);
    } else if (event.key === 'Tab') {
      const controls = [directoryToggle, document.getElementById('progress-resume'), ...sidebar.querySelectorAll('button:not([disabled]), input, summary')]
        .filter(element => !element.closest('[inert]') && element.getClientRects().length);
      const first = controls[0];
      const last = controls[controls.length - 1];
      if (event.shiftKey && (document.activeElement === first || document.activeElement === directoryContent)) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }
  });

  mobileLayout.addEventListener('change', () => closeDirectory());
  window.addEventListener('pagehide', () => {
    rememberDirectoryPosition();
    clearTimeout(directorySaveTimer);
    saveState();
  });

  function updateHeaderHeight() {
    const height = Math.ceil(document.querySelector('.site-header').getBoundingClientRect().height);
    document.documentElement.style.setProperty('--header-height', `${height}px`);
  }
  const headerObserver = new ResizeObserver(updateHeaderHeight);
  headerObserver.observe(document.querySelector('.site-header'));

  window.addEventListener('hashchange', () => {
    const id = location.hash.slice(1);
    if ((lessonById.has(id) || unitById.has(id)) && id !== currentId) goToLesson(id, true);
  });

  if (!currentUnit()) state.lastLesson = currentId;
  units.forEach(unit => unit.setActive(currentId === unit.id));
  applyFontSize();
  updateHeaderHeight();
  renderProgress();
  renderLesson();
  locateProgressInDirectory();
  directoryContent.inert = mobileLayout.matches;
  document.getElementById('storage-status').textContent = storageMessages();
})();
