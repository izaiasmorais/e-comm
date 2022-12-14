import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
  }

  body {
    background: ${({ theme }) => theme.colors.body};
    color: ${({ theme }) => theme.colors.text};
    transition: all .1s;
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-size: ${({ theme }) => theme.textSizes["text-regular-m"]};    
    font-family: ${({ theme }) => theme.fonts.regular};
    font-weight: 400;
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }

  img {
    max-width: 100%;    
  }

  ul {
    list-style: none;
  }
`;
