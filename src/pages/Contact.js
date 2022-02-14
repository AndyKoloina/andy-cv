import React from 'react'
import Navigation from '../Components/Navigation'
import {CopyToClipboard} from 'react-copy-to-clipboard'
const Contact = () => {
  return (
    <div className='contact'>
      <Navigation />
      <div className="contactContent">
        <div className="header">

        </div>
        <div className="contactBox">
          <h1>Contactez-moi</h1>
          <ul>
            <li>
              <i className='fas fa-map-marker-alt'></i>
              <span>Madagascar</span>
            </li>
            <li>
              <i className="fas fa-mobile-alt"></i>
              <CopyToClipboard text='+261326771411'>
                <span className="clickInput" onClick={() => alert('téléphone copié !')}>
                  +261 32 67 714 11
                </span>
              </CopyToClipboard>
            </li>
            <li>
              <i className="far fa-envelope"></i>
              <CopyToClipboard text='andyranaivo861@gmail.com'>
                <span className="clickInput" onClick={() => alert('E-mail copié !')}>
                  andyranaivo861@gmail.com
                </span>
              </CopyToClipboard>
            </li>
          </ul>
        </div>
        <div className="socialNetwork">
          <ul>
            <a href="https://www.linkedin.com/in/andy-ranaivo-02684112b/" target='_blank' rel='noopener noreferrer'>
              <h4> Linkedin</h4>
              <i className='fab fa-linkedin'></i>
            </a>
            <a href="https://github.com/AndyKoloina" target='_blank' rel='noopener noreferrer'>
              <h4> Github </h4>
              <i className='fab fa-github'></i>
            </a>
          </ul>
        </div>
      </div>
    </div>
    
  )
}

export default Contact