import styled from "styled-components";
import { theme } from '../../styles/theme'
import { X } from '@phosphor-icons/react'

export const Container = styled.div`
background-color: ${theme.colors.white};
width: 574px;
height: 46px;
position: absolute;
left: 10%;
top: 100%;
box-shadow: 1px 1px 3px 0px #00000040;
border-radius: 9px;
padding: 5px;
z-index: 999;
`

export const ColorContent = styled.ul`
display: flex;
align-items: center;
justify-content: center;
gap: 10px;
position: relative;
`

export const Color = styled.li`
width: 36px;
height: 36px;
border-radius: 50px;
background-color: ${(props) => props.color ? `${props.color}` : '#000'};
list-style: none;
`

export const CloseButton = styled(X)`
background-color: ${theme.colors.white};
border-radius: 50px;
position: absolute;
left: 98%;
top: -10%;
box-shadow: 1px 1px 3px 0px #00000040;
padding: 2px;
`