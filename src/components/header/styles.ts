import styled from "styled-components";

import { theme } from '../../styles/theme'

export const Container = styled.header`
background-color: ${theme.colors.white};
height: 57px;
width: 100%;
position: fixed;
top: 0;
box-shadow: 0px 1px 7px 0px #95959540;
z-index: 9999;
`
export const BoxLogo = styled.span`
display: flex;
gap: 10px;
justify-content: start;
align-items: center;
margin: 8px 0 0 20px;
`

export const Title = styled.h3`
font-size: 14px;
color: ${theme.colors.gray};
font-weight: 400;
`

export const SearchBar = styled.input`
background-color: ${theme.colors.white};
width: 530px;
height: 28px;
border-radius: 3px;
border: 1px solid ${theme.colors.light};
box-shadow: 2px 1px 3px 0px #00000040;
padding: 10px;
font-size: 9px;
font-weight: 400;
margin-left: 40px;
`