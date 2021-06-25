import styled from 'styled-components';

export const Card = styled.div`
    width: 100%;
    height: auto;
    border: 1px solid #685B7C;
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
    width: 100%;
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
    margin-top: 10px;
`

export const CardF = styled.div`
    margin-top: 10px;
    width: 100%;
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

export const ImgButtonL = styled.img`
    height: 30px;
    width: 30px;
    margin-right: 16px;
`
export const ImgButtonF = styled.img`
    height: 30px;
    width: 30px;
`

export const LikeText = styled.p`
    padding-right: 8px;
    cursor: pointer;
`

export const ImgButtonD = styled.img<{obaoba: boolean }>`
    display: ${props => props.obaoba? 'initial' : 'none'};
    height: 30px;
    width: 30px;
`