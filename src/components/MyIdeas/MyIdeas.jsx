import React, { useContext } from 'react'
import style from './MyIdeas.module.scss'

import Slider from './Slider/Slider'
import Card from '../Card/Card'

import { MyIdeasContext } from '../../context/context'

function MyIdeas() {

    const { myIdeas } = useContext(MyIdeasContext)

    return (

        <div className={style.MyIdeas}>

            {
                myIdeas.length !== 0
                    ?
                    <>
                        <h1 className={style.Title}> Ideas in my list </h1>

                        <>
                            {
                                myIdeas.length === 1 
                                ?
                                    < Card
                                        id={myIdeas[0].id}
                                        category={myIdeas[0].category}
                                        text={myIdeas[0].text}
                                        context="SECOND_SECTION"
                                        margin = '0 auto'
                                    />
                                : <Slider data={myIdeas} />
                            }
                        </>

                    </>

                    :
                    <h1 className={style.Title}>
                        List of your ideas is empty now. Click on card please.
                    </h1>
            }

        </div>

    )

}

export default MyIdeas

