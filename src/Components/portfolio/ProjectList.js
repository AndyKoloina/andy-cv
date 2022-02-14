import React, {useState} from 'react'
import {portfolioData} from '../../data/portfolioData'
import Project from './Project'
const ProjectList = () => {
    const radiosData = [
        {id:1 , value:"javascript"},
        {id:2 , value:"react"},
        {id:3 , value:"css"},
        {id:4 , value:"php"}
    ]
    const [projects,setProjects] = useState(portfolioData)
    const [radios,setRadios] = useState(radiosData)
    const [selectedRadio,setSelectedRadio] = useState('javascript')

    const handleRadio = (event) => {
        setSelectedRadio(event.target.value)
    }
    return (
        <div className="portfolioContent">
            <ul className="radioDisplay">
                {
                    radios && radios.map(radio => {
                        return(
                            <li key={radio.id}>
                                <input 
                                    type='radio'
                                    name='radio'
                                    checked={radio.value === selectedRadio}
                                    value={radio.value}
                                    onChange={handleRadio}
                                />
                                <label htmlFor={radio.value}>{radio.value}</label>
                            </li>
                        )
                    })
                }
            </ul>
            <div className="projects">
                {
                    projects && 
                    projects
                        .filter(item => item.languages.includes(selectedRadio))
                        .map(item => {
                        return (
                            <Project
                                key={item.id}
                                item={item}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ProjectList