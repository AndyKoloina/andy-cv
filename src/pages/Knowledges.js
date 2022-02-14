import React from 'react'
import Experience from '../Components/Knowledges/Experience'
import Hobbies from '../Components/Knowledges/Hobbies'
import Languages from '../Components/Knowledges/Languages'
import OtherSKills from '../Components/Knowledges/OtherSKills'
import Navigation from '../Components/Navigation'

const Knowledges = () => {
  return (
    <div className='knowledges'>
      <Navigation />
      <div className="knowledgesContent">
        <Languages />
        <Experience />
        <OtherSKills />
        <Hobbies />
      </div>
    </div>
  )
}

export default Knowledges