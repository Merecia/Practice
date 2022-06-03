import React from 'react'

function Row({ id, title, type, when }) {

    return (
        <tr>
            <td> {id} </td>
            <td> {title} </td>
            <td> {type} </td>
            <td> {when} </td>
        </tr>
    )

}

export default Row