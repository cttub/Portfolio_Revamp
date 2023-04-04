import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import dinodoods from '../../Assets/DinoDoodsThumnail.png';
import sen from '../../Assets/sensationsLogo.png';
import dime from '../../Assets/Dime.png';
class CaseNav extends Component {
    state = {  } 
    render() { 
        return (
            <>
            <div id='case-nav' className='d-none d-lg-block'>
                <Link className={this.props.dinodoods} onClick={() => { document.querySelector("html").scrollTo(0,0);}} to = "/DinoDoods">
                        <div className='case-nav-btn purple-btn dinodoods'></div>
                </Link>

                <Link className={this.props.sensations} onClick={() => { document.querySelector("html").scrollTo(0,0);}} to = "/Sensations">
                        <div className='case-nav-btn red-btn sensations'></div>
                </Link>

                <Link className={this.props.dime} onClick={() => { document.querySelector("html").scrollTo(0,0);}} to = "/Dime">
                        <div className='case-nav-btn green-btn dime'></div>
                </Link>

            </div>
            </>
        );
    }
}
 
export default CaseNav;