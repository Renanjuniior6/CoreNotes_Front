import { PencilSimple, PaintBucket } from '@phosphor-icons/react'
import styled from "styled-components";
import { theme } from '../../styles/theme'

export const Container = styled.form`
background-color: ${(props) => props.color ? `${props.color}` : theme.colors.white};
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

export const Content = styled.div`
position: relative;
margin: 40px auto 0 auto;
`

export const TitleInput = styled.input`
background-color: ${(props) => props.color ? `${props.color}` : theme.colors.white};;
width: 90%;
border: none;
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
background-color: ${(props) => props.color ? `${props.color}` : theme.colors.white};
width: 100%;
height: 90%;
border: none;
border-top: 1px solid ${(props) => props.color === "#FFFFFF"? `${theme.colors.light}` : `${theme.colors.white}`};
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

export const CircleEdit = styled.div`
width: 30px;
height: 30px;
padding: 5px;

background-color: ${(props) => props.edit ? "none" : theme.colors.elipse13};
opacity: ${(props) => props.edit ? "none" : "0.8"};
border-radius: ${(props) => props.edit ? "none" : "20px"};

&:hover {
    background-color: ${theme.colors.elipse13};
    opacity: 0.8;
    border-radius: 20px;
}
`
export const CircleBucket = styled.div`
width: 30px;
height: 30px;
padding: 5px;

background-color: ${(props) => props.modal ? theme.colors.elipse13 : "none"};
opacity: ${(props) => props.modal ? "0.8" : "none"};
border-radius: ${(props) => props.modal ? "20px" : "none"};

&:hover {
    background-color: ${theme.colors.elipse13};
    opacity: 0.8;
    border-radius: 20px;
}
`