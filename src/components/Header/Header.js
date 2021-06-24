import React from 'react'
import "./Header.css"
import { Image } from 'semantic-ui-react'

function Header() {
    return (
        <div className="Header">
            <Image src={ 'https://practical-booth-a6ed96.netlify.app/images/logo.gif' } alt='Logo de Design Dimensions' className='Imagen'/>
        </div>
    )
}

export default Header
