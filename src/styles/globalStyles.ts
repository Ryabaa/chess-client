import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    user-select: none;
    scroll-behavior: smooth;
    font-family: 'Comfortaa', cursive;
    font-size: 15px;
    font-weight: normal;
    text-decoration: none;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
    outline: none;
    border: 0;
    padding: 0;
    margin: 0;
  }
  
  button, a {
    cursor: pointer;
    transition: all 0.3s ease;
    color: ${({ theme }) => theme.colors.secondaryText};
  }

  input{
    color: ${({ theme }) => theme.colors.primaryText};
    border-radius: 3px;
  }

  ::placeholder {
    color: ${({ theme }) => theme.colors.secondary}
  }

  body {
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.primaryText};
  }

::-webkit-scrollbar {
    width: 10px;
    height: 8px;
    background: unset;

}

::-webkit-scrollbar-thumb {
    background-color: #545454;
    border-radius: 10px;
    transition: all 0.3s ease;
    &:hover {
        background-color: #aaaaaa;
    }
}

::-webkit-scrollbar-button {
    display: none;
}

`;

export default GlobalStyles;
