import { createGlobalStyle } from 'styled-components';
import background from '../../images/rick-bg.jpg'

export const GlobalStyle = createGlobalStyle`
  body {
    background-image: url(${background});
    background-size : contain;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    line-height: 1.3;
    #logo {
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 50%;
        margin-bottom: 2em;
        margin-top: 2em;
        @media screen and (max-width: 768px) {
          width: 100%;
        }
    }
    
  }
`;