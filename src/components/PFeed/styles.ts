import styled, { css } from 'styled-components';

export const Header = styled.header`
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    top: 0;
    width: 100%;
    height: 100px;
    box-sizing: border-box;
    background-color: #FFFFFF;
    padding-left: 40px;
    padding-right: 40px;
`

export const Feed = styled.div`
    width: 100%;
    background-color: #E8E6F8;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    
    >div:nth-child(1) {
        position: fixed;
        width: 53vw;
        height: 120px;
        top: 100px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        background-color: #E8E6F8;
        z-index: 1;
        border-bottom: 2px inset #98989F;
        
        >textarea {
            margin-top: 10px;
            height: 100%;
            width: 80%;
            resize: none;
        }

        >button {
            position: relative;
            top: -23%;
            left: 20%;
            width: 40%;
            height: 30%;
            background-color: #FF477E;
            color: #FFFFFF;
            font-size: large;
            cursor: pointer;

        }
        
    
    }

    >div:nth-child(2) {
        margin-top: 240px;
        width: 53vw;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`

export const Nome = styled.h1`
    font: 500;
    color: #3F3D56;
`

export const Imagem = styled.img`
    height: 90px;
    width: 90px;
`

export const Search =  styled.input`
    height: 30px;
    width: 15%;
    border-radius: 8px;
    border-color: #98989F;
`

export const Logout = styled.button`
    padding: 10px;
    background-color: #685B7C;
    color: #F1F1F1;
    border-radius: 8px;
`

export const Piar = styled.input`
    height: 200px;
    width: 200px;
    background-color: yellow;
`

export const TxtArea = styled.textarea<{overLimit: boolean}>`
    ${({overLimit}) => css`
        color: ${overLimit?'red' : 'black'};
    `}
    //color: ${props => props.overLimit? 'red' : 'black'};
`