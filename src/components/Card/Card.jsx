import React, {useContext} from 'react'
import style from './Card.module.scss'

import { MyIdeasContext, CompletedIdeasContext } from '../../context/context'

function Card ({ id, category, text, context, width, margin, padding}) {

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

        console.log(completedIdeas)

        if (isActive) {

            if (context === 'FIRST_SECTION') {

                let myIdeasData = []

                if (myIdeas !== null) myIdeasData = [...myIdeas]
                
                const lastId = getLastId(myIdeasData)

                myIdeasData.push({id: lastId + 1, text: text, category: category})

                setMyIdeas(myIdeasData)
            }

            else if (context === 'SECOND_SECTION') {

                let completedIdeasData = []
                let myIdeasData = []

                if (completedIdeas !== null) 
                    completedIdeasData = [...completedIdeas]

                if (myIdeas !== null)
                    myIdeasData = [...myIdeas]

                const lastId = getLastId(completedIdeasData)

                completedIdeasData.push({id: lastId + 1, text: text, category: category})

                setCompletedIdeas(completedIdeasData)

                let updated = []
                myIdeasData.map(myIdea => {
                    
                    if (myIdea.id === id) myIdea = null

                    return myIdea
                })
                .filter(myIdea => myIdea !== null)
                .forEach( (myIdea, index) => updated.push({
                        id: index + 1, 
                        text: myIdea.text, 
                        category: myIdea.category
                    }
                ))

                setMyIdeas(updated)
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