import React, {useState} from 'react'
import style from './FreshIdeas.module.scss'

import Idea from '../Idea/Idea'

function FreshIdeas() {

    const data = [
        {
            id: 1,
            category: 'Education',
            text: 'Learn how to fold a paper crane'
        },
    
        {
            id: 2,
            category: 'Busywork',
            text: 'Make a bucket list'
        },

        {
            id: 3,
            category: 'Relaxation',
            text: 'Do something you used to do as a kid'
        },

        {
            id: 4,
            category: 'Music',
            text: 'Listen to your favorite album'
        }
    ]

    const [freshIdeas, setFreshIdeas] = useState(data)
    
    function getIdeaComponent(freshIdea) {
    
        return (
            <Idea
                key = {freshIdea.id}
                category = {freshIdea.category}
                text = {freshIdea.text}
            />
        )
    
    }
    
    function output() {
    
        return freshIdeas.map( freshIdea => getIdeaComponent(freshIdea) )
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