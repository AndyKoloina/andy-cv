import React from 'react'
import {NavLink} from "react-router-dom"
const Navigation = () => {
  return (
   <div className="sidebar">
      <div className="id">
        <div className="idContent">
          <img src="./media/billGates.jpg" alt="profile" />
          <h3>Andy Ranaivo</h3>
        </div>
      </div>
      <div className="navigation">
        <ul>
          <li>
           <NavLink  to="/" className={(navigationData) => navigationData.isActive ? 'navActive' : null }>
             <i className="fa fa-home"></i>
             <span> Acceuil </span>
           </NavLink>
          </li>
          <li>
           <NavLink  to="/knowledges" className={(navigationData) => navigationData.isActive ? 'navActive' : null }>
             <i className="fa fa-mountain"></i>
             <span> Compétences </span>
           </NavLink>
          </li>
          <li>
           <NavLink  to="/contact" className={(navigationData) => navigationData.isActive ? 'navActive' : null }>
             <i className="fa fa-address-book"></i>
             <span> Contact </span>
           </NavLink>
          </li>
          <li>
           <NavLink  to="/portfolio" className={(navigationData) => navigationData.isActive ? 'navActive' : null }>
             <i className="fa fa-images"></i>
             <span> Portfolio </span>
           </NavLink>
          </li>
        </ul>
      </div>
      <div className="socialNetwork">
        <ul>
          <li>
            <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
          </li>
        </ul>
      </div>
   </div>
  )
}

export default Navigation