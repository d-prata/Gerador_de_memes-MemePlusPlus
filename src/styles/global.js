
import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Roboto Condensed', sans-serif;
    }

    body {
        background: #000;
    }

    button,
    input {
        outline: 0;
    }

    button {
        cursor: pointer;
    }

    h1 {
        color: whitesmoke;
    }
`;