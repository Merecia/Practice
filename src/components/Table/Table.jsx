import React from 'react'
import style from './Table.module.scss'

function Table() {

    return (
        <div className={style.Table}>

            <table>

                <tr>
                    <th className = {style.TableHeader}> </th>
                    <th className = {style.TableHeader}> Title </th>
                    <th className = {style.TableHeader}> Type </th>
                    <th className = {style.TableHeader}> When </th>
                </tr>

                <tr>
                    <td> 1 </td>
                    <td> Научиться писать книги </td>
                    <td> Образование </td>
                    <td> Только что </td>
                </tr>

            </table>

        </div>

    )

}

export default Table