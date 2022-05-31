import React from 'react'
import style from './Card.module.scss'

function Card ({ category, text, context, width, margin, padding}) {

    const isActive = category !== undefined

    const classes = [style.Idea]

    if (isActive) classes.push(style.Idea__active)

    else classes.push(style.Idea__inactive)

    function onClickHandler() {

        if (isActive) {

            if (context === 'FIRST_SECTION') 
                console.log('Вы нажали на карточку в первой секции')

            else if (context === 'SECOND_SECTION')
                console.log('Вы нажали на карточку во второй секции')

        }

    }

    return (
        <div className={classes.join(' ')} 
            style = {{
                margin: margin, 
                width: width, 
                padding: padding
            }}
            onClick = {onClickHandler}
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

export default Card