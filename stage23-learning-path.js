/* CyberLab Stage 23 - Learning Path */
(function () {
  'use strict';
  if (window.__CYBERLAB_STAGE23_PATH__) return;
  window.__CYBERLAB_STAGE23_PATH__ = true;

  const path = document.createElement('section');
  path.id = 'learning-path';
  path.innerHTML = `
    <div class="stage23-path-wrap">
      <div class="stage23-title">
        <p class="stage23-tag">&gt; LEARNING ROADMAP</p>
        <h2>🚀 CyberLab <span>Learning Path</span></h2>
        <p>Follow the roadmap from beginner foundations to advanced cybersecurity skills.</p>
      </div>

      <div class="stage23-level beginner">
        <div class="stage23-level-head"><span>🟢</span><div><h3>Beginner</h3><p>Build your core technical foundation.</p></div></div>
        <div class="stage23-courses">
          <button onclick="startCourse('Secure Web Development')"><b>01</b><span>🌐 HTML &amp; CSS</span><small>Web foundations</small></button>
          <button onclick="startCourse('Python')"><b>02</b><span>🐍 Python</span><small>Programming basics</small></button>
          <button onclick="startCourse('Linux & Termux')"><b>03</b><span>🐧 Linux</span><small>Command line &amp; systems</small></button>
          <button onclick="startCourse('Networking Fundamentals')"><b>04</b><span>🌐 Networking</span><small>Networks &amp; protocols</small></button>
        </div>
      </div>

      <div class="stage23-connector">↓</div>

      <div class="stage23-level intermediate">
        <div class="stage23-level-head"><span>🟡</span><div><h3>Intermediate</h3><p>Apply foundations to security concepts and analysis.</p></div></div>
        <div class="stage23-courses">
          <button onclick="startCourse('Cybersecurity Fundamentals')"><b>05</b><span>🛡️ Cybersecurity Fundamentals</span><small>Threats, risk &amp; defense</small></button>
          <button onclick="startCourse('Web Security')"><b>06</b><span>🔐 Web Security</span><small>Secure web concepts</small></button>
          <button onclick="startCourse('Wireshark & Traffic Analysis')"><b>07</b><span>🔎 Wireshark</span><small>Traffic analysis</small></button>
          <button onclick="startCourse('Ethical Hacking')"><b>08</b><span>🎯 Ethical Hacking</span><small>Authorized testing</small></button>
        </div>
      </div>

      <div class="stage23-connector">↓</div>

      <div class="stage23-level advanced">
        <div class="stage23-level-head"><span>🔴</span><div><h3>Advanced</h3><p>Develop deeper security investigation and testing skills.</p></div></div>
        <div class="stage23-courses">
          <button onclick="startCourse('Penetration Testing')"><b>09</b><span>🎯 Penetration Testing</span><small>Structured security testing</small></button>
          <button onclick="startCourse('Digital Forensics')"><b>10</b><span>🕵️ Digital Forensics</span><small>Evidence &amp; investigation</small></button>
          <button onclick="startCourse('Cryptography')"><b>11</b><span>🔑 Cryptography</span><small>Encryption &amp; integrity</small></button>
          <button onclick="startCourse('Cloud Computing')"><b>12</b><span>☁️ Cloud Computing</span><small>Cloud infrastructure</small></button>
        </div>
      </div>
    </div>`;

  const style = document.createElement('style');
  style.textContent = `
    #learning-path{padding:55px 20px;background:linear-gradient(180deg,rgba(5,12,18,.98),rgba(8,17,25,.94));border-top:1px solid rgba(0,255,150,.12);border-bottom:1px solid rgba(0,255,150,.12)}
    .stage23-path-wrap{max-width:1200px;margin:auto}.stage23-title{text-align:center;margin-bottom:34px}.stage23-tag{opacity:.7;letter-spacing:2px;font-size:.8rem}.stage23-title h2{font-size:2rem;margin:8px 0}.stage23-title h2 span{color:#00ff96}.stage23-title>p:last-child{opacity:.75}
    .stage23-level{padding:24px;border:1px solid rgba(255,255,255,.1);border-radius:20px;background:rgba(10,20,28,.82);box-shadow:0 12px 35px rgba(0,0,0,.18)}
    .stage23-level.beginner{border-color:rgba(0,255,150,.25)}.stage23-level.intermediate{border-color:rgba(255,210,70,.25)}.stage23-level.advanced{border-color:rgba(255,90,90,.25)}
    .stage23-level-head{display:flex;align-items:center;gap:14px;margin-bottom:20px}.stage23-level-head>span{font-size:1.7rem}.stage23-level-head h3{margin:0;font-size:1.35rem}.stage23-level-head p{margin:4px 0 0;opacity:.7;font-size:.9rem}
    .stage23-courses{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}.stage23-courses button{min-height:125px;padding:16px;text-align:left;border:1px solid rgba(255,255,255,.1);border-radius:14px;background:rgba(255,255,255,.035);color:inherit;cursor:pointer;transition:.2s}.stage23-courses button:hover{transform:translateY(-4px);border-color:#00ff96;background:rgba(0,255,150,.07)}.stage23-courses b{display:block;font-size:.75rem;opacity:.5;margin-bottom:10px}.stage23-courses span{display:block;font-weight:700}.stage23-courses small{display:block;margin-top:7px;opacity:.6}.stage23-connector{text-align:center;font-size:2rem;opacity:.6;padding:10px}
    @media(max-width:850px){.stage23-courses{grid-template-columns:repeat(2,1fr)}}@media(max-width:520px){#learning-path{padding:40px 12px}.stage23-title h2{font-size:1.55rem}.stage23-level{padding:16px}.stage23-courses{grid-template-columns:1fr}.stage23-courses button{min-height:105px}}
  `;
  document.head.appendChild(style);
  const courses = document.getElementById('courses');
  if (courses) courses.parentNode.insertBefore(path, courses);
  else document.body.appendChild(path);
})();
