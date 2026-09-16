// CyberLab Stage 19 - Advanced Learning Layer
// Adds richer theory, safe labs, key concepts, knowledge checks and module progress
// to the existing course player. All practical activities are designed for
// the learner's own device or explicitly authorized lab environment.
(function () {
  if (window.__CYBERLAB_STAGE19__) return;
  window.__CYBERLAB_STAGE19__ = true;

  const MODULES = {
    'Cybersecurity Fundamentals': {
      'Introduction to Cybersecurity': {
        theory: 'Cybersecurity is the continuous practice of protecting digital systems, networks, applications, identities and information from unauthorized access, misuse, disruption, modification and destruction. A complete security program combines prevention, detection, response, recovery, risk management and user awareness. The key relationship is asset → threat → vulnerability → risk → control. An asset is something valuable, a threat is a potential cause of harm, a vulnerability is a weakness, risk describes potential impact and likelihood, and a control reduces risk.',
        concepts: ['Asset', 'Threat', 'Vulnerability', 'Risk', 'Attack surface', 'Defense in depth'],
        example: 'A student account is an asset. A phishing message is a threat. Reused credentials are a vulnerability. MFA is a control that can reduce the effect of a stolen password.',
        lab: 'Draw a simple threat model for a fictional student portal. Identify 3 assets, 3 threats, 3 vulnerabilities and one defensive control for each vulnerability.',
        check: 'What is the difference between a threat and a vulnerability?'
      },
      'CIA Triad': {
        theory: 'The CIA Triad describes three core security goals: confidentiality, integrity and availability. Confidentiality limits information to authorized parties. Integrity protects information from unauthorized or accidental modification. Availability keeps systems and information usable when required. Security decisions often involve trade-offs: a highly restrictive control may improve confidentiality but make legitimate access harder.',
        concepts: ['Confidentiality', 'Integrity', 'Availability', 'Authentication', 'Authorization', 'Non-repudiation'],
        example: 'Encryption can support confidentiality, integrity checks can help detect changes, and backups plus redundancy can improve availability.',
        lab: 'For a fictional online learning system, list one possible failure for confidentiality, integrity and availability, then write one control for each.',
        check: 'Which CIA property is primarily affected when an unauthorized person reads private student data?'
      },
      'Threats and Vulnerabilities': {
        theory: 'Threats and vulnerabilities are related but different. Threats describe possible sources or events of harm, while vulnerabilities are weaknesses that may be exploited or abused. Risk connects them by considering likelihood and impact. Security teams should validate findings and prioritize them according to context instead of treating every issue as equally urgent.',
        concepts: ['Threat', 'Vulnerability', 'Exploit', 'Impact', 'Likelihood', 'Risk'],
        example: 'An outdated web component is a vulnerability. An attempt to exploit it is a threat event. Service interruption or data exposure may be the resulting impact.',
        lab: 'Create a small risk table for a fictional website with five vulnerabilities. Give each a low/medium/high likelihood and impact, then explain your priorities.',
        check: 'Why does finding a vulnerability not automatically prove that an attack will succeed?'
      },
      'Authentication and Access Control': {
        theory: 'Authentication answers who you are; authorization determines what you are allowed to do. Strong authentication may combine knowledge, possession and inherence factors. Multi-factor authentication reduces reliance on a single password. Least privilege and role-based access control limit unnecessary permissions. Authorization must be enforced at a trusted security boundary, normally on the server or database layer, not only by hiding interface elements.',
        concepts: ['Authentication', 'Authorization', 'MFA', 'Least privilege', 'RBAC', 'Session'],
        example: 'A student can read course material, while an administrator can manage users and certificates. The server must enforce that separation even if a user changes the browser interface.',
        lab: 'Design three roles for CyberLab: Student, Instructor and Administrator. Give each five example permissions and remove every permission that is not necessary.',
        check: 'Why is hiding an Admin button not sufficient to enforce authorization?'
      },
      'Malware and Phishing': {
        theory: 'Malware is malicious software or code. Common categories include ransomware, spyware, trojans and worms. Phishing is social engineering that attempts to manipulate people into revealing information or taking an unsafe action. Defenses combine technology and human awareness: MFA, filtering, endpoint protection, patching, backups, safe browsing and verification through trusted channels.',
        concepts: ['Malware', 'Ransomware', 'Trojan', 'Worm', 'Phishing', 'Social engineering'],
        example: 'A fake password-reset message may direct a user to a look-alike page. MFA, domain verification and checking the request through a trusted channel can reduce the risk.',
        lab: 'Create a harmless phishing-awareness example using fake names and no real credentials. Highlight five warning signs and explain the safe response.',
        check: 'Name two technical controls and two user behaviors that can reduce phishing risk.'
      },
      'Security Controls': {
        theory: 'Security controls are safeguards used to reduce risk. They can be administrative, technical or physical, and may be preventive, detective, corrective or compensating. Defense in depth means using multiple layers so that failure of one control does not automatically result in compromise.',
        concepts: ['Preventive', 'Detective', 'Corrective', 'Administrative', 'Technical', 'Defense in depth'],
        example: 'MFA can prevent some unauthorized logins, logging can provide evidence, monitoring can detect suspicious behavior, and backups can support recovery.',
        lab: 'Build a defense-in-depth diagram for a student account using password security, MFA, least privilege, logging and recovery controls.',
        check: 'Why should organizations avoid relying on a single security control?'
      },
      'Incident Response Basics': {
        theory: 'Incident response is a structured process for handling suspected or confirmed security incidents. Common phases are preparation, detection and analysis, containment, eradication, recovery and lessons learned. Evidence should be preserved, actions documented and communication coordinated according to the organization\'s procedures.',
        concepts: ['Preparation', 'Detection', 'Containment', 'Eradication', 'Recovery', 'Lessons learned'],
        example: 'If a student account is suspected to be compromised, responders can contain access, reset credentials, review logs, investigate affected resources and restore trusted access.',
        lab: 'Analyze a fictional alert: “A student account logged in from an unusual location and downloaded many files.” Write a six-step response plan without touching any real account.',
        check: 'What is the difference between containment and eradication?'
      },
      'Security Best Practices': {
        theory: 'Strong security comes from consistent, layered practices: unique passwords, MFA, updates, least privilege, secure configuration, backups, encryption where appropriate, monitoring and security awareness. Backups must also be protected and tested because a backup that cannot be restored is not a reliable recovery control.',
        concepts: ['Patching', 'Backups', 'MFA', 'Least privilege', 'Secure defaults', 'Monitoring'],
        example: 'A well-protected student account uses a unique password, MFA and appropriate permissions, while the platform maintains logs and tested recovery procedures.',
        lab: 'Create a 10-item security checklist for your own CyberLab learning environment. Include account, software, data, network and recovery controls.',
        check: 'Why should backups be tested instead of simply assuming they work?'
      }
    },
    'Ethical Hacking': {
      'Ethics and Authorization': { theory: 'Ethical hacking is authorized security testing performed to identify weaknesses and improve defenses. A professional engagement needs written authorization, a defined scope, timing, allowed techniques, data-handling rules and emergency contacts. Publicly reachable does not mean publicly authorized.', concepts: ['Authorization', 'Scope', 'Rules of engagement', 'Evidence', 'Responsible disclosure'], example: 'A school may authorize testing against a dedicated lab server while excluding production systems and third-party services.', lab: 'Write a one-page rules-of-engagement document for a fictional CyberLab VM. Include target, exclusions, time window, allowed actions and stop conditions.', check: 'Why is authorization required before security testing?' },
      'Security Testing Lifecycle': { theory: 'A structured security-testing lifecycle commonly includes planning, reconnaissance, enumeration, vulnerability assessment, controlled validation, evidence collection, reporting and remediation verification. The objective is to improve security, not merely to demonstrate access.', concepts: ['Planning', 'Reconnaissance', 'Enumeration', 'Validation', 'Reporting', 'Remediation'], example: 'A tester documents an authentication weakness, validates it within scope, records evidence, explains impact and verifies the fix after remediation.', lab: 'Create a lifecycle diagram for a fictional web application and write one safe deliverable for every phase.', check: 'Why should remediation verification be part of the testing lifecycle?' },
      'Reconnaissance Concepts': { theory: 'Reconnaissance gathers information about an authorized target and its attack surface. Passive reconnaissance can use approved public information, while active reconnaissance interacts with the target and therefore requires explicit scope and care.', concepts: ['Attack surface', 'Asset inventory', 'Passive', 'Active', 'Scope'], example: 'A tester can inventory approved domains, applications and technologies before deciding what should be assessed.', lab: 'Using only a fictional target, build an asset inventory with domains, applications, owners and testing boundaries.', check: 'What is the main difference between passive and active reconnaissance?' },
      'Scanning Concepts': { theory: 'Scanning uses controlled requests to learn about reachable hosts, services and configurations in an authorized environment. Scanner output can contain false positives and false negatives, so results require validation. Rate limits and maintenance windows reduce operational impact.', concepts: ['Host discovery', 'Service discovery', 'False positive', 'False negative', 'Rate limiting'], example: 'A lab scanner may report a service that is actually disabled by the time the tester validates the finding.', lab: 'Use a prebuilt offline scan report or fictional scan results and classify each result as confirmed, unconfirmed or needs more evidence.', check: 'Why is a scanner result not automatically a confirmed vulnerability?' },
      'Vulnerability Assessment': { theory: 'Vulnerability assessment identifies weaknesses and helps prioritize them using severity, exposure, exploitability and business impact. Good findings contain evidence, affected scope, conditions, risk and remediation.', concepts: ['Severity', 'Exposure', 'Exploitability', 'Impact', 'Remediation'], example: 'A medium technical weakness on a critical public service may require faster attention than a higher-severity issue on an isolated training machine.', lab: 'Prioritize five fictional findings using technical severity plus business context. Explain every priority.', check: 'Why should business context be considered when prioritizing vulnerabilities?' },
      'Reporting Findings': { theory: 'A professional report explains what was tested, what was observed, why it matters, supporting evidence, affected scope, limitations and recommended remediation. Facts should be separated from assumptions.', concepts: ['Evidence', 'Impact', 'Reproduction', 'Remediation', 'Limitations'], example: 'A precise finding describes the affected endpoint, the observed authorization behavior, evidence and a remediation recommendation rather than simply saying “the website is insecure.”', lab: 'Write a safe vulnerability report for a fictional broken access-control issue. Do not include real credentials or targets.', check: 'What makes a security finding useful to a defender?'}
    },
    'Networking Fundamentals': {
      'What is a Network?': { theory: 'A network connects devices so they can exchange data using agreed protocols. Hosts, switches, routers, access points, firewalls and servers work together across different layers. Understanding the path of a request helps security learners understand where controls and risks exist.', concepts: ['Host', 'Switch', 'Router', 'Protocol', 'LAN', 'WAN'], example: 'A browser request may travel from a laptop through a local access point, router and upstream networks before reaching a web server.', lab: 'Draw your home or virtual lab network and label the devices, gateway, local network and Internet boundary. Do not expose private addresses in a public submission.', check: 'What is the difference between a switch and a router?' },
      'IP Addresses': { theory: 'An IP address identifies a network interface at the network layer. IPv4 uses 32-bit addresses and IPv6 uses 128-bit addresses. Subnets help determine whether traffic is local or must be forwarded through a router. An IP address identifies a network location, not a person.', concepts: ['IPv4', 'IPv6', 'Subnet', 'Private address', 'Public address'], example: 'A home device may use a private IPv4 address while the router provides access toward external networks.', lab: 'On your own Linux machine, inspect your interfaces and identify which addresses are IPv4 and IPv6. Do not scan external systems.', check: 'Why does an IP address not automatically identify a person?' },
      'MAC Addresses': { theory: 'MAC addresses operate at the link layer and are commonly used for local Ethernet or Wi-Fi frame delivery. Switches learn MAC addresses and associate them with local ports. ARP can map IPv4 addresses to local link-layer addresses.', concepts: ['MAC', 'Ethernet', 'Switch', 'ARP', 'Link layer'], example: 'A host may know a destination IP but still need the local destination or gateway MAC address to send a frame.', lab: 'On your own Linux machine, use ip link to inspect your interfaces and compare link-layer information with IP configuration.', check: 'At which layer does a MAC address operate?' },
      'TCP and UDP': { theory: 'TCP provides connection-oriented, reliable and ordered byte-stream delivery using mechanisms such as sequencing, acknowledgements and retransmission. UDP provides a lightweight datagram service without TCP\'s reliability mechanisms. The correct protocol depends on application requirements.', concepts: ['TCP', 'UDP', 'Port', 'Handshake', 'Datagram'], example: 'HTTPS commonly uses TCP-based connections, while many real-time applications use UDP when lower overhead and timely delivery are important.', lab: 'On your own machine, inspect listening sockets with ss -tuln and identify which local applications use TCP or UDP.', check: 'What is one major difference between TCP and UDP?' },
      'DNS': { theory: 'DNS is a hierarchical distributed naming system that maps domain names to resource records. Resolvers may use cached results or query authoritative servers. DNS is essential for normal Internet use and is also important in security monitoring.', concepts: ['Resolver', 'Authoritative server', 'A record', 'AAAA record', 'Cache'], example: 'A browser may need a DNS answer before it can connect to a website server.', lab: 'Use dig or nslookup on a domain you are permitted to query and identify its A or AAAA record. Do not attempt unauthorized DNS manipulation.', check: 'What problem does DNS solve?' },
      'HTTP and HTTPS': { theory: 'HTTP exchanges web requests and responses. HTTPS is HTTP protected by TLS, which helps provide confidentiality, integrity and server authentication in transit. HTTPS does not replace application-level authorization or secure coding.', concepts: ['HTTP', 'HTTPS', 'TLS', 'Request', 'Response', 'Certificate'], example: 'TLS can protect login credentials while the application must separately enforce correct roles and permissions.', lab: 'Use browser developer tools on a site you are authorized to inspect and identify a request method, status code and response header.', check: 'Does HTTPS by itself guarantee that a web application is secure?'}
  };

  function esc(value) {
    const d = document.createElement('div');
    d.textContent = String(value);
    return d.innerHTML;
  }

  function getCourseName() {
    const h = document.querySelector('#coursePlayerModal .course-head h2');
    return h ? h.textContent.trim() : '';
  }

  function getLessonTitle(card) {
    const strong = card.querySelector('.lesson-title strong');
    return strong ? strong.textContent.trim() : '';
  }

  function getModule(course, lesson) {
    return MODULES[course] && MODULES[course][lesson] ? MODULES[course][lesson] : null;
  }

  function style() {
    if (document.getElementById('stage19-style')) return;
    const s = document.createElement('style');
    s.id = 'stage19-style';
    s.textContent = `
      .s19-panel{margin-top:18px;padding:18px;border:1px solid rgba(0,255,157,.2);border-radius:14px;background:linear-gradient(145deg,rgba(0,255,157,.055),rgba(54,168,255,.035));}
      .s19-badge{display:inline-block;font-size:.7rem;letter-spacing:1.5px;color:#00ff9d;border:1px solid rgba(0,255,157,.5);border-radius:99px;padding:4px 9px;margin-bottom:8px}
      .s19-panel h4{margin:12px 0 6px;color:#8decc5}
      .s19-panel p{line-height:1.7;margin:6px 0}
      .s19-concepts{display:flex;flex-wrap:wrap;gap:7px;margin:9px 0}
      .s19-concepts span{padding:5px 9px;border-radius:99px;background:rgba(54,168,255,.09);border:1px solid rgba(54,168,255,.2);font-size:.82rem}
      .s19-lab{border-left:3px solid #36a8ff;padding:10px 13px;background:rgba(54,168,255,.06);border-radius:8px}
      .s19-check{border-left:3px solid #00ff9d;padding:10px 13px;background:rgba(0,255,157,.06);border-radius:8px}
      .s19-progress{margin:0 0 16px;padding:12px 14px;border:1px solid rgba(0,255,157,.18);border-radius:12px;background:rgba(0,0,0,.12)}
      .s19-progress-row{display:flex;justify-content:space-between;gap:12px;font-size:.9rem;margin-bottom:7px}
      .s19-bar{height:8px;background:rgba(255,255,255,.09);border-radius:99px;overflow:hidden}
      .s19-bar i{display:block;height:100%;width:0;background:#00ff9d;border-radius:99px;transition:width .3s}
      .s19-lab textarea{width:100%;min-height:90px;box-sizing:border-box;margin-top:8px;padding:10px;border-radius:8px;border:1px solid rgba(54,168,255,.25);background:rgba(0,0,0,.18);color:inherit;resize:vertical}
      .s19-save{margin-top:8px;padding:8px 12px;border-radius:8px;border:1px solid rgba(0,255,157,.4);background:rgba(0,255,157,.08);color:inherit;cursor:pointer}
      @media(max-width:600px){.s19-panel{padding:14px}.s19-progress-row{font-size:.82rem}}
    `;
    document.head.appendChild(s);
  }

  function storageKey(course, lesson) {
    return 'cyberlab_stage19_lab_' + course + '_' + lesson;
  }

  function renderProgress() {
    const modal = document.getElementById('coursePlayerModal');
    if (!modal) return;
    const cards = modal.querySelectorAll('.lesson-card');
    if (!cards.length) return;
    let done = 0;
    cards.forEach(card => { if (card.classList.contains('is-done')) done++; });
    let box = modal.querySelector('.s19-progress');
    const first = modal.querySelector('.course-progress-wrap');
    if (!box) {
      box = document.createElement('div');
      box.className = 's19-progress';
      if (first) first.insertAdjacentElement('afterend', box);
    }
    const pct = Math.round(done / cards.length * 100);
    box.innerHTML = `<div class="s19-progress-row"><strong>Stage 19 Module Progress</strong><strong>${pct}%</strong></div><div class="s19-bar"><i style="width:${pct}%"></i></div><small>Advanced theory and practical activities are available lesson by lesson.</small>`;
  }

  function enrichCard(card) {
    if (card.dataset.s19 === '1') return;
    const course = getCourseName();
    const lesson = getLessonTitle(card);
    const data = getModule(course, lesson);
    if (!data) return;
    const body = card.querySelector('.lesson-content');
    if (!body) return;

    const panel = document.createElement('div');
    panel.className = 's19-panel';
    const saved = localStorage.getItem(storageKey(course, lesson)) || '';
    panel.innerHTML = `
      <span class="s19-badge">STAGE 19 • ADVANCED LEARNING</span>
      <h4>📖 Deep Theory</h4>
      <p>${esc(data.theory)}</p>
      <h4>🔑 Key Concepts</h4>
      <div class="s19-concepts">${data.concepts.map(x => `<span>${esc(x)}</span>`).join('')}</div>
      <h4>💡 Real-World Example</h4>
      <p>${esc(data.example)}</p>
      <h4>🧪 Safe Practical Lab</h4>
      <div class="s19-lab"><p>${esc(data.lab)}</p><textarea placeholder="Write your lab notes here...">${esc(saved)}</textarea><button class="s19-save">Save Lab Notes</button></div>
      <h4>🧠 Knowledge Check</h4>
      <div class="s19-check"><p><strong>${esc(data.check)}</strong></p><textarea placeholder="Write your answer in your own words..."></textarea></div>
    `;
    const save = panel.querySelector('.s19-save');
    if (save) save.addEventListener('click', function () {
      const ta = panel.querySelector('.s19-lab textarea');
      localStorage.setItem(storageKey(course, lesson), ta ? ta.value : '');
      save.textContent = '✓ Saved';
      setTimeout(() => save.textContent = 'Save Lab Notes', 1200);
    });
    body.appendChild(panel);
    card.dataset.s19 = '1';
  }

  function enhance() {
    style();
    const modal = document.getElementById('coursePlayerModal');
    if (!modal || !modal.classList.contains('active')) return;
    modal.querySelectorAll('.lesson-card').forEach(enrichCard);
    renderProgress();
  }

  const observer = new MutationObserver(enhance);
  observer.observe(document.body, {childList:true, subtree:true});
  setInterval(enhance, 900);
})();
