import styled from "styled-components";
import { theme } from '../../styles/theme'

export const Container = styled.form`
background-color: ${theme.colors.white};
margin: 81px auto 0 auto;
display: flex;
flex-direction: column;
border: 1px solid ${theme.colors.light};
border-radius: 3px;
width: 530px;
height: 135px;
box-shadow: 1px 1px 3px 0px #00000040;

span {
    display: flex;
    align-items: center;
    gap: 8px;
}
`

export const TitleInput = styled.input`
background-color: ${theme.colors.white};
width: 93%;
border: none;
border-top-right-radius: 3px;
border-top-left-radius: 3px;
padding: 10px;
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
height: 70%;
border: none;
border-top: 1px solid ${theme.colors.light};
border-bottom-left-radius: 3px;
border-bottom-right-radius: 3px;
padding: 10px;
font-size: 13px;
font-weight: 400;
resize: none;

&&::placeholder {
    font-size: 13px;
    font-weight: 400;
}
`

