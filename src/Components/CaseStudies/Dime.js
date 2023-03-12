import React, { Component } from 'react';
import CaseStudy from './CaseStudy';
import image from '../../Assets/Dime.png';

class Dime extends Component {
    state = {
        
      } 
    render() { 
      
        return (
            <>
            <CaseStudy
                title = "DinoDoods NFT Startup"
                position = "Front-End Web Developer & Designer"
                summary = "Improving company's audience and brand by re-designing and developing their web application."
                date = "(October 2021 - June 2022 |  Full Time)"
                website = {image}
                link = "https://dimesociety.org/"
                problem = {<div>The Digital Medicine Society was seeking someone to handle workload that was previously assigned to a single person, 
                and I became interested in the position as it would be my first full-time job as a professional front-end developer. Given my limited experience, which consisted solely of freelance work, I saw this opportunity as a chance to enhance my skill set
                 and learn on the job. However, I soon discovered that my contributions to the company would surpass my initial expectations.</div>}
                solution = {<div>
                    Although I had no previous experience with the tools used, I was able to <b>quickly learn and adapt</b> to the job's requirements, 
                    enabling me to <b>meet all deadlines</b> without any hindrance. My <b>proficiency in wireframing, design, and HTML/CSS</b> made a significant
                     impact on the team, and my ability to expand my knowledge and be <b>flexible</b> with my skills also proved <b>beneficial</b> for the team.<br/><br/>
                    Additionally, I <b>foster a culture of constructive feedback</b> and <b>take initiative</b> on various projects, contributing to DiMe's success.
                     My colleagues would attest that my <b>strong work ethic and dedication</b> to the team are critical components of my professional identity.
                </div>}
                firstPoint = "React.js"
                secondPoint = "Procreate"
                thirdPoint = "Figma"
                bgFirst = "purple-bg"
                bgSecond = "red-bg"
                bgThird = "green-bg"
                />
            </>
        );
    }
}
 
export default Dime;