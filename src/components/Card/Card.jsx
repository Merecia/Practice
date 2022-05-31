import React, {useContext} from 'react'
import style from './Card.module.scss'

import { MyIdeasContext } from '../../context/context'

function Card ({ category, text, context, width, margin, padding}) {

    const isActive = category !== undefined

    const classes = [style.Idea]

    if (isActive) classes.push(style.Idea__active)

    else classes.push(style.Idea__inactive)

    const {myIdeas, setMyIdeas} = useContext(MyIdeasContext)

    const getLastId = data => parseInt( data[data.length - 1].id )

    function onClickHandler () {

        if (isActive) {

            if (context === 'FIRST_SECTION') {

                const data = [...myIdeas]
                
                const lastId = getLastId(data)

                data.push({id: lastId + 1, text: text, category: category})

                setMyIdeas(data)

            }

            else if (context === 'SECOND_SECTION') {
                console.log('Вы нажали на карточку во второй секции')
                console.log(category,text,context, width, margin, padding)
                console.log(myIdeas)
            }

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