import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
*,
*::after,
*::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
    /* font-family: 'Montserrat', sans-serif; */
}
  body {
   -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #C0D8EF;
  }
`;

export default GlobalStyle;
