import React, { Component } from 'react'
import CartWidget from './CartWidget'

export default class navBar extends Component {
    render() {
        return (
            <>
            <h1>Design Dimensions</h1>
            <nav className='nav-principal'>
                <a className='boton' href='.'>Opcion1</a>
                <a className='boton' href='.'>Opcion2</a>
                <a className='boton' href='.'>Opcion3</a>
                <CartWidget/>
            </nav>
            </>
        )
    }
}
