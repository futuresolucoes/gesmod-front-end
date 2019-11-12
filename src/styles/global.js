import { createGlobalStyle } from 'styled-components';

import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  *:focus {
    outline: 0;
  }

  html, body, #root {
    height: 100%;
    background: linear-gradient(-90deg, #78378d, #78378d);
  }

  body {
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: Helvetica, Arial, sans-serif;
    font-size: 14px;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }

`;
