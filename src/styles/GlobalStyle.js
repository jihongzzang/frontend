import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Nanum Gothic', 'Montoserrat', sans-serif;
    box-sizing: border-box;
  }
  ${reset}
`;

export default GlobalStyle;
