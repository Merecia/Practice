import React, {useState, useEffect} from 'react'
import Arrow from './Arrow/Arrow'

import Card from '../../Card/Card'
import style from './Slider.module.scss'

function Slider ( {data} ) {

    const [activeIdeaIndex, setActiveIdeaIndex] = useState(2)
    const [position, setPosition] = useState(0)
    const [leftArrowDisabled, setLeftArrowDisabled] = useState(true)
    const [rightArrowDisabled, setRightArrowDisabled] = useState(false)

    const config = {
        elementWidth: '175px',
        speed: '1s',
        margin: '20px',
        padding: '25px'
    }

    config.containerWidth = 3 * ( 2 * parseInt(config.padding) + parseInt(config.elementWidth) + 2) 
    + 2 * parseInt( config.margin )

    /* 
    Берём ширину каждого элемента слайдера с учётом внутренних отступов и границ, 
    каждая из которых имеет ширину 1px. Умножаем это число на 3, поскольку одновременно
    на экране может быть максимум 3 элемента слайдера. Прибавляем отступы между элементами
    слайдера. Получаем минимальную ширину контейнера, который может вместить 3 элемента слайдера.
    */

    function getCardComponent(idea) {

        return (
            <Card
                key={idea.id}
                category={idea.category}
                text={idea.text}
                context="SECOND_SECTION"
                width={idea.width}
                margin={idea.margin}
                padding={idea.padding}
            />
        )

    }

    function output() {

        return data.map(idea => {

            if (idea.id === activeIdeaIndex) return getCardComponent({
                id: idea.id,
                text: idea.text,
                category: idea.category,
                margin: `0px ${config.margin} 0px 0px`,
                width: config.elementWidth,
                padding: config.padding
            }) 

            else return getCardComponent({
                id: [idea.id],
                text: [idea.text],
                margin: `0px ${config.margin} 0px 0px`,
                width: config.elementWidth,
                padding: config.padding
            })

        })

    }

    function leftArrowClick() {

        setPosition( 
            position
            + parseInt(config.elementWidth)
            + parseInt(config.margin)
            + 2 * parseInt(config.padding)
            + 2 // учитываем границы, которые имеют ширину 1px
        )

        setActiveIdeaIndex( activeIdeaIndex - 1)

    }

    function rightArrowClick() {
        
        setPosition( 
            position
            - parseInt(config.elementWidth)
            - parseInt(config.margin)
            - 2 * parseInt(config.padding)
            - 2 // учитываем границы, которые имеют ширину 1px
        )

        setActiveIdeaIndex( activeIdeaIndex + 1)

    }

    useEffect(() => {

        if (activeIdeaIndex === 1) 
            setLeftArrowDisabled(true)

        if (activeIdeaIndex > 1) 
            setLeftArrowDisabled(false)

        if ( activeIdeaIndex < data.length )  
            setRightArrowDisabled(false)

        if ( activeIdeaIndex === data.length ) 
            setRightArrowDisabled(true)

    }, [activeIdeaIndex, data.length])

    return (

        <div className={style.Slider}>

            <Arrow
                direction='left'
                onClick={leftArrowClick}
                disabled={leftArrowDisabled}
            />

            <div className={style.Container} style = {{width: config.containerWidth}}>

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