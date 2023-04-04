import React, { Component } from 'react';
import git from '../Assets/GitHub.svg';
import linked from '../Assets/LinkedIn.svg';
import Fade from 'react-reveal/Fade';
import './Styles/about.css';
class About extends Component {
    state = {  } 
    render() { 
        return (
            <>
                <div id = "aboutMe" >
                <Fade duration = {2000}><div className='about-desc col-lg-7'>
                            <div className='title-logo'>
                                    <div className='logos'>
                                        <a target={'_blank'} href = {"https://github.com/cttub"}><img src= {git}/></a>
                                        <a target={'_blank'} href = {"https://www.linkedin.com/in/cttub/"}><img src= {linked}/></a>
                                    </div>
                                        <p className='heading purple-text about-title'>About Me</p>  
                            </div> 
                            <p className='paragraph about-text'>Currently, I am employed as a <b>WordPress Developer</b> at <b>Digital Medicine Society</b>, while also operating as a part-time freelance developer. 
                                In my freelance work, I <b>collaborate with small businesses</b> to offer solutions that <b>elevate their customer base</b>.</p>
                            <button className='green-btn'>See my experience</button>
                    </div></Fade>
                    <Fade right duration = {2100}><div className='picture col-lg-4 orange-bg'>

                    </div></Fade>
                </div>
            </>
        );
    }
}
 
export default About;