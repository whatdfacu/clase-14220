import React, { Component } from 'react'
import CartWidget from './CartWidget'

export default class navBar extends Component {
    render() {
        return (
            <>
            <link
                rel="stylesheet"
                href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
                integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
                crossOrigin="anonymous"
            />
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
