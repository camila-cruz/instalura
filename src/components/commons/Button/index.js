import styled, { css } from 'styled-components';

const ButtonGhost = css`
    color: #FB7B6B;
    background: transparent;
`

const ButtonDefault = css`
    color: white;
    background-color: ${(props) => {
        return props.theme.colors.primary.main.color;
    }};
    color: ${(props) => {
        return props.theme.colors.primary.main.contrastText;
    }};
`

export const Button = styled.div`
    border: 0;
    cursor: pointer;
    padding: 12px 26px;
    font-weight: bold;
    opacity: 1;
    border-radius: 8px;

    ${(props) => {
        console.log('<Button />', props)
        if (props.ghost) {
            return ButtonGhost;
        }
        return ButtonDefault;
    }}

    &:hover,
    &:focus {
        opacity: .5;
    }
`