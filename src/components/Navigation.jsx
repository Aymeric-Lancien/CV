import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <div className="sidebar">
      <div className="id">
        <div className="idContent">
          <img src="./media/Aymeric-profile.jpg" alt="profil-pic"/>
          <h3>Aymeric Lancien</h3>
        </div>
      </div>
      <div className="navigation">
        <ul>
          <li>
            <NavLink exact to="/" activeClassName="navActive">
              <i className="fa fa-home"></i>
              <span>Accueil</span>
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/knowledges" activeClassName="navActive">
              <i class="fa fa-book"></i>
              <span>Compétences</span>
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/portfolio" activeClassName="navActive">
              <i className="fa fa-image"></i>
              <span>Portfolio</span>
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/contact" activeClassName="navActive">
              <i className="fa fa-address-book"></i>
              <span>Contact</span>  
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="socialNetwork">
        <ul>
          <li>
            <a href="https://www.linkedin.com/in/aymeric-lancien-058b40204/" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin"></i></a>
          </li>
          <li>
            <a href="https://github.com/Aymeric-Lancien" target="_blank" rel="noopener noreferrer"><i className="fa fa-github"></i></a>
          </li>
        </ul>
        <div className="signature">
          <p>Aymeric Lancien - 2021</p>
        </div>
      </div>
    </div>
  );
};

export default Navigation;