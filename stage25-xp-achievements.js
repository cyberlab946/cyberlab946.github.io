/* CyberLab Stage 25 — XP, Levels & Achievements
   Adds a lightweight gamification layer on top of the existing learning progress system.
   Progress is stored locally in the learner's browser; no sensitive data is collected.
*/
(function () {
  'use strict';
  if (window.__CYBERLAB_STAGE25__) return;
  window.__CYBERLAB_STAGE25__ = true;

  const KEY = 'cyberlab_xp_v1';
  const state = JSON.parse(localStorage.getItem(KEY) || '{}');
  state.xp = Number(state.xp || 0);
  state.completedLessons = Number(state.completedLessons || 0);
  state.coursesCompleted = Number(state.coursesCompleted || 0);
  state.quizWins = Number(state.quizWins || 0);
  state.achievements = Array.isArray(state.achievements) ? state.achievements : [];

  const levels = [
    ['Beginner', 0, '🌱'],
    ['Learner', 100, '📘'],
    ['Practitioner', 250, '🧪'],
    ['Cyber Explorer', 500, '🔎'],
    ['Security Builder', 800, '🛡️'],
    ['Cyber Defender', 1200, '🔐'],
    ['Cyber Expert', 1800, '🏆']
  ];

  const achievementList = [
    ['first-lesson', 'First Step', 'Complete your first lesson.', '🎯', () => state.completedLessons >= 1],
    ['five-lessons', 'Learning Streak', 'Complete 5 lessons.', '🔥', () => state.completedLessons >= 5],
    ['ten-lessons', 'Knowledge Builder', 'Complete 10 lessons.', '📚', () => state.completedLessons >= 10],
    ['first-course', 'Course Starter', 'Complete a full course.', '🎓', () => state.coursesCompleted >= 1],
    ['three-courses', 'Course Explorer', 'Complete 3 courses.', '🚀', () => state.coursesCompleted >= 3],
    ['quiz-master', 'Quiz Master', 'Complete 5 successful knowledge checks.', '🧠', () => state.quizWins >= 5],
    ['xp-500', 'XP Hunter', 'Reach 500 XP.', '⭐', () => state.xp >= 500],
    ['xp-1000', 'Cyber Defender', 'Reach 1000 XP.', '🛡️', () => state.xp >= 1000]
  ];

  function save() { localStorage.setItem(KEY, JSON.stringify(state)); }
  function levelInfo() {
    let current = levels[0], next = null;
    for (let i = 0; i < levels.length; i++) {
      if (state.xp >= levels[i][1]) current = levels[i];
      if (levels[i][1] > state.xp) { next = levels[i]; break; }
    }
    return { current, next };
  }
  function awardAchievements() {
    achievementList.forEach(a => {
      if (a[4]() && !state.achievements.includes(a[0])) state.achievements.push(a[0]);
    });
    save();
  }
  function addXP(amount, reason) {
    amount = Math.max(0, Number(amount) || 0);
    state.xp += amount;
    awardAchievements();
    save();
    render();
    showToast(`+${amount} XP${reason ? ' • ' + reason : ''}`);
  }
  function showToast(message) {
    let t = document.getElementById('stage25Toast');
    if (!t) { t = document.createElement('div'); t.id = 'stage25Toast'; document.body.appendChild(t); }
    t.textContent = message;
    t.classList.add('show');
    clearTimeout(t._timer);
    t._timer = setTimeout(() => t.classList.remove('show'), 2200);
  }
  function render() {
    const info = levelInfo();
    const current = info.current, next = info.next;
    const need = next ? next[1] - current[1] : 0;
    const progress = next ? Math.min(100, Math.round((state.xp - current[1]) / need * 100)) : 100;
    const xp = document.getElementById('stage25XP');
    const lvl = document.getElementById('stage25Level');
    const bar = document.getElementById('stage25XPBar');
    const ach = document.getElementById('stage25Achievements');
    if (xp) xp.textContent = `${state.xp} XP`;
    if (lvl) lvl.textContent = `${current[2]} ${current[0]}`;
    if (bar) bar.style.width = progress + '%';
    if (ach) ach.innerHTML = achievementList.map(a => `<div class="stage25-ach ${state.achievements.includes(a[0]) ? 'earned' : ''}"><span>${a[3]}</span><div><b>${a[1]}</b><small>${a[2]}</small></div>${state.achievements.includes(a[0]) ? '<strong>✓</strong>' : '<em>Locked</em>'}</div>`).join('');
    const nextText = document.getElementById('stage25Next');
    if (nextText) nextText.textContent = next ? `${next[1] - state.xp} XP to ${next[2]} ${next[0]}` : 'Maximum level reached';
  }
  function injectUI() {
    if (document.getElementById('stage25Panel')) return;
    const panel = document.createElement('section');
    panel.id = 'stage25Panel';
    panel.innerHTML = `<div class="stage25-card"><div class="stage25-head"><div><small>CYBERLAB REWARDS</small><h3 id="stage25Level">🌱 Beginner</h3></div><button id="stage25Close" type="button">×</button></div><div class="stage25-xp"><strong id="stage25XP">0 XP</strong><span id="stage25Next">Start learning to earn XP</span></div><div class="stage25-track"><i id="stage25XPBar"></i></div><h4>🏆 Achievements</h4><div id="stage25Achievements"></div></div>`;
    document.body.appendChild(panel);
    document.getElementById('stage25Close').onclick = () => panel.classList.remove('show');
    const open = document.createElement('button');
    open.id = 'stage25Open'; open.type = 'button'; open.textContent = '🏆 XP & Achievements';
    open.onclick = () => { panel.classList.add('show'); render(); };
    document.body.appendChild(open);
  }
  function styles() {
    const s = document.createElement('style');
    s.textContent = '#stage25Open{position:fixed;right:18px;bottom:72px;z-index:99997;border:0;border-radius:999px;padding:11px 15px;background:#8b5cf6;color:white;font-weight:700;cursor:pointer;box-shadow:0 8px 25px rgba(0,0,0,.3)}#stage25Panel{position:fixed;inset:0;background:rgba(0,0,0,.6);z-index:100000;display:none;align-items:center;justify-content:center;padding:16px}#stage25Panel.show{display:flex}.stage25-card{width:min(520px,100%);max-height:85vh;overflow:auto;background:#0b151b;color:#eef;border:1px solid rgba(139,92,246,.45);border-radius:20px;padding:22px;box-shadow:0 20px 60px rgba(0,0,0,.5)}.stage25-head{display:flex;justify-content:space-between;align-items:center}.stage25-head small{opacity:.65;letter-spacing:1px}.stage25-head h3{margin:5px 0 0}.stage25-head button{background:transparent;border:0;color:inherit;font-size:28px;cursor:pointer}.stage25-xp{display:flex;justify-content:space-between;gap:12px;margin:20px 0 8px}.stage25-xp strong{font-size:1.3rem}.stage25-xp span{opacity:.7;text-align:right}.stage25-track{height:12px;background:rgba(255,255,255,.1);border-radius:99px;overflow:hidden;margin-bottom:22px}.stage25-track i{display:block;height:100%;width:0;background:#8b5cf6;border-radius:99px;transition:width .35s}.stage25-ach{display:flex;align-items:center;gap:12px;padding:12px;margin:8px 0;border-radius:12px;background:rgba(255,255,255,.04);opacity:.55}.stage25-ach>span{font-size:1.5rem}.stage25-ach div{flex:1}.stage25-ach small{display:block;opacity:.7;margin-top:3px}.stage25-ach strong{color:#8b5cf6}.stage25-ach em{font-size:.75rem;font-style:normal}.stage25-ach.earned{opacity:1;border:1px solid rgba(139,92,246,.35)}#stage25Toast{position:fixed;top:18px;right:18px;z-index:100001;background:#101820;color:white;border:1px solid rgba(139,92,246,.6);border-radius:12px;padding:12px 16px;transform:translateY(-20px);opacity:0;pointer-events:none;transition:.25s}#stage25Toast.show{transform:translateY(0);opacity:1}@media(max-width:600px){#stage25Open{right:12px;bottom:68px;font-size:12px}.stage25-card{padding:17px}.stage25-xp{flex-direction:column}.stage25-xp span{text-align:left}}';
    document.head.appendChild(s);
  }

  document.addEventListener('click', function (e) {
    const t = e.target.closest('button, a');
    if (!t) return;
    const text = t.textContent.trim();
    if (/mark complete|complete lesson|lesson complete/i.test(text)) addXP(25, 'Lesson completed');
    if (/quiz|check answer|submit quiz/i.test(text) && !t.disabled) addXP(10, 'Knowledge check');
  });

  window.cyberLabRewards = {
    addXP,
    getState: () => ({ ...state }),
    unlockCourse: () => { state.coursesCompleted++; addXP(100, 'Course completed'); },
    quizWin: () => { state.quizWins++; addXP(10, 'Quiz completed'); }
  };
  styles();
  awardAchievements();
  document.addEventListener('DOMContentLoaded', () => { injectUI(); render(); });
  setTimeout(() => { injectUI(); render(); }, 800);
})();