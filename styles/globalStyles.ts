// styles/globalStyles.ts
import { createGlobalStyle } from 'styled-components';


export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

  }
  body {
    font-family: 'Montserrat', Arial, sans-serif;
    background-color: #f5f5f5;
    color: #333;
  }
  a {
    color: #0070f3;
    text-decoration: none;
  }
  h1, h2, h3, h4, h5, h6 {
    color: #222;
  }
`;
