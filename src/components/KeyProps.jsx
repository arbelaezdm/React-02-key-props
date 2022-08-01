import React from 'react'

export default function keyProps (props) {
    return (
        <div>
            <ul>
                {props.generos.map( (genero, i) => <li key = {genero + i}> {genero} </li> )}
            </ul>
        </div>
    )
}