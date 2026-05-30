import React from 'react'
import './portfolio.css';
import profileImg from './assets/mee/Parvathy.png'
import aboutimage from  './assets/mee/mee/aboutimg.jpg'

const Portfolio = () => {
  const getcontact=()=>{
    document.getElementById("contactsec").scrollIntoView({
    behavior:"smooth"
    })
  }
  return (
    <div className='body'>
     <div className='main'>
         <div><h2 className='name'>Parvathy s</h2></div>
             <div className='navbar'>
             <div><a href='#home'>Home</a></div>
             <div><a href='#about'>About</a></div>
             <div><a href='#skills'>Skills</a></div>
             <button onClick={getcontact} className='btn' ><b>Contact Me</b></button>
         </div>
       </div>
       <div className='home' id='home'>
         <div className='content1'> <p>Hi,I'm</p>
         <h1 className='me'>Parvathy s</h1><br></br>
         <h2 className='text'>Python Full Stack Developer</h2>
         <h5>I specialize in building scalable web applications with<br></br> Python and modern web technologies.</h5><br></br>
         <button className='btn'>View Projects</button>
         <button onClick={getcontact} className='btn1'>Contact Me</button></div>
          <img src={profileImg} alt="Parvathy" className='pic'/>
         </div>
         <div className='mainabout' id='about'>
          <h1 className='about'><b>About Me</b></h1>
          <p className='abouttext'><b>I'm a passionate fullstack developer with experience in building responsive web applications. <br></br>I love coding and turning ideas into real-world projects using technologies like React, HTML, CSS, and Python.</b> </p>
         <p className='abouttext'>.......<br></br><br></br><b>As a fresher, I am eager to learn new tools and improve my<br></br> problem-solving abilities through real-world projects.<br></br> I am looking forward to opportunities where <br></br>I can grow as a developer and contribute<br></br> to meaningful applications.</b></p>
          <img src={aboutimage} alt="aboutimg" className='pic2'/>
         </div>
         <div className='skills' id='skills'>
              <div><h1 className='skillheading'>My Skills</h1></div>
              <div className='skillstart'>
                <h2 className='skilhead'>Frontend</h2>
                <div className='skillmain'>
                  <div className='myskills'><a href=''>HTML</a></div>
                  <div className='myskills'><a href=''>CSS</a></div>
                  <div className='myskills'><a href="">JavaScript</a></div>
                  <div className='myskills'><a href="">React</a></div>
                </div>
                <h2 className='skilhead'>Backend</h2>
                <div className='skillmain'>
                  <div className='myskills'><a href="">Python</a></div>
                  <div className='myskills'><a href="">Django</a></div>
                  <div className='myskills'><a href="">REST API</a></div>
                </div>
                <h2 className='skilhead'>Database</h2>
                <div className='skillmain'>
                  <div className='myskills'><a href="">MySQL</a></div>
                </div>
              </div>
              
         </div>
         <div className='contactmain' id='contactsec'>
          <div ><h1 className='contacthead'>Contact Me</h1></div>
          <div><h2>Get In Touch</h2></div>
          <div><p>Have a project or opportunity? Let's connect!</p></div>
          <div><input type="text" placeholder='Name'/></div>
          <div><input type="email"placeholder='Email' /></div>
          <div><textarea placeholder='Message'></textarea></div>
          <div><button type='submit' className='btn2'>Send Message</button></div>
          <div><h5 className='contdetails'><b>Email:parvathysatheesan78@gmail.com</b></h5></div>
          <div><h5 className='contdetails'><b>Phone: +91 8714894412</b></h5></div>
          <div><h5 className='contdetails'><b>Location: Trivandrum, Kerala</b></h5></div>
          <div><h5 className='contdetails'><b>LinkedIn: <a href="https://www.linkedin.com/in/parvathy-s-0287313b5?utm_source=share_via&utm_content=profile&utm_medium=member_android">CLICK HERE</a></b></h5></div>
          
         </div>
        

    </div>
    

  )
}

export default Portfolio;
