import React, {useContext} from 'react'
import style from './Card.module.scss'

import { MyIdeasContext, CompletedIdeasContext } from '../../context/context'

function Card ({ category, text, context, width, margin, padding}) {

    const isActive = category !== undefined

    const classes = [style.Idea]

    if (isActive) classes.push(style.Idea__active)

    else classes.push(style.Idea__inactive)

    const {myIdeas, setMyIdeas} = useContext(MyIdeasContext)

    const {completedIdeas, setCompletedIdeas} = useContext(CompletedIdeasContext)

    function getLastId (data) {

        if (data.length === 0) return 0

        return data[data.length - 1].id
    }

    function onClickHandler () {

        if (isActive) {

            if (context === 'FIRST_SECTION') {

                let data = []

                if (myIdeas !== null) data = [...myIdeas]
                
                const lastId = getLastId(data)

                data.push({id: lastId + 1, text: text, category: category})

                setMyIdeas(data)
            }

            else if (context === 'SECOND_SECTION') {

                let data = []

                if (completedIdeas !== null) data = [...completedIdeas]

                const lastId = getLastId(data)

                data.push({id: lastId + 1, text: text, category: category})

                setCompletedIdeas(data)
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