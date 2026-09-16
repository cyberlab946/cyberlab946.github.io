/* CyberLab Stage 21 compatibility loader
   Stage 22 is now the active expanded course-content layer.
   Stage 23 adds the visual Learning Path roadmap.
   This file remains loaded by index.html so the existing homepage does not need to be replaced.
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
})();
