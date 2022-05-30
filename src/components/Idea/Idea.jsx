import React from 'react'
import style from './Idea.module.scss'

function Idea ({ category, text, width, margin, padding}) {

    const isActive = category !== undefined

    const classes = [style.Idea]

    if (isActive) classes.push(style.Idea__active)

    else classes.push(style.Idea__inactive)

    return (
        <div className={classes.join(' ')} 
        style = {{
                margin: margin, 
                width: width, 
                padding: padding
            }}
        >

            <div className={style.Text}>
                {text}
            </div>

            {
                isActive ?

                <div className={style.Category}>
                    {category}
                </div>
                
                : null
            }

        </div>
    )

}

export default Idea