(() => {
  'use strict';

  const bank = window.REVIEW_BANK;
  const lessons = bank.lessons;
  const lessonById = new Map(lessons.map((lesson, index) => [lesson.id, { ...lesson, index }]));
  const chapterById = new Map(bank.chapters.map(chapter => [chapter.id, chapter]));
  const storageKey = 'investment-concept-review-v1';
  const drafts = new Map();
  let storageMessage = '';
  let directorySaveTimer;
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
        if (validAnswers(lesson, answers)) initial.records[lesson.id] = { answers };
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
  const initialHash = location.hash.slice(1);
  let currentId = lessonById.has(initialHash) ? initialHash : state.lastLesson;
  state.directory.expanded ??= [lessonById.get(currentId).chapter];

  function saveState() {
    try {
      localStorage.setItem(storageKey, JSON.stringify(state));
      storageMessage = '';
    } catch {
      storageMessage = '当前浏览器未能保存记录。本页仍可练习，关闭后本次记录可能丢失。';
    }
    document.getElementById('storage-status').textContent = storageMessage;
  }

  function correctCount(lesson) {
    const record = state.records[lesson.id];
    if (!record) return 0;
    return lesson.questions.filter((question, index) => question.answer === record.answers[index]).length;
  }

  function reviewLessons() {
    return lessons.filter(lesson => state.records[lesson.id] && correctCount(lesson) < 2);
  }

  function renderProgress() {
    const completed = lessons.filter(lesson => state.records[lesson.id]).length;
    const needsReview = reviewLessons().length;
    document.getElementById('completed-count').textContent = completed;
    document.getElementById('total-count').textContent = lessons.length;
    document.getElementById('review-count').textContent = needsReview;
    document.getElementById('progress-fill').style.width = `${completed / lessons.length * 100}%`;
    const track = document.getElementById('progress-track');
    track.setAttribute('aria-valuemax', lessons.length);
    track.setAttribute('aria-valuenow', completed);
    const reviewButton = document.getElementById('review-needed');
    reviewButton.disabled = needsReview === 0;
    reviewButton.setAttribute('aria-label', `复习待巩固概念，共 ${needsReview} 个`);
  }

  function renderDirectory() {
    const keyword = state.directory.query.trim().toLocaleLowerCase();
    const scrollTop = state.directory.scrollTop;
    const matches = lessons.filter(lesson => !keyword ||
      `${lesson.title} ${lesson.summary} ${lesson.example}`.toLocaleLowerCase().includes(keyword)
    );
    document.getElementById('directory-count').textContent = keyword ? `${matches.length} / ${lessons.length}` : `${lessons.length} 个`;
    directoryList.innerHTML = bank.chapters.map(chapter => {
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
          return `<button type="button" class="concept-item ${lesson.id === currentId ? 'active' : ''}"
            data-lesson="${lesson.id}" ${lesson.id === currentId ? 'aria-current="page"' : ''}
            aria-label="${item.index + 1}. ${escapeHtml(lesson.title)}，${status}">
            <span class="concept-number">${String(item.index + 1).padStart(2, '0')}</span>
            <span class="concept-name">${escapeHtml(lesson.title)}</span>
            <span class="dot ${dotClass}" title="${status}" aria-hidden="true"></span>
          </button>`;
        }).join('')}
      </details>`;
    }).join('') || '<p class="search-empty">没有找到这个概念。试试更短的关键词，或清空搜索。</p>';
    directoryList.scrollTop = scrollTop;
  }

  function renderQuestion(lesson, question, questionIndex, answers, submitted) {
    const selected = answers[questionIndex];
    const correct = selected === question.answer;
    const choices = question.options.map((option, index) => {
      const isCorrect = submitted && index === question.answer;
      const isWrong = submitted && index === selected && !correct;
      const mark = isCorrect ? '✓' : isWrong ? '×' : '';
      return `<label class="option ${submitted ? 'locked' : ''} ${isCorrect ? 'correct' : ''} ${isWrong ? 'incorrect' : ''}">
        <input type="radio" name="question-${questionIndex}" value="${index}" data-question="${questionIndex}"
          ${selected === index ? 'checked' : ''} ${submitted ? 'disabled' : ''} required>
        <span class="option-letter" aria-hidden="true">${String.fromCharCode(65 + index)}</span>
        <span>${escapeHtml(option)}</span>${mark ? `<span class="option-mark" aria-hidden="true">${mark}</span>` : ''}
      </label>`;
    }).join('');
    const feedback = submitted ? `<section class="feedback ${correct ? '' : 'wrong'}" aria-label="第 ${questionIndex + 1} 题解析">
      <strong>${correct ? '答对了' : '这题再想一想'}</strong>
      <p class="reference-answer">参考答案 ${String.fromCharCode(65 + question.answer)} · ${escapeHtml(question.options[question.answer])}</p>
      <p>${escapeHtml(question.explanation)}</p>
    </section>` : '';
    return `<fieldset class="question"><legend><span class="question-number" aria-hidden="true">${questionIndex + 1}</span>${escapeHtml(question.prompt)}</legend>
      <div class="options">${choices}</div>${feedback}</fieldset>`;
  }

  function renderResult(lesson) {
    const correct = correctCount(lesson);
    const heading = correct === 2 ? '两道都答对了。' : `这次答对 ${correct} 题，我们再看看解析。`;
    const description = correct === 2 ? '这个概念的两题已完成，可以继续学习。' : '已把这个概念记为“待巩固”，可以重读上面的讲解后再练一次。';
    return `<div class="result-summary ${correct < 2 ? 'needs-review' : ''}" id="result-summary" tabindex="-1">
      <div><strong>${heading}</strong><p>${description}</p></div>
      <button class="text-button" type="button" data-action="retry">重新做这两题</button>
    </div>`;
  }

  function renderLesson() {
    const lesson = lessonById.get(currentId);
    const record = state.records[currentId];
    const submitted = Boolean(record && !drafts.has(currentId));
    const answers = submitted ? record.answers : drafts.get(currentId) || [null, null];
    const answered = answers.filter(Number.isInteger).length;
    const previous = lessons[lesson.index - 1];
    const next = lessons[lesson.index + 1];
    const chapter = chapterById.get(lesson.chapter);
    document.title = `${lesson.title} · 投资概念复习册`;
    document.getElementById('lesson-panel').innerHTML = `
      <div class="lesson-meta"><span class="lesson-position">第 ${String(lesson.index + 1).padStart(2, '0')} / ${lessons.length} 个概念</span><span>${escapeHtml(chapter.title)}</span></div>
      <h2 class="lesson-title" id="lesson-title" tabindex="-1">${escapeHtml(lesson.title)}</h2>
      <p class="section-label"><span aria-hidden="true"></span>先理解这个概念</p>
      <p class="concept-explanation">${escapeHtml(lesson.summary)}</p>
      <section class="example-box" aria-label="简单例子">
        <div class="example-label"><svg viewBox="0 0 20 24" aria-hidden="true"><path d="M5 11h10L10 23 5 11ZM4 10a4 4 0 0 1 3-7 3 3 0 0 1 6 0 4 4 0 0 1 3 7H4ZM7 11l5 7M13 11l-5 7"/></svg>用小例子想一想</div>
        <p>${escapeHtml(lesson.example)}</p>
      </section>
      <section class="exercise-heading" aria-labelledby="exercise-title">
        <h3 id="exercise-title">现在，试试两道题</h3>
        <p id="exercise-instructions">${submitted ? '这是你上次提交的结果。可以查看解析，或重新做这两题。' : '选好两题再提交。答案和解析会在提交后显示。'}</p>
      </section>
      ${submitted ? renderResult(lesson) : ''}
      <form id="exercise-form" aria-describedby="exercise-instructions">
        ${lesson.questions.map((question, index) => renderQuestion(lesson, question, index, answers, submitted)).join('')}
        ${submitted ? '' : `<div class="submit-row"><button class="primary-button" id="submit-answers" type="submit" ${answered === 2 ? '' : 'disabled'}>提交这两题</button><span class="selection-status" id="selection-status" aria-live="polite">已选 ${answered} / 2 题</span></div>`}
      </form>
      <nav class="lesson-nav" aria-label="按顺序学习概念">
        <button type="button" data-action="previous" ${previous ? '' : 'disabled'}><span>← 上一个概念</span><strong>${previous ? escapeHtml(previous.title) : '这是第一个概念'}</strong></button>
        <button type="button" data-action="next" ${next ? '' : 'disabled'}><span>下一个概念 →</span><strong>${next ? escapeHtml(next.title) : '这是最后一个概念'}</strong></button>
      </nav>
      ${next ? '' : '<p class="lesson-finished">已到最后一个概念。还可以回目录，复习需要巩固的地方。</p>'}
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
    document.documentElement.classList.toggle('directory-open', open);
    directoryToggle.setAttribute('aria-expanded', String(open));
    directoryToggle.setAttribute('aria-label', open ? '收起概念目录' : '展开概念目录');
    directoryToggle.innerHTML = open ? '<span aria-hidden="true">‹</span><span>收起</span>' : '<span aria-hidden="true">☰</span><span>目录</span>';
    directoryContent.inert = mobileLayout.matches && !open;
    document.getElementById('directory-backdrop').hidden = !open;
    for (const element of document.querySelectorAll('.site-header, .lesson-panel, .page-footer, .skip-link')) {
      element.inert = open;
    }
    if (open) {
      sidebar.setAttribute('role', 'dialog');
      sidebar.setAttribute('aria-modal', 'true');
      directoryContent.focus({ preventScroll: true });
      directoryList.scrollTop = state.directory.scrollTop;
    } else {
      sidebar.removeAttribute('role');
      sidebar.removeAttribute('aria-modal');
      if (returnFocus && mobileLayout.matches) directoryToggle.focus({ preventScroll: true });
    }
    clearTimeout(directorySaveTimer);
    saveState();
  }

  function closeDirectory(returnFocus = false) {
    setDirectoryOpen(false, returnFocus);
  }

  function goToLesson(id, clearSearch = false) {
    if (!lessonById.has(id)) return;
    currentId = id;
    state.lastLesson = id;
    if (clearSearch) {
      state.directory.query = '';
      document.getElementById('concept-search').value = '';
    }
    if (location.hash !== `#${id}`) history.pushState(null, '', `#${id}`);
    closeDirectory();
    saveState();
    renderDirectory();
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
    if (!event.target.matches('input[data-question]')) return;
    const answers = [...(drafts.get(currentId) || [null, null])];
    answers[Number(event.target.dataset.question)] = Number(event.target.value);
    drafts.set(currentId, answers);
    const answered = answers.filter(Number.isInteger).length;
    document.getElementById('selection-status').textContent = `已选 ${answered} / 2 题`;
    document.getElementById('submit-answers').disabled = answered !== 2;
  });

  document.getElementById('lesson-panel').addEventListener('submit', event => {
    event.preventDefault();
    const lesson = lessonById.get(currentId);
    const answers = drafts.get(currentId);
    if (!validAnswers(lesson, answers)) return;
    state.records[currentId] = { answers: [...answers] };
    drafts.delete(currentId);
    saveState();
    renderProgress();
    renderDirectory();
    renderLesson();
    const result = document.getElementById('result-summary');
    result.focus({ preventScroll: true });
    result.scrollIntoView({ block: 'start' });
  });

  document.getElementById('lesson-panel').addEventListener('click', event => {
    const button = event.target.closest('[data-action]');
    if (!button || button.disabled) return;
    const index = lessonById.get(currentId).index;
    if (button.dataset.action === 'retry') {
      drafts.set(currentId, [null, null]);
      renderLesson();
      document.querySelector('input[name="question-0"]').focus();
    } else if (button.dataset.action === 'previous') {
      goToLesson(lessons[index - 1].id, true);
    } else if (button.dataset.action === 'next') {
      goToLesson(lessons[index + 1].id, true);
    }
  });

  document.getElementById('review-needed').addEventListener('click', () => {
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
      const controls = [...sidebar.querySelectorAll('button:not([disabled]), input, summary')]
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
    if (lessonById.has(id) && id !== currentId) goToLesson(id, true);
  });

  state.lastLesson = currentId;
  applyFontSize();
  updateHeaderHeight();
  document.getElementById('concept-search').value = state.directory.query;
  renderProgress();
  renderDirectory();
  renderLesson();
  directoryContent.inert = mobileLayout.matches;
  document.getElementById('storage-status').textContent = storageMessage;
})();
