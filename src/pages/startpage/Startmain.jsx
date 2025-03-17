//import videoBg from "../../components/mentalimg/videoBg.mp4";
import React from 'react'
import "./startmain.css";
import startpageimage from './assets/startpageimage.jpg'

const Startmain = () => {
  return (
   <div className="main">
    <link rel="stylesheet" href="startmain.css" />

    <div id="buttons">
        <button className="signup__btn">SIGNUP</button>
        <button className="login__btn">LOGIN</button>
        </div>  
          <div>
        
            <img className="image" src="/public/assets/startpageimage.jpg" alt="mindhaven" />  
            
              </div>
                <div className="aboutus">
                   <h2>
                      <b>About Us</b>
                     </h2>
                   <p>
                Student life's tough, we know. We're here to offer support not judgemnet. Find resources, connect with help, and remember; you're not alone in this.
                 </p>
             <div className="resources">
          <h2><b>Resources</b></h2>
          <p>
            <ul>Free Videos on mental stabilty</ul> <br />
            <ul>Chatting and post feature</ul><br />
            <ul>Free Mental stability test</ul>
          </p>
        </div>
      </div>

   </div>
  )
};

export default Startmain;
