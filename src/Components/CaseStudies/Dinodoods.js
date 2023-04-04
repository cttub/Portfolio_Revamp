import React, { Component } from 'react';

import DinoDoodsThumbnail from '../../Assets/DinoDoodsThumnail.png';
import CaseStudy from './CaseStudy';
import './casestudies.css';

import prevVid from "../../Assets/DinoDoods/Previous/PreviousDinoDoods.mp4";
import prevVidMobi from "../../Assets/DinoDoods/Previous/ErrorsMobile.mp4";
import VidMobi from "../../Assets/DinoDoods/DinoDoodsMobile.mp4";
import dd from "../../Assets/DinoDoods/dd.png";

import fight from "../../Assets/Fight.gif";

import Fade from 'react-reveal/Fade';

import MyWork from '../Homepage/MyWork';
import BottomNav from './BottomNav';

import CaseNav from './CaseNav';
class DinoDoods extends Component {
    componentDidMount() {
        const feedbackButton = document.getElementById("feedback");
        const organizeButton = document.getElementById("organize");
        const developButton = document.getElementById("develop");
      
        const developSection = document.getElementById("develop-section");
        const organizeSection = document.getElementById("organize-section");
        const feedbackSection = document.getElementById("feedback-section");
      
        const handleButtonClick = (section, button, otherSection1, otherSection2, otherButton1, otherButton2) => {
          if (section.classList.contains("hidden")) {
            section.classList.remove("hidden");
            section.classList.add("shown");
            button.classList.add("active");
      
            otherSection1.classList.remove("shown");
            otherSection2.classList.remove("shown");
            otherSection1.classList.add("hidden");
            otherSection2.classList.add("hidden");
      
            otherButton1.classList.remove("active");
            otherButton2.classList.remove("active");
          }
        }
      
        feedbackButton.addEventListener("click", () => {
          handleButtonClick(feedbackSection, feedbackButton, developSection, organizeSection, developButton, organizeButton);
        });
      
        organizeButton.addEventListener("click", () => {
          handleButtonClick(organizeSection, organizeButton, feedbackSection, developSection, feedbackButton, developButton);
        });
      
        developButton.addEventListener("click", () => {
          handleButtonClick(developSection, developButton, feedbackSection, organizeSection, feedbackButton, organizeButton);
        });
      }
      
       
    state = {  } 
    
    render() { 
        
        return (
            <div id='dinodoods'>
                <CaseNav
                dinodoods = "active-case-btn"/>
                <CaseStudy
                title = "DinoDoods NFT Startup"
                position = "Front-End Web Developer & Designer"
                summary = "Improving company's audience and brand by re-designing and developing their web application."
                date = "(October 2021 - June 2022 |  Full Time)"
                website = {DinoDoodsThumbnail}
                link = "https://www.dinodoods.app/"
                problem = {<div>Our previous developer struggled to meet our team's goals and website requirements, resulting in several criticisms of the website. 
                Specifically, users noted issues with the color palette, lack of mobile-friendly UI/UX, and failure to meet audience tandards in terms of website 
                attraction. Issues were resolved after the departure of our former developer.</div>}
                solution = {<div>As an aspiring developer, I took <b>initiative</b> to be our new web developer and designer. 
                The changes I have made <b>improved user experience</b> and cater towards their needs more <b>efficiently</b>.<br/><br/> Along with my primary duties,
                 I also <b>managed social media</b>, <b>created artwork</b> and <b>animations</b>, and focused on <b>community growth. </b> 
                 I was able to contribute to the company on multiple fronts, ultimately helping to  <b>increase audience reach and attention</b>.</div>}
                firstPoint = "React.js"
                secondPoint = "Procreate"
                thirdPoint = "Figma"
                bgFirst = "purple-bg"
                bgSecond = "red-bg"
                bgThird = "green-bg"
                />
                <div className='steps col-lg-6'>
                    <h2 className='purple-text'><b><u>Steps towards Success</u></b></h2>

                    <div className='step-buttons'>
                        <Fade down duration ={1000}>
                        <button id = "feedback" className='red-btn active'><h3>Feedback</h3></button>
                        <button id = "organize" className='red-btn'><h3>Organize</h3></button>
                        <button  id = "develop" className='red-btn'><h3>Develop</h3></button>
                        </Fade>

                    </div>

                    <div className='step-box'>
                       <Fade duration ={2500}><div  id = "feedback-section" className='box-info feedback'>
                            <p className='info-step paragraph'>
                            Several major components hindered the company's branding, so the primary objective is to <b>ensure website attraction</b> towards our audience. 
                            </p>
                            <br></br>
                            <p className='info-step paragraph'>
                            To achieve this, we <b>analyzed feedback</b> from users to 
                            inform our design and development decisions. It was concluded 
                            that several areas needing improvement were inconsistent color palettes, subpar mobile UX design, and a lack of uniformity.
                            </p>
                            <div className='prev-dd d-lg-flex d-block'>
                               
                                    <video className=' col-lg-8 col-md-10 col-sm-10 d-none d-sm-block' autoPlay muted loop controls id="prevVid">
                                            <source src={prevVid}></source>
                                    </video>
                                    <video className='col-lg-3 col-md-5 d-none d-sm-block' autoPlay muted loop  controls id="prevVid">
                                            <source src={prevVidMobi}></source>
                                    </video>

                            
                                <div></div>

                            </div>

                        </div></Fade> 

                        <Fade duration ={2500}><div id = "organize-section" className='hidden box-info organize'>
                            <div className=''>
                                <p className='info-step paragraph'>
                                The website's layout was designed to <b>prioritize</b> the most important information our audience would seek out. 
                                </p>
                                <br></br>
                                <p className='info-step paragraph'>
                                By incorporating more <b>interactive designs</b> and concepts, we were able to <b>improve</b> the overall user experience. Additionally, the design was 
                                crafted to give off a fun and friendly vibe, which <b>helped users</b> view DinoDoods as a brand they could relate to.
                                </p>
                            </div>
                            <img src = {dd}/>
                        </div></Fade>
                        
                        <Fade duration ={2500}><div id = "develop-section" className='hidden box-info develop'>
                            <div className='col-lg-8'>
                                    <p className='info-step paragraph'>
                                    After completing the design refresh, the final step was to bring it to life. 
                                    </p>
                                    <p className='info-step paragraph'>
                                    Since the previous development had been built with React and Tailwind, 
                                    I was able to <b>expand my knowledge</b> of these DevTools while implementing the new design. 
                                    </p>
                                    <p className='info-step paragraph'>
                                    Throughout the development process, we also made <b>significant improvements to mobile functionality.</b>
                                    </p>
                            </div>
                            <div className='col-lg-5' >
                                <video style={{borderRadius: "20px"}} className='col-lg-12 video-mobi' autoPlay muted loop controls>
                                                <source src={VidMobi}></source>
                                </video>
                            </div>
                        </div></Fade>
                    </div>



                <div className='dd-conclusion'>
                        <h1 className='purple-text'><u><b>Conclusion</b></u></h1>
                        <Fade up duration = {1500}>
                        <div className='force-align'>
                            <p className='paragraph'>
                            This project challenged my <b>development, design, and analytical skills.</b>
                            However, my <b>problem-solving abilities</b> enabled me to take the necessary steps to <b>rebuild and rebrand</b> their web experience successfully. 
                            </p>
                            <br></br>
                            <p className='paragraph'>
                            Despite having no prior experience with React,
                            I <b>developed a high-quality React application</b> through <b>adaptability</b> and <b>resilience</b>. 
                            Additionally, I <b>completed multiple tasks within our timeline</b> to the best of my ability. 
                            Going forward, I'm confident that I can continue to <b>deliver exceptional results</b> and make a significant impact on future projects and companies.
                            </p>
                        </div>
                        </Fade>
                        <br></br>
                        <div className='fight-gif d-none d-lg-block'>
                            <img src = {fight}/>
                        </div>

                    </div>
                   

                </div>
           
                <BottomNav
                dinodoods = "active-case-btn"/>
            </div>
        );
    }
}
 
export default DinoDoods;