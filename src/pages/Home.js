import React from 'react'
import Navigation from '../Components/Navigation'

const Home = () => {
  return (
    <div className='home'>
      <Navigation />
      <div className="homeContent">
        <div className="content">
          <h1> Andy Ranaivo</h1>
          <h2> Développeur Front-end</h2>
          <div className="pdf">
            <a href="./media/Andy_Ranaivo.pdf" target='_blank'>Télécharger CV</a>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Home