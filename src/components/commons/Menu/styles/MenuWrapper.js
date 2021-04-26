import styled, { css } from 'styled-components';
import { breakpointsMedia } from '../../../../theme/utils/breakpointsMedia';
import { TextStyleVariantsMap } from '../../../foundation/Text';

export const MenuWrapper = styled.nav`
  font-family: 'Rubik', sans-serif;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  padding-top: 18px;
  padding-right: 28px;
  padding-left: 28px;

  ${breakpointsMedia({
    md: css`
      justify-content: flex-start;
      padding: 0 16px;
      padding-top: 32px;
      margin-left: auto;
      margin-right: auto;
      width: 100%;
      max-width: 768px;
    `,
    lg: css`
      max-width: 1160px; 
    `,
    xl: css`
      max-width: 1222px;
    `,
  })}
  
  ${({ hasActiveSession }) => hasActiveSession && breakpointsMedia({
    xs: css`
      background-color: ${({ theme }) => theme.colors.background.main.color};
      padding-bottom: 16px;
      border-bottom: 1px solid ${({ theme }) => theme.colors.borders.main.color};
    `,
    md: css`
      background-color: ${({ theme }) => theme.colors.background.light.color};
      padding-bottom: 32px;
    `,
  })}
`;

MenuWrapper.LeftSide = styled.div`
  padding: 0;
  margin: 0;
  order: 1;

  ${({ hasActiveSession }) => hasActiveSession && breakpointsMedia({
    xs: css`
      width: 100%;
      text-align: center;
    `,
  })}
  ${breakpointsMedia({
    md: css`
      width: 131px;
      height: 32px;
    `,
  })}
  ${breakpointsMedia({
    md: css`
      order: initial;
      padding-right: 16px;
    `,
  })}
`;

MenuWrapper.CentralSide = styled.div`
  padding: 0;
  margin: 0;
  order: 3;
  width: 100%;
  list-style: none;

  display: flex;
  align-items: center;
  justify-content: space-between;
  
  margin-top: 17px;
  border-top: 1px solid #88989E;
  border-bottom: 1px solid #88989E;
  padding: 12px;

  a {
    text-align: center;
    display: block;
    text-decoration: none;
    color: #88989E;
    transition: 200ms ease-in-out;

    &:hover,
    &:focus {
      font-weight: 500;
      color: #070C0E;
    }

    ${breakpointsMedia({
    xs: css`
      ${TextStyleVariantsMap.smallestException}
    `,
    md: css`
      ${TextStyleVariantsMap.paragraph1}
    `,
  })}
  }

  ${breakpointsMedia({
    md: css`
      max-width: 332px;
      justify-content: space-between;
      flex: 1;
      order: initial;
      border: none;
      margin: 0;
      padding-top: 0;
      padding-bottom: 0;
    `,
  })}
`;

MenuWrapper.RightSide = styled.div`
  padding: 0;
  margin: 0;
  order: 2;

  display: flex;
  flex: 1;
  justify-content: flex-end;

  ${breakpointsMedia({
    md: css`
      order: initial;
    `,
  })}
`;
