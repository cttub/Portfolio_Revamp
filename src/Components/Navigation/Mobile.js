import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import carrot from "../../Assets/carrot.svg";
import carrotBite from "../../Assets/carrot-bite.svg";
import home from "../../Assets/home.svg";
import about from "../../Assets/about.svg";
import myWork from "../../Assets/myWork.svg";
import contact from "../../Assets/contact.svg";
class Mobile extends Component {
    componentDidMount() {
        const carrotBtn = document.getElementById("carrot-btn");
        const mobiNav = document.getElementById("mobi-nav");

        const feed = document.getElementById("feed");
        const shoo = document.getElementById("shoo");

        const img = document.getElementById("carrot-for-bun");
        
        carrotBtn.addEventListener("click", () => {
            handleButtonClick();
          });

          const handleButtonClick = () => {
            if (mobiNav.classList.contains("closed")) {
                mobiNav.classList.remove("closed");
                mobiNav.classList.add("opened");
                feed.classList.add("hidden-text");
                shoo.classList.remove("hidden-text");
                img.src = carrotBite;
            }else{
                mobiNav.classList.remove("opened");
                mobiNav.classList.add("closed");
                feed.classList.remove("hidden-text");
                shoo.classList.add("hidden-text");
                img.src = carrot;
            }
          }
      }
    state = {  } 
    render() { 
        return (
            <div id = "mobile-nav">
                  
                <div className='carrot-top' style={{display: "flex"}}>
                 <button id ="carrot-btn"className='carrot'><img id='carrot-for-bun' style = {{width: "70px"}} src = {carrot}/></button>
                 <p id = "feed" className='green-text '>Feed the Bunnies!</p>
                 <p id = "shoo" className='green-text hidden-text'>Shoo the Bunnies!</p>
                </div>
                     <div id = "mobi-nav" className='bunny-navigation closed'>
                        <ul>
                            <li>
                                <Link className = "nav-bun" style = {{float: "left"}}
                                    onClick={() => {
                                                document.querySelector("html").scrollTo(0,0);
                                                }}
                                    to = "/"><img className='bunny-nav' src = {home}/>
                                </Link>
                            </li>
                            <li>
                            <Link className = "nav-bun" style = {{float: "left"}}
                                onClick={() => {
                                            document.querySelector("html").scrollTo(0,0);
                                            }}
                                to = "/About"><img className='bunny-nav' src = {about}/>
                            </Link>
                            </li>
                            <li>
                            <Link className = "nav-bun" style = {{float: "left"}}
                                onClick={() => {
                                            document.querySelector("html").scrollTo(0,0);
                                            }}
                                to = "/MyWork"><img className='bunny-nav' src = {myWork}/>
                            </Link>
                            </li>
                            <li>
                            <Link className = "nav-bun" style = {{float: "left"}}
                                onClick={() => {
                                            document.querySelector("html").scrollTo(0,0);
                                            }}
                                to = "/Contact"><img className='bunny-nav' src = {contact}/>
                            </Link>
                            </li>
                            <li></li>
                        </ul>
                   
                   


                     </div>
                
            </div>
        );
    }
}
 
export default Mobile;