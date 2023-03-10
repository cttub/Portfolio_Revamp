import React, { Component } from 'react';

import DinoDoodsThumbnail from '../../Assets/DinoDoodsThumnail.png';
import CaseStudy from './CaseStudy';
class DinoDoods extends Component {
    state = {  } 
    render() { 
        return (
            <div>
                <CaseStudy
                title = "DinoDoods NFT Startup"
                position = "Front-End Web Developer & Designer"
                summary = "Improving company's audience and brand by re-designing and developing their web application."
                date = "(October 2021 - June 2022 |  Full Time)"
                website = {DinoDoodsThumbnail}
                link = "https://www.dinodoods.app/"
                problem = "Our previous developer struggled to meet our team's goals and website requirements, resulting in several criticisms of the website. 
                Specifically, users noted issues with the color palette, lack of mobile-friendly UI/UX, and failure to meet audience tandards in terms of website 
                attraction. Issues were resolved after the departure of our former developer."
                solution = "As an aspiring developer, I took initiative to be our new web developer and designer. 
                The changes I have made improved user experience and cater towards their needs more efficiently."
                firstPoint = "React.js"
                secondPoint = "Procreate"
                thirdPoint = "Figma"
                bgFirst = "purple-bg"
                bgSecond = "red-bg"
                bgThird = "green-bg"
                />
                
            </div>
        );
    }
}
 
export default DinoDoods;