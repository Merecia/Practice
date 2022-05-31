import React from 'react'

import Layout from './Layout/Layout'
import FreshIdeas from './components/FreshIdeas/FreshIdeas'
import MyIdeas from './components/MyIdeas/MyIdeas'
import Achievements from './components/Achievements/Achievements'

function App() {

    return (

        <Layout>

            <FreshIdeas />

            <MyIdeas />

            <Achievements/>

        </Layout>

    )

}

export default App