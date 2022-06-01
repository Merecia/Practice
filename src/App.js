import React from 'react'

import Layout from './Layout/Layout'
import FreshIdeas from './components/FreshIdeas/FreshIdeas'
import MyIdeas from './components/MyIdeas/MyIdeas'
import Achievements from './components/Achievements/Achievements'
import Table from './components/Table/Table'

function App() {

    return (

        <Layout>

            <FreshIdeas />

            <MyIdeas />

            <Achievements/>

            <Table />

        </Layout>

    )

}

export default App