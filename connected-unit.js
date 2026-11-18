/* 合成教学案例。金额及交易均为假设；本文件不提供投资建议。 */
(() => {
  'use strict';
  const id = 'profit-cash-ar';
  const title = '利润—现金流—应收账款';
  const version = '2026-11-18.1';
  const storageKey = 'investment-connected-profit-cash-ar-v1';
  const conditions = '本单元是合成案例。销售已完成，售价确定；欠款只需等待约定日期付款，预计能够收回。材料全部用于当天售出的冰淇淋，材料款当天付清。没有其他收入、费用、税费或退货。按天观察仅用于教学。';
  const source = { title: '财政部《企业会计准则第14号——收入》2017年修订版，第四、五条', url: 'https://kjs.mof.gov.cn/zt/kjzzss/kuaijizhunzeshishi/201709/t20170907_2694006.htm', checked: '2026-11-18' };
  const option = (id, text, feedback) => ({ id, text, feedback });
  const questions = [
    {
      id: 'payment-timing', title: '付款时间变了',
      story: ['如果顾客第一天就付清10元，销售和材料成本都不变。'],
      prompt: '第一天的利润、现金净变化、结束时应收账款，分别是多少？',
      parts: [
        { id: 'profit', label: '第一天利润', answer: 'p6', explanation: '销售10元−对应材料成本4元＝利润6元。付款时间改变，销售和成本没有改变。', options: [option('p6', '6元'), option('p13', '13元', '提前收到的7元不是新增销售，不能重复计入利润。'), option('p10', '10元', '10元是销售额，还要扣掉对应材料成本4元。')] },
        { id: 'cash', label: '当天现金净变化', answer: 'c6', explanation: '收到10元，付出4元，现金净流入6元。', options: [option('c-1', '净流出1元', '这次顾客已付清10元，不能沿用原来只收到3元的结果。'), option('c10', '净流入10元', '除了收款10元，还要扣除付出的4元材料款。'), option('c6', '净流入6元')] },
        { id: 'ar', label: '期末应收账款', answer: 'a0', explanation: '10元货款全部收到，结束时应收账款为0元。', options: [option('a7', '7元', '这次货款已经付清，不再有原来的7元欠款。'), option('a0', '0元'), option('a10', '10元', '应收账款是还没收到的货款，不是已经全部收到的销售额。')] }
      ],
      relation: { prompt: '相比原来的情况，为什么三个结果会这样变化？', answer: 'timing', options: [option('new-sale', '多收的7元来自新增销售，所以现金和利润增加，应收账款减少。', '这次没有新增销售，只是原本晚收的货款提前到账。'), option('timing', '多收的7元是原本要晚收的货款，所以利润不变，现金增加，应收账款减少。'), option('unchanged', '多收的7元是原本要晚收的货款，所以利润、现金和应收账款都不变。', '利润不变，但实际收到的钱更多，尚未收到的货款更少。')] },
      explanation: ['利润仍是10−4＝6元。现金是收10元、付4元，净流入6元。货款全部收到，应收账款为0元。', '相比原来的情况，只是把原本晚收的7元提前收到了；销售和成本没有改变，所以利润没有改变。'],
      trace: null
    },
    {
      id: 'old-and-new', title: '收旧账，也有新欠款',
      story: ['回到最初的故事：第一天结束时，顾客还欠7元。练习一的“付清10元”只是另一种假设，不带入本题。', '第二天：①收回旧欠款5元。②又卖出8元冰淇淋，新顾客付2元，还欠6元。③新售冰淇淋的材料成本4元，当天付清。'],
      prompt: '第二天的利润、现金净变化、结束时应收账款，分别是多少？',
      parts: [
        { id: 'profit', label: '第二天利润', answer: 'p4', explanation: '当天新销售8元−对应材料成本4元＝利润4元。旧货款收回不再算一次收入。', options: [option('p9', '9元', '收回旧欠款5元不是当天新增收入，不能与新销售重复相加。'), option('p4', '4元'), option('p3', '3元', '3元是当天现金净流入；利润要按当天销售和对应成本计算。')] },
        { id: 'cash', label: '当天现金净变化', answer: 'c3', explanation: '收旧款5元＋收新款2元−付材料款4元＝现金净流入3元。', options: [option('c7', '净流入7元', '收到7元后，还付出了4元材料款。'), option('c4', '净流入4元', '4元是当天利润。现金要逐笔汇总实际收款和付款。'), option('c3', '净流入3元')] },
        { id: 'ar', label: '期末应收账款', answer: 'a8', explanation: '原有7元−收回5元＋新增6元＝结束时应收账款8元。', options: [option('a8', '8元'), option('a2', '2元', '旧欠款还剩2元，但还要加上新产生的6元欠款。'), option('a6', '6元', '除了新欠款6元，原来的旧欠款仍有2元没收回。')] }
      ],
      relation: { prompt: '已经收回旧欠款，为什么结束时顾客欠的钱仍可能更多？', answer: 'both', options: [option('reverse', '收回旧欠款会增加应收账款，新销售产生的欠款不影响应收账款。', '收回旧欠款会减少应收账款；新销售中没收到的货款会增加应收账款。'), option('profit-only', '收款不一定等于利润，所以只看当天利润就能判断应收账款怎样变化。', '仅看利润不够，还要追踪原有欠款、收回的欠款和新增欠款。'), option('both', '旧欠款减少和新欠款增加同时发生，新增欠款可能超过收回的旧欠款。')] },
      explanation: ['利润4元＝8−4。现金净流入3元＝5＋2−4。期末应收账款8元＝原有7−收回5＋新增6。', '收回5元旧欠款，同时又产生6元新欠款，所以顾客合计欠的钱反而增加1元。'],
      trace: [
        { label: '收回旧欠款5元', profit: '0元', cash: '＋5元', ar: '−5元' },
        { label: '新销售8元，收到2元', profit: '＋8元', cash: '＋2元', ar: '＋6元' },
        { label: '对应材料成本4元并支付', profit: '−4元', cash: '−4元', ar: '0元' }
      ]
    }
  ];
  const clone = value => JSON.parse(JSON.stringify(value));
  const esc = value => String(value).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);
  const now = () => new Date().toISOString();
  const emptyAttempt = () => ({ revealed: false, results: {}, confirmedAt: null, relation: null, submittedAt: null, startedAt: now() });
  const completeResults = (q, a) => q.parts.every(p => p.options.some(o => o.id === a.results[p.id]));
  const count = (q, a) => q.parts.filter(p => a?.results[p.id] === p.answer).length;
  const correct = (q, a) => Boolean(a?.submittedAt && count(q, a) === 3 && a.relation === q.relation.answer);

  window.createConnectedUnit = ({ panel, onChange, onExit }) => {
    let storageMessage = '';
    const initial = () => ({ version, active: false, step: 0, attempts: {}, first: {}, history: {} });
    let state = initial();
    try {
      const saved = JSON.parse(localStorage.getItem(storageKey) || 'null');
      if (saved && saved.version === version) {
        state.active = saved.active === true;
        if (Number.isInteger(saved.step) && saved.step >= 0 && saved.step <= 3) state.step = saved.step;
        for (const q of questions) {
          const a = saved.attempts?.[q.id];
          if (a && a.results && typeof a.results === 'object') {
            const clean = emptyAttempt();
            clean.revealed = a.revealed === true;
            clean.startedAt = typeof a.startedAt === 'string' ? a.startedAt : clean.startedAt;
            for (const p of q.parts) if (p.options.some(o => o.id === a.results[p.id])) clean.results[p.id] = a.results[p.id];
            if (clean.revealed && completeResults(q, clean) && typeof a.confirmedAt === 'string') clean.confirmedAt = a.confirmedAt;
            if (clean.confirmedAt && q.relation.options.some(o => o.id === a.relation)) clean.relation = a.relation;
            if (clean.relation && typeof a.submittedAt === 'string') clean.submittedAt = a.submittedAt;
            state.attempts[q.id] = clean;
          }
          if (saved.first?.[q.id]?.snapshot?.version === version) state.first[q.id] = saved.first[q.id];
          if (Array.isArray(saved.history?.[q.id])) state.history[q.id] = saved.history[q.id].filter(h => h?.snapshot?.version === version);
        }
      }
    } catch { storageMessage = '串联单元记录未能读取，已从头打开；原有概念记录不受影响。'; }

    function save() {
      try { localStorage.setItem(storageKey, JSON.stringify(state)); storageMessage = ''; }
      catch { storageMessage = '串联单元记录未能保存，关闭后本次进度可能丢失。'; }
      onChange();
    }
    function attempt(q) { return state.attempts[q.id] ||= emptyAttempt(); }
    function focusAt(selector) {
      const target = panel.querySelector(selector);
      if (!target) return;
      target.focus({ preventScroll: true });
      target.scrollIntoView({ block: 'start' });
    }
    function move(step) {
      state.step = Math.max(0, Math.min(3, step));
      save(); render(); focusAt('#lesson-title');
    }
    function renderConditions() {
      return `<details class="unit-conditions"><summary>案例条件与来源</summary><p>${esc(conditions)}</p><p>按完成销售确认收入，而不是等货款收齐；仅适用于本例条件。<a href="${source.url}" target="_blank" rel="noopener noreferrer">${esc(source.title)}</a>。核对日期：${source.checked}。</p></details>`;
    }
    function story() {
      return `<h2 class="lesson-title" id="lesson-title" tabindex="-1">赚了钱，为什么手里的钱反而少了？</h2>
        <div class="unit-reading"><p>一家冰淇淋店今天卖出了10元冰淇淋。</p><p>做这些冰淇淋的材料花了4元，今天已经付款。</p><p>顾客今天只付3元，剩下7元明天再付。</p></div>
        <div class="unit-facts">
          <section><h3>这笔生意赚了多少？</h3><p><strong>利润6元</strong><br>销售10元−材料成本4元</p></section>
          <section><h3>今天实际收付了多少现金？</h3><p><strong>净流出1元</strong><br>收到3元−付出4元</p></section>
          <section><h3>今天结束，顾客还欠多少？</h3><p><strong>应收账款7元</strong><br>货款10元−已收3元</p></section>
        </div>
        <div class="unit-reading"><p>冰淇淋已经卖出，对应的利润是6元。</p><p>但顾客没有付清，所以今天收到的现金只有3元。付出4元材料款后，现金反而少了1元。</p><p>剩下的7元没有消失，它是顾客还欠小店的钱。</p></div>
        <section class="example-box"><h3>第二天，顾客付清7元</h3><p>当天没有新销售，也没有其他收入、成本或费用。</p><p><strong>利润0元，现金净流入7元，应收账款变成0元。</strong></p><p>收到昨天的货款，不是又赚了一遍。</p></section>
        <p class="concept-explanation">利润看当期生意，现金看实际收付，应收账款看结束时还没收到的货款。</p>${renderConditions()}`;
    }
    function feedback(p, selected) {
      const chosen = p.options.find(o => o.id === selected);
      const answer = p.options.find(o => o.id === p.answer);
      const letter = String.fromCharCode(65 + p.options.indexOf(answer));
      return `<section class="feedback ${selected === p.answer ? '' : 'wrong'}"><strong>${selected === p.answer ? '回答正确' : '回答有误'}</strong><p class="reference-answer">参考答案 ${letter} · ${esc(answer.text)}</p>${chosen?.feedback ? `<p>${esc(chosen.feedback)}</p>` : ''}${p.explanation ? `<p>${esc(p.explanation)}</p>` : ''}</section>`;
    }
    function field(q, p, a, relation = false) {
      const selected = relation ? a.relation : a.results[p.id];
      const submitted = Boolean(a.submittedAt);
      const locked = relation ? submitted : Boolean(a.confirmedAt);
      const name = relation ? 'relation' : p.id;
      return `<div class="question unit-field ${submitted && selected !== p.answer ? 'needs-review' : ''}" id="unit-field-${name}" tabindex="-1">
        <fieldset class="question-fields"><legend>${esc(relation ? p.prompt : p.label)}</legend><div class="options">${p.options.map((o, i) => `<label class="option ${locked ? 'locked' : ''} ${submitted && o.id === p.answer ? 'correct' : ''} ${submitted && selected === o.id && selected !== p.answer ? 'incorrect' : ''}">
          <input type="radio" name="unit-${q.id}-${name}" data-unit-field="${name}" value="${o.id}" ${selected === o.id ? 'checked' : ''} ${locked ? 'disabled' : ''}>
          <span class="option-letter" aria-hidden="true">${String.fromCharCode(65 + i)}</span><span>${esc(o.text)}</span>${submitted && o.id === p.answer ? '<span class="option-mark" aria-hidden="true">✓</span>' : submitted && selected === o.id ? '<span class="option-mark" aria-hidden="true">×</span>' : ''}</label>`).join('')}</div></fieldset>
        ${submitted ? feedback(p, selected) : ''}</div>`;
    }
    function explanation(q) {
      return `<section class="unit-explanation" aria-label="完整解析"><h3>把交易分开看</h3>${q.trace ? `<div class="unit-facts">${q.trace.map(t => `<section><h4>${esc(t.label)}</h4><dl><div><dt>当天利润的影响</dt><dd>${t.profit}</dd></div><div><dt>现金变化</dt><dd>${t.cash}</dd></div><div><dt>应收账款变化</dt><dd>${t.ar}</dd></div></dl></section>`).join('')}</div>` : ''}${q.explanation.map(p => `<p>${esc(p)}</p>`).join('')}</section>`;
    }
    function exercise(q) {
      const a = attempt(q);
      return `<h2 class="lesson-title" id="lesson-title" tabindex="-1">${esc(q.title)}</h2><div class="unit-reading">${q.story.map(p => `<p>${esc(p)}</p>`).join('')}<p>${esc(q.prompt)}</p></div>
        <form id="unit-form" novalidate>
          ${!a.revealed ? '<button type="button" class="primary-button" data-unit-action="reveal">显示选项</button>' : `${q.parts.map(p => field(q, p, a)).join('')}
          ${!a.confirmedAt ? `<div class="submit-row"><span id="unit-selection-status" class="selection-status" aria-live="polite">已选 ${Object.keys(a.results).length}/3</span><button type="submit" class="primary-button">确认结果</button></div>` : `<section class="unit-relation" id="unit-relation" tabindex="-1">${field(q, q.relation, a, true)}</section>${!a.submittedAt ? '<div class="submit-row"><span class="selection-status">三个结果已确认</span><button type="submit" class="primary-button">提交</button></div>' : `${explanation(q)}<button type="button" class="text-button" data-unit-action="retry">重新练习</button>`}`}`}
          <p id="unit-error" class="unit-error" role="alert"></p>
        </form>${renderConditions()}`;
    }
    function review() {
      return `<h2 class="lesson-title" id="lesson-title" tabindex="-1">同一笔交易，要分开看三个结果</h2>
        <div class="unit-facts"><section><h3>利润</h3><p>本期确认了哪些销售，对应哪些成本和费用？</p></section><section><h3>现金</h3><p>本期实际收到多少、付出多少？</p></section><section><h3>应收账款</h3><p>原来欠多少，收回多少，又新增多少？</p></section></div>
        <div class="unit-reading"><p>看到公司利润增加，不能直接认定它收到的现金也增加。</p><p>看到应收账款增加，也不能直接认定公司变差。先分清新增销售与收款分别发生了什么；仅凭这几个数字，还不足以判断欠款能否及时收回。</p></div>
        <section class="unit-records"><h3>本轮记录</h3>${questions.map((q, i) => {
          const first = state.first[q.id];
          const latest = state.history[q.id]?.at(-1);
          const submitted = first?.submittedAt;
          const note = !submitted ? (first ? '三个结果已确认，关系判断尚未提交。' : '尚未提交。') : `首次结果 ${count(q, first)}/3；关系判断${first.relation === q.relation.answer ? '正确' : '有误'}。${correct(q, latest) && !correct(q, first) ? ' 查看反馈后已完成纠正。' : ''}`;
          return `<section><h4>练习${i === 0 ? '一' : '二'}：${esc(q.title)}</h4><p>${note}</p><button type="button" class="text-button" data-unit-step="${i + 1}">查看练习${i === 0 ? '一' : '二'}</button></section>`;
        }).join('')}</section>`;
    }
    function render() {
      const names = ['故事与示范', '练习一', '练习二', '回顾'];
      document.title = `${names[state.step]} · ${title} · 投资概念复习册`;
      panel.innerHTML = `<div class="lesson-content connected-unit"><div class="lesson-meta"><span class="lesson-position">第 ${state.step + 1} / 4 步</span><span>利润·现金流·应收账款</span></div>${state.step === 0 ? story() : state.step === 3 ? review() : exercise(questions[state.step - 1])}</div>
        <nav class="lesson-nav" aria-label="串联单元学习步骤"><button type="button" data-unit-action="previous" ${state.step === 0 ? 'disabled' : ''}><span>← 上一页</span><strong>${names[state.step - 1] || ''}</strong></button><button type="button" data-unit-action="next"><span>下一页 →</span><strong>${names[state.step + 1] || '概念复习'}</strong></button></nav>`;
    }
    function validateMissing(selector, message) {
      panel.querySelector('#unit-error').textContent = message;
      focusAt(selector);
    }
    panel.addEventListener('change', event => {
      const input = event.target;
      if (!state.active || !input.matches('input[data-unit-field]') || state.step < 1 || state.step > 2) return;
      const q = questions[state.step - 1];
      const a = attempt(q);
      if (a.submittedAt) return;
      if (input.dataset.unitField === 'relation' && a.confirmedAt) a.relation = input.value;
      else if (!a.confirmedAt) a.results[input.dataset.unitField] = input.value;
      save();
      const status = panel.querySelector('#unit-selection-status');
      if (status) status.textContent = `已选 ${Object.keys(a.results).length}/3`;
      panel.querySelector('#unit-error').textContent = '';
    });
    panel.addEventListener('submit', event => {
      if (!event.target.matches('#unit-form')) return;
      event.preventDefault();
      const q = questions[state.step - 1];
      const a = attempt(q);
      if (!a.confirmedAt) {
        const missing = q.parts.find(p => !p.options.some(o => o.id === a.results[p.id]));
        if (missing) return validateMissing(`#unit-field-${missing.id}`, '请选择这一项。');
        a.confirmedAt = now();
        state.first[q.id] ||= { results: clone(a.results), confirmedAt: a.confirmedAt, relation: null, submittedAt: null, snapshot: { version, conditions, source, question: clone(q), context: '第一天销售10元、对应材料成本4元并支付，收到3元，期末应收账款7元。' } };
        save(); render(); focusAt('#unit-relation');
      } else if (!a.submittedAt) {
        if (!q.relation.options.some(o => o.id === a.relation)) return validateMissing('#unit-field-relation', '请选择关系解释。');
        a.submittedAt = now();
        const first = state.first[q.id];
        if (!first.submittedAt) { first.relation = a.relation; first.submittedAt = a.submittedAt; }
        (state.history[q.id] ||= []).push({ ...clone(a), snapshot: clone(first.snapshot) });
        save();
        if (correct(q, a)) return move(state.step + 1);
        render(); focusAt('.needs-review');
      }
    });
    panel.addEventListener('click', event => {
      const button = event.target.closest('[data-unit-action], [data-unit-step]');
      if (!state.active || !button || button.disabled) return;
      if (button.dataset.unitStep) return move(Number(button.dataset.unitStep));
      const action = button.dataset.unitAction;
      if (action === 'next') return state.step < 3 ? move(state.step + 1) : onExit();
      if (action === 'previous') return move(state.step - 1);
      const q = questions[state.step - 1];
      if (!q) return;
      if (action === 'reveal') { attempt(q).revealed = true; save(); render(); focusAt('#unit-field-profit'); }
      if (action === 'retry') { state.attempts[q.id] = emptyAttempt(); save(); render(); focusAt('#lesson-title'); }
    });
    return {
      id, title, render,
      shouldResume: () => location.hash === `#${id}` || (!location.hash && state.active),
      setActive(active) { state.active = active; save(); },
      get step() { return state.step; },
      get storageMessage() { return storageMessage; },
      get needsReview() { return questions.some(q => { const a = state.history[q.id]?.at(-1); return a && !correct(q, a); }); },
      get done() { return questions.every(q => correct(q, state.history[q.id]?.at(-1))); },
      review() { const index = questions.findIndex(q => { const a = state.history[q.id]?.at(-1); return a && !correct(q, a); }); if (index >= 0) move(index + 1); }
    };
  };
})();
