import React from 'react';
import Navigation from "../components/Navigation";

const Contact = () => {
  return (
    <div className="contact">
      <Navigation />
      <div className="contactContent">
        <div className="header">

        </div>
        <div className="contactBox">
          <h1>Contactez-moi</h1>
          <ul>
            <li className="city">
              <i className="fa fa-map-marker"></i>
              <span>Nantes</span>
            </li>
            <li className="phone">
              <i className="fa fa-mobile"></i>
              <span>06 75 60 17 72</span>
            </li>
            <li className="email">
              <i className="fa fa-envelope"></i>
              <span>aymericlancien@hotmail.fr</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;