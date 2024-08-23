import { createGlobalStyle } from 'styled-components'
import { theme } from './theme'
import "react-toastify/dist/ReactToastify.css"

export default createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
}

body {
    -webkit-font-smoothing: antiaLiased;
    background-color: ${theme.colors.primary};
}

body, input, button, textarea {
    font: 1rem 'Inter', sans-serif;
}

h1, h2, p, span, strong, button, label, input {
    line-height: 100%;
}

button, svg, li {
    cursor: pointer;
}

`