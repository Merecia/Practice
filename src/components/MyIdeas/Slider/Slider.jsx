import React, {useState, useEffect} from 'react'
import Arrow from './Arrow/Arrow'

import Idea from '../../Idea/Idea'
import style from './Slider.module.scss'

function Slider( {data} ) {

    const [activeIdeaIndex, setActiveIdeaIndex] = useState(1)
    const [position, setPosition] = useState(0)
    const [leftArrowDisabled, setLeftArrowDisabled] = useState(true)
    const [rightArrowDisabled, setRightArrowDisabled] = useState(false)

    const config = {
        elementWidth: '300px',
        margin: '30px',
        speed: '1s'
    }

    function getIdeaComponent(myIdea) {

        return (
            <Idea
                key={myIdea.id}
                category={myIdea.category}
                text={myIdea.text}
            />
        )

    }

    function output() {

        return data.map(idea => {

            if (idea.id === activeIdeaIndex) return getIdeaComponent(idea)

            else return getIdeaComponent({ id: [idea.id], text: [idea.text] })

        })

    }

    function leftArrowClick() {

        setPosition( position + ( parseInt(config.elementWidth) + parseInt(config.margin) ) )

        setActiveIdeaIndex( activeIdeaIndex - 1)

    }

    function rightArrowClick() {
        
        setPosition( position - ( parseInt(config.elementWidth) + parseInt(config.margin) ) )

        setActiveIdeaIndex( activeIdeaIndex + 1)

    }

    useEffect(() => {

        const visibleElements = 3

        if (activeIdeaIndex === 1) 
            setLeftArrowDisabled(true)

        if (activeIdeaIndex > 1) 
            setLeftArrowDisabled(false)

        if ( activeIdeaIndex <= (data.length - visibleElements) )  
            setRightArrowDisabled(false)

        if ( activeIdeaIndex > (data.length - visibleElements) ) 
            setRightArrowDisabled(true)

    }, [activeIdeaIndex, data.length])

    return (

        <div className={style.Slider}>

            <Arrow
                direction='left'
                onClick={leftArrowClick}
                disabled={leftArrowDisabled}
            />

            <div className={style.Container}>

                <ul className={style.List} 
                    style = {{
                        transition: config.speed, 
                        transform: `translateX(${position}px)` 
                    }}
                >

                    {output()}

                </ul>

            </div>

            <Arrow
                direction='right'
                onClick={rightArrowClick}
                disabled={rightArrowDisabled}
            />

        </div>

    )

}

export default Slider