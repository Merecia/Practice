import React from 'react'
import style from './Idea.module.scss'

function Idea ({category, text}) {

    return (
        <div className = {style.Idea}> 

            <div className = {style.Text}>
                {text}
            </div>

            <div className = {style.Category}>
                {category}
            </div>

        </div>
    )
    
}

export default Idea