import React from 'react';

const experience = [
  {
    dates: 'APR 2025 — PRESENT',
    role: 'Senior Technical Specialist II',
    company: 'Alliance Software Inc.',
    location: 'Cebu City, Philippines',
    current: true,
    highlights: [
      'Design and implement scalable backend services and APIs.',
      'Guide technical design, architecture discussions, and peer code reviews.',
      'Mentor developers and help teams deliver maintainable, reliable systems.',
      'Monitor production systems, troubleshoot incidents, and lead root-cause analysis.',
    ],
  },
  {
    dates: 'AUG 2022 — MAR 2025',
    role: 'Senior Developer',
    company: 'Weserv Systems International Inc.',
    location: 'Cebu City, Philippines',
    highlights: [
      'Led mid-level and junior developers delivering system projects using Java, VBA, and Perl.',
      'Created technical system documentation to improve clarity and consistency across projects.',
    ],
  },
  {
    dates: 'DEC 2004 — AUG 2022',
    role: 'Software Engineer',
    company: 'Taiyo Yuden (Philippines), Inc.',
    location: 'Lapu-Lapu City, Philippines',
    highlights: [
      'Led a programming team improving in-house application systems.',
      'Designed SQL tables and optimized stored procedures for better performance.',
      'Resolved issues across the codebase and supported reliable system operations.',
      'Partnered with engineers and maintained technical system documentation.',
    ],
  },
  {
    dates: 'JUN 2004 — AUG 2004',
    role: 'Software Developer',
    company: 'Kees Educational System',
    location: 'Mandaue City, Philippines',
    highlights: [
      'Developed educational software, primarily for English-language learning, using Delphi and MySQL.',
    ],
  },
];

const skillGroups = [
  {
    label: 'Data & databases',
    skills: ['SQL', 'Microsoft SQL Server', 'T-SQL', 'Stored procedures', 'MySQL', 'PostgreSQL', 'Hive', 'Data modeling'],
  },
  {
    label: 'Languages & frameworks',
    skills: ['PowerBuilder', 'Python', 'C# / .NET', 'PHP / Laravel', 'React', 'Java', 'VBA', 'Perl'],
  },
  {
    label: 'Engineering',
    skills: ['Backend development', 'API design', 'Technical leadership', 'Code review', 'System documentation', 'Production support'],
  },
];

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
      <path d="M4.25 10h11.5m-4.5-4.5 4.5 4.5-4.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function App() {
  return (
    <main>
      <header className="topbar">
        <a className="wordmark" href="#home" aria-label="Glicerome Sam Nataño, home">
          <span className="wordmark-mark">GS</span>
          <span>Glicerome Sam Nataño</span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#expertise">Expertise</a>
          <a className="nav-contact" href="mailto:gliceromesam@yahoo.com">Let&apos;s talk <ArrowIcon /></a>
        </nav>
      </header>

      <section className="hero section-wrap" id="home">
        <div className="hero-copy">
          <p className="eyebrow"><span className="status-dot" /> SOFTWARE ENGINEERING · CEBU, PH</p>
          <h1>Building reliable<br />software, <span>together.</span></h1>
          <p className="hero-intro">
            I&apos;m Glicerome Sam Nataño, a software developer and technical lead with 17+ years of experience turning complex challenges into dependable systems.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#experience">Explore my experience <ArrowIcon /></a>
            <a className="button button-quiet" href="/GliceromeSamNatano_20260919-1.pdf" download>Download resume <span aria-hidden="true">↓</span></a>
          </div>
          <div className="hero-meta">
            <span><span className="meta-icon">✳</span> Backend &amp; systems</span>
            <span><span className="meta-icon">✳</span> Team leadership</span>
            <span><span className="meta-icon">✳</span> 17+ years in software</span>
          </div>
        </div>
        <aside className="hero-card" aria-label="Professional summary">
          <div className="card-topline"><span>PROFILE / 001</span><span className="card-orbit">✳</span></div>
          <div className="profile-identity">
            <img className="profile-photo" src="/profile-photo.jpg" alt="Glicerome Sam Nataño" />
            <div>
              <p className="profile-name">Glicerome Sam Nataño</p>
              <p className="card-caption">SENIOR TECHNICAL SPECIALIST II</p>
            </div>
          </div>
          <div className="card-rule" />
          <div className="card-row"><span>Currently</span><strong>Alliance Software Inc.</strong></div>
          <div className="card-row"><span>Based in</span><strong>Cebu City, Philippines</strong></div>
          <div className="card-row"><span>Focus</span><strong>Backend · Architecture · Teams</strong></div>
          <div className="card-bottom"><span>SOFTWARE ENGINEERING</span><span className="availability"><i /> IN ROLE</span></div>
        </aside>
        <div className="hero-index" aria-hidden="true">01 — INTRODUCTION</div>
      </section>

      <section className="about section-wrap section-grid" id="about">
        <div className="section-heading">
          <p className="eyebrow">A LITTLE ABOUT ME</p>
          <h2>Thoughtful engineering.<br /><span>Lasting impact.</span></h2>
        </div>
        <div className="about-content">
          <p className="about-lead">
            I care about the details that make software work well—not just today, but as teams and systems grow.
          </p>
          <p>
            Across more than 17 years in software development, I&apos;ve worked through the full lifecycle: understanding a problem, shaping a technical approach, building and testing a solution, and supporting it in production. I enjoy making complex systems easier to maintain and helping the people around me do their best work.
          </p>
          <div className="stats-row">
            <div><strong>17<span>+</span></strong><span>YEARS IN SOFTWARE</span></div>
            <div><strong>4</strong><span>CAREER CHAPTERS</span></div>
            <div><strong>∞</strong><span>THINGS LEFT TO BUILD</span></div>
          </div>
        </div>
      </section>

      <section className="experience section-wrap" id="experience">
        <div className="section-title-row">
          <div>
            <p className="eyebrow">THE JOURNEY SO FAR</p>
            <h2>Experience<span>.</span></h2>
          </div>
          <span className="section-count">2004 — NOW</span>
        </div>
        <div className="timeline">
          {experience.map((job, index) => (
            <article className={`timeline-item${job.current ? ' current' : ''}`} key={job.company}>
              <div className="timeline-date">{job.dates}</div>
              <div className="timeline-marker"><span /></div>
              <div className="timeline-content">
                <div className="job-heading">
                  <div>
                    <h3>{job.role}</h3>
                    <p className="job-company">{job.company} <span>·</span> {job.location}</p>
                  </div>
                  {job.current && <span className="current-badge">CURRENT ROLE</span>}
                </div>
                <ul>{job.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul>
              </div>
              {index < experience.length - 1 && <span className="timeline-line" aria-hidden="true" />}
            </article>
          ))}
        </div>
      </section>

      <section className="expertise section-wrap section-grid" id="expertise">
        <div className="section-heading">
          <p className="eyebrow">TOOLS OF THE TRADE</p>
          <h2>Experience that<br /><span>connects the dots.</span></h2>
          <p className="expertise-note">A broad foundation across databases, application development, and the practices that keep teams moving.</p>
        </div>
        <div className="skill-groups">
          {skillGroups.map((group, index) => (
            <div className="skill-group" key={group.label}>
              <div className="skill-group-number">0{index + 1}</div>
              <div>
                <h3>{group.label}</h3>
                <div className="skill-list">{group.skills.map((skill) => <span className="skill-chip" key={skill}>{skill}</span>)}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="education section-wrap">
        <div className="education-label">
          <p className="eyebrow">FOUNDATIONS</p>
          <h2>Education<span>.</span></h2>
        </div>
        <div className="education-card">
          <span className="education-year">1999 — 2003</span>
          <div>
            <h3>Bachelor of Science in Computer Science</h3>
            <p>Notre Dame University <span>·</span> Cotabato City, Philippines</p>
          </div>
          <span className="education-symbol" aria-hidden="true">↗</span>
        </div>
      </section>

      <footer className="footer section-wrap" id="contact">
        <p className="eyebrow">HAVE A GOOD CHALLENGE?</p>
        <div className="footer-main">
          <h2>Let&apos;s make<br /><span>it work.</span></h2>
          <div className="footer-contact">
            <p>I&apos;m always glad to connect with people building useful things.</p>
            <a className="email-link" href="mailto:gliceromesam@yahoo.com">gliceromesam@yahoo.com <ArrowIcon /></a>
            <a className="phone-link" href="tel:+639269026255">+63 926 902 6255</a>
          </div>
        </div>
        <div className="footer-bottom">
          <a className="wordmark" href="#home"><span className="wordmark-mark">GS</span><span>Glicerome Sam Nataño</span></a>
          <span>DESIGNED WITH PURPOSE · © {new Date().getFullYear()}</span>
          <a href="#home" className="back-top">BACK TO TOP ↑</a>
        </div>
      </footer>
    </main>
  );
}

export default App;
