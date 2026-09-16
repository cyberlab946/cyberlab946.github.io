// CyberLab Stage 22 — Expanded Lessons
// Adds a beginner-friendly extended curriculum without replacing the existing course player.
// Security labs are limited to the learner's own device or explicitly authorized environments.
(function () {
  if (window.__CYBERLAB_STAGE22__) return;
  window.__CYBERLAB_STAGE22__ = true;

  const COURSES = {
    'Secure Web Development': {
      icon: '🌐',
      lessons: [
        ['HTML Foundations', 'HTML (HyperText Markup Language) defines the structure and meaning of web content.', 'Learn elements, tags, attributes, nesting and document structure.', '<h1>Hello</h1><p>Welcome to CyberLab.</p>', 'Use semantic elements such as header, nav, main, section and footer instead of using div for everything.', 'Build a simple profile page with a heading, paragraph, image, links and a list.'],
        ['HTML Attributes and Paths', 'Attributes provide extra information to HTML elements, while paths tell the browser where resources are located.', 'Understand href, src, alt, id, class, relative paths and absolute URLs.', '<a href="about.html">About</a><img src="images/logo.png" alt="CyberLab logo">', 'Keep project assets in organized folders and use meaningful alt text.', 'Create an images folder and link three local images correctly.'],
        ['Semantic HTML', 'Semantic HTML uses elements that communicate the purpose of content.', 'Study header, nav, main, article, section, aside and footer.', '<main><article><h2>Lesson</h2><p>Content</p></article></main>', 'Semantic structure improves accessibility, maintainability and search understanding.', 'Convert a div-heavy page into a semantic layout.'],
        ['Forms and Validation', 'Forms collect user input through controls such as text fields, email fields, checkboxes and buttons.', 'Learn labels, input types, required fields, name attributes and basic browser validation.', '<label>Email <input type="email" required></label>', 'Always associate labels with inputs and validate again on the server for real applications.', 'Build a registration form with name, email, password and agreement fields.'],
        ['CSS Foundations', 'CSS controls the presentation and layout of HTML content.', 'Learn selectors, declarations, properties, values and the cascade.', 'body { font-family: Arial; } .card { padding: 20px; }', 'Prefer reusable classes and keep styles organized instead of repeating inline styles.', 'Style your profile page with a consistent font, spacing and card design.'],
        ['Box Model', 'Every normal CSS element is laid out as content, padding, border and margin.', 'Understand width, height, padding, border, margin and box-sizing.', '* { box-sizing: border-box; }', 'Using border-box makes width calculations easier for responsive layouts.', 'Create three cards and experiment with padding, border and margin.'],
        ['Flexbox Layout', 'Flexbox is a one-dimensional layout system for arranging items in rows or columns.', 'Learn display:flex, flex-direction, justify-content, align-items, gap and flex-wrap.', '.nav { display:flex; gap:20px; align-items:center; }', 'Use gap instead of unnecessary margin hacks for consistent spacing.', 'Create a responsive navigation bar and feature row.'],
        ['CSS Grid', 'Grid is a two-dimensional layout system for rows and columns.', 'Learn grid-template-columns, gap, minmax and responsive grids.', '.grid { display:grid; grid-template-columns:repeat(3,1fr); gap:16px; }', 'Use minmax() and auto-fit/auto-fill for flexible layouts.', 'Build a four-card course dashboard that becomes one column on small screens.'],
        ['Responsive Design', 'Responsive design allows a page to adapt to different screen sizes.', 'Learn mobile-first design, flexible units and media queries.', '@media (max-width:600px){ .grid{grid-template-columns:1fr;} }', 'Test touch targets, text size and navigation on real mobile dimensions.', 'Make your CyberLab course cards work on desktop, tablet and mobile.'],
        ['Accessibility Basics', 'Accessibility means making websites usable by people with different abilities and assistive technologies.', 'Study labels, keyboard navigation, color contrast, alt text, headings and focus states.', '<button aria-label="Open menu">☰</button>', 'Never use color alone to communicate important information.', 'Keyboard-test your navigation and form without using a mouse.'],
        ['JavaScript for Interaction', 'JavaScript adds behavior and interactivity to web pages.', 'Learn variables, functions, events, DOM selection and text updates.', 'document.getElementById("message").textContent = "Hello!";', 'Use event listeners and validate input before changing application state.', 'Create a button that toggles a course lesson between hidden and visible.'],
        ['Secure Web Basics', 'Secure development reduces the chance that user input or application behavior can be abused.', 'Understand input validation, output encoding, authentication, authorization and safe error handling.', 'Treat browser input as untrusted data and validate it before using it.', 'Do not put secrets such as passwords or API keys in frontend JavaScript.', 'Review your CyberLab page and list five places where untrusted input could exist.']
      ]
    },
    'Cybersecurity Fundamentals': {
      icon:'🛡️', lessons:[
        ['What is Cybersecurity?','Cybersecurity protects systems, networks, applications, identities and information from unauthorized or harmful activity.','Study the asset → threat → vulnerability → risk → control relationship.','Example: MFA reduces the impact of a stolen password.','Security is a continuous process, not a one-time installation.','Create a threat model for a fictional student portal.'],
        ['CIA Triad','Confidentiality, integrity and availability are three core security objectives.','Learn what each property protects and how controls can support it.','Encryption can support confidentiality; backups can support availability.','Security controls can create trade-offs between usability and protection.','Give one failure and one control for each CIA property.'],
        ['Threats, Vulnerabilities and Risk','A threat can cause harm, a vulnerability is a weakness, and risk combines likelihood and impact.','Learn attack surface, exposure, likelihood and business impact.','An outdated component is a vulnerability; exploitation is a threat event.','Do not treat every finding as equally urgent without context.','Prioritize five fictional risks.'],
        ['Authentication','Authentication verifies identity.','Learn passwords, passphrases, MFA, session concepts and account recovery.','A password plus an authenticator app uses two different factors.','MFA should protect sensitive accounts and recovery paths too.','Design a secure login flow for a student portal.'],
        ['Authorization and Least Privilege','Authorization determines what an authenticated identity may access.','Study RBAC, permissions, separation of duties and least privilege.','Students can view lessons while administrators can manage users.','Enforce authorization on trusted server-side boundaries.','Create Student, Instructor and Admin permission tables.'],
        ['Malware','Malware is software designed to perform unauthorized or harmful actions.','Learn ransomware, trojans, worms, spyware and defensive controls.','A trojan may appear legitimate while performing unwanted actions.','Backups, patching, endpoint protection and user awareness work together.','Create a malware-awareness poster using fictional examples.'],
        ['Phishing and Social Engineering','Phishing uses deceptive communication to influence users into unsafe actions.','Learn urgency, impersonation, suspicious links, attachment risks and verification.','A fake password-reset message is a common phishing pattern.','Verify requests through trusted channels rather than replying to suspicious messages.','Mark five warning signs in a harmless sample email.'],
        ['Cryptography Basics','Cryptography provides mechanisms for confidentiality, integrity, authentication and related security goals.','Understand encryption, hashing, keys, digital signatures and TLS at a high level.','Hashing can help verify data integrity but is not encryption.','Never invent your own cryptographic algorithm for real security.','Classify five scenarios as encryption, hashing or signing.'],
        ['Security Controls','Controls are safeguards that reduce risk.','Study preventive, detective, corrective, administrative, technical and physical controls.','MFA, logging, training and backups are different types of controls.','Defense in depth reduces dependence on one control.','Design a layered security model for CyberLab.'],
        ['Incident Response','Incident response is the organized handling of suspected or confirmed security incidents.','Learn preparation, detection, containment, eradication, recovery and lessons learned.','A compromised account may first be contained before deeper investigation.','Preserve evidence and document actions according to procedure.','Write a response plan for a fictional compromised account.'],
        ['Security Monitoring','Monitoring collects useful signals that help detect suspicious behavior.','Study logs, alerts, baselines and indicators of compromise.','Many failed logins followed by a successful login may deserve investigation.','Monitoring quality depends on useful logs, time synchronization and clear alert rules.','Design five security alerts for a fictional learning platform.'],
        ['Security Best Practices','Good security combines secure configuration, updates, backups, access control and awareness.','Learn patching, backups, secure defaults, MFA and recovery testing.','A tested backup is more useful than an untested backup.','Review controls regularly as systems and threats change.','Create a 15-item personal security checklist.']
      ]
    },
    'Ethical Hacking': {
      icon:'🔐', lessons:[
        ['Ethics and Authorization','Ethical hacking is authorized security testing intended to improve security.','Learn scope, permission, rules of engagement, exclusions and stop conditions.','A dedicated lab VM can be authorized while production systems are excluded.','Publicly reachable does not mean authorized to test.','Write rules of engagement for a fictional lab.'],
        ['Testing Methodology','Security testing follows a repeatable process from planning to reporting and verification.','Study planning, reconnaissance, enumeration, assessment, validation, reporting and retesting.','A finding should be documented and verified after remediation.','The goal is risk reduction, not simply proving access.','Draw a testing lifecycle diagram.'],
        ['Reconnaissance','Reconnaissance gathers information about an approved target and its attack surface.','Differentiate passive and active reconnaissance and asset inventory.','An approved asset inventory can list domains and applications.','Keep collection within scope and avoid unnecessary data gathering.','Build a fictional asset inventory.'],
        ['Scanning Concepts','Scanning can identify reachable systems and exposed services in an authorized lab.','Understand discovery, ports, services, rate limits and scanner limitations.','A scan result may require manual validation before being reported.','False positives and false negatives are possible.','Classify fictional scan results as confirmed or unconfirmed.'],
        ['Enumeration','Enumeration gathers more detailed information about approved services.','Learn why service versions, configurations and identities matter to defenders.','A lab service inventory may show a web server and database service.','Only enumerate systems explicitly included in the test scope.','Analyze a provided fictional service inventory.'],
        ['Vulnerability Assessment','Assessment identifies weaknesses and prioritizes them for remediation.','Study severity, exposure, exploitability, impact and evidence.','A technically severe issue on an isolated lab may differ in urgency from a moderate issue on a critical public service.','Context matters when prioritizing findings.','Prioritize five fictional findings and explain why.'],
        ['Web Security Testing','Web testing examines application behavior for security weaknesses in an authorized environment.','Learn authentication, authorization, input validation, session management and secure headers.','Broken access control occurs when a user can access data outside their role.','Use intentionally vulnerable applications for hands-on learning.','Review a fictional web app security checklist.'],
        ['Password Security','Password security protects accounts against guessing, reuse and credential theft.','Learn passphrases, password managers, MFA, rate limiting and secure storage concepts.','A unique passphrase plus MFA is stronger than a reused password.','Never test credentials against accounts you do not own or have written permission to test.','Design a password policy for CyberLab.'],
        ['Reporting Findings','A professional finding explains evidence, scope, impact and remediation.','Study clear titles, affected assets, evidence, risk and recommendations.','A report should be understandable to both technical and non-technical readers.','Separate observed facts from assumptions.','Write a fictional access-control finding.'],
        ['Remediation and Retesting','Retesting verifies whether a reported weakness has been fixed.','Learn remediation validation, regression testing and residual risk.','A fixed authorization check should be tested with allowed and denied roles.','A patch may introduce new behavior, so regression matters.','Create a retest checklist for a fictional web application.']
      ]
    },
    'Networking Fundamentals': {
      icon:'🌐', lessons:[
        ['Network Fundamentals','A network connects devices using communication protocols.','Learn hosts, switches, routers, gateways and network boundaries.','A home network may contain clients, an access point and a router.','Map only networks you own or are authorized to document.','Draw a simple home or lab topology.'],
        ['OSI Model','The OSI model is a conceptual framework for understanding network communication layers.','Study physical, data link, network, transport, session, presentation and application layers.','Ethernet operates at the data-link layer while IP operates at the network layer.','The OSI model is a learning model; real stacks do not always map one-to-one.','Map five common protocols to OSI layers.'],
        ['TCP/IP Model','TCP/IP describes the protocols used by modern networks.','Learn link, Internet, transport and application layers.','IP, TCP and HTTP work at different levels of the stack.','Understanding encapsulation helps with troubleshooting.','Draw packet encapsulation from application to link layer.'],
        ['IPv4 and IPv6','IP addressing identifies interfaces and supports routing.','Study IPv4, IPv6, private addresses, public addresses and subnets.','A device can have multiple IP addresses.','An IP address is not automatically a person identifier.','Inspect your own interface addresses safely.'],
        ['Subnetting Basics','Subnetting divides address space into smaller networks.','Learn network prefixes, masks, hosts and basic CIDR notation.','192.168.1.0/24 represents a common private IPv4 subnet size.','Always calculate carefully before assigning overlapping networks.','Practice five CIDR exercises.'],
        ['MAC and ARP','MAC addresses support local link delivery and ARP maps IPv4 addresses to local link-layer addresses.','Learn Ethernet frames, MAC tables and ARP concepts.','A host can resolve its local gateway IP to a MAC address.','ARP is local-network behavior and should be studied in your own lab.','Inspect your own ARP/neighbour table.'],
        ['TCP and UDP','TCP provides reliable ordered delivery while UDP provides lightweight datagrams.','Study ports, connections, handshake, retransmission and datagrams.','Different applications choose protocols based on requirements.','Do not assume every service uses TCP.','Inspect local listening TCP and UDP sockets.'],
        ['DNS','DNS translates names into resource records through a distributed hierarchy.','Study resolvers, caches, authoritative servers and common records.','A browser may need DNS resolution before connecting to a web service.','DNS results can be cached and may change over time.','Use dig or nslookup on an approved domain.'],
        ['HTTP and HTTPS','HTTP is a request-response application protocol; HTTPS adds TLS protection.','Learn methods, status codes, headers, cookies and TLS basics.','A 200 status generally indicates a successful response, while 404 indicates not found.','HTTPS protects data in transit but does not automatically secure application logic.','Inspect a request on a site you are allowed to analyze.'],
        ['Firewalls and Network Security','Firewalls enforce traffic rules between networks or hosts.','Learn allow/deny rules, stateful filtering, segmentation and logging.','A firewall can restrict which services are reachable from a network segment.','Poorly designed rules can create blind spots or block legitimate traffic.','Design a fictional firewall policy.']
      ]
    },
    'Linux & Termux': {
      icon:'🐧', lessons:[
        ['Linux Overview','Linux is an operating-system kernel used by many distributions and devices.','Learn kernel, user space, shell, packages and filesystem concepts.','Ubuntu, Fedora and Debian are distributions that use the Linux kernel.','Use a disposable VM or your own device for experiments.','Identify the distribution and kernel on your own system.'],
        ['Filesystem Basics','Linux organizes files in a hierarchical filesystem.','Study /, /home, /etc, /var, /tmp and relative versus absolute paths.','/home/student/docs/file.txt is an absolute path.','Avoid deleting files when you are unsure what they do.','Create a safe practice directory tree.'],
        ['Essential Commands','Commands provide a fast way to inspect and manipulate a system.','Learn pwd, ls, cd, mkdir, cp, mv, rm, cat, less and clear.','mkdir lab creates a directory named lab.','Use rm carefully and practice with disposable files.','Complete a 15-command navigation challenge.'],
        ['Permissions','Linux permissions control read, write and execute access for owner, group and others.','Learn chmod, chown, rwx and numeric permission notation.','chmod 640 file gives owner read/write, group read and others no access.','Use least privilege rather than broad permissions such as 777.','Create files with three different permission sets.'],
        ['Users and Groups','Users and groups provide identity and access boundaries.','Learn id, whoami, groups and basic account concepts.','A user can belong to multiple groups that influence permissions.','Do not change system accounts on production devices without authorization.','Inspect your own account and groups.'],
        ['Processes','Processes are running instances of programs.','Learn ps, top, kill, jobs and process IDs.','ps can show processes belonging to your user.','Terminate only processes you own or are authorized to manage.','Start a harmless process and observe its PID.'],
        ['Package Management','Package managers install, update and remove software from configured repositories.','Learn apt or your distribution\'s package manager conceptually.','apt update refreshes package metadata on Debian-based systems.','Use trusted repositories and review packages before installation.','Install one harmless package in a lab VM and remove it.'],
        ['Shell Scripting','Shell scripts automate repetitive command-line tasks.','Learn variables, quoting, conditions, loops and exit codes.','name="Krishna"; echo "Hello $name"', 'Quote variables carefully and validate input when scripts process external data.','Write a script that creates a dated practice folder.'],
        ['Networking Commands','Linux includes tools for inspecting local network configuration and connectivity.','Learn ip, ss, ping and basic DNS tools.','ip addr shows interface addresses on your own machine.','Use network tools only on systems and networks you are permitted to inspect.','Create a local network troubleshooting checklist.'],
        ['Logs and Troubleshooting','Logs record useful system and application events.','Study log locations, timestamps, severity and correlation.','A service log may reveal why an application failed to start.','Protect logs because they may contain sensitive information.','Analyze a fictional log and identify five useful clues.']
      ]
    },
    'Wireshark & Traffic Analysis': {
      icon:'🔎', lessons:[
        ['Packets and Frames','Network data is encapsulated into structures such as frames, packets and segments.','Learn Ethernet, IP, TCP/UDP and application payload concepts.','An Ethernet frame can carry an IP packet.','Capture only traffic you are authorized to inspect.','Label the layers in a sample packet.'],
        ['Wireshark Interface','Wireshark is a packet-analysis tool that helps inspect captured network traffic.','Learn packet list, packet details, bytes view and display filters.','Selecting a packet reveals protocol fields and raw bytes.','Avoid capturing sensitive traffic unnecessarily.','Open a sample capture file and identify five protocols.'],
        ['Capture Filters vs Display Filters','Capture filters limit what is recorded while display filters control what is shown after capture.','Understand when each type is useful.','A display filter can hide unrelated packets without deleting them from the capture.','Filtering is for analysis, not a substitute for authorization.','Practice simple filters on a provided sample capture.'],
        ['Ethernet and ARP','Ethernet handles local frame delivery and ARP helps resolve IPv4 neighbours.','Study MAC addresses, EtherType and ARP request/reply patterns.','An ARP request asks which device owns a local IP address.','Interpret captures carefully because virtual environments may look different.','Find one ARP request and response in a sample capture.'],
        ['IP Analysis','IP packets contain source, destination and routing-related fields.','Learn IPv4 header concepts, TTL and fragmentation at a high level.','TTL helps limit how long a packet can circulate.','Source addresses can be spoofed in some contexts, so do not treat them as identity proof.','Identify source, destination and protocol fields in a sample packet.'],
        ['TCP Handshake','TCP commonly establishes a connection using SYN, SYN-ACK and ACK packets.','Learn sequence numbers, acknowledgements and flags.','The three-way handshake prepares both endpoints for reliable communication.','Missing or retransmitted packets can indicate network conditions but need context.','Find a TCP handshake in an authorized sample capture.'],
        ['UDP and DNS','UDP is often used for lightweight request-response traffic such as many DNS exchanges.','Study DNS queries, responses and common record types.','A DNS query asks a resolver for information about a name.','Encrypted DNS changes what can be observed directly in a capture.','Identify a DNS query and matching response in a sample capture.'],
        ['HTTP Traffic','HTTP exposes application-level requests and responses in plaintext when not protected by TLS.','Learn methods, status codes, headers and content types.','A GET request can ask a server for a resource.','Never capture real passwords or private traffic for practice.','Analyze a harmless HTTP sample capture.'],
        ['TLS and HTTPS','TLS protects application traffic in transit and provides certificate-based server authentication.','Study handshake concepts, certificates and encrypted application data.','After TLS setup, the HTTP payload is normally not visible as plaintext in the capture.','Packet visibility depends on encryption and available session keys.','Identify the TLS handshake stages in a sample capture.'],
        ['Traffic Investigation Workflow','Traffic analysis combines filtering, protocol understanding, timelines and evidence.','Learn baseline behavior, anomalies, timestamps and correlation.','A burst of repeated failed connections may deserve investigation in context.','One unusual packet is not automatically malicious.','Write a five-step workflow for analyzing a fictional alert.']
      ]
    }
  };

  const esc = (v) => { const d=document.createElement('div'); d.textContent=String(v); return d.innerHTML; };
  let selected = null;

  function courseName() {
    const h = document.querySelector('#coursePlayerModal .course-head h2');
    return h ? h.textContent.trim() : '';
  }

  function inject() {
    const modal = document.getElementById('coursePlayerModal');
    if (!modal || modal.getAttribute('aria-hidden') === 'true') return;
    const course = courseName();
    const data = COURSES[course];
    if (!data) return;
    if (modal.querySelector('.s22-expanded')) return;

    const host = modal.querySelector('.course-body') || modal.querySelector('.course-content') || modal;
    const panel = document.createElement('section');
    panel.className = 's22-expanded';
    panel.innerHTML = `
      <div class="s22-head"><span class="s22-badge">STAGE 22 • EXPANDED CURRICULUM</span><h3>${data.icon} More Lessons for Better Knowledge</h3><p>Progressive lessons with theory, examples, advanced beginner techniques, mistakes, best practices and practice tasks.</p></div>
      <div class="s22-layout"><div class="s22-list"></div><article class="s22-detail"><p class="s22-placeholder">Select a lesson to start learning.</p></article></div>`;
    host.appendChild(panel);

    const list = panel.querySelector('.s22-list');
    const detail = panel.querySelector('.s22-detail');
    data.lessons.forEach((lesson, i) => {
      const key = `cyberlab-s22-${course}-${i}`;
      const done = localStorage.getItem(key) === 'done';
      const button = document.createElement('button');
      button.className = 's22-lesson' + (done ? ' done' : '');
      button.innerHTML = `<span>${i+1}</span><strong>${esc(lesson[0])}</strong><em>${done ? '✓' : 'Learn'}</em>`;
      button.onclick = () => {
        selected = i;
        renderDetail(course, data, i, button, detail);
      };
      list.appendChild(button);
    });
    renderDetail(course, data, 0, list.querySelector('.s22-lesson'), detail);
  }

  function renderDetail(course, data, i, button, detail) {
    const l = data.lessons[i];
    document.querySelectorAll('.s22-lesson').forEach(b => b.classList.remove('active'));
    button.classList.add('active');
    const key = `cyberlab-s22-${course}-${i}`;
    const done = localStorage.getItem(key) === 'done';
    detail.innerHTML = `
      <span class="s22-badge">LESSON ${i+1} OF ${data.lessons.length}</span>
      <h3>${esc(l[0])}</h3>
      <h4>📘 Definition</h4><p>${esc(l[1])}</p>
      <h4>🧠 What you will learn</h4><p>${esc(l[2])}</p>
      <h4>💻 Basic example</h4><pre><code>${esc(l[3])}</code></pre>
      <h4>🚀 Advanced beginner technique</h4><p>${esc(l[4])}</p>
      <h4>⚠️ Common mistakes to avoid</h4><p>Do not skip fundamentals, copy code without understanding it, ignore error messages, or practice against systems you do not own or have permission to test.</p>
      <h4>✅ Best practice</h4><p>Understand the reason behind each step, keep notes, test safely, and verify your result before moving on.</p>
      <h4>🧪 Practice task</h4><p>${esc(l[5])}</p>
      <button class="s22-complete" type="button">${done ? '✓ Lesson Completed' : 'Mark Lesson Complete'}</button>`;
    detail.querySelector('.s22-complete').onclick = () => {
      localStorage.setItem(key, 'done');
      button.classList.add('done');
      button.querySelector('em').textContent = '✓';
      renderDetail(course, data, i, button, detail);
    };
  }

  function styles() {
    if (document.getElementById('s22-style')) return;
    const s=document.createElement('style'); s.id='s22-style';
    s.textContent=`
      .s22-expanded{margin-top:24px;padding:18px;border:1px solid rgba(0,255,157,.22);border-radius:18px;background:rgba(4,12,18,.75)}
      .s22-head{margin-bottom:16px}.s22-head h3{margin:6px 0}.s22-head p{opacity:.8;line-height:1.6}.s22-badge{display:inline-block;color:#00ff9d;border:1px solid rgba(0,255,157,.45);border-radius:999px;padding:4px 9px;font-size:.7rem;letter-spacing:1px}
      .s22-layout{display:grid;grid-template-columns:280px 1fr;gap:16px}.s22-list{display:flex;flex-direction:column;gap:8px}.s22-lesson{display:grid;grid-template-columns:28px 1fr auto;align-items:center;gap:8px;text-align:left;padding:10px;border-radius:10px;border:1px solid rgba(255,255,255,.1);background:rgba(255,255,255,.03);color:inherit;cursor:pointer}.s22-lesson:hover,.s22-lesson.active{border-color:rgba(0,255,157,.55);background:rgba(0,255,157,.07)}.s22-lesson span{width:24px;height:24px;display:grid;place-items:center;border-radius:50%;background:rgba(54,168,255,.12);font-size:.8rem}.s22-lesson em{font-style:normal;font-size:.7rem;opacity:.65}.s22-lesson.done em{color:#00ff9d;opacity:1}.s22-detail{padding:18px;border-radius:14px;background:rgba(255,255,255,.025);border:1px solid rgba(255,255,255,.08)}.s22-detail h3{margin:8px 0 16px}.s22-detail h4{margin:16px 0 6px;color:#8decc5}.s22-detail p{line-height:1.7;margin:5px 0}.s22-detail pre{white-space:pre-wrap;overflow:auto;padding:12px;border-radius:10px;background:#050a0f;border:1px solid rgba(255,255,255,.08)}.s22-complete{margin-top:18px;padding:10px 14px;border:1px solid rgba(0,255,157,.5);border-radius:10px;background:rgba(0,255,157,.08);color:inherit;cursor:pointer}.s22-placeholder{opacity:.7}
      @media(max-width:700px){.s22-layout{grid-template-columns:1fr}.s22-list{max-height:320px;overflow:auto}}
    `; document.head.appendChild(s);
  }

  styles();
  const observer = new MutationObserver(inject);
  observer.observe(document.body, {childList:true, subtree:true, attributes:true, attributeFilter:['class','style','aria-hidden']});
  setInterval(inject, 700);
})();
