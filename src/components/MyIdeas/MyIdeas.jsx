import React, {useState} from 'react'
import style from './MyIdeas.module.scss'

import Idea from '../Idea/Idea'

function MyIdeas() {

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

    const [myIdeas, setMyIdeas] = useState(data)
    const [activeIdeaIndex, setActiveIdeaIndex] = useState(2)
    
    function getIdeaComponent(myIdea) {
    
        return (
            <Idea
                key = {myIdea.id}
                category = {myIdea.category}
                text = {myIdea.text}
            />
        )
    
    }
    
    function output() {

        return myIdeas.map(idea => {

            let object = {}

            if (idea.id === activeIdeaIndex) return getIdeaComponent(idea)

            else {
                object.id = idea.id
                object.text = idea.text
                return getIdeaComponent(object)
            }
        })
        
    }

    return (
        <div className = {style.MyIdeas}> 
            
            <h1 className = {style.Title}> Ideas in my list </h1>

            <ul className = {style.List}>
                { output() }
            </ul>

        </div>
    )

}

export default MyIdeas

