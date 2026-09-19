/* CyberLab Stage 26 — Professional Course Experience
   Safe enhancement layer. Does not replace index.html.
   Adds course progress, resume state, and clearer course actions.
*/
(function () {
  'use strict';
  if (window.__CYBERLAB_STAGE26__) return;
  window.__CYBERLAB_STAGE26__ = true;

  const STORAGE_KEY = 'cyberlab_learning_progress_v1';
  const courseMap = {
    'HTML & CSS': 'Secure Web Development',
    'Python': 'Python', 'C': 'C', 'C++': 'C++', 'Java': 'Java',
    'JavaScript': 'JavaScript', 'SQL': 'SQL',
    'Cybersecurity Fundamentals': 'Cybersecurity Fundamentals',
    'Ethical Hacking': 'Ethical Hacking', 'Penetration Testing': 'Penetration Testing',
    'Web Security': 'Web Security', 'Wireshark & Traffic Analysis': 'Wireshark & Traffic Analysis',
    'Linux & Termux': 'Linux & Termux', 'Digital Forensics': 'Digital Forensics',
    'Cryptography': 'Cryptography', 'Data Analyst': 'Data Analyst',
    'Data Science': 'Data Science', 'Database & SQL': 'Database & SQL',
    'Networking': 'Networking Fundamentals', 'Cloud Computing': 'Cloud Computing',
    'AI Fundamentals': 'AI Fundamentals'
  };

  function readProgress() {
    try { return JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}').courses || {}; }
    catch (e) { return {}; }
  }

  function enhance() {
    const progress = readProgress();
    document.querySelectorAll('.dashboard-course').forEach(function (card) {
      const titleNode = card.querySelector('h4');
      if (!titleNode) return;
      const title = titleNode.textContent.replace(/\s+/g, ' ').trim();
      const courseName = courseMap[title];
      if (!courseName) return;

      const buttons = card.querySelectorAll('button');
      buttons.forEach(function (button) {
        const text = button.textContent.trim().toLowerCase();
        if (text.includes('coming soon')) button.textContent = 'Start →';
        button.disabled = false;
        button.removeAttribute('disabled');
        button.classList.remove('disabled');
        button.style.pointerEvents = 'auto';
        button.onclick = function (event) {
          event.preventDefault();
          if (typeof window.startCourse === 'function') window.startCourse(courseName);
        };
      });

      const item = progress[courseName] || { completed: [], lastLesson: '' };
      const completed = Array.isArray(item.completed) ? item.completed.length : 0;
      const total = Number(item.total) || 10;
      const percent = Math.min(100, Math.round((completed / total) * 100));

      let panel = card.querySelector('.stage26-progress');
      if (!panel) {
        panel = document.createElement('div');
        panel.className = 'stage26-progress';
        panel.style.cssText = 'margin:0 0 12px;padding:9px 10px;border-radius:10px;background:rgba(255,255,255,.05);font-size:12px;';
        const button = card.querySelector('button');
        if (button) card.insertBefore(panel, button);
        else card.appendChild(panel);
      }

      panel.innerHTML = '<div style="display:flex;justify-content:space-between;gap:8px;margin-bottom:6px"><span>Progress</span><strong>' + percent + '%</strong></div>' +
        '<div style="height:7px;border-radius:99px;background:rgba(255,255,255,.1);overflow:hidden"><div style="height:100%;width:' + percent + '%;background:currentColor;border-radius:99px;transition:width .3s"></div></div>' +
        '<div style="margin-top:6px;opacity:.72">' + completed + ' lesson' + (completed === 1 ? '' : 's') + ' completed' + (item.lastLesson ? ' • Resume: ' + String(item.lastLesson).slice(0, 32) : '') + '</div>';
    });
  }

  function start() {
    enhance();
    setTimeout(enhance, 500);
    setTimeout(enhance, 1500);
    // Do not observe every DOM mutation here: enhance() updates the progress
    // panel itself, which would trigger the observer again and freeze the page.
    window.addEventListener('storage', enhance);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start);
  else start();
})();
