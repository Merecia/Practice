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
        elementWidth: '135px',
        speed: '1s',
        margin: '20px',
        containerWidth: '445px',
        padding: '25px'
    }

    function getIdeaComponent(idea) {

        return (
            <Idea
                key={idea.id}
                category={idea.category}
                text={idea.text}
                width={idea.width}
                margin={idea.margin}
                padding={idea.padding}
            />
        )

    }

    function output() {

        // return data.map(idea => {

        //     if (idea.id === activeIdeaIndex) return getIdeaComponent(idea)

        //     else return getIdeaComponent({ id: [idea.id], text: [idea.text] })

        // })

        return data.map(idea => {

            if (idea.id == 1) return getIdeaComponent({
                id: [idea.id],
                text: [idea.text],
                margin: `0px ${config.margin} 0px -40px`,
                width: config.elementWidth,
                padding: config.padding
            })

            else if (idea.id == activeIdeaIndex) return getIdeaComponent({
                id: [idea.id],
                text: [idea.text],
                category: [idea.category],
                margin: `0px ${config.margin} 0px 0px`,
                width: config.elementWidth,
                padding: config.padding
            }) 

            else return getIdeaComponent({
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
        )

        setActiveIdeaIndex( activeIdeaIndex - 1)

    }

    function rightArrowClick() {
        
        setPosition( 
            position
            - parseInt(config.elementWidth)
            - parseInt(config.margin)
            - 2 * parseInt(config.padding)
        )

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