import React from 'react'
import './NavBar.css'
import { Link } from 'react-router-dom'

function NavBar() {
    return (
        <nav>
            <ul className='NavBar'>
                <Link to='/' className='Link'>Home</Link>
                <Link to='/About' className='Link'>About</Link>
                <Link to='/Contact' className='Link'>Contact</Link>
            </ul>
        </nav>
    )
}

export default NavBar
