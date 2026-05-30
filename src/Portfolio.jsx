import React, { useState } from "react";
import './portfolio.css';

import profileimg from './assets/image/parvathy.png';
import aboutimg from './assets/image/about.png';

import {
  FaBars,
  FaTimes,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub
} from "react-icons/fa";

const Portfolio = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    const getcontact = () => {
        document.getElementById('contactsec').scrollIntoView({
            behavior: "smooth"
        });

        setMenuOpen(false);
    };

return(
    <div className="body">

        {/* Navbar */}

        <div className="main">

            <div>
                <h2 className="name">Parvathy S</h2>
            </div>

            {/* Menu Icon */}

            <div
              className="menuicon"
              onClick={() => setMenuOpen(!menuOpen)}
            >
                {menuOpen ? <FaTimes /> : <FaBars />}
            </div>

            <div className={menuOpen ? "navbar active" : "navbar"}>

                <div><a href="#home">Home</a></div>
                <div><a href="#about">About</a></div>
                <div><a href="#skills">Skills</a></div>

                <button onClick={getcontact} className="btn">
                    Contact Me
                </button>

            </div>

        </div>

        {/* Home */}

        <div className="home" id="home">

            <div className="content1">

                <p>Hi, I'm</p>

                <h1 className="me">Parvathy S</h1>

                <h2 className="text">Python Fullstack Developer</h2>

                <h5>
                    I specialize in building scalable web applications with
                    <br />
                    Python and modern web technologies
                </h5>

                <button onClick={getcontact} className="btn1">
                    Contact Me
                </button>

            </div>

            <img src={profileimg} alt="Parvathy" className="pic"/>

        </div>

        {/* About */}

        <div className="mainabout" id="about">

            <h1 className="about">About Me</h1>

            <p className="abouttext">
                I'am a passionate fullstack developer with experience in building
                responsive web applications.
                <br />
                I love coding and turning ideas into real-world projects using
                technologies like React, HTML, CSS and Python.
            </p>

            <p className="abouttext">
                As a fresher, I am eager to learn new tools and improve my
                problem-solving abilities through real-world projects.
                <br />
                I am looking forward to opportunities where I can grow as a
                developer and contribute to meaningful applications.
            </p>

            <img src={aboutimg} alt="about" className="pic2"/>

        </div>

        {/* Skills */}

        <div className="skills" id="skills">

            <h1 className="skillheading">My Skills</h1>

            <div className="skillstart">

                <h2 className="skillhead">Frontend</h2>

                <div className="skillmain">
                    <div className="myskills">HTML</div>
                    <div className="myskills">CSS</div>
                    <div className="myskills">JavaScript</div>
                    <div className="myskills">React</div>
                </div>

                <h2 className="skillhead">Backend</h2>

                <div className="skillmain">
                    <div className="myskills">Python</div>
                    <div className="myskills">Django</div>
                    <div className="myskills">REST API</div>
                </div>

                <h2 className="skillhead">Database</h2>

                <div className="skillmain">
                    <div className="myskills">MySQL</div>
                </div>

            </div>

        </div>

        {/* Contact */}

        <div className="contactmain" id="contactsec">

            <h1 className="contacthead">Contact Me</h1>

            <h2>Get In Touch</h2>

            <h3>Have a project or opportunity? Let's connect!</h3>

            <div className="contactdetails">

                <div className="contactitem">
                    <FaEnvelope className="contactlogo"/>
                    <span>parvathysatheesan78@gmail.com</span>
                </div>

                <div className="contactitem">
                    <FaPhone className="contactlogo"/>
                    <span>8714894412</span>
                </div>

                <div className="contactitem">
                    <FaMapMarkerAlt className="contactlogo"/>
                    <span>Trivandrum, Kerala</span>
                </div>

                <div className="contactitem">
                    <FaLinkedin className="contactlogo"/>
                    <span><a href="https://www.linkedin.com/in/parvathy-s-0287313b5?utm_source=share_via&utm_content=profile&utm_medium=member_android">CLICK HERE</a></span>
                </div>

                <div className="contactitem">
                    <FaGithub className="contactlogo"/>
                    <span><a href="https://github.com/parvathy-78">CLICK HERE</a></span>
                </div>

            </div>

        </div>

    </div>
)
}

export default Portfolio;