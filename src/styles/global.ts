import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root{
    --background: #141414;
    --text: #EEF0F2;

    --yellow: #EEC643;
    --blue-light: #0D21A1;
    --blue: #011638
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%
    }

    @media (max-width: 720px) {
      font-size: 87.5%
    }
  }

  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
  }
  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }
  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
    color: var(--text);
  }
  button {
    cursor: pointer;
  }
  [disabled] {
    cursor: not-allowed;
    opacity: 0.6;
  }
`