import React, { useContext } from 'react'
import style from './Achievements.module.scss'

import Achievement from './Achievement/Achievement'

import { CompletedIdeasContext } from '../../context/context'

function Achievements() {

    const { completedIdeas } = useContext(CompletedIdeasContext)

    function getAchievements() {

        let achievements = []

        let categories = new Set(completedIdeas.map(completedIdeas => completedIdeas.category))

        categories.forEach((category, index) => {
            let counter = 0

            completedIdeas.forEach(completedIdea => {

                if (category === completedIdea.category)
                    counter++

            })

            achievements.push({ id: index + 1, category: category, counter: counter })
        })

        return achievements
    }

    function getAchievementComponent(achievement) {

        return (
            <Achievement
                key={achievement.id}
                counter={achievement.counter}
                category={achievement.category}
            />
        )
    }

    function output() {

        const achievements = getAchievements()

        return achievements.map(achievement => getAchievementComponent(achievement))
    }



    return (
        <>

            {

                completedIdeas.length !== 0
                ?
                    <div className={style.Achievements}>
                        <h1 className={style.Title}> Achievements </h1>

                        <div className={style.Container}>
                            {output()}
                        </div>
                    </div>

                : null
            }
            
        </>
    )

}

export default Achievements