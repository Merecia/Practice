import React, { useState } from 'react'
import style from './MyIdeas.module.scss'

import Slider from './Slider/Slider'

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

    return (
        <div className={style.MyIdeas}>

            <h1 className={style.Title}> Ideas in my list </h1>

            <Slider data = {data}/>

        </div>
    )

}

export default MyIdeas

