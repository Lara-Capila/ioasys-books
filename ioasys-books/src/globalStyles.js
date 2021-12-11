import { createGlobalStyle } from 'styled-components';

export const Colors = {
  white: '#ffffff',
  black32: 'rgba(0, 0, 0, 0.32)',
  textBlack: '#333333',
  buttonLabelColor: '#B22E6F',
  backgroundErrorContainer: 'rgba(255, 255, 255, 0.4)',
  borderCirculeLogout: 'rgba(51, 51, 51, 0.2)',
  loadingButtonlogin: '#B22E6F',
  authorBookDetail: '#AB2680',
  detailBook: '#999999',
};

export const globalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Heebo&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box
  }

  body {
    font-family: 'Heebo', sans-serif; 
  }
`;
