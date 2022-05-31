import React, { useState } from 'react'

import { MyIdeasContext } from '../context/context'
import { CompletedIdeasContext } from '../context/context'
import { FreshIdeasContext } from '../context/context'

import data from '../data/data'

import style from './Layout.module.scss'

function Layout(props) {

    const [myIdeas, setMyIdeas] = useState(data)
    const [completedIdeas, setCompletedIdeas] = useState(null)
    const [freshIdeas, setFreshIdeas] = useState(data)

    console.log(completedIdeas)

    return (

        <div className={style.Layout}>

            <FreshIdeasContext.Provider value={{ freshIdeas, setFreshIdeas }}>

                <MyIdeasContext.Provider value={{ myIdeas, setMyIdeas }}>

                    <CompletedIdeasContext.Provider value={{ completedIdeas, setCompletedIdeas }}>

                        {props.children}

                    </CompletedIdeasContext.Provider>

                </MyIdeasContext.Provider>

            </FreshIdeasContext.Provider>

        </div>

    )

}

export default Layout