import React from 'react'

import FreshIdeas from './components/FreshIdeas/FreshIdeas'
import MyIdeas from './components/MyIdeas/MyIdeas'

import Layout from './Layout/Layout'

function App() {

    return (

        <Layout>

            <FreshIdeas />

            <MyIdeas />

        </Layout>

    )

}

export default App