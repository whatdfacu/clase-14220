import React, { Component } from 'react'
import CartWidget from '../CartWidget'

export default class navBar extends Component {
    render() {
        return (
            <>
            <h1>Design Dimensions</h1>
            <nav className='container'>
                <a className='boton' href='.'>Opcion1</a>
                <a className='boton' href='.'>Opcion2</a>
                <a className='boton' href='.'>Opcion3</a>
                <a className='boton' href='.'>Opcion3</a>
                <a className='boton' href='.'>Opcion4</a>
                <a className='boton' href='.'>Opcion5</a>
                <CartWidget/>
            </nav>
            </>
        )
    }
}