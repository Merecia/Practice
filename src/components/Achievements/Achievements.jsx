import React from 'react'
import style from './Achievements.module.scss'

import Achievement from './Achievement/Achievement'

function Achievements() {

    return (
        <div className = {style.Achievements}>

            <Achievement/>
            <Achievement/>
            <Achievement/>
            
        </div>
    )

}

export default Achievements