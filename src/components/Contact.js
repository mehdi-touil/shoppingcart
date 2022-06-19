import React from "react";
import * as images from "../images/icons";

function Contact() {
 return (
  <div className="envelop">
   <div className="Contactcontainer">
    <h1>Connect With Us</h1>
    <div className="contacticons">
     <div className="contacticon">
      <img width="30px" src={images.github} />
     </div>
     <div className="contacticon">
      <img width="30px" src={images.facebook} />
     </div>
     <div className="contacticon">
      <img width="30px" src={images.twitter} />
     </div>
     <div className="contacticon">
      <img width="30px" src={images.linkedin} />
     </div>
    </div>
   </div>
  </div>
 );
}

export default Contact;
