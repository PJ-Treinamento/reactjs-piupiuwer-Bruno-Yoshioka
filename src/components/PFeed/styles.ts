import styled, { css } from 'styled-components';

export const Header = styled.header`
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    top: 0;
    width: 100%;
    height: 80px;
    box-sizing: border-box;
    background-color: #FFFFFF;
    padding-left: 20px;
    padding-right: 20px;

    
    h1{
        font: 500;
        color: #3F3D56;
    }

    @media (max-width: 650px) {
        h1 {
            display:none;
        }
    }
        
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
        width: 700px;
        height: 140px;
        top: 80px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        background-color: #E8E6F8;
        z-index: 1;
        border-bottom: 2px inset #98989F;
        
        >textarea {
            margin-top: 8px;
            height: 100%;
            width: 60%;
            resize: none;
            border: none;
            border-radius: 8px;
            padding: 8px;
        }

        >div {
            margin-top: 8px;
            width: 60%;
            display: flex;
            justify-content: space-between;
            margin-bottom: 8px;
            padding-left: 8px;
            >button {
            border: none;
            width: 30%;
            height: 100%;
            background-color: #FF477E;
            color: #FFFFFF;
            font-size: medium;
            cursor: pointer;
            border-radius: 8px;
            :hover {
                color: #685B7C;
            }
            }
        }
        
        

    }

    >div:nth-child(2) {
        margin-top: 240px;
        width: 690px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    @media (max-width: 740px) {
        >div:nth-child(1) {
            width: 400px;
        }
        >div:nth-child(2) {
            width: 390px;
        }
    }
`

export const Contagem = styled.p<{overLimit: boolean}>`
    color: ${props => props.overLimit? 'red' : 'black'};
`

export const Imagem = styled.img`
    height: 64px;
    width: 64px;
    cursor: pointer;
    animation: rotation 10s infinite linear;
    @keyframes rotation {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(359deg);
    }}
`

export const Search =  styled.input`
    height: 30px;
    width: 200px;
    border-radius: 8px;
    border: 1px solid #98989F;
    margin-right: 16px;
    padding-left: 8px;
`

export const Logout = styled.button`
    padding: 10px;
    background-color: #685B7C;
    color: #F1F1F1;
    border-radius: 8px;
    cursor: pointer;
`

export const Piar = styled.input`
    height: 200px;
    width: 200px;
    background-color: yellow;
`

export const TxtArea = styled.textarea<{overLimit: boolean}>`
    font-size: small;
    ${({overLimit}) => css`
        color: ${overLimit?'red' : 'black'};
    `}
    //color: ${props => props.overLimit? 'red' : 'black'};
`