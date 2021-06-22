import styled from 'styled-components';

export const Card = styled.div`
    width: 800px;
    height: auto;
    border: 1px solid black;
    border-radius: 8px;
    padding: 16px;
    margin-bottom: 4px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
`

export const CardHeader = styled.div`
    width: 766px;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const User = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const UserImage = styled.img`
    background: cover;
    height: 50px;
    width: 50px;
    border-radius: 50%;
    margin-right: 16px;
`

export const UserName = styled.h3`
    font: bold #000000;
`