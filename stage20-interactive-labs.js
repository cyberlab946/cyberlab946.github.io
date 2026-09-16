// CyberLab Stage 20 - Interactive Cybersecurity Labs
// Safe, self-contained simulations for learning. No real targets or external scanning.
(function () {
  if (window.__CYBERLAB_STAGE20__) return;
  window.__CYBERLAB_STAGE20__ = true;

  const LABS = [
    {
      id: 'cia', icon: '🛡️', title: 'CIA Triad Challenge', level: 'Beginner',
      objective: 'Classify security incidents by Confidentiality, Integrity or Availability.',
      steps: [
        ['A private student record is viewed by an unauthorized person.', 'Confidentiality'],
        ['An attacker changes a course completion record.', 'Integrity'],
        ['The learning platform is unavailable during an exam.', 'Availability'],
        ['A backup file is modified without authorization.', 'Integrity']
      ]
    },
    {
      id: 'phishing', icon: '🎣', title: 'Phishing Detector', level: 'Beginner',
      objective: 'Identify warning signs in a fictional message without opening links.',
      steps: [
        ['Sender: security@cyber1ab-example.test | Message: “Verify your account immediately or lose access.”', 'Suspicious'],
        ['Sender: your school help desk | You independently open the official school portal and see the same notice.', 'Safer'],
        ['Message asks for your password and MFA code by reply.', 'Suspicious'],
        ['Unexpected attachment asks you to enable macros.', 'Suspicious']
      ]
    },
    {
      id: 'access', icon: '🔐', title: 'Access Control Lab', level: 'Intermediate',
      objective: 'Apply least privilege to a fictional CyberLab system.',
      roles: {
        Student: ['View courses', 'Submit quizzes', 'View own certificate'],
        Instructor: ['View courses', 'Review submissions', 'Publish lessons'],
        Administrator: ['Manage users', 'Manage courses', 'Manage certificates']
      }
    },
    {
      id: 'incident', icon: '🚨', title: 'Incident Response Simulator', level: 'Intermediate',
      objective: 'Choose the correct response phase for each situation.',
      steps: [
        ['Create contacts, backups and response procedures before an incident.', 'Preparation'],
        ['Temporarily disable a suspected compromised account.', 'Containment'],
        ['Remove the malicious persistence from the affected lab system.', 'Eradication'],
        ['Restore trusted services and monitor for recurrence.', 'Recovery'],
        ['Document what happened and improve controls.', 'Lessons learned']
      ]
    },
    {
      id: 'network', icon: '🌐', title: 'Network Packet Basics', level: 'Intermediate',
      objective: 'Read a fictional packet summary and identify protocol, port and security meaning.',
      packet: { protocol: 'TCP', source: '10.0.0.15:51522', destination: '10.0.0.20:443', status: 'SYN → SYN/ACK → ACK', meaning: 'A TCP connection is being established to a service commonly used for HTTPS.' }
    },
    {
      id: 'risk', icon: '📊', title: 'Risk Prioritization Lab', level: 'Intermediate',
      objective: 'Use likelihood and impact to understand why security findings need context.',
      cases: [
        ['Public login has weak password policy', 'High', 'High'],
        ['Unused training VM has an outdated package', 'Low', 'Low'],
        ['Admin account has no MFA', 'High', 'High'],
        ['Internal documentation has a minor formatting issue', 'Low', 'Low']
      ]
    }
  ];

  const esc = v => { const d=document.createElement('div'); d.textContent=String(v); return d.innerHTML; };
  const modal = () => document.getElementById('coursePlayerModal');

  function addStyle() {
    if (document.getElementById('stage20-style')) return;
    const s=document.createElement('style'); s.id='stage20-style';
    s.textContent=`
      #s20Launch{margin:10px 0;padding:11px 16px;border:1px solid rgba(0,255,157,.45);border-radius:10px;background:rgba(0,255,157,.08);color:#8dffd0;font-weight:700;cursor:pointer}
      #s20Launch:hover{background:rgba(0,255,157,.15)}
      #s20Overlay{position:fixed;inset:0;z-index:99999;background:rgba(2,8,15,.88);display:none;overflow:auto;padding:30px 14px}
      .s20Box{max-width:900px;margin:30px auto;padding:24px;border:1px solid rgba(0,255,157,.25);border-radius:18px;background:#07121d;color:#e9f7f2;box-shadow:0 20px 70px rgba(0,0,0,.45)}
      .s20Top{display:flex;justify-content:space-between;gap:15px;align-items:center}.s20Top h2{margin:0}.s20Close{border:0;background:transparent;color:#fff;font-size:30px;cursor:pointer}
      .s20Grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:14px;margin-top:18px}.s20Card{padding:17px;border:1px solid rgba(54,168,255,.2);border-radius:14px;background:rgba(54,168,255,.045)}
      .s20Card h3{margin:5px 0}.s20Level{font-size:.72rem;color:#7eecc0;text-transform:uppercase;letter-spacing:1px}.s20Card button,.s20Action{margin-top:12px;padding:9px 13px;border:1px solid rgba(0,255,157,.35);border-radius:9px;background:rgba(0,255,157,.08);color:#dfffee;cursor:pointer}
      .s20Work{margin-top:20px;padding:18px;border-radius:14px;background:rgba(255,255,255,.035);border:1px solid rgba(255,255,255,.08)}.s20Option{display:block;width:100%;text-align:left;margin:8px 0;padding:11px;border-radius:9px;border:1px solid rgba(255,255,255,.12);background:#0b1b29;color:#e9f7f2;cursor:pointer}
      .s20Option:hover{border-color:#36a8ff}.s20Result{margin-top:12px;padding:10px;border-radius:9px}.s20Good{background:rgba(0,255,157,.1);color:#8dffd0}.s20Bad{background:rgba(255,100,100,.1);color:#ffb4b4}.s20Progress{height:8px;background:#142432;border-radius:99px;overflow:hidden;margin-top:12px}.s20Progress span{display:block;height:100%;background:#00ff9d;width:0%;transition:.3s}
      .s20Note{font-size:.88rem;opacity:.78;line-height:1.6}
      @media(max-width:600px){#s20Overlay{padding:10px}.s20Box{margin:10px auto;padding:16px}.s20Top{align-items:flex-start}}
    `;
    document.head.appendChild(s);
  }

  function ensureOverlay() {
    if (document.getElementById('s20Overlay')) return;
    const o=document.createElement('div'); o.id='s20Overlay';
    o.innerHTML=`<div class="s20Box"><div class="s20Top"><div><div class="s20Level">Stage 20</div><h2>🧪 Interactive Cybersecurity Labs</h2></div><button class="s20Close" onclick="window.closeStage20Labs()">×</button></div><p class="s20Note">Safe simulations for your own learning environment. These labs do not attack, scan or connect to real targets.</p><div id="s20Body"></div></div>`;
    document.body.appendChild(o);
  }

  function openHub(){
    addStyle(); ensureOverlay();
    document.getElementById('s20Overlay').style.display='block';
    document.getElementById('s20Body').innerHTML=`<div class="s20Grid">${LABS.map(l=>`<div class="s20Card"><div style="font-size:1.7rem">${l.icon}</div><div class="s20Level">${l.level}</div><h3>${esc(l.title)}</h3><p>${esc(l.objective)}</p><button onclick="window.startStage20Lab('${l.id}')">Start Lab →</button></div>`).join('')}</div>`;
  }

  function renderQuiz(lab){
    const body=document.getElementById('s20Body');
    body.innerHTML=`<div class="s20Work"><button class="s20Action" onclick="window.openStage20Labs()">← All Labs</button><h2>${lab.icon} ${esc(lab.title)}</h2><p>${esc(lab.objective)}</p><div id="s20Task"></div><div class="s20Progress"><span id="s20Bar"></span></div><p id="s20Score" class="s20Note"></p></div>`;
    let i=0, score=0;
    const task=document.getElementById('s20Task');
    function next(){
      if(i>=lab.steps.length){
        task.innerHTML=`<div class="s20Result s20Good"><strong>Lab complete!</strong><br>You scored ${score}/${lab.steps.length}. Review the explanations and repeat the lab if needed.</div><button class="s20Action" onclick="window.openStage20Labs()">Choose another lab</button>`;
        document.getElementById('s20Bar').style.width='100%'; return;
      }
      const q=lab.steps[i];
      const options=Array.from(new Set([q[1], q[1]==='Confidentiality'?'Integrity':'Confidentiality', q[1]==='Integrity'?'Availability':'Integrity']));
      task.innerHTML=`<p><strong>Task ${i+1}/${lab.steps.length}</strong></p><p>${esc(q[0])}</p>${options.map(x=>`<button class="s20Option" data-answer="${esc(x)}">${esc(x)}</button>`).join('')}<div id="s20Feedback"></div>`;
      task.querySelectorAll('.s20Option').forEach(b=>b.onclick=()=>{
        const ok=b.dataset.answer===q[1]; if(ok) score++;
        task.querySelectorAll('.s20Option').forEach(x=>x.disabled=true);
        document.getElementById('s20Feedback').innerHTML=`<div class="s20Result ${ok?'s20Good':'s20Bad'}">${ok?'✓ Correct':'✗ Not quite'} — expected: <strong>${esc(q[1])}</strong></div><button class="s20Action" id="s20Next">${i===lab.steps.length-1?'Finish':'Next →'}</button>`;
        document.getElementById('s20Next').onclick=()=>{i++;document.getElementById('s20Bar').style.width=((i/lab.steps.length)*100)+'%';document.getElementById('s20Score').textContent='Current score: '+score;next();};
      });
    }
    next();
  }

  function renderAccess(lab){
    const body=document.getElementById('s20Body');
    body.innerHTML=`<div class="s20Work"><button class="s20Action" onclick="window.openStage20Labs()">← All Labs</button><h2>${lab.icon} ${lab.title}</h2><p>${lab.objective}</p>${Object.entries(lab.roles).map(([r,p])=>`<div class="s20Card"><h3>${r}</h3><ul>${p.map(x=>`<li>${x}</li>`).join('')}</ul></div>`).join('')}<div class="s20Result s20Good">✓ Least privilege check: each role has only the permissions needed for its normal responsibilities.</div></div>`;
  }

  function renderNetwork(lab){
    const p=lab.packet; document.getElementById('s20Body').innerHTML=`<div class="s20Work"><button class="s20Action" onclick="window.openStage20Labs()">← All Labs</button><h2>${lab.icon} ${lab.title}</h2><p>${lab.objective}</p><p><strong>Protocol:</strong> ${p.protocol}</p><p><strong>Source:</strong> ${p.source}</p><p><strong>Destination:</strong> ${p.destination}</p><p><strong>Sequence:</strong> ${p.status}</p><div class="s20Result s20Good">${p.meaning}</div><p class="s20Note">This is a fictional packet summary. No network traffic is generated by this lab.</p></div>`;
  }

  function renderRisk(lab){
    document.getElementById('s20Body').innerHTML=`<div class="s20Work"><button class="s20Action" onclick="window.openStage20Labs()">← All Labs</button><h2>${lab.icon} ${lab.title}</h2><p>${lab.objective}</p><table style="width:100%;border-collapse:collapse"><thead><tr><th style="text-align:left;padding:8px">Finding</th><th>Likelihood</th><th>Impact</th></tr></thead><tbody>${lab.cases.map(c=>`<tr><td style="padding:8px">${esc(c[0])}</td><td style="text-align:center">${c[1]}</td><td style="text-align:center">${c[2]}</td></tr>`).join('')}</tbody></table><div class="s20Result s20Good">Learning point: prioritize by likelihood, impact, exposure and business context—not by one number alone.</div></div>`;
  }

  window.openStage20Labs=openHub;
  window.closeStage20Labs=()=>{const o=document.getElementById('s20Overlay');if(o)o.style.display='none';};
  window.startStage20Lab=(id)=>{const l=LABS.find(x=>x.id===id);if(!l)return;if(id==='access')renderAccess(l);else if(id==='network')renderNetwork(l);else if(id==='risk')renderRisk(l);else renderQuiz(l);};

  function injectButton(){
    const m=modal(); if(!m || document.getElementById('s20Launch')) return;
    const head=m.querySelector('.course-head'); if(!head)return;
    const b=document.createElement('button'); b.id='s20Launch'; b.textContent='🧪 Open Interactive Labs'; b.onclick=openHub; head.appendChild(b);
  }
  const observer=new MutationObserver(injectButton);
  observer.observe(document.body,{childList:true,subtree:true});
  setTimeout(injectButton,1000);
})();
