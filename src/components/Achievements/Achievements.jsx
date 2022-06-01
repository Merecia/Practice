import React, {useContext} from 'react'
import style from './Achievements.module.scss'

import Achievement from './Achievement/Achievement'

import {CompletedIdeasContext} from '../../context/context'

function Achievements() {

    const {completedIdeas} = useContext(CompletedIdeasContext)

    function getAchievements() {

        let achievements = []

        let categories = new Set( completedIdeas.map(completedIdeas => completedIdeas.category) )

        categories.forEach(category => {
            let counter = 0

            completedIdeas.forEach(completedIdea => {

                if (category === completedIdea.category)
                    counter++

            })

            achievements.push({category: category, counter: counter})
        })

        return achievements
    }

    function getAchievementComponent(achievement) {

        return (
            <Achievement
                counter = {achievement.counter}
                category = {achievement.category}
            />
        )
    }

    function output() {

        const achievements = getAchievements()

        return achievements.map(achievement => getAchievementComponent(achievement))
    }

    

    return (
        <div className = {style.Achievements}>

            { output() }
            
        </div>
    )

}

export default Achievements