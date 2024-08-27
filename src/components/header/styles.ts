import styled from "styled-components"

import { theme } from "../../styles/theme"

export const Container = styled.header`
  background-color: ${theme.colors.white};
  height: 3.5625rem;
  width: 100%;
  position: fixed;
  top: 0;
  box-shadow: 0px 1px 7px 0px #95959540;
  z-index: 9999;

  @media screen and (max-width: 400px) {
    img {
      width: 1.875rem;
    }
  }
`
export const BoxLogo = styled.span`
  display: flex;
  gap: 0.625rem;
  justify-content: start;
  align-items: center;
  margin: 0.5rem 0 0 1.25rem;

  @media screen and (max-width: 600px) {
    gap: 2%;
    margin-left: 0.625rem;
  }

  @media screen and (max-width: 400px) {
    margin-top: 0.8125rem;
  }
`

export const Title = styled.h3`
  font-size: 0.875rem;
  color: ${theme.colors.gray};
  font-weight: 400;
  cursor: pointer;

  @media screen and (max-width: 600px) {
    margin-right: 0.625rem;
  }
`

export const SearchBar = styled.input`
  background-color: ${theme.colors.white};
  width: 33.125rem;
  height: 1.75rem;
  border-radius: 3px;
  border: 1px solid ${theme.colors.light};
  box-shadow: 2px 1px 3px 0px #00000040;
  padding: 0.625rem;
  font-size: 0.5625rem;
  font-weight: 400;
  margin-left: 2.5rem;

  @media screen and (max-width: 600px) {
    width: 55%;
    margin-left: 0;
  }

  @media screen and (max-width: 400px) {
    width: 54%;
  }
`
