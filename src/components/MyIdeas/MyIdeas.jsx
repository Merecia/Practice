import React, {useState, useEffect} from 'react'
import style from './MyIdeas.module.scss'

import Slider from './Slider/Slider'
import data from '../../data/data'

function MyIdeas() {

    const [myIdeas, setMyIdeas] = useState(data)
    
    return (
        <div className={style.MyIdeas}>

            <h1 className={style.Title}> Ideas in my list </h1>

            <Slider data = {myIdeas}/>

        </div>
    )

}

export default MyIdeas

