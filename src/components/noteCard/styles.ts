import styled from "styled-components";
import { theme } from '../../styles/theme'

type EditProps = {
    $edit: boolean
}

type ModalProps = {
    $modal: boolean
}

export const Container = styled.form`
background-color: ${(props) => props.color ? `${props.color}` : theme.colors.white};
display: flex;
flex-direction: column;
border: 1px solid ${theme.colors.light};
border-radius: 25px;
width: 24.375rem;
height: 27.3125rem;
box-shadow: 1px 1px 3px 0px #00000040;

span {
    display: flex;
    align-items: center;
}

@media screen and (max-width: 600px) {
    width: 23rem;
}

@media screen and (max-width: 400px) {
    width: 21rem;
}
`

export const Content = styled.div`
position: relative;
margin: 2.5rem auto 0 auto;
`

export const TitleInput = styled.input`
background-color: ${(props) => props.color ? `${props.color}` : theme.colors.white};;
width: 90%;
border: none;
border-top-left-radius: 25px;
padding: 0.625rem 1.25rem;
font-weight: 700;
font-size: 0.875rem;


&&::placeholder {
    font-weight: 700;
    font-size: 0.875rem;
    color: #333333;
}
`

export const TextNote = styled.textarea`
background-color: ${(props) => props.color ? `${props.color}` : theme.colors.white};
width: 100%;
height: 89%;
border: none;
border-top: 1px solid ${(props) => props.color === "#FFFFFF"? `${theme.colors.light}` : `${theme.colors.white}`};
padding: 0.625rem 1.25rem;
font-size: 0.8125rem;
font-weight: 400;
resize: none;

&&::placeholder {
    font-size: 0.8125rem;
    font-weight: 400;
}
`

export const IconsBox = styled.div`
display: flex;
gap: 0.625rem;
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
gap: 15.3125rem;
align-items: center;

@media screen and (max-width: 600px) {
    gap: 14.3125rem;
}

@media screen and (max-width: 400px) {
    gap: 12.3125rem;
}

`

export const CircleEdit = styled.div<EditProps>`
width: 1.875rem;
height: 1.875rem;
padding: 0.3125rem;

background-color: ${(props) => props.$edit ? "none" : theme.colors.white};
opacity: ${(props) => props.$edit ? "none" : "0.8"};
border-radius: ${(props) => props.$edit ? "none" : "1.25rem"};
box-shadow: ${(props) => props.$edit ? "none" : "1px 1px 3px 0px #00000040"};

&:hover {
    background-color: ${theme.colors.white};
    opacity: 0.8;
    border-radius: 1.25rem;
    box-shadow: 1px 1px 3px 0px #00000040;
}
`
export const CircleBucket = styled.div<ModalProps>`
width: 1.875rem;
height: 1.875rem;
padding: 0.3125rem;

background-color: ${(props) => props.$modal ? theme.colors.white : "none"};
opacity: ${(props) => props.$modal ? "0.8" : "none"};
border-radius: ${(props) => props.$modal ? "1.25rem" : "none"};
box-shadow: ${(props) => props.$modal ? "1px 1px 3px 0px #00000040" : "none"};

&:hover {
    background-color: ${theme.colors.white};
    opacity: 0.8;
    border-radius: 1.25rem;
    box-shadow: 1px 1px 3px 0px #00000040;
}
`