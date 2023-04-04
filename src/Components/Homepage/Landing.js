import React, { Component } from 'react';
import Bunny from '../Spline/Bunny';

import Fade from 'react-reveal/Fade';

class Landing extends Component {
    state = {  } 
    render() { 
        return (
            <div id = "Landing">
                <div className='landing-container d-sm-block d-md-flex d-sm-block d-lg-flex'>

                    <div className='landing-info col-lg-8 col-md-6 col-sm-12'>
                            <h1 className='info-heading purple-text'>Christina Portfolio</h1>
                            <p className='info-paragraph'>Highly motivated and dedicated developer seeking to further develop 
                                foundational skills and make a positive impact in the industry.</p>
                            <button className='green-btn'>Learn More</button>
                    </div>
                    <div className='image-container col-lg-4 col-md-6'>
                        <div className='landing-image'>
                            <Bunny />
                        </div>
                    </div>

                </div>
                
            </div>
        );
    }
}
 
export default Landing;