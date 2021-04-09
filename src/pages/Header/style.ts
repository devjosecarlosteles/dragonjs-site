import styled from 'styled-components'

const Container = styled.div`

`

const BackgroundImage = styled.img`
    display: block;

    width: 100vw;
    height: 192px;

    object-position: center 100%;
`

const Logo = styled.img`
    position: absolute;

    top: 120px;
    left: 300px;

    width: 130px;

    border-radius: 2px;
`

export { Container ,BackgroundImage, Logo }