/* CyberLab Stage 21 — Course Completion Enhancer
   Safely activates course cards that already have expanded curriculum support.
   This file does NOT replace index.html.
*/
(function () {
  'use strict';

  const courseMap = {
    'HTML & CSS': 'Secure Web Development',
    'Python': 'Python',
    'C': 'C',
    'C++': 'C++',
    'Java': 'Java',
    'JavaScript': 'JavaScript',
    'SQL': 'SQL',
    'Cybersecurity Fundamentals': 'Cybersecurity Fundamentals',
    'Ethical Hacking': 'Ethical Hacking',
    'Penetration Testing': 'Penetration Testing',
    'Web Security': 'Web Security',
    'Wireshark & Traffic Analysis': 'Wireshark & Traffic Analysis',
    'Linux & Termux': 'Linux & Termux',
    'Digital Forensics': 'Digital Forensics',
    'Cryptography': 'Cryptography',
    'Data Analyst': 'Data Analyst',
    'Data Science': 'Data Science',
    'Database & SQL': 'Database & SQL',
    'Networking': 'Networking Fundamentals',
    'Cloud Computing': 'Cloud Computing',
    'AI Fundamentals': 'AI Fundamentals'
  };

  function clean(text) {
    return (text || '').replace(/\s+/g, ' ').trim();
  }

  function activateCards() {
    const cards = document.querySelectorAll('.course-card, .course-item, .course');

    cards.forEach(function (card) {
      const titleNode = card.querySelector('h3, h4, .course-title, .title');
      if (!titleNode) return;

      const title = clean(titleNode.textContent);
      const courseName = courseMap[title];
      if (!courseName) return;

      const buttons = card.querySelectorAll('button, a');
      buttons.forEach(function (button) {
        const label = clean(button.textContent).toLowerCase();
        if (label.includes('coming soon')) {
          button.textContent = 'Start →';
        }

        if (button.tagName.toLowerCase() === 'button') {
          button.disabled = false;
          button.removeAttribute('disabled');
          button.classList.remove('disabled');
          button.style.pointerEvents = 'auto';
          button.onclick = function (event) {
            event.preventDefault();
            if (typeof window.startCourse === 'function') {
              window.startCourse(courseName);
            }
          };
        }
      });

      if (!card.querySelector('.stage21-label')) {
        const badge = document.createElement('span');
        badge.className = 'stage21-label';
        badge.textContent = 'Stage 21 • Complete Course';
        badge.style.cssText = 'display:inline-block;margin:6px 0;padding:4px 8px;border-radius:999px;font-size:11px;font-weight:700;background:rgba(14,165,233,.12);color:#0284c7;';
        titleNode.insertAdjacentElement('afterend', badge);
      }
    });
  }

  function start() {
    activateCards();
    setTimeout(activateCards, 300);
    setTimeout(activateCards, 1000);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start);
  } else {
    start();
  }
})();
