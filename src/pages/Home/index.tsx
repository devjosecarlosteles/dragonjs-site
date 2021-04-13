import React from 'react'
import { ButtonsContainer, Container,ContainerOs,Content, DownloadNow, LearnMore } from './style'
import Header from '../Header'
import {
    DiLinux,
    DiWindows,
    DiApple
} from 'react-icons/di'

function Home() {
    return (
        <Container>
            <Header/>

            <Content>
                <h1>DragonJS</h1>

                <ContainerOs>
                        <DiWindows/> 
                        <DiLinux/>
                        <DiApple/>
                        <span>- dispovível em todas as plataformas.</span>
                </ContainerOs>

                <p>DragonJS tem a intenção de ser totalmente gratuíta, para que todos possam ter acesso.</p>
                <p>Cansado de digitar centenas de linhas de código? Com o Dragon basta arrastar seus elementos<br/>
                pela tela e seu site é criado em alguns cliques, mas não esquente a cabeça você ainda vai ter acesso<br/>
                a todo o código fonte, praticidade sem perder a liberdade!</p>

                <ButtonsContainer>
                    <DownloadNow>Baixar Agora</DownloadNow>
                    <LearnMore>Saiba Mais</LearnMore>
                </ButtonsContainer>
            </Content>
        </Container>
    )
}

export default Home