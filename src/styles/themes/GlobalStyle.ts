import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
   *{ 
      margin: 0;
      padding: 0;
      scroll-behavior: auto;
     
   }
   :focus {
      outline:0;
      box-shadow:none;
   }
   html {
      scroll-behavior: smooth;
}
   body{
      
      background-color: ${({ theme }) => theme['gray-100']};
      font-family: 'Roboto';
      font-size: 1rem;
      -webkit-font-smoothing: antialiased;
         scroll-behavior: smooth;
   }
   input, button, h1, p, span {
      font-family: 'Nunito';
      border: 0;
      box-shadow: none;
   }
`;
