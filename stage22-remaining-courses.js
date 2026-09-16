/* CyberLab Stage 22 — Remaining Course Expansion
   Adds full beginner -> advanced lesson paths for courses not covered by the main Stage 22 file.
   Educational examples only. Security testing content is for owned/authorized labs.
*/
(function () {
  'use strict';
  if (window.__CYBERLAB_STAGE22_REMAINING__) return;
  window.__CYBERLAB_STAGE22_REMAINING__ = true;

  const C = {
    Python: ['Python', '🐍', [
      ['Python Basics','Python is a high-level, readable programming language used for automation, applications, data and security learning.','Learn variables, indentation, comments and basic syntax.','name = "CyberLab"; print(name)','Keep code simple and readable.','Create a greeting program.'],
      ['Data Types','Python provides numbers, strings, booleans and collection types.','Learn int, float, str, bool, list, tuple, set and dict.','age = 18; skills = ["HTML", "Python"]','Choose the type that matches the data.','Build a student profile dictionary.'],
      ['Operators','Operators perform arithmetic, comparison and logical operations.','Learn +, -, *, /, %, ==, !=, >, <, and, or, not.','score = 80; print(score >= 50)','Use parentheses when expressions become complex.','Create a simple marks calculator.'],
      ['Conditions','Conditional statements allow programs to make decisions.','Learn if, elif and else.','if score >= 50: print("Pass")','Handle boundary values carefully.','Build a grade checker.'],
      ['Loops','Loops repeat work efficiently.','Learn for, while, range, break and continue.','for i in range(5): print(i)','Avoid infinite while loops by changing the loop condition.','Print a multiplication table.'],
      ['Functions','Functions package reusable logic.','Learn parameters, return values and scope.','def add(a,b): return a+b','Give functions one clear responsibility.','Create five utility functions.'],
      ['Collections','Lists, dictionaries, sets and tuples organize data.','Practice indexing, slicing, iteration and dictionary lookups.','student = {"name":"Krishna","score":90}','Use dictionaries for structured records.','Build a small contact book.'],
      ['Files and Exceptions','Programs can read files and handle expected errors.','Learn with open(), try, except and finally.','with open("notes.txt") as f: data=f.read()','Validate paths and handle missing files gracefully.','Create a notes reader.'],
      ['Object-Oriented Python','Classes combine data and behavior.','Learn classes, objects, constructors, methods and inheritance.','class User: pass','Prefer composition when inheritance is unnecessary.','Model Student and Course objects.'],
      ['Advanced Python Practice','Modern Python uses modules, virtual environments, comprehensions and safe automation patterns.','Learn import, packages, comprehensions, JSON and basic testing.','squares = [x*x for x in range(5)]','Never execute untrusted code or blindly run downloaded scripts.','Build a safe local file-organizer project.']
    ]],
    C: ['C', '🔵', [
      ['C Fundamentals','C is a compiled programming language widely used for systems and embedded programming.','Learn source files, main(), compilation and basic syntax.','#include <stdio.h>\nint main(){printf("Hello");}','Compile and test small programs frequently.','Write your first C program.'],
      ['Variables and Types','Variables store typed values.','Learn int, char, float, double and basic constants.','int age = 18;','Choose suitable types and initialize variables.','Create a student data program.'],
      ['Operators','Operators perform calculations and comparisons.','Learn arithmetic, relational, logical and assignment operators.','int total = a + b;','Watch integer division and precedence.','Build a calculator.'],
      ['Conditions','if and switch control decisions.','Learn if, else if, else and switch.','if(score >= 50) printf("Pass");','Use braces consistently.','Create a grade checker.'],
      ['Loops','Loops repeat statements.','Learn for, while and do-while.','for(int i=0;i<5;i++) printf("%d",i);','Ensure loop conditions eventually change.','Print tables and number patterns.'],
      ['Functions','Functions divide programs into reusable pieces.','Learn parameters, return types and prototypes.','int add(int a,int b){return a+b;}','Keep functions small and focused.','Create a math utility library.'],
      ['Arrays and Strings','Arrays store related values and strings are character arrays.','Learn indexing, traversal and basic string functions.','int marks[5] = {70,80,90,60,75};','Respect array boundaries.','Calculate average marks.'],
      ['Pointers','Pointers store memory addresses and enable indirect access.','Learn &, *, pointer variables and safe pointer use.','int x=10; int *p=&x;','Never dereference an invalid pointer.','Trace pointer changes on paper.'],
      ['Structures and Files','Structures group related fields and files provide persistent storage.','Learn struct and basic file I/O.','struct Student { char name[30]; int score; };','Check file-open results before reading or writing.','Store student records locally.'],
      ['Safe C Practice','C gives low-level control but requires careful memory and input handling.','Learn bounds checking, initialization, compiler warnings and debugging.','Use fgets for safer text input instead of unsafe input patterns.','Compile with warnings and fix them.','Review a small program for memory-safety mistakes.']
    ]],
    'C++': ['C++', '⚙️', [
      ['C++ Fundamentals','C++ is a compiled language supporting procedural, object-oriented and generic programming.','Learn main(), headers, variables and compilation.','std::cout << "Hello";','Use modern C++ practices where possible.','Build a hello-world program.'],
      ['Variables and Types','C++ provides primitive and rich standard-library types.','Learn int, double, char, bool, string and auto.','std::string name = "CyberLab";','Prefer clear types and initialization.','Create a profile program.'],
      ['Conditions and Loops','Control flow enables decisions and repetition.','Learn if, switch, for, while and range-based for.','for(int x : values) std::cout << x;','Keep conditions readable.','Build a menu-driven program.'],
      ['Functions','Functions organize reusable behavior.','Learn parameters, return values, references and overloading.','int add(int a,int b){return a+b;}','Use const references for suitable read-only objects.','Create utility functions.'],
      ['Classes and Objects','Classes combine data and behavior.','Learn constructors, methods, public and private members.','class User { public: User(){} };','Encapsulate state instead of exposing everything.','Create a Course class.'],
      ['Inheritance','Inheritance models an is-a relationship.','Learn base classes, derived classes and virtual functions.','class Admin : public User {};','Prefer composition when it better represents the design.','Model Student and Admin roles.'],
      ['STL Containers','The Standard Template Library provides useful containers.','Learn vector, map, set and algorithms.','std::vector<int> scores;','Use standard containers rather than reinventing them.','Store and sort course scores.'],
      ['Pointers and Smart Pointers','C++ supports pointers and safer ownership abstractions.','Learn references, unique_ptr and shared_ptr concepts.','auto p = std::make_unique<int>(10);','Prefer RAII and smart pointers for ownership.','Create a small ownership example.'],
      ['Files and Exceptions','Programs can work with files and handle exceptional conditions.','Learn streams, ifstream, ofstream and try/catch.','std::ifstream file("notes.txt");','Check stream state and handle errors.','Create a local notes manager.'],
      ['Modern C++ Practice','Modern C++ emphasizes safety, clarity and reusable abstractions.','Learn const, range loops, lambdas, RAII and basic templates.','auto square=[](int x){return x*x;};','Keep abstractions understandable for beginners.','Build a small course tracker.']
    ]],
    Java: ['Java', '☕', [
      ['Java Fundamentals','Java is a strongly typed language designed around portability and object-oriented programming.','Learn source files, main(), compilation and JVM concepts.','public class Main { public static void main(String[] a){ System.out.println("Hello"); }}','Understand the difference between javac and java.','Compile a simple program.'],
      ['Variables and Types','Java has primitive types and reference types.','Learn int, double, char, boolean, String and arrays.','int score = 90;','Initialize variables and use suitable types.','Build a marks program.'],
      ['Operators and Conditions','Operators and control statements drive program logic.','Learn arithmetic, comparison, logical operators, if and switch.','if(score >= 50) System.out.println("Pass");','Use braces to improve readability.','Create a grade checker.'],
      ['Loops','Loops repeat statements.','Learn for, while, do-while and enhanced for.','for(int i=0;i<5;i++) System.out.println(i);','Avoid accidental infinite loops.','Create a multiplication table.'],
      ['Methods','Methods provide reusable behavior.','Learn parameters, return types, overloading and static methods.','static int add(int a,int b){return a+b;}','Keep methods focused.','Create a calculator class.'],
      ['Classes and Objects','Classes define objects and their behavior.','Learn fields, methods, constructors and object creation.','Student s = new Student();','Use meaningful names and encapsulation.','Create a Student class.'],
      ['OOP Principles','Object-oriented design includes encapsulation, inheritance, polymorphism and abstraction.','Understand when each principle is useful.','class Admin extends User {}','Favor simple designs over unnecessary inheritance.','Model CyberLab user roles.'],
      ['Exception Handling','Exceptions represent abnormal conditions.','Learn try, catch, finally and checked/unchecked concepts.','try { int x=1/0; } catch(ArithmeticException e) {}','Do not hide errors silently.','Build safe input handling.'],
      ['Collections','Java collections manage groups of objects.','Learn List, Set, Map and iteration.','List<String> courses = new ArrayList<>();','Choose a collection based on the required behavior.','Build a course list.'],
      ['Advanced Java Practice','Modern Java development combines OOP, collections, file handling and testing.','Learn interfaces, enums, file I/O and basic unit-testing concepts.','interface Printable { void print(); }','Keep dependencies and APIs understandable.','Build a console-based course manager.']
    ]],
    JavaScript: ['JavaScript', '📜', [
      ['JavaScript Basics','JavaScript adds behavior and interactivity to web pages.','Learn variables, values, statements and console output.','const name = "CyberLab"; console.log(name);','Use const by default and let when reassignment is needed.','Print a welcome message.'],
      ['Data Types and Operators','JavaScript has primitive and object values.','Learn string, number, boolean, null, undefined, arrays and objects.','const score = 90;','Use strict equality === for predictable comparisons.','Build a simple score calculator.'],
      ['Conditions and Loops','Control flow lets programs make decisions and repeat tasks.','Learn if, switch, for, while and for...of.','if(score >= 50){ console.log("Pass"); }','Keep nested logic simple.','Create a grade checker.'],
      ['Functions','Functions package reusable behavior.','Learn declarations, expressions, arrow functions and parameters.','const add = (a,b) => a+b;','Use descriptive names and small functions.','Create utility functions.'],
      ['DOM Manipulation','The DOM represents the page as objects JavaScript can read and change.','Learn querySelector, textContent, classList and createElement.','document.querySelector("h1").textContent = "CyberLab";','Prefer textContent for plain text instead of injecting HTML.','Build a lesson toggle.'],
      ['Events','Events allow pages to react to user actions.','Learn click, input, submit and event listeners.','button.addEventListener("click", showMessage);','Prevent unwanted form submission when needed.','Create an interactive quiz button.'],
      ['Arrays and Objects','Arrays store ordered values and objects model structured data.','Practice map, filter, find and object properties.','courses.filter(c => c.active);','Avoid mutating data unnecessarily.','Create a course catalog.'],
      ['Async JavaScript','Modern web apps often work with asynchronous data.','Learn promises, async/await and fetch at a high level.','const data = await fetch("data.json");','Handle loading and error states.','Load a local JSON course list.'],
      ['Web Storage','Browser storage can keep non-sensitive client-side state.','Learn localStorage and sessionStorage.','localStorage.setItem("theme","dark");','Never store passwords or sensitive secrets in browser storage.','Save a harmless theme preference.'],
      ['Secure JavaScript Practice','Secure frontend code validates inputs, avoids unsafe HTML injection and protects secrets.','Learn input handling, CSP concepts and safe DOM updates.','element.textContent = userInput;','Frontend security does not replace server-side authorization.','Audit a small demo page for unsafe patterns.']
    ]],
    SQL: ['SQL', '🗄️', [
      ['SQL Fundamentals','SQL is used to work with relational databases.','Learn tables, rows, columns and basic queries.','SELECT * FROM students;','Select only the fields you need.','Create a simple students table.'],
      ['SELECT and WHERE','SELECT retrieves data and WHERE filters rows.','Learn column selection, aliases and conditions.','SELECT name, score FROM students WHERE score >= 50;','Use clear filters and test assumptions.','Write five filtering queries.'],
      ['ORDER BY and LIMIT','Queries can sort and restrict returned rows.','Learn ascending, descending and result limits.','SELECT * FROM students ORDER BY score DESC LIMIT 5;','Use deterministic ordering when results matter.','Find the top five scores.'],
      ['INSERT UPDATE DELETE','SQL can add, change and remove records.','Learn DML and safe conditions.','UPDATE students SET score=85 WHERE id=1;','Always review WHERE clauses before updates or deletes.','Practice on a disposable database.'],
      ['Keys and Constraints','Constraints protect data quality.','Learn primary keys, foreign keys, unique, not null and check.','PRIMARY KEY (id)','Use constraints to prevent invalid data.','Design a course enrollment schema.'],
      ['JOINs','JOIN combines related rows across tables.','Learn INNER JOIN, LEFT JOIN and relationships.','SELECT s.name,c.title FROM students s JOIN courses c ON s.course_id=c.id;','Understand cardinality before joining.','Join students to courses.'],
      ['Aggregate Functions','Aggregates summarize groups of data.','Learn COUNT, SUM, AVG, MIN, MAX and GROUP BY.','SELECT course_id, AVG(score) FROM results GROUP BY course_id;','Check whether null values affect your calculation.','Calculate course averages.'],
      ['Subqueries and Views','Queries can be composed and reusable views can simplify reporting.','Learn subqueries and CREATE VIEW conceptually.','SELECT * FROM students WHERE score > (SELECT AVG(score) FROM students);','Keep complex queries readable.','Find above-average students.'],
      ['Transactions','Transactions group database changes into consistent units.','Learn commit, rollback and atomicity concepts.','BEGIN; UPDATE ...; COMMIT;','Use transactions when multiple changes must succeed together.','Simulate a course enrollment transaction.'],
      ['SQL Security','Secure database use includes parameterized queries, least privilege and careful error handling.','Learn SQL injection concepts and why prepared statements help.','Use placeholders rather than concatenating user input into SQL.','Do not test injection against systems you do not own or have permission to assess.','Review a fictional vulnerable query and rewrite it safely.']
    ]],
    'Web Security': ['Web Security', '🌐', [
      ['HTTP and HTTPS','HTTP uses requests and responses; HTTPS adds TLS protection.','Learn methods, status codes, headers and TLS basics.','GET /index.html','HTTPS protects data in transit but not broken application logic.','Inspect a request on a permitted demo site.'],
      ['Cookies and Sessions','Cookies can store identifiers that help applications maintain sessions.','Learn Secure, HttpOnly and SameSite concepts.','Set secure cookie attributes in server-side code.','Never put passwords in cookies or URLs.','Design a secure fictional session flow.'],
      ['Authentication','Authentication verifies identity.','Learn passwords, MFA, recovery and session expiration.','Use a strong password plus MFA for sensitive accounts.','Protect recovery mechanisms as carefully as login.','Create a secure login checklist.'],
      ['Authorization','Authorization determines what an identity may access.','Learn roles, object-level access and least privilege.','A student should not access another student\'s private record.','Enforce authorization server-side.','Create an authorization matrix.'],
      ['Input Validation','Applications should validate data against expected formats and limits.','Learn allowlists, length limits and type checks.','Email fields should be validated as email-like input.','Validation is not a substitute for output encoding.','Design validation rules for a registration form.'],
      ['XSS Concepts','Cross-site scripting can occur when untrusted data is interpreted as executable browser content.','Learn reflected, stored and DOM-based concepts at a defensive level.','Use safe DOM APIs such as textContent for plain text.','Use output encoding and framework protections.','Review a harmless demo for unsafe HTML insertion.'],
      ['SQL Injection Concepts','SQL injection occurs when untrusted input changes the meaning of a database query.','Learn why string concatenation is risky and parameters are safer.','Use prepared statements with placeholders.','Practice only in intentionally vulnerable local labs.','Rewrite a fictional unsafe query using parameters.'],
      ['CSRF Concepts','Cross-site request forgery abuses a user\'s authenticated browser session.','Learn same-site cookies, CSRF tokens and origin checks.','A state-changing form can require a server-generated CSRF token.','Use framework protections where available.','Design a CSRF defense checklist.'],
      ['Security Headers','Security headers help browsers apply safer behavior.','Learn CSP, HSTS, X-Content-Type-Options and frame protections.','Content-Security-Policy can restrict script sources.','Headers must match the application design.','Create a fictional secure-header policy.'],
      ['Secure Development Review','Security should be included throughout the development lifecycle.','Learn threat modeling, code review, dependency updates and logging.','Review an application feature before release.','Fix root causes rather than hiding symptoms.','Perform a security checklist on a demo app.']
    ]],
    'Penetration Testing': ['Penetration Testing', '🎯', [
      ['Scope and Authorization','Penetration testing is an authorized security assessment.','Learn written scope, rules of engagement, exclusions and stop conditions.','A local vulnerable VM can be explicitly included in scope.','Never test public systems without permission.','Write a fictional test authorization.'],
      ['Methodology','A repeatable methodology improves consistency.','Study planning, discovery, validation, reporting and retesting.','Document each phase and its evidence.','Avoid unnecessary impact.','Draw a pentest lifecycle.'],
      ['Asset Discovery','Discovery identifies in-scope systems and applications.','Learn asset inventories and attack-surface concepts.','Use assets supplied by the lab owner.','Keep collection within scope.','Build a fictional asset inventory.'],
      ['Service Assessment','Service assessment examines exposed services in an authorized lab.','Learn ports, service roles and configuration review.','A training VM may expose a web service and SSH service.','Do not probe systems outside scope.','Analyze a supplied service list.'],
      ['Vulnerability Validation','Validation confirms whether a suspected weakness is real without destructive action.','Learn evidence, reproducibility and false positives.','Use harmless proof in a training environment.','Stop if testing could cause damage.','Validate five fictional findings.'],
      ['Web Assessment','Web assessments review authentication, authorization, input handling and configuration.','Learn OWASP-style categories defensively.','Check whether role boundaries work as designed.','Use intentionally vulnerable applications.','Complete a web security checklist.'],
      ['Reporting','Reports translate technical observations into fixes.','Learn title, evidence, impact, remediation and retest fields.','Separate facts from assumptions.','Redact unnecessary sensitive data.','Write a fictional finding.'],
      ['Remediation','Remediation removes or reduces the root cause of a weakness.','Learn patching, configuration changes and secure coding.','A dependency update may resolve a known issue.','Verify that the fix does not break functionality.','Create a remediation plan.'],
      ['Retesting','Retesting verifies the fix.','Test the original condition and relevant edge cases.','A previously denied action should remain denied after a change.','Document residual risk if the fix is incomplete.','Write a retest checklist.'],
      ['Professional Practice','Professional testing requires ethics, communication and evidence handling.','Learn confidentiality, minimal-impact testing and clear communication.','Escalate unexpected critical behavior to the authorized owner.','Protect collected information.','Create a professional tester checklist.']
    ]],
    Cryptography: ['Cryptography', '🔑', [
      ['Cryptography Basics','Cryptography uses algorithms and keys to protect information and verify authenticity.','Learn plaintext, ciphertext, keys and cryptographic goals.','Encryption transforms readable data into protected data.','Do not invent algorithms.','Classify five security scenarios.'],
      ['Symmetric Encryption','Symmetric encryption uses a shared secret key.','Learn key secrecy, performance and authenticated encryption concepts.','A modern AEAD mode can protect confidentiality and integrity.','Protect keys rather than inventing new ciphers.','Design a fictional encrypted backup workflow.'],
      ['Asymmetric Cryptography','Asymmetric systems use public and private keys.','Learn key pairs, encryption concepts and key exchange at a high level.','A public key can be shared while its private key is protected.','Private keys must be carefully managed.','Draw a public/private key diagram.'],
      ['Hashing','Hash functions produce fixed-size digests.','Learn integrity checks, collision resistance and salts.','Hashing is not reversible encryption.','Use modern algorithms and appropriate libraries.','Compare fictional file hashes.'],
      ['Password Storage','Passwords should be stored using password-specific one-way hashing.','Learn salts, work factors and Argon2id concepts.','Each password should use a unique salt.','Never store plaintext passwords.','Design a secure password-storage checklist.'],
      ['Digital Signatures','Digital signatures can provide authenticity and integrity evidence.','Learn signing and verification concepts.','A sender signs data with a private key and a verifier checks with a public key.','Protect private signing keys.','Draw a signing workflow.'],
      ['TLS Concepts','TLS protects application traffic and authenticates servers through certificates.','Learn certificates, trust chains and encrypted sessions.','HTTPS uses TLS.','Certificate validation matters.','Explain a browser HTTPS connection.'],
      ['Key Management','Cryptography depends heavily on correct key handling.','Learn generation, storage, rotation, backup and revocation.','A leaked key can undermine otherwise strong encryption.','Use dedicated secret-management systems in real applications.','Create a fictional key lifecycle.'],
      ['Cryptographic Failures','Security can fail through weak algorithms, bad randomness, poor key storage or incorrect protocol use.','Learn common failure categories.','Using outdated algorithms can reduce security.','Prefer well-reviewed standards.','Review five fictional crypto mistakes.'],
      ['Applied Cryptography','Good cryptographic engineering uses established protocols and libraries.','Learn when to use encryption, hashing, signing and TLS.','Choose a standard library rather than writing primitives yourself.','Test interoperability and error handling.','Design a secure messaging architecture at a high level.']
    ]],
    'Digital Forensics': ['Digital Forensics', '🕵️', [
      ['Forensics Fundamentals','Digital forensics is the disciplined examination of digital evidence.','Learn acquisition, preservation, analysis and reporting.','Use a provided training disk image.','Preserve originals.','Create an evidence-handling checklist.'],
      ['Evidence Integrity','Evidence should remain unchanged and traceable.','Learn hashes, provenance and documentation.','Hash a training image before analysis.','Document every important action.','Create a chain-of-custody example.'],
      ['Disk Images','A disk image is a forensic copy of storage media.','Learn image formats, verification and working copies.','Analyze a copy rather than an original.','Verify acquisition integrity.','Inspect a supplied training image.'],
      ['File System Artifacts','File systems contain metadata and user-created artifacts.','Study timestamps, filenames and directory structures.','A file timestamp can help build a timeline.','Metadata needs context.','Analyze fictional file artifacts.'],
      ['Logs','Logs record system and application events.','Learn authentication, application and system log concepts.','A login event may help establish a timeline.','Synchronize time sources where possible.','Build a fictional event timeline.'],
      ['Browser Artifacts','Browsers can leave history, cache and session-related artifacts.','Learn artifact types and privacy considerations.','Analyze only a supplied lab profile.','Handle personal data carefully.','Create an artifact inventory.'],
      ['Memory Concepts','Memory analysis can reveal volatile system information.','Learn processes, network connections and loaded modules conceptually.','A memory image can preserve a point-in-time view.','Use authorized images only.','List questions a memory investigation might answer.'],
      ['Timeline Analysis','Timelines correlate events across evidence sources.','Learn timestamps, timezone conversion and correlation.','Combine logins, file events and application logs.','One timestamp is not proof of intent.','Build a fictional timeline.'],
      ['Incident Evidence','Forensics supports incident response by preserving useful evidence.','Learn collection priorities and documentation.','Collect volatile information according to approved procedures.','Do not destroy evidence while investigating.','Create a fictional evidence plan.'],
      ['Forensic Reporting','A report explains methods, evidence, findings and limitations.','Learn clear, reproducible documentation.','Separate observations from interpretations.','State uncertainty when evidence is incomplete.','Write a short fictional forensic report.']
    ]],
    'Data Analyst': ['Data Analyst', '📈', [
      ['Data Analysis Basics','Data analysis turns raw information into useful insights.','Learn questions, data sources, cleaning, analysis and communication.','A student score dataset can reveal averages and trends.','Start with a clear question.','Write three questions for a course dataset.'],
      ['Data Types','Data can be numeric, categorical, text or temporal.','Learn variables, dimensions and measures.','Course completion percentage is numeric.','Choose types carefully.','Classify ten sample fields.'],
      ['Data Cleaning','Cleaning handles missing, duplicate and inconsistent values.','Learn validation, standardization and missing-data decisions.','Convert inconsistent date formats to one standard.','Never silently change important records.','Clean a small fictional dataset.'],
      ['Spreadsheets','Spreadsheets provide accessible analysis tools.','Learn formulas, filters, sorting and charts.','=AVERAGE(B2:B20)','Document formulas and assumptions.','Build a course-progress sheet.'],
      ['SQL for Analysts','SQL retrieves and summarizes database data.','Learn SELECT, WHERE, JOIN, GROUP BY and aggregates.','SELECT course, AVG(score) FROM results GROUP BY course;','Validate joins to avoid duplicate counting.','Create five analysis queries.'],
      ['Statistics Basics','Statistics helps describe and compare data.','Learn mean, median, mode, range and standard deviation concepts.','Median can be useful when extreme values exist.','Do not confuse correlation with causation.','Calculate summary statistics.'],
      ['Visualization','Charts communicate patterns and comparisons.','Learn bar, line, scatter and distribution charts.','Use a line chart for change over time.','Avoid misleading scales.','Create three charts for fictional course data.'],
      ['Dashboards','Dashboards combine metrics and visualizations for monitoring.','Learn KPIs, filters and layout.','A learning dashboard can show completion and quiz scores.','Avoid too many metrics.','Design a CyberLab analytics dashboard.'],
      ['Data Storytelling','Analysis should lead to a clear explanation and action.','Learn context, evidence, limitations and recommendations.','Explain why course completion changed.','Separate facts from assumptions.','Write a short data story.'],
      ['Analyst Project','Combine cleaning, analysis, visualization and communication.','Work through a complete fictional dataset.','Question → clean → analyze → visualize → explain.','Keep reproducible notes.','Build a student-learning analytics mini project.']
    ]],
    'Data Science': ['Data Science', '🧠', [
      ['Data Science Overview','Data science combines statistics, programming, domain knowledge and data to answer questions and build models.','Learn the data-science lifecycle.','Question → data → cleaning → analysis → modeling → evaluation.','A model is only as useful as its data and objective.','Draw a lifecycle diagram.'],
      ['Python for Data','Python provides tools for data manipulation and analysis.','Learn lists, dictionaries and the idea of tabular data libraries.','Represent a small dataset as records.','Keep transformations reproducible.','Create a small dataset in Python.'],
      ['Data Preparation','Preparation converts raw data into usable features.','Learn missing values, encoding, scaling and train/test splits.','Separate training and evaluation data before modeling.','Avoid data leakage.','Prepare a fictional dataset.'],
      ['Exploratory Analysis','EDA looks for distributions, patterns and anomalies.','Learn summary statistics and visual exploration.','Compare score distributions by course.','Investigate unusual values before removing them.','Perform a fictional EDA.'],
      ['Statistics','Statistics supports inference and uncertainty.','Learn probability, distributions, sampling and hypothesis concepts.','A sample estimates characteristics of a larger population.','Report uncertainty where appropriate.','Practice probability exercises.'],
      ['Machine Learning Basics','Machine learning learns patterns from data for prediction or description.','Learn supervised and unsupervised learning.','A classifier predicts a category from features.','Define the target and success metric clearly.','Classify five ML scenarios.'],
      ['Model Evaluation','Evaluation measures whether a model generalizes.','Learn accuracy, precision, recall, F1 and regression error concepts.','Accuracy can be misleading on imbalanced data.','Choose metrics based on the problem.','Compare fictional model metrics.'],
      ['Feature Engineering','Features represent useful information for a model.','Learn transformations and domain-driven features.','Convert a date into month or weekday features.','Avoid leaking future information.','Design features for course completion prediction.'],
      ['Responsible Data Science','Models can reproduce bias and privacy risks.','Learn fairness, privacy, transparency and documentation.','Evaluate whether a dataset represents its intended population.','Do not infer sensitive traits unnecessarily.','Create a responsible-ML checklist.'],
      ['Data Science Project','A project combines the full workflow.','Plan a question, dataset, analysis, model and report.','Document assumptions and limitations.','Reproducibility matters.','Build a fictional CyberLab learning analytics project.']
    ]],
    'Database & SQL': ['Database & SQL', '🗃️', [
      ['Database Fundamentals','A database stores organized information for reliable retrieval and management.','Learn tables, records, fields and database engines.','A course platform may store users, courses and progress.','Design around clear data requirements.','Draw a simple schema.'],
      ['Relational Model','Relational databases organize related data into tables.','Learn rows, columns and relationships.','Users and courses can be linked through enrollment records.','Avoid unnecessary duplication.','Design three related tables.'],
      ['Keys','Keys identify records and relationships.','Learn primary and foreign keys.','student_id can uniquely identify a student.','Use stable identifiers.','Add keys to a fictional schema.'],
      ['Constraints','Constraints enforce data quality.','Learn NOT NULL, UNIQUE, CHECK and foreign keys.','score CHECK can limit valid ranges.','Constraints reduce invalid data.','Design five constraints.'],
      ['Normalization','Normalization reduces unnecessary duplication.','Learn first, second and third normal-form concepts.','Separate repeated course information into its own table.','Do not over-normalize simple reporting tables without reason.','Normalize a fictional schema.'],
      ['SQL Queries','SQL retrieves and changes data.','Learn SELECT, INSERT, UPDATE and DELETE.','SELECT name FROM users;','Use WHERE carefully for modifications.','Write CRUD queries.'],
      ['Joins and Aggregation','Joins combine related data and aggregation summarizes it.','Learn JOIN, GROUP BY and HAVING.','Average quiz score by course is an aggregate.','Validate row counts after joins.','Build a progress report query.'],
      ['Transactions','Transactions preserve consistency across multiple operations.','Learn commit, rollback and atomicity.','Enrollment plus progress initialization can be one transaction.','Use transactions where partial updates would be harmful.','Model an enrollment transaction.'],
      ['Indexes','Indexes can speed up searches at storage cost.','Learn why indexes help selective queries.','An index on email can speed up lookup.','Index based on real query patterns.','Choose indexes for a fictional workload.'],
      ['Database Security','Database security includes least privilege, parameterized queries, backups and auditing.','Learn roles, permissions and SQL-injection defenses.','Application accounts should receive only required permissions.','Protect backups and credentials.','Create a database-security checklist.']
    ]],
    'Cloud Computing': ['Cloud Computing', '☁️', [
      ['Cloud Basics','Cloud computing provides on-demand computing resources over networks.','Learn compute, storage, networking and managed services.','A web application can use hosted compute and storage.','Cloud does not remove the need for security.','Map a simple cloud architecture.'],
      ['Service Models','Cloud services are commonly grouped as IaaS, PaaS and SaaS.','Understand responsibility differences.','A managed database reduces some infrastructure work.','Responsibilities vary by provider and service.','Classify ten service examples.'],
      ['Deployment Models','Cloud deployments can be public, private, hybrid or multi-cloud.','Learn trade-offs and architecture choices.','A hybrid design can connect local systems to cloud services.','Document trust boundaries.','Design a fictional deployment.'],
      ['Virtualization','Virtualization abstracts computing resources into virtual machines and other workloads.','Learn hypervisors, images and isolation.','A VM can run a training Linux environment.','Keep lab images updated and isolated.','Create a VM architecture diagram.'],
      ['Containers','Containers package applications and dependencies.','Learn images, containers and registries conceptually.','A container can package a web service and its dependencies.','Use trusted images and scan dependencies.','Design a simple containerized app.'],
      ['Cloud Storage','Cloud storage provides scalable data storage services.','Learn object, block and file storage.','Object storage suits many static assets.','Apply least privilege and encryption.','Choose storage types for five scenarios.'],
      ['Cloud Networking','Cloud networks connect compute, storage and users.','Learn virtual networks, subnets, routing and security groups.','Public and private subnets can separate workloads.','Minimize exposed services.','Draw a secure virtual network.'],
      ['Cloud Identity','Identity and access management controls cloud resources.','Learn users, roles, policies and least privilege.','A deployment account should have only required permissions.','Protect privileged identities with MFA.','Create a fictional IAM matrix.'],
      ['Cloud Monitoring','Monitoring helps detect failures and security events.','Learn logs, metrics, alerts and audit trails.','Unexpected privilege changes can trigger an alert.','Centralize important logs.','Design five cloud alerts.'],
      ['Cloud Security Project','Cloud security combines identity, network, data and monitoring controls.','Build a defense-in-depth architecture.','Protect a fictional CyberLab deployment.','Review configuration continuously.','Create a cloud security checklist.']
    ]],
    'AI Fundamentals': ['AI Fundamentals', '🤖', [
      ['What is AI?','Artificial intelligence refers to systems designed to perform tasks that normally require aspects of human intelligence.','Learn AI, machine learning and deep-learning relationships.','A classifier can categorize an input.','AI systems depend on data and objectives.','Classify ten examples as AI or non-AI.'],
      ['Machine Learning','Machine learning learns patterns from examples.','Learn supervised, unsupervised and reinforcement-learning concepts.','A model can learn from labeled course data.','Training data quality matters.','Classify five ML problems.'],
      ['Data for AI','Data provides the examples used to train and evaluate models.','Learn labels, features, datasets and splits.','Separate training and test data.','Avoid leakage between datasets.','Design a fictional dataset.'],
      ['Neural Networks','Neural networks are layered mathematical models inspired loosely by biological networks.','Learn inputs, weights, layers, activation and training concepts.','A simple network maps inputs to an output.','Models can overfit.','Draw a neural-network diagram.'],
      ['Model Training','Training adjusts model parameters to reduce an objective.','Learn epochs, loss and optimization at a high level.','Training data is used to fit the model.','Monitor validation performance.','Explain training versus validation.'],
      ['Evaluation','Evaluation checks whether a model works on unseen data.','Learn accuracy, precision, recall and error concepts.','Use a held-out test set for final evaluation.','Choose metrics based on the task.','Compare fictional models.'],
      ['Generative AI','Generative AI creates new text, images, code or other content from learned patterns.','Learn prompts, tokens, context and limitations.','A language model predicts likely token sequences.','Generated content can be incorrect.','Write a safe prompt for a study assistant.'],
      ['AI Safety','AI systems can create privacy, bias, security and reliability risks.','Learn data minimization, human review and access controls.','Sensitive data should not be sent to an unapproved service.','Verify important generated information.','Create an AI safety checklist.'],
      ['AI in Cybersecurity','AI can assist with detection, classification and analysis.','Learn use cases and limitations.','A model may help prioritize alerts for human review.','AI output should not be treated as unquestionable evidence.','Design a human-in-the-loop alert workflow.'],
      ['AI Project','Combine problem definition, data, model choice, evaluation and responsible use.','Plan a small fictional AI application.','Question → data → model → evaluation → monitoring.','Document assumptions and limitations.','Design a CyberLab learning assistant at a high level.']
    ]]
  };

  function escapeHTML(s) {
    return String(s).replace(/[&<>\"']/g, m => ({'&':'&amp;','<':'&lt;','>':'&gt;','\"':'&quot;',"'":'&#39;'}[m]));
  }

  function openExpandedCourse(name) {
    const course = C[name];
    if (!course) return;
    let old = document.getElementById('stage22RemainingModal');
    if (old) old.remove();
    const modal = document.createElement('div');
    modal.id = 'stage22RemainingModal';
    modal.innerHTML = `<div class="s22r-backdrop"></div><div class="s22r-box"><button class="s22r-close" aria-label="Close">×</button><div class="s22r-head"><span class="s22r-icon">${course[1]}</span><div><h2>${escapeHTML(course[0])}</h2><p>Stage 22 • Beginner → Intermediate → Advanced</p></div></div><div class="s22r-progress"><span id="s22rProgressText">Lesson 1 of ${course[2].length}</span><div><i id="s22rProgressBar"></i></div></div><div id="s22rLesson"></div><div class="s22r-actions"><button id="s22rPrev">← Previous</button><button id="s22rNext">Next →</button></div></div>`;
    document.body.appendChild(modal);
    const style = document.createElement('style');
    style.id = 'stage22RemainingStyle';
    if (!document.getElementById(style.id)) {
      style.textContent = '#stage22RemainingModal{position:fixed;inset:0;z-index:99999}.s22r-backdrop{position:absolute;inset:0;background:rgba(0,0,0,.78);backdrop-filter:blur(5px)}.s22r-box{position:relative;width:min(900px,92vw);max-height:90vh;overflow:auto;margin:5vh auto;background:#101923;color:#fff;border:1px solid rgba(0,255,150,.3);border-radius:20px;padding:26px;box-shadow:0 20px 70px rgba(0,0,0,.5)}.s22r-close{position:absolute;right:16px;top:12px;background:none;border:0;color:#fff;font-size:32px;cursor:pointer}.s22r-head{display:flex;gap:16px;align-items:center;padding-right:35px}.s22r-icon{font-size:3rem}.s22r-head h2{margin:0 0 5px}.s22r-head p{margin:0;opacity:.7}.s22r-progress{margin:20px 0}.s22r-progress>div{height:8px;background:rgba(255,255,255,.1);border-radius:99px;overflow:hidden;margin-top:8px}.s22r-progress i{display:block;height:100%;width:0;background:#00ff96;transition:.25s}.s22r-card{padding:22px;border-radius:16px;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08)}.s22r-card h3{margin-top:0}.s22r-section{margin:16px 0}.s22r-label{font-weight:700;color:#00ff96;display:block;margin-bottom:5px}.s22r-example{background:#071019;border-left:3px solid #00ff96;padding:12px;white-space:pre-wrap;font-family:monospace;overflow:auto}.s22r-actions{display:flex;justify-content:space-between;gap:12px;margin-top:18px}.s22r-actions button{padding:11px 18px;border:0;border-radius:10px;cursor:pointer}.s22r-actions button:disabled{opacity:.4;cursor:not-allowed}@media(max-width:600px){.s22r-box{width:94vw;margin:3vh auto;padding:18px}.s22r-icon{font-size:2.2rem}}';
      document.head.appendChild(style);
    }
    const lessons = course[2]; let i = 0;
    const lessonEl = document.getElementById('s22rLesson');
    const textEl = document.getElementById('s22rProgressText');
    const bar = document.getElementById('s22rProgressBar');
    const prev = document.getElementById('s22rPrev');
    const next = document.getElementById('s22rNext');
    function render(){ const l=lessons[i]; textEl.textContent=`Lesson ${i+1} of ${lessons.length}`; bar.style.width=((i+1)/lessons.length*100)+'%'; lessonEl.innerHTML=`<div class="s22r-card"><h3>${i+1}. ${escapeHTML(l[0])}</h3><div class="s22r-section"><span class="s22r-label">Definition</span>${escapeHTML(l[1])}</div><div class="s22r-section"><span class="s22r-label">Core Concepts</span>${escapeHTML(l[2])}</div><div class="s22r-section"><span class="s22r-label">Example</span><div class="s22r-example">${escapeHTML(l[3])}</div></div><div class="s22r-section"><span class="s22r-label">Advanced Technique / Best Practice</span>${escapeHTML(l[4])}</div><div class="s22r-section"><span class="s22r-label">Practice Task</span>${escapeHTML(l[5])}</div></div>`; prev.disabled=i===0; next.textContent=i===lessons.length-1?'Finish ✓':'Next →'; }
    prev.onclick=()=>{if(i>0){i--;render()}}; next.onclick=()=>{if(i<lessons.length-1){i++;render()}else{modal.remove()}}; modal.querySelector('.s22r-close').onclick=()=>modal.remove(); modal.querySelector('.s22r-backdrop').onclick=()=>modal.remove(); render();
  }
  window.openExpandedCourse = openExpandedCourse;

  function enableCards(){
    document.querySelectorAll('#courses .dashboard-course').forEach(card=>{
      const h=card.querySelector('h4'); const button=card.querySelector('button'); if(!h||!button)return;
      const name=h.textContent.trim(); if(!C[name])return;
      button.disabled=false; button.textContent='Start →'; button.onclick=()=>openExpandedCourse(name);
      button.removeAttribute('data-coming-soon');
    });
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',enableCards); else enableCards();
})();
