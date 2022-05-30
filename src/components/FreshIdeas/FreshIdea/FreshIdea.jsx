import React from 'react'
import style from './FreshIdea.module.scss'

function FreshIdea({category, text}) {

    return (
        <div className = {style.FreshIdea}> 

            <div className = {style.Text}>
                {text}
            </div>

            <div className = {style.Category}>
                {category}
            </div>

        </div>
    )
    
}

export default FreshIdea