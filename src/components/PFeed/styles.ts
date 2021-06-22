import styled from 'styled-components';

export const Header = styled.header`
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
    padding-top: 120px;
    background-color: #E8E6F8;
    display: flex;
    flex-direction: column;
    align-items: center;

`

export const Nome = styled.h1`
    color: #3F3D56;
`

export const Imagem = styled.img`
    height: 90px;
    width: 90px;
`