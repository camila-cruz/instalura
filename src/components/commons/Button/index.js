import styled, { css } from 'styled-components';
import get from 'lodash/get';

import { TextStyleVariantsMap } from '../../foundation/Text';
import { breakpointsMedia } from '../../../theme/utils/breakpointsMedia';

const ButtonGhost = css`
    color: ${(props) => {
        return get(props.theme, `colors.${props.variant}.color`);
    }};
    background: transparent;
`

const ButtonDefault = css`
    color: white;
    background-color: ${(props) => {
        return get(props.theme, `colors.${props.variant}.color`);
    }};
    color: ${(props) => {
        return get(props.theme, `colors.${props.variant}.contrastText`);
    }};
`

export const Button = styled.div`
    border: 0;
    cursor: pointer;
    padding: 12px 26px;
    font-weight: bold;
    opacity: 1;
    border-radius: 8px;

    // Confere qual é o tipo de botão para estilizar adequadamente
    ${(props) => {
        if (props.ghost) {
            return ButtonGhost;
        }
        return ButtonDefault;
    }};

    transition: opacity ${({ theme }) => theme.transition};
    border-radius: ${({ theme }) => theme.borderRadius};

    &:hover,
    &:focus {
        opacity: .5;
    }

    ${breakpointsMedia({
        xs: css`
            /* All devices */
            ${TextStyleVariantsMap.smallestException}
        `,
        md: css`
            /* From md breakpoint */
            ${TextStyleVariantsMap.paragraph1}
        `
    })}
`