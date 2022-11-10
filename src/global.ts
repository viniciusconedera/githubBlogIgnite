import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${({theme}) => theme.background};
    font-family: 'Roboto', sans-serif;
    color: ${({theme}) => theme.ice}
  }

  button {
    cursor: pointer;
    border-color: transparent;
  }

  button:hover {
    opacity: 0.7;
  }

  ul {
    list-style-type: none;
  }
`;