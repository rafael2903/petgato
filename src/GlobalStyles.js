import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Montserrat', Roboto, 'Open Sans', 'Helvetica Neue', sans-serif;
    }

    html, body, div#root, div.App {
        min-height: 100vh;
    }

    div.App {
        flex-direction: column;
        display: flex;
        justify-content: space-between;
    }

    button {
        color: black;
        cursor: pointer;
        background-color: unset;
        font: unset;
        padding: 0;
        border: none;
    }

    a:focus, button:focus, summary:focus {
        outline: lightgray auto 1px;
    }
    
`;
