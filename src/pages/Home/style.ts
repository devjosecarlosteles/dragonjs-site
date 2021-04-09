import styled from 'styled-components'

const Container = styled.div`
    display: flex;

    flex-direction: column;

    align-items: center;
    justify-content: center;
`

const Content = styled.div`
    position: absolute;

    top: 330px;
    left: 300px;

    font-size: 1.2rem;

    p {
        margin-top: 30px;

        font-size: 0.9rem;
    }
`

const ButtonsContainer = styled.div`
    display: flex;

    margin-top: 20px;
`

const DownloadNow = styled.button`
    width: 160px;
    height: 30px;

    display: flex;

    align-items: center;
    justify-content: center;

    border: 0;

    background-color: #FF0000;
    color: #FFF;
`

const LearnMore = styled.button`
    width: 160px;
    height: 30px;

    margin-left: 2px;

    display: flex;

    align-items: center;
    justify-content: center;

    border: 0;

    background-color: transparent;

    :hover {
        transition: 0.5s;

        background-color: #CECDCB;
    }
`

export {
    Container, 
    Content, 
    DownloadNow, 
    LearnMore, 
    ButtonsContainer 
}