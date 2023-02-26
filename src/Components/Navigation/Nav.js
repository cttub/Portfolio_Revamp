import React, { Component } from 'react';
import logo from '../../Assets/Logo.svg';
import {Link} from 'react-router-dom';

import './Nav.css';

class Nav extends Component {
    state = {  } 
    render() { 
        return (
            <div style = {{width: "100%", marginTop: "20px", position: "fixed"}} id = "NavigationBar">

                <Link id = "logo" style = {{float: "left"}}
                        onClick={() => {
                                    document.querySelector("html").scrollTo(0,0);
                                    }}
                        to = "/"><img style = {{width: "70px"}} src = {logo}/>
                </Link>
                
                <div className='navigationTab red-bg' style={{float: 'right'}}>
                                    
                        <Link style = {{float: "left"}}
                                onClick={() => {
                                            document.querySelector("html").scrollTo(0,0);
                                            }}
                                to = "/About"><p>About</p>
                        </Link>
                        <Link style = {{float: "left"}}
                                onClick={() => {
                                            document.querySelector("html").scrollTo(0,0);
                                            }}
                                to = "/"><p>My Work</p>
                        </Link>
                        <Link style = {{float: "left"}}
                                onClick={() => {
                                            document.querySelector("html").scrollTo(0,0);
                                            }}
                                to = "/"><p>Contact Me</p>
                        </Link>

                </div>
            </div>
        );
    }
}
 
export default Nav;