import React, { Component } from 'react';

import image from '../../Assets/Sensations.png';
import CaseStudy from './CaseStudy';
import CaseNav from './CaseNav';

import eye from '../../Assets/eye.svg';
import click from '../../Assets/click.svg';
import profile from '../../Assets/profile.svg';

import BottomNav from './BottomNav.js';
class Sensation extends Component {
    state = {  } 
    render() { 
        return (
            <div id ="sensations">
                <CaseNav
                sensations = "active-case-btn"/>
                <CaseStudy
                title = "Sensations Gentleman’s Club"
                position = "Web Developer & Designer"
                summary = "Improved company’s web presence and recruitment process to enhance clientele"
                date = "(September 2022 - Present | Part Time)"
                website = {image}
                problem = {<div>Before this project, Sensations had no online presence, which limited its ability to attract new customers and grow its clientele.
                 Additionally, the business faced challenges with the application process, which was restricted to in-person forms.
                The owners reached out to me regarding these concerns, which gave me an opportunity to build my skillset and improve their client retention.</div>}
                solution = {<div>Using my React application development skills, I successfully built a platform to showcase what Sensations had to offer. This included information about their entertainers, the drinks they serve, and their various services. 
                <br/><br/>The website format was designed to cater to the intended audience by highlighting the main attraction while 
                providing a <b>seamless user experience</b> across all platforms. Within the first week of publishing, 
                the website also helped Sensations <b>attract over 20 job applicants, providing a more diverse hiring pool</b> for the business.</div>}
                link = "https://www.sensationsgc.club/"
                firstPoint = "React.js"
                secondPoint = "Figma"
                thirdPoint = "Formacade"
                fourthPoint = "Canva"
                bgFirst = "red-bg"
                bgSecond = "red-bg"
                bgThird = "red-bg"
                bgFourth = "red-bg"
                />
                <div className='analytics-sen'>
                    <p className='title'><u>Analytics as of April 3rd 2023</u></p>
                    <div className='analytic-boxes col-lg-6'>
                        <div className='an-box purple-border'>
                            <div className='an-icon'><img src = {eye}/></div>
                            <div className='an-number'><p className='purple-text'><b>2.6K</b></p></div>
                            <div className='an-title'><p className='purple-text'><b>Impressions</b></p></div>
                        </div>
                        <div className='an-box red-border'>
                            <div className='an-icon'><img src = {click}/></div>
                            <div className='an-number'><p className='red-text'><b>500</b></p></div>
                            <div className='an-title'><p className='red-text'><b>Clicks</b></p></div>
                        </div>
                        <div className='an-box green-border'>
                            <div className='an-icon'><img src = {profile}/></div>
                            <div className='an-number'><p className='green-text'><b>70+</b></p></div>
                            <div className='an-title'><p className='green-text'><b>Applicants</b></p></div>
                        </div>
                    </div>  
                </div>
                <BottomNav
                sensations = "active-case-btn"/>
            </div>
        );
    }
}
 
export default Sensation;