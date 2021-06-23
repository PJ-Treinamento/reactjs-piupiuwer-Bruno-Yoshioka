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

export const PiuText = styled.p`

`

export const CardF = styled.div`
    width: 766px;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const Buttons = styled.button`
    background: none;
	border: none;
	cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-around;
    border-radius: 16px;


    :hover {
        background-color: #FF477E;
        opacity: 60%;
        cursor: pointer;
    }
`

export const ImgButton = styled.img`
    height: 30px;
    width: 30px;
    margin-right: 8px;
`

export const LikeText = styled.p`
    padding-right: 8px;
    cursor: pointer;
`