import React from 'react'
import style from './Achievement.module.scss'

function Achievement({counter, category}) {

    return (
        <div className = {style.Achievement}>
            
            <div className = {style.Circle}>
                {counter}
            </div>

            {category}
        </div>
    )
}

export default Achievement