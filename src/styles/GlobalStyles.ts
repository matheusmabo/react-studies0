import { create } from 'domain'
import { createGlobalStyle } from 'styled-components'



export default createGlobalStyle`
* {
    margin: 0;
    padding: 0px;
    box-sizing: border-box;
}
html, body, #root {
    height: 100%;
}
*, button, input {
    border: 0px;
    outline: 0px;
    font-family: 'Roboto', sans-serif;   
    color: ${props => props.theme.colors.white}
}
button {
    cursor: pointer;
}
`;
