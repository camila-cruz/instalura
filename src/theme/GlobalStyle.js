import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    // Padroniza as diferenças entre os navegadores para evitar inconsistências de CSS
    ${normalize}

    html,
    body {
        margin: 0;
        padding: 0;
        font-family: ${({ theme }) => theme.fontFamily};
    }

    /* Full height layout - deixa o footer no rodapé mesmo que a tela seja grande */
    html,
    body {
        display: flex;
        min-height: 100vh;
        width: 100%;
    }

    #__next {
        display: flex;
        flex: 1;
        flex-direction: column;
    }
`