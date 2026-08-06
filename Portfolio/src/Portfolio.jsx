import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import './portfolio.css';

import profileImg from './assets/mee/mee/Parvathy.png';
import aboutimage from './assets/mee/mee/aboutimg.jpg';
import projectBanner from './assets/mee/mee/Savira.png';
import heroImg from './assets/hero.png';

import {
  FaBars,
  FaTimes,
  FaPhone,
  FaLinkedin,
  FaGithub,
  FaChevronUp,
  FaSun,
  FaMoon,
  FaGraduationCap,
  FaExchangeAlt,
  FaBook,
  FaDownload,
} from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import {
  SiPython,
  SiDjango,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiBootstrap,
  SiMysql,
  SiGithub as SiGithubIcon,
  SiPostman,
} from 'react-icons/si';

const titles = ['Python Full Stack Developer', 'Django Developer', 'Web Application Developer'];

const skillItems = [
  { name: 'Python', icon: SiPython},
  { name: 'Django', icon: SiDjango},
  { name: 'HTML', icon: SiHtml5},
  { name: 'CSS', icon: SiCss3},
  { name: 'JavaScript', icon: SiJavascript},
  { name: 'Bootstrap', icon: SiBootstrap},
  { name: 'MySQL', icon: SiMysql },
  { name: 'Git & GitHub', icon: SiGithubIcon },
  { name: 'REST API Development', icon: SiPostman},
];

const achievements = [
  {
    title: 'Python Full Stack Development Certification',
    description: 'Completed comprehensive Python Full Stack training with real-world projects and hands-on development.',
  },
  {
    title: 'Savira Beauty Launch Project Completion',
    description: 'Delivered a modern beauty salon booking and management website with Django and Bootstrap.',
  },
];

const aboutCards = [
  {
    icon: FaGraduationCap,
    title: 'Education',
    text: 'Economics graduate with a solid foundation in business analysis and quantitative thinking.',
  },
  {
    icon: FaExchangeAlt,
    title: 'Career Transition',
    text: 'Transitioning into software development with passion for building scalable web applications.',
  },
  {
    icon: FaBook,
    title: 'Continuous Learning',
    text: 'Committed to mastering Django, Python, HTML, CSS, Bootstrap, JavaScript, SQL and REST APIs.',
  },
];

const Portfolio = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('home');
  const [dark, setDark] = useState(true);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [typedTitle, setTypedTitle] = useState('Python Full Stack Developer');
  const [titleIndex, setTitleIndex] = useState(0);
  const [letterIndex, setLetterIndex] = useState(0);
  const [typing, setTyping] = useState(true);
  const revealRefs = useRef([]);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 700);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
  }, [dark]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal');
            const id = entry.target.getAttribute('id');
            if (id) setActive(id);
          }
        });
      },
      { threshold: 0.25 }
    );

    revealRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!typing) return;
      const currentTitle = titles[titleIndex];
      if (letterIndex < currentTitle.length) {
        setTypedTitle(currentTitle.slice(0, letterIndex + 1));
        setLetterIndex((prev) => prev + 1);
      } else {
        setTyping(false);
        setTimeout(() => {
          setLetterIndex(0);
          setTitleIndex((prev) => (prev + 1) % titles.length);
          setTyping(true);
        }, 1400);
      }
    }, typing ? 90 : 0);
    return () => clearTimeout(timeout);
  }, [letterIndex, typing, titleIndex]);

  const scrollTo = (id) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const openProject = () => setModalOpen(true);
  const closeProject = () => setModalOpen(false);

  return (
    <div className="site-root">
      {loading && (
        <div className="loader">
          <div className="spinner" />
        </div>
      )}

      <header className="topbar">
        <div className="brand" onClick={() => scrollTo('home')}>
          <img src={profileImg} alt="logo" className="brand-img" />
          <div className="brand-text">
            <div className="brand-name">Parvathy S</div>
            <div className="brand-role">Python Full Stack Developer</div>
          </div>
        </div>

        <nav className={`nav ${menuOpen ? 'open' : ''}`}>
          {['home', 'about', 'skills', 'projects', 'contactsec'].map((section) => (
            <a key={section} className={active === section ? 'active' : ''} onClick={() => scrollTo(section)}>
              {section === 'contactsec' ? 'Contact' : section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          ))}
        </nav>
        <div className="actions">
          <button
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </header>

      <main>
        <motion.section
          id="home"
          className="hero section"
          ref={(el) => (revealRefs.current[0] = el)}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="hero-content">
            <p className="intro">Hi, I'm</p>
            <h1 className="headline">Parvathy S</h1>
            <h2 className="subhead gradient-text">{typedTitle}</h2>
            <p className="lead">
              Economics graduate transitioning into software development with a strong passion for building scalable web applications.
            </p>

            <div className="cta-row">
              <motion.button whileHover={{ y: -3 }} className="btn primary" onClick={() => scrollTo('projects')}>
                View Projects
              </motion.button>
              <motion.button whileHover={{ y: -3 }} className="btn outline" onClick={() => scrollTo('contactsec')}>
                Contact Me
              </motion.button>
            </div>

            <div className="hero-stats">
              {[
                { label: 'Full-Stack Project', value: 'Savira Beauty Launch' },
                { label: '8+ Technologies', value: 'Modern Stack' },
                { label: 'Python Full Stack', value: 'Developer' },
                { label: 'Available for hire', value: 'Freelance & Full time' },
              ].map((item) => (
                <motion.div key={item.label} className="stat-card" whileHover={{ y: -5 }}>
                  <span>{item.value}</span>
                  <p>{item.label}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div className="hero-media" whileHover={{ y: -6 }}>
            <div className="hero-banner">
              <img src={heroImg} alt="hero" className="hero-illustration" />
            </div>
            <div className="profile-glow" />
            <img src={profileImg} alt="Parvathy" className="hero-avatar" />
            <div className="floating-dot dot-1" />
            <div className="floating-dot dot-2" />
            <div className="floating-dot dot-3" />
          </motion.div>
        </motion.section>

        <motion.section
          id="about"
          className="about section"
          ref={(el) => (revealRefs.current[1] = el)}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <div className="section-head">
            <h3>Professional Background</h3>
          </div>
          <div className="about-layout">
            <div className="about-copy">
              <p className="about-description">
                Economics graduate transitioning into software development with a strong passion for building scalable web applications.
                Completed Python Full Stack Development training and developed real-world projects using Django, Python, HTML, CSS, Bootstrap, JavaScript, SQL and REST APIs.
                Passionate about learning new technologies and creating meaningful digital solutions.
              </p>
              <div className="about-cards">
                {aboutCards.map((card) => {
                  const Icon = card.icon;
                  return (
                    <motion.div key={card.title} className="info-card" whileHover={{ y: -6 }}>
                      <div className="info-icon"><Icon /></div>
                      <h4>{card.title}</h4>
                      <p>{card.text}</p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
            <div className="about-photo-frame">
              <img src={aboutimage} alt="About" />
            </div>
          </div>
        </motion.section>

        <motion.section
          id="skills"
          className="skills section"
          ref={(el) => (revealRefs.current[2] = el)}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <div className="section-head">
            <h3>Technical Expertise</h3>
          </div>
          <div className="skills-grid">
            {skillItems.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <motion.div key={skill.name} className="skill-card" whileHover={{ y: -8 }}>
                  <div className="skill-icon"><Icon /></div>
                  <h4>{skill.name}</h4>
                  <div className="skill-progress"></div>
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        <motion.section
          id="projects"
          className="projects section"
          ref={(el) => (revealRefs.current[3] = el)}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <div className="section-head">
            <h3>Featured Work</h3>
          </div>

          <motion.article className="project-featured" whileHover={{ y: -10 }}>
            <div className="project-visual">
              <img src={projectBanner} alt="Savira Beauty Launch" />
            </div>
            <div className="project-details">
              <div className="project-meta">
                <h4>Savira Beauty Launch</h4>
                <p className="project-type">Beauty Salon Booking & Management Website</p>
              </div>
              <p className="project-description">
                A modern beauty salon management platform developed using Django. The application allows users to browse services, book appointments, and interact with the salon through an intuitive and responsive interface.
              </p>
              <div className="project-list">
                <span>Appointment Booking System</span>
                <span>Service Management</span>
                <span>Responsive Design</span>
                <span>Admin Dashboard</span>
                <span>Contact Management</span>
                <span>User-Friendly Interface</span>
              </div>
              <div className="badges project-badges">
                {['Python', 'Django', 'HTML', 'CSS', 'Bootstrap', 'SQLite'].map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
              <div className="project-actions">
                <button className="btn inline" onClick={() => scrollTo('contactsec')}>Contact Me</button>
              </div>
            </div>
          </motion.article>

          <motion.article className="project-featured project-text-only" whileHover={{ y: -10 }}>
            <div className="project-details project-details-text">
              <div className="project-meta">
                <h4>Adysive – Creative Branding & Digital Agency Website</h4>
                <p className="project-type">Full Stack Web Development</p>
              </div>
              <p className="project-description">
                Adysive is a modern creative agency website developed using Django. The website showcases branding, advertising, web development, and digital marketing services through a clean, responsive, and interactive interface.
                It is designed with a professional business-focused layout, smooth scrolling sections, reusable Django templates, and optimized static asset management.
              </p>
              <div className="project-list">
                <span>Fully responsive design</span>
                <span>Single-page scrolling experience</span>
                <span>Modern UI with smooth animations</span>
                <span>Django template inheritance & reusable components</span>
                <span>Service showcase and portfolio sections</span>
                <span>Careers page with job application form</span>
                <span>Contact form with email integration</span>
                <span>Static file optimization with WhiteNoise</span>
                <span>Production deployment configuration</span>
                <span>Clean, scalable project structure</span>
              </div>
              <div className="badges project-badges">
                {['Python', 'Django', 'HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'WhiteNoise', 'Gunicorn'].map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
              <div className="project-actions">
                <button className="btn inline" onClick={() => scrollTo('contactsec')}>Contact Me</button>
              </div>
            </div>
          </motion.article>
        </motion.section>

        <motion.section
          id="achievements"
          className="achievements section"
          ref={(el) => (revealRefs.current[4] = el)}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <div className="section-head">
            <h3>Certifications & Highlights</h3>
          </div>
          <div className="achievements-grid">
            {achievements.map((item) => (
              <motion.div key={item.title} className="achievement-card" whileHover={{ y: -6 }}>
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          id="contactsec"
          className="contact section"
          ref={(el) => (revealRefs.current[5] = el)}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <div className="section-head">
            <h3>Let's Collaborate</h3>
          </div>
          <div className="contact-layout">
            <div className="contact-panel">
              <h4>Reach out for your next development project.</h4>
              <p>
                I am available for new opportunities and freelance work. Send a message to discuss your project or collaboration.
              </p>
              <div className="contact-items">
                <div className="contact-line"><MdEmail />parvathysatheesan78@gmail.com</div>
                <div className="contact-line"><FaPhone /> <span>+91 8714894412</span></div>
                <div className="contact-line"><FaLinkedin /> <a href="https://www.linkedin.com/in/parvathy-s-0287313b5?utm_source=share_via&utm_content=profile&utm_medium=member_android">LinkedIn</a></div>
                <div className="contact-line"><FaGithub /> <a href="https://github.com/parvathy-78">GitHub</a></div>
              </div>
              <div className="contact-links">

              </div>
            </div>
          </div>
        </motion.section>
      </main>

      <footer className="site-footer">
        <div>© {new Date().getFullYear()} Parvathy S — Python Full Stack Developer</div>
      </footer> 
    </div>
  );
};

export default Portfolio;


