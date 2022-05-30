import React from 'react'
import style from './App.module.scss'

import FreshIdeas from './components/FreshIdeas/FreshIdeas'
import MyIdeas from './components/MyIdeas/MyIdeas'

function App() {

    return (
        <div className = {style.App}>
            
            <FreshIdeas/>

            <MyIdeas />

        </div>
    )

}

export default App