/* CyberLab Stage 21 compatibility loader
   Stage 22 is the active expanded course-content layer.
   Stage 23 adds the visual Learning Path roadmap.
   Stage 24 adds local lesson/progress tracking.
   Stage 25 adds XP, levels and achievements.
   Stage 21 adds safe activation of supported course cards.
*/
(function () {
  'use strict';
  if (window.__CYBERLAB_STAGE22_LOADER__) return;
  window.__CYBERLAB_STAGE22_LOADER__ = true;

  function load(src) {
    const s = document.createElement('script');
    s.src = src;
    s.defer = false;
    s.async = false;
    document.head.appendChild(s);
  }

  load('stage22-expanded-lessons.js?v=2');
  load('stage22-remaining-courses.js?v=1');
  load('stage23-learning-path.js?v=1');
  load('stage24-learning-progress.js?v=1');
  load('stage25-xp-achievements.js?v=1');
  load('stage21-course-completion.js?v=1');
})();
