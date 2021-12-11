import React from 'react';
import "./Contact.css";
import { Element } from "react-scroll";

 function Contact() {
    return (
        <Element className = "contact_container" id = "contact">
            <h1>Contact</h1>
            <div className='contacts'>
                <p>
                    Email : <span>deeprakaash@gmail.com</span>                    
                </p>
                <div className="colz">
            <div className="colz-icon">
              <a href="https://github.com/Kanniga1991/">
                <i className="fa fa-github"></i>
              </a>
              <a href="https://www.instagram.com/kannigamanivannan/">
                <i className="fa fa-instagram"></i>
              </a>
              <a href="https://www.twitter.com/Deeprakaash1/">
                <i className="fa fa-twitter"></i>
              </a>
              <a href="https://www.linkedin.com/in/kanniga-m/">
                <i className="fa fa-linkedin"></i>
              </a>
            </div>
          </div>
            </div>
        </Element>
    )
}
export default Contact;
