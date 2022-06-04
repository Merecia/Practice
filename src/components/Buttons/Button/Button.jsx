import React, { useState } from 'react'
import style from './Button.module.scss'

function Button({ text, type }) {

    const [disabled, setDisabled] = useState(false)

    function getClasses() {

        const classes = [style.Button]

        if (type === 'STORE') classes.push(style.Store)

        if (type === 'PULL') classes.push(style.Pull)

        return classes.join(' ')

    }

    function onClickHandler() {

        if (type === 'STORE') {

            console.log('Вы сохранили в базу данных')

        } else if (type === 'PULL') {

            console.log('Вы записали в базу данных')

        }

        setDisabled(true)
    }

    return (
        <button
            disabled = {disabled}
            onClick={onClickHandler}
            className={getClasses()}>
            {text}
        </button>
    )

}

export default Button