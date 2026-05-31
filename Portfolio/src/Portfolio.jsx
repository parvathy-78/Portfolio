import React, { useState } from 'react';
import './portfolio.css';

import profileImg from './assets/mee/mee/Parvathy.png';
import aboutimage from './assets/mee/mee/aboutimg.jpg';

import { FaBars, FaTimes, FaPhone, FaLinkedin, FaGithub } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const Portfolio = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  const getcontact = () => {
    document.getElementById("contactsec").scrollIntoView({
      behavior: "smooth"
    });
  };

  return (
    <div className='body'>

      <div className='main'>

        <h2 className='name'>Parvathy S</h2>

        <div
          className='menu-icon'
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

        <div className={`navbar ${menuOpen ? 'active' : ''}`}>
          <a href='#home'>Home</a>
          <a href='#about'>About</a>
          <a href='#skills'>Skills</a>

          <button onClick={getcontact} className='btn'>
            Contact Me
          </button>
        </div>

      </div>

      <div className='home' id='home'>

        <div className='content1'>
          <p>Hi, I'm</p>

          <h1 className='me'>Parvathy S</h1>

          <h2 className='text'>Python Full Stack Developer</h2>

          <h5>
            I specialize in building scalable web applications with
            Python and modern web technologies.
          </h5>

          <button onClick={getcontact} className='btn1'>
            Contact Me
          </button>
        </div>

        <img
          src={profileImg}
          alt="Parvathy"
          className='pic'
        />

      </div>

      <div className='mainabout' id='about'>

        <h1 className='about'>About Me</h1>

        <p className='abouttext'>
          I'm a passionate Full Stack Developer with experience in
          building responsive web applications.
          I enjoy turning ideas into real-world projects using React,
          HTML, CSS and Python.
        </p>

        <p className='abouttext'>
          As a fresher, I am eager to learn new tools and improve my
          problem-solving abilities through real-world projects.
          I look forward to opportunities where I can grow as a developer
          and contribute to meaningful applications.
        </p>

        <img
          src={aboutimage}
          alt="About"
          className='pic2'
        />

      </div>

      <div className='skills' id='skills'>

        <h1 className='skillheading'>My Skills</h1>

        <div className='skillstart'>

          <h2 className='skilhead'>Frontend</h2>

          <div className='skillmain'>
            <div className='myskills'>HTML</div>
            <div className='myskills'>CSS</div>
            <div className='myskills'>JavaScript</div>
            <div className='myskills'>React</div>
          </div>

          <h2 className='skilhead'>Backend</h2>

          <div className='skillmain'>
            <div className='myskills'>Python</div>
            <div className='myskills'>Django</div>
            <div className='myskills'>REST API</div>
          </div>

          <h2 className='skilhead'>Database</h2>

          <div className='skillmain'>
            <div className='myskills'>MySQL</div>
          </div>

        </div>

      </div>

      <div className='contactmain' id='contactsec'>

    <h1 className='contacthead'>Contact Me</h1>

    <h2>Get In Touch</h2>

    <p>
      <b>Have a project or opportunity? Let's connect!</b>
    </p>

      <div className='contact-item'>
        <MdEmail className='contact-icon'/>
        <span>parvathysatheesan78@gmail.com</span>
      </div>

      <div className='contact-item'>
        <FaPhone className='contact-icon'/>
        <span>+91 8714894412</span>
      </div>

      <div className='contact-item'>
        <FaLinkedin className='contact-icon'/>
        <span><a href="https://www.linkedin.com/in/parvathy-s-0287313b5?utm_source=share_via&utm_content=profile&utm_medium=member_android">CLICK HERE</a></span>
      </div>

      <div className='contact-item'>
        <FaGithub className='contact-icon'/>
        <span><a href="https://github.com/parvathy-78">CLICK HERE</a></span>
    </div>
  </div>


  </div>
  );
};

export default Portfolio;


