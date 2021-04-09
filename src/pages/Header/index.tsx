import React from 'react'
import { Container, BackgroundImage, Logo } from './style'
import backgroundImage from '../../assets/image/backgroundHeader.png'
import logo from '../../assets/image/logo.png'

function Header () {
    return (
        <Container>
            <BackgroundImage src={ backgroundImage } alt="background" />
            <Logo src={ logo } alt="logo" />
        </Container>
    )
}

export default Header