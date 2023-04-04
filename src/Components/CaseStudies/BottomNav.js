import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class BottomNav extends Component {
    state = {  } 
    render() { 
        return (
            <div className='bottom-navigation d-lg-none'>

                <div>
                    <p style ={{textAlign: "center"}}className='purple-text'><u><b>More Works</b></u></p>
                    <Link className={this.props.dinodoods} onClick={() => { document.querySelector("html").scrollTo(0,0);}} to = "/DinoDoods">
                            <div className='case-nav-btn bottom purple-btn dinodoods'></div>
                    </Link>

                    <Link className={this.props.sensations} onClick={() => { document.querySelector("html").scrollTo(0,0);}} to = "/Sensations">
                            <div className='case-nav-btn bottom red-btn sensations'></div>
                    </Link>

                    <Link className={this.props.dime} onClick={() => { document.querySelector("html").scrollTo(0,0);}} to = "/Dime">
                            <div className='case-nav-btn bottom green-btn dime'></div>
                    </Link>
                </div>
            </div>
        );
    }
}
 
export default BottomNav;