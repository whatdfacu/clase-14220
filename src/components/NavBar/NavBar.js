import React from 'react'
import './NavBar.css'
import { Link } from 'react-router-dom'

function NavBar() {
    return (
        <nav>
            <ul className='NavBar'>
                <Link to='/About' className='Link'>Category</Link>
            </ul>
        </nav>
    )
}

export default NavBar
