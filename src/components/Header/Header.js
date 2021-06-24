import React from 'react'
import "./Header.css"
import { Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div className="Header">
            <Link to='/' className='Link'><Image src={ 'https://practical-booth-a6ed96.netlify.app/images/logo.gif' } alt='Logo de Design Dimensions' className='Imagen'/></Link>
        </div>
    )
}

export default Header
