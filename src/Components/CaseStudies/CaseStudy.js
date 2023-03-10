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

             <Fade duration = {2000}><div className='case-heading'>
                <h1 className='heading case-title black-text'>{this.props.title}</h1>

                        <div className='position-container'>
                            <hr className='horizontal col-lg-2 d-lg-block d-none' style = {{marginRight: "5px"}}></hr>
                            <p className='subtitle black-text text-center'>{this.props.position}</p>
                            <hr className='horizontal col-lg-2 d-lg-block d-none' style = {{marginLeft: "5px"}}></hr>
                        </div>
                        <p className='case-summary paragraph black-text'>{this.props.summary}</p>
                        <h5 className='case-summary paragraph purple-text'><b>{this.props.date}</b></h5>
                </div></Fade>
                
                <div className='case-info'> 
                    <div className='website-image col-lg-5 d-lg-block d-none'>
                        <img className = "case-image col-lg-12" src = {this.props.website}  style={{ objectFit: "cover"}}/>
                        <p className='text-center'>Duration: 2 weeks</p>

                    </div>
                
                    <div className='prob-sol'>
                        <p className='mini-subtitle'>The Problem</p>
                        <p className='case-desc case-description'>{this.props.problem}</p>
                            <br></br>
                        <p className='mini-subtitle'>The Solution</p>
                        <p className='case-desc case-description'>{this.props.solution}</p>
                        <div className='bulletPoints'>
                            <p id='bulletPoint' class = {this.props.bgFirst}>{this.props.firstPoint}</p>
                            <p id='bulletPoint' class = {this.props.bgSecond}>{this.props.secondPoint}</p>
                            <p id='bulletPoint' class = {this.props.bgThird}>{this.props.thirdPoint}</p>
                            <p id='bulletPoint' class = {this.props.bgFourth}>{this.props.fourthPoint}</p>
                        </div>
                    </div>

                </div>


            </div>
        )
    }


}
export default CaseStudy;