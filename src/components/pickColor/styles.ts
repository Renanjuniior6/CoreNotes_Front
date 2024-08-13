import styled from "styled-components";
import { theme } from '../../styles/theme'

export const Container = styled.div`
background-color: ${theme.colors.white};
width: 574px;
height: 46px;
position: absolute;
left: 39%;
box-shadow: 1px 1px 3px 0px #00000040;
border-radius: 9px;
padding: 5px;
`

export const ColorContent = styled.ul`
display: flex;
align-items: center;
justify-content: center;
gap: 10px;
`

export const Color = styled.li`
width: 36px;
height: 36px;
border-radius: 50px;
background-color: ${(props) => props.color ? `${props.color}` : '#000'};
list-style: none;
`