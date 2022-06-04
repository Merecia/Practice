import React from 'react'
import style from './App.module.scss'

import Layout from './Layout/Layout'
import FreshIdeas from './components/FreshIdeas/FreshIdeas'
import MyIdeas from './components/MyIdeas/MyIdeas'
import Achievements from './components/Achievements/Achievements'
import Table from './components/Table/Table'
import Buttons from './components/Buttons/Buttons'

function App() {

    return (

        <div className={style.App}>

            <Layout>

                <FreshIdeas />

                <MyIdeas />

                <Achievements />

                <Table />

                <Buttons/>

            </Layout>
            
        </div>

    )

}

export default App