import React ,{useState} from 'react'
import ProgressBar from './ProgressBar'
const Languages = () => {
    const languagesData = [
        { id: 1, value:'Javascript', xp: 6},
        { id: 2, value:'css', xp: 6},
        { id: 3, value:'Java', xp: 1.8},
        { id: 4, value:'html', xp: 6},
        { id: 6, value:'PHP', xp: 2},
        { id: 7, value:'GraphQL', xp: 2}
    ]
    const FrameworksData = [
        { id: 3, value:'React', xp: 4},
        { id: 4, value:'React Native', xp: 2},
        { id: 6, value:'Redux', xp: 3},
        { id: 7, value:'Vuex', xp: 2},
        { id: 8, value:'JQUERY', xp: 4},
        { id: 9, value:'BOOTSTRAP', xp: 4},
        
    ]
    const [languages,setLanguages] = useState(languagesData)
    const [frameworks,setFrameworks] = useState(FrameworksData)
    return (
        <div className="languagesFrameworks">
            <ProgressBar
               languages ={languages}
               className="languagesDisplay"
               title="languages"
            />
            <ProgressBar
               languages ={frameworks}
               className="frameworksDisplay"
               title="frameworks & bibliothèques"
            />
        </div>
    )
}

export default Languages