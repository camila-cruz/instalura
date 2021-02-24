/* eslint-disable linebreak-style */
import styled, { css } from 'styled-components';
import get from 'lodash/get';

import { TextStyleVariantsMap } from '../../foundation/Text';
import { breakpointsMedia } from '../../../theme/utils/breakpointsMedia';
import { propToStyle } from '../../../theme/utils/propToStyle';

const ButtonGhost = css`
  color: ${(props) => get(props.theme, `colors.${props.variant}.color`)};
  background: transparent;
`;

const ButtonDefault = css`
  background-color: ${(props) => get(props.theme, `colors.${props.variant}.color`)};
  color: ${(props) => get(props.theme, `colors.${props.variant}.contrastText`)};
`;

export const Button = styled.div`
  border: 0;
  cursor: pointer;
  padding: 12px 26px;
  font-weight: bold;
  opacity: 1;
  transition: opacity ${({ theme }) => theme.transition};
  border-radius: ${({ theme }) => theme.borderRadius};

  ${propToStyle('margin')}
  ${propToStyle('display')}

  ${breakpointsMedia({
    xs: css`
      /* All devices */
      ${TextStyleVariantsMap.smallestException}
    `,
    md: css`
      /* From md breakpoint */
      padding: 12px 43px;
      ${TextStyleVariantsMap.paragraph1}
    `
  })}

  // Confere qual é o tipo de botão para estilizar adequadamente
  ${(props) => {
    if (props.ghost) {
      return ButtonGhost;
    }
    return ButtonDefault;
  }};

  &:hover,
  &:focus {
    opacity: .5;
  }

`;