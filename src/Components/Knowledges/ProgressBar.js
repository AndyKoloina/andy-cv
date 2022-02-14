import React from 'react'

const ProgressBar = ({className,languages,title}) => {
  return (
    <div className={className}>
        <h3> {title} </h3>
        <div className="years">
            <span>Années d'experiences</span>
            <span> 1 </span>
            <span> 2 </span>
            <span> 3 </span>
            <span> 4 </span>
            <span> 5 </span>
            <span> 6 </span>
        </div>
        <div>
            {
                languages && languages.map(item => {
                    let xpYears = 6;
                    let defaultXP;
                    if (item.xp < 6) {
                        defaultXP = item.xp + 1.35
                    } else {
                        defaultXP = item.xp
                    }
                    let progressBar = (defaultXP) / xpYears * 95 + '%'
                    return (
                        <div key={item.id} className='languagesList'>
                            <li> { item.value}</li>
                            <div className='progressBar' style={{
                                width:progressBar
                            }}></div>

                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default ProgressBar