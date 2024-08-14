import styled from "styled-components";
import { theme } from '../../styles/theme'

export const Container = styled.button`
border-radius: ${(props) => props.width ? "5px" : "10px"} ;
border: none;
background-color: ${theme.colors.white};
box-shadow: 1px 1px 3px 1px #00000040;
height: 30px;
width: ${(props) => props.width ? "30%" : "50%"};
font-size: 14px;
margin-top: ${(props) => props.width ? "5px" : "0"};
margin-left: auto;
margin-right: auto;
margin-bottom: 5px;

&:hover {
    opacity: 0.8;
}

`