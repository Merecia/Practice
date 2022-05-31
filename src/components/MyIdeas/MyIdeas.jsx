import React, { useContext} from 'react'
import style from './MyIdeas.module.scss'

import Slider from './Slider/Slider'

import {MyIdeasContext} from '../../context/context'

function MyIdeas() {

    const {myIdeas} = useContext(MyIdeasContext)

    return (

            <div className={style.MyIdeas}>

                <h1 className={style.Title}> Ideas in my list </h1>

                <Slider data={myIdeas} />

            </div>
            
    )

}

export default MyIdeas

