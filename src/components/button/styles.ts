import styled from "styled-components"

import { theme } from "../../styles/theme"

type ContainerProps = {
  $width?: boolean
}

export const Container = styled.button<ContainerProps>`
  border-radius: ${(props) => (props.$width ? "0.3125rem" : "0.625rem")};
  border: none;
  background-color: ${theme.colors.white};
  box-shadow: 1px 1px 3px 1px #00000040;
  height: 1.875rem;
  width: ${(props) => (props.$width ? "30%" : "50%")};
  font-size: 0.875rem;
  margin-top: ${(props) => (props.$width ? "0.3125rem" : "0")};
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 0.3125rem;

  &:hover {
    opacity: 0.8;
  }
`
