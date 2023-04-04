import React, { Component } from 'react';
import './homepage.css';
import LazyLoad from 'react-lazyload';
import {Link} from 'react-router-dom';
import Landing from './Landing';
import MyWork from './MyWork';
import LetsChat from './LetsChat';

import ReactFullpage from '@fullpage/react-fullpage';

const licenseKey = '5OHLK-PXI0J-1K60I-BJ6SI-TOONN';
 
class Homepage extends Component {
    state = {  } 
    render() { 
        return (
                <div> 
                    <LazyLoad>
                    <ReactFullpage
                        licenseKey={licenseKey}
                        scrollingSpeed={1000}
                        sectionsColor={['#Landing', '#About', '#LetsChat']}
                        navigation={true}
                        onLeave={(origin, destination) => {
                            this.setState({ currentSection: destination.index });
                            if (destination.index === 0) {
                                this.setState({ animationClass: '' });
                            } else {
                                this.setState({ animationClass: 'slide-in' });
                            }
                        }}
                        render={({ state, fullpageApi }) => {
                            return (
                                <ReactFullpage.Wrapper>
                                    <div className="section">
                                        <Landing />
                                    </div>
                                    <div className="section">
                                        <MyWork />
                                    </div>
                                    <div className="section">
                                        <LetsChat />
                                    </div>
                
                
                                </ReactFullpage.Wrapper>
                            );
                        }}
                    />
                </LazyLoad>
            </div>
      
        );
    }
}
 
export default Homepage;