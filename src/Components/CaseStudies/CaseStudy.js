import React from 'react';
import Fade from 'react-reveal/Fade';
import {Route, Link, BrowserRouter} from 'react-router-dom';

import "./case.css";
class CaseStudy extends React.Component{
    state = {  
    } 
    render(){
        return(
            <div className='caseStudyCard'>

             <Fade duration = {2000}>
             <div  className = "case-image"><img className = "image-logo col-lg-1 col-md-2" src = {this.props.website}  style={{ objectFit: "contain"}}/></div>
                <div className='case-heading'>
                <h1 className='paragraph case-title black-text'>{this.props.title}</h1>

                        <div className='position-container'>
                            <hr className='horizontal col-lg-2 d-lg-block d-none' style = {{marginRight: "5px"}}></hr>
                            <p className='subtitle black-text text-center'>{this.props.position}</p>
                            <hr className='horizontal col-lg-2 d-lg-block d-none' style = {{marginLeft: "5px"}}></hr>
                        </div>
                        <p className='text-center paragraph black-text'>{this.props.summary}</p>
                        <p className='text-center paragraph purple-text'>{this.props.date}</p>
                       <div className='webpage-container'> <p id='bulletPoint' className  = "webpage purple-btn">Visit Webpage</p></div>
                </div></Fade>
                
                <div className='case-info'> 
                    <div className='prob-sol'>
                        <p className='mini-subtitle'>The Problem</p>
                        <p className='case-desc case-description'>{this.props.problem}</p>
                            <br></br>
                        <p className='mini-subtitle'>The Solution</p>
                        <p className='case-desc case-description'>{this.props.solution}</p>
                        
                        <div className='bulletPoints'>
                                <p id='bulletPoint' className = {this.props.bgFirst}>{this.props.firstPoint}</p>
                                <p id='bulletPoint' className = {this.props.bgSecond}>{this.props.secondPoint}</p>
                                <p id='bulletPoint' className = {this.props.bgThird}>{this.props.thirdPoint}</p>
                                <p id='bulletPoint' className = {this.props.bgFourth}>{this.props.fourthPoint}</p>
                        </div>
                      
                    </div>

                </div>


            </div>
        )
    }


}
export default CaseStudy;