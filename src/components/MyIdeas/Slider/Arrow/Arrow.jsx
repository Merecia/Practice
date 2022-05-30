import React from 'react'

import style from './Arrow.module.scss'

import arrowLeft from './images/arrow-left.png'
import arrowRight from './images/arrow-right.png'

function Arrow ( { direction, onClick, disabled } ) {

    let arrow

    if (direction === 'left') arrow = arrowLeft

    else if (direction === 'right') arrow = arrowRight

    return (
        <button className = {style.Arrow} onClick = {onClick} disabled = {disabled} >

            <img src={arrow} alt='arrow'/>
            
        </button>
    )

}

export default Arrow