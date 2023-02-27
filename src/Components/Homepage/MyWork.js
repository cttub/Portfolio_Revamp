import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';

import BunnySVG from '../Assets/BunnySVG';

import '../Homepage/homepage.css';
import './workQueue.css';
import '../../App.css';
class MyWork extends Component {
    state = {  } 
    render() { 
        return (
            <div>

                <div className='card-containers d-lg-flex d-md-block'>
                   <div className='bunnyCard'>
                        <div className='container-card'>
                            <Fade up duration = {1500}>
                                <div className='bunnyCardSVG greenBunny'></div>
                                        <div className='button-container'>
                                            <button className='green-btn'>See Case Study</button>
                                        </div>
                            </Fade>   
                        </div> 
                    </div>
                    <div className='bunnyCard'>
                        <div className='container-card'>
                            <Fade up duration = {2000}>
                                <div className='bunnyCardSVG purpleBunny'></div>
                                    <div className='button-container'>
                                        <button className='purple-btn'>See Case Study</button>
                                    </div>
                            </Fade>
                        </div>
                    </div>
                    <div className='bunnyCard'>
                        <div className='container-card'>
                            <Fade up duration = {2000}>
                                <div className='bunnyCardSVG redBunny'></div>
                                    <div className='button-container'>
                                        <button className='red-btn'>See Case Study</button>
                                    </div>
                            </Fade>
                        </div>
                    </div>

                </div>
                
            </div>
        );
    }
}
 
export default MyWork;