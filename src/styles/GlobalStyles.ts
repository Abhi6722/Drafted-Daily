import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root {
    --paper-color: #F4F1EA;
    --text-primary: #0A0A0A;
    --text-secondary: #2B2B2B;
    --border-color: #000000;
    --grid-gap: 1rem;
  }

  @font-face {
    font-family: 'UnifrakturMaguntia';
    src: url('https://fonts.googleapis.com/css2?family=UnifrakturMaguntia&display=swap');
    font-display: swap;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: var(--paper-color);
    color: var(--text-primary);
    font-family: 'Georgia', serif;
    line-height: 1.6;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Times New Roman', serif;
  }

  @media print {
    body {
      background-color: white;
    }
    
    .no-print {
      display: none;
    }
  }
`;

export default GlobalStyles;