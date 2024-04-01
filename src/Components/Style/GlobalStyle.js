import creatGlobalStyle from "styled-components";


const GlobalStyle = creatGlobalStyle`

body {
    background:red ;
}
h1 {
    font-size: 72px;
    background: -webkit-linear-gradient(#eee, #333);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
`;


export default GlobalStyle;

