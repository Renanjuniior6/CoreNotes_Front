import styled from "styled-components"

import { theme } from "../../styles/theme"

export const Container = styled.form`
  background-color: ${theme.colors.white};
  margin: 5.0625rem auto 0 auto;
  display: flex;
  flex-direction: column;
  border: 1px solid ${theme.colors.light};
  border-radius: 3px;
  width: 33.125rem;
  height: 8.4375rem;
  box-shadow: 1px 1px 3px 0px #00000040;

  span {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    @media screen and (max-width: 600px) {
      gap: 0;
    }
  }

  @media screen and (max-width: 600px) {
    width: 94%;
  }
`

export const TitleInput = styled.input`
  background-color: ${theme.colors.white};
  width: 93%;
  border: none;
  border-top-right-radius: 3px;
  border-top-left-radius: 3px;
  padding: 0.625rem;
  font-weight: 700;
  font-size: 0.875rem;

  &&::placeholder {
    font-weight: 700;
    font-size: 0.875rem;
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
  padding: 0.625rem;
  font-size: 0.8125rem;
  font-weight: 400;
  resize: none;

  &&::placeholder {
    font-size: 0.8125rem;
    font-weight: 400;
  }
`
