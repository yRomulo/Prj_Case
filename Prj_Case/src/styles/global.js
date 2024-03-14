import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        background-color: white;
    }

    button{
        cursor: pointer;
    }

    body, input, button {
        font-family: "Roboto", sans-serif;
        font-weight: 700;
        font-style: normal;
        font-size: 16px;
        outline: none;
    }
`;