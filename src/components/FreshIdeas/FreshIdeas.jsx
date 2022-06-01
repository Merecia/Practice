import React, {useContext} from 'react'
import style from './FreshIdeas.module.scss'

import Card from '../Card/Card'

import {FreshIdeasContext} from '../../context/context'

function FreshIdeas() {

    const {freshIdeas} = useContext(FreshIdeasContext)
    
    function getCardComponent(freshIdea) {
    
        return (
            <Card
                key = {freshIdea.id}
                id = {freshIdea.id}
                category = {freshIdea.category}
                text = {freshIdea.text}
                context = "FIRST_SECTION"
            />
        )
    
    }
    
    function output() {
    
        return freshIdeas.map( freshIdea => getCardComponent(freshIdea) )
    }

    return (

        <div className={style.FreshIdeas}>

            <h1 className = {style.Title}> Choose fresh ideas to do </h1>

            <ul className={style.List}>

                { output() }

            </ul>


        </div>
    )

}

export default FreshIdeas