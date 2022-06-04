import React from 'react'
import Button from './Button/Button'
import style from './Buttons.module.scss'

function Buttons() {

    return (
        <div className = {style.Buttons}>

            <Button text="Store to Database" type='STORE' />

            <Button text="Pull from Database" type='PULL' />

        </div>
    )

}

export default Buttons