import styled from 'styled-components';

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
    padding-top: 120px;
    background-color: #E8E6F8;
    display: flex;
    align-items: flex-start;
    justify-content: space-around;
    
    >div:nth-child(1) {
        width: 30vw;
        height: 100%;
        top: 100px;
        
        >textarea {
            position: fixed;
            height: 200px;
            width: 500px;
            resize: none;
        }

        >button {
            margin-top: 210px;
            margin-left: 300px;
            position: fixed;
            width: 200px;
            height: 40px;
            background-color: #FF477E;
            color: #FFFFFF;
            font-size: large;
            cursor: pointer;
        }

        
    
    }

    >div:nth-child(2) {
        width: 60vw;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`

export const Nome = styled.h1`
    color: #3F3D56;
`

export const Imagem = styled.img`
    height: 90px;
    width: 90px;
`

export const Logout = styled.button`
    background-color: #685B7C;
    color: #F1F1F1;
`

export const Piar = styled.input`
    height: 200px;
    width: 200px;
    background-color: yellow;
`