import React, { useContext } from 'react'
import style from './Table.module.scss'

import { CompletedIdeasContext } from '../../context/context'
import Row from './Row/Row'

function Table() {

    const { completedIdeas } = useContext(CompletedIdeasContext)

    function getRowComponent(completedIdea) {

        return (
            <Row
                key={completedIdea.id}
                id={completedIdea.id}
                title={completedIdea.text}
                type={completedIdea.category}
                when={whenTaskCompleted(completedIdea.time)}
            />
        )

    }

    function whenTaskCompleted(time) {
        let when

        let A = time
        let B = new Date().getTime()

        let difference = (B - A) / 1000
        // находим разницу в миллисекундах, переводим в секунды

        const minute = 60
        const hour = minute * 60
        const day = hour * 24
        const week = day * 7
        const month = week * 4
        const year = month * 12

        if (difference < minute) when = 'Just now'
        else if (difference >= minute && difference < hour) when = 'A minute ago'
        else if (difference >= day && difference < week) when = 'Yesterday'
        else if (difference >= week && difference < month) when = 'A week ago'
        else if (difference >= month && difference < year) when = 'A month ago'
        else if (difference >= year) when = 'Later than year ago'

        return when
    }

    let output = () => completedIdeas.map(completedIdea => getRowComponent(completedIdea))

    return (
        <div className={style.Table}>

            <h1 className={style.Title}> Completed challenges </h1>

            <table>

                <thead>

                    <tr>
                        <th> </th>
                        <th> Title </th>
                        <th> Type </th>
                        <th> When </th>
                    </tr>

                </thead>

                <tbody>

                    {output()}
                    
                </tbody>

            </table>

        </div>

    )

}

export default Table