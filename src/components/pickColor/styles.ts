import styled from "styled-components";
import { theme } from '../../styles/theme'

export const Container = styled.div`
background-color: ${theme.colors.white};
width: 17.625rem;
height: 5.8125rem;
position: absolute;
left: 10%;
top: 100%;
box-shadow: 1px 1px 3px 0px #00000040;
border-radius: 9px;
padding: 0.3125rem;
z-index: 999;
`

export const ColorContent = styled.ul`
display: flex;
align-items: center;
justify-content: center;
gap: 0.625rem;
position: relative;
flex-wrap: wrap;
`

export const Color = styled.li`
width: 2.25rem;
height: 2.25rem;
border-radius: 50px;
background-color: ${(props) => props.color ? `${props.color}` : '#000'};
list-style: none;

&:hover {
    transform: translateY(-5px);
    transition: ease-in-out 200ms;
}
`