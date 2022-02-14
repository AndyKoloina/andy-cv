import React from 'react'

const Hobbies = () => {
  return (
    <div className="hobbies">
        <h3>Intérêts</h3>
        <ul>
            <li className='hobby'>
                <i className='fa fa-futbol'></i>
                <span> FootBall</span>
            </li>
            <li className='hobby'>
                <i className='fas fa-hiking'></i>
                <span> Randonnées</span>
            </li>
            <li className='hobby'>
                <i className='fas fa-music'></i>
                <span> musique</span>
            </li>
           
        </ul>
    </div>
  )
}

export default Hobbies