import React from 'react'
import Navigation from '../Components/Navigation'
import { NavLink } from 'react-router-dom'
const NotFound = () => {
  return (
    <div className='notFound'>
      <div className="notFoundContent">
        <h3>Désolé cette page n'éxiste pas !</h3>
        <NavLink to="/">
          <i className='fas fa-home'></i>
          <span> Acceuil</span>
        </NavLink>
      </div>
    </div>
  )
}

export default NotFound