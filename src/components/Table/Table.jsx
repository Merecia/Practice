import React, {useContext} from 'react'
import style from './Table.module.scss'

import {CompletedIdeasContext} from '../../context/context'
import Row from './Row/Row'

function Table() {

    const {completedIdeas} = useContext(CompletedIdeasContext)

    function getRowComponent(completedIdea) {

        return (
            <Row
                id = {completedIdea.id}
                title = {completedIdea.text}
                type = {completedIdea.category}
                when = 'Just now'
            />
        )

    }

    let output = () => completedIdeas.map(completedIdea => getRowComponent(completedIdea))

    return (
        <div className={style.Table}>

            <h1 className = {style.Title}> Completed challenges </h1>

            <table>

                <tr>
                    <th> </th>
                    <th> Title </th>
                    <th> Type </th>
                    <th> When </th>
                </tr>

                {output()}

            </table>

        </div>

    )

}

export default Table