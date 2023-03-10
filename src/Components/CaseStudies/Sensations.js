import React, { Component } from 'react';

import image from '../../Assets/Sensations.png';
import CaseStudy from './CaseStudy';
class Sensation extends Component {
    state = {  } 
    render() { 
        return (
            <div>
                <CaseStudy
                title = "Sensations Gentleman’s Club"
                position = "Web Developer & Designer"
                summary = "Improved company’s web presence and recruitment process to enhance clientele"
                date = "(September 2022 - Present | Part Time)"
                website = {image}
                problem = "Before this project, Sensations had no online presence, which limited its ability to attract new customers and grow its clientele.
                 Additionally, the business faced challenges with the application process, which was restricted to in-person forms. 
                The owners reached out to me regarding these concerns, which gave me an opportunity to build my skillset and improve their client retention."
                solution = "Using my React application development skills, I successfully built a platform to showcase what Sensations had to offer. This included information about their entertainers, the drinks they serve, and their various services. 
                The website format was designed to cater to the intended audience by highlighting the main attraction while providing a seamless user experience across all platforms. Within the first week of publishing, the website also helped Sensations attract over 20 job applicants, providing a more diverse hiring pool for the business."
                firstPoint = "React.js"
                secondPoint = "Figma"
                thirdPoint = "Formacade"
                fourthPoint = "Canva"
                bgFirst = "red-bg"
                bgSecond = "red-bg"
                bgThird = "red-bg"
                fourthThird = "red-bg"
                />
                
            </div>
        );
    }
}
 
export default Sensation;