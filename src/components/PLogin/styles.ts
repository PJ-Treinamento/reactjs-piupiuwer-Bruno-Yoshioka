import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 100vh;
    width: 100vw;
    background-color: #E8E6F8;
`

export const Esquerda = styled.div`
    height: 600px;
    width: 400px;
    
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
`

export const Imagem = styled.img`
    height: 200px;
    width: 200px;
`

export const Nome = styled.h1`
    color: #FF477E;
`

export const Slogan = styled.p`
    color: #000000;
`

export const By = styled.p`
    color: #685B7C;
`

export const Direita = styled.div`
    height: 600px;
    width: 400px;
    background-color: #FFFFFF;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
`

export const Log = styled.h2`
    color: #000000;
    font: bold;
    margin-bottom: 48px;
`

export const Input = styled.input`
    width: 350px;
    height: 40px;
    margin-bottom: 16px;
`

export const LogIn = styled.button`
    margin-top: 24px;
    width: 350px;
    height: 40px;
    background-color: #FF477E;
    color: #FFFFFF;
    font-size: large;
    cursor: pointer;
`