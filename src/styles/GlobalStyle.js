import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *{
        font-family: 'Poppins', sans-serif;
        
    }
    :root {
        
    }

    html {
        margin: 0;
        padding: 0;
      
    }

    body {
        box-sizing: border-box;
        background-color: #3450a1;
        background-size: cover;
        color: #ffffff;
    }

`;

export default GlobalStyles;
