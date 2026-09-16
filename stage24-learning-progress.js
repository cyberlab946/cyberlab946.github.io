/* CyberLab Stage 24 — Learning Progress System
   Tracks lesson completion locally, shows course progress, overall progress,
   resume information and a small progress panel. No sensitive data is stored.
*/
(function () {
  'use strict';
  if (window.__CYBERLAB_STAGE24__) return;
  window.__CYBERLAB_STAGE24__ = true;

  const KEY = 'cyberlab_learning_progress_v1';
  const data = JSON.parse(localStorage.getItem(KEY) || '{}');
  data.courses = data.courses || {};
  let currentCourse = '';
  let currentLesson = '';

  function save() { localStorage.setItem(KEY, JSON.stringify(data)); }
  function slug(s) { return String(s || '').trim(); }
  function course(name) {
    name = slug(name);
    if (!data.courses[name]) data.courses[name] = { completed: [], lastLesson: '', total: 10 };
    return data.courses[name];
  }
  function pct(c) { return c.total ? Math.min(100, Math.round((c.completed.length / c.total) * 100)) : 0; }
  function allCourses() { return Object.keys(data.courses); }

  function findCourseFromPage() {
    const selectors = ['[data-course-title]', '.course-player h2', '.course-player h1', '#courseTitle', '#lessonCourse'];
    for (const sel of selectors) {
      const el = document.querySelector(sel);
      if (el && el.textContent.trim()) return el.textContent.replace(/\s+/g, ' ').trim();
    }
    return currentCourse;
  }

  function updateDashboard() {
    const names = allCourses();
    const total = names.reduce((n, k) => n + (course(k).total || 10), 0);
    const done = names.reduce((n, k) => n + course(k).completed.length, 0);
    const overall = total ? Math.min(100, Math.round(done / total * 100)) : 0;
    const fill = document.getElementById('courseDashboardProgress');
    const text = document.getElementById('courseDashboardStatus');
    const mainFill = document.getElementById('progress');
    const mainText = document.getElementById('progressText');
    if (fill) fill.style.width = overall + '%';
    if (mainFill) mainFill.style.width = overall + '%';
    if (mainText) mainText.textContent = overall + '%';
    if (text) text.textContent = done ? `${done} lessons completed • ${overall}% overall progress` : 'Start a course to track your learning progress.';
    const completedCourses = names.filter(k => pct(course(k)) >= 100).length;
    const cc = document.getElementById('coursesCompleted');
    if (cc) cc.textContent = completedCourses;
  }

  function markComplete() {
    if (!currentCourse || !currentLesson) return;
    const c = course(currentCourse);
    if (!c.completed.includes(currentLesson)) c.completed.push(currentLesson);
    c.lastLesson = currentLesson;
    save();
    updateProgressPanel();
    updateDashboard();
  }

  function updateProgressPanel() {
    let panel = document.getElementById('stage24ProgressPanel');
    if (!panel) {
      panel = document.createElement('div');
      panel.id = 'stage24ProgressPanel';
      panel.innerHTML = '<div class="stage24-head"><strong>📊 Learning Progress</strong><button type="button" id="stage24Close">×</button></div><div id="stage24Body"></div>';
      document.body.appendChild(panel);
      document.getElementById('stage24Close').onclick = () => panel.classList.remove('show');
    }
    const body = document.getElementById('stage24Body');
    if (!body) return;
    const names = allCourses();
    if (!names.length) { body.innerHTML = '<p>No progress yet. Open a course and complete lessons.</p>'; return; }
    body.innerHTML = names.map(name => {
      const c = course(name), p = pct(c);
      return `<div class="stage24-row"><div><b>${name}</b><span>${c.completed.length}/${c.total} lessons</span></div><div class="stage24-bar"><i style="width:${p}%"></i></div><strong>${p}%</strong></div>`;
    }).join('');
  }

  function injectStyles() {
    const s = document.createElement('style');
    s.textContent = '#stage24ProgressPanel{position:fixed;right:18px;bottom:18px;width:min(390px,calc(100% - 36px));max-height:70vh;overflow:auto;z-index:99999;padding:18px;border:1px solid rgba(0,255,150,.3);border-radius:18px;background:#0b151b;color:#eef;box-shadow:0 18px 50px rgba(0,0,0,.4);display:none}#stage24ProgressPanel.show{display:block}.stage24-head{display:flex;justify-content:space-between;align-items:center;margin-bottom:14px}.stage24-head button{border:0;background:transparent;color:inherit;font-size:24px;cursor:pointer}.stage24-row{margin:14px 0}.stage24-row>div:first-child{display:flex;justify-content:space-between;gap:10px;font-size:13px}.stage24-row span{opacity:.7}.stage24-row>strong{font-size:12px}.stage24-bar{height:8px;background:rgba(255,255,255,.1);border-radius:99px;overflow:hidden;margin:7px 0}.stage24-bar i{display:block;height:100%;background:#00e69a;border-radius:99px}.stage24-button{position:fixed;right:18px;bottom:18px;z-index:99998;border:0;border-radius:999px;padding:12px 16px;background:#00e69a;color:#07100d;font-weight:700;cursor:pointer;box-shadow:0 8px 25px rgba(0,0,0,.3)}';
    document.head.appendChild(s);
  }

  function addButton() {
    if (document.getElementById('stage24Open')) return;
    const b = document.createElement('button');
    b.id = 'stage24Open'; b.className = 'stage24-button'; b.textContent = '📊 Progress';
    b.onclick = () => { updateProgressPanel(); document.getElementById('stage24ProgressPanel').classList.add('show'); };
    document.body.appendChild(b);
  }

  document.addEventListener('click', function (e) {
    const t = e.target.closest('button, a');
    if (!t) return;
    const text = t.textContent.trim();
    const onclick = t.getAttribute('onclick') || '';
    const match = onclick.match(/startCourse\(['\"]([^'\"]+)['\"]\)/);
    if (match) { currentCourse = match[1]; course(currentCourse); save(); setTimeout(updateDashboard, 100); }
    if (/mark complete|complete lesson|lesson complete/i.test(text)) markComplete();
  });

  const observer = new MutationObserver(() => {
    const title = findCourseFromPage();
    if (title && title !== currentCourse && (document.querySelector('.course-player') || document.querySelector('#courseModal'))) currentCourse = title;
    const lesson = document.querySelector('[data-lesson-title], .lesson-title, #lessonTitle, .course-player h3');
    if (lesson && lesson.textContent.trim()) currentLesson = lesson.textContent.replace(/\s+/g, ' ').trim();
  });
  observer.observe(document.body, { childList: true, subtree: true });

  window.cyberLabProgress = { markComplete, update: updateDashboard, show: () => { updateProgressPanel(); document.getElementById('stage24ProgressPanel')?.classList.add('show'); } };
  injectStyles();
  document.addEventListener('DOMContentLoaded', () => { addButton(); updateDashboard(); });
  setTimeout(() => { addButton(); updateDashboard(); }, 700);
})();