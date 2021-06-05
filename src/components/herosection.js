import React  from 'react'
import Button from './button';
import '../App.css';
import './herosection.css';
function Herosection () {
           return (
                     <div  className="hero-container">
                               <video  src="/videos/video-1.mp4" autoPlay loop muted></video>
                               <h1>ADVENTURE AWAIT</h1>
                               <p>WHAT ARE YOU WAITING FOR  ?</p>
                               <div className="hero-btns">
                                         <Button
                                         className="btns"
                                         buttonStyle ="btn--outline"
                                         buttonSize="btn--large"
                                         >
                                                   GET STARTED
                                        </Button>
                                        <Button
                                         className="btns"
                                         buttonStyle ="btn--outline"
                                         buttonSize="btn--large"
                                         >
                                                   WATCH TRAILER    <i className="far fa-play--circle" />
                                        </Button>


  
                               </div>

                     </div>
           );
 };
 export default Herosection;