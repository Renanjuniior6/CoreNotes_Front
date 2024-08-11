import styled from "styled-components";
import { theme } from '../../styles/theme'

export const Container = styled.div`
background-color: ${theme.colors.white};
margin: 40px auto 0 auto;
display: flex;
flex-direction: column;
border: 1px solid ${theme.colors.light};
border-radius: 25px;
width: 390px;
height: 437px;
box-shadow: 1px 1px 3px 0px #00000040;

span {
    display: flex;
    align-items: center;
}
`

export const TitleInput = styled.input`
background-color: ${theme.colors.white};
width: 90%;
border: none;
border-top-right-radius: 25px;
border-top-left-radius: 25px;
padding: 10px 20px;
font-weight: 700;
font-size: 14px;


&&::placeholder {
    font-weight: 700;
    font-size: 14px;
    color: #333333;
}
`

export const TextNote = styled.textarea`
background-color: ${theme.colors.white};
width: 100%;
height: 90%;
border: none;
border-top: 1px solid ${theme.colors.light};
padding: 10px 20px;
font-size: 13px;
font-weight: 400;
resize: none;

&&::placeholder {
    font-size: 13px;
    font-weight: 400;
}
`

export const IconsBox = styled.div`
display: flex;
gap: 10px;
height: 10%;
border-bottom-left-radius: 25px;
border-bottom-right-radius: 25px;
`

export const BottomBox = styled.div`
height: 100%;
width: 100%;
`
export const ContainerIcons = styled.div`
display: flex;
justify-content: space-evenly;
gap: 245px;
align-items: center;
`