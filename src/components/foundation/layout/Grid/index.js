import styled, { css } from 'styled-components';
import { breakpointsMedia } from '../../../../theme/utils/breakpointsMedia';
import { propToStyle } from '../../../../theme/utils/propToStyle';

const Container = styled.div`
  width: 100%;
  padding-right: 28px;
  padding-left: 28px;
  margin-right: auto;
  margin-left: auto;
  
  ${breakpointsMedia({
    xs: css`
      max-width: initial;
  
      padding-right: 28px;
      padding-left: 28px;
    `,
    sm: css`
      max-width: 576px; 
    `,
    md: css`
      max-width: 768px;
      padding-right: 16px;
      padding-left: 16px; 
    `,
    lg: css`
      max-width: 1160px; 
    `,
    xl: css`
      max-width: 1222px;
    `,
  })}

  ${propToStyle('marginTop')}
  ${propToStyle('display')}
  ${propToStyle('flex')}
  ${propToStyle('alignItems')}
`;

const Col = styled.div`
  padding-right: 16px;
  padding-left: 16px;
  flex-basis: 0;
  flex-grow: 1;
  max-width: 100%;

  ${({ value }) => {
    if (typeof value === 'number') {
      return css`
        flex: 0 0 ${(100 * value) / 12}%;
        max-width: ${(100 * value) / 12}%;
      `;
    }

    return breakpointsMedia({
      ...(value.xs && {
        xs: css`
          flex: 0 0 ${(100 * value.xs) / 12}%;
          max-width: ${(100 * value.xs) / 12}%;
        `,
      }),
      ...(value.sm && {
        sm: css`
          flex: 0 0 ${(100 * value.sm) / 12}%;
          max-width: ${(100 * value.sm) / 12}%;
        `,
      }),
      ...(value.md && {
        md: css`
          flex: 0 0 ${(100 * value.md) / 12}%;
          max-width: ${(100 * value.md) / 12}%;
        `,
      }),
      ...(value.lg && {
        lg: css`
          flex: 0 0 ${(100 * value.lg) / 12}%;
          max-width: ${(100 * value.lg) / 12}%;
        `,
      }),
      ...(value.xl && {
        xl: css`
          flex: 0 0 ${(100 * value.xl) / 12}%;
          max-width: ${(100 * value.xl) / 12}%;
        `,
      }),
    });
  }}

  ${({ offset }) => {
    if (typeof offset === 'number') {
      return css`
        margin-left: ${(100 * offset) / 12}%;
      `;
    }

    return breakpointsMedia({
      ...(offset.xs && {
        xs: css`
          margin-left: ${(100 * offset.xs) / 12}%;
        `,
      }),
      ...(offset.sm && {
        sm: css`
          margin-left: ${(100 * offset.sm) / 12}%;
        `,
      }),
      ...(offset.md && {
        md: css`
          margin-left: ${(100 * offset.md) / 12}%;
        `,
      }),
      ...(offset.lg && {
        lg: css`
          margin-left: ${(100 * offset.lg) / 12}%;
        `,
      }),
      ...(offset.xl && {
        xl: css`
          margin-left: ${(100 * offset.xl) / 12}%;
        `,
      }),
    });
  }}

  ${propToStyle('display')}
  ${propToStyle('flexDirection')}
  ${propToStyle('alignItems')}
  ${propToStyle('justifyContent')}
  ${propToStyle('paddingRight')}
  ${propToStyle('order')}
`;

Col.defaultProps = {
  value: {},
  offset: {},
};

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: -16px;
  margin-left: -16px;

  ${propToStyle('flex')}
  ${propToStyle('justifyContent')}
  ${propToStyle('flexDirection')}
  ${propToStyle('marginTop')}
  ${propToStyle('marginLeft')}
  ${propToStyle('marginRight')}
  ${propToStyle('marginBottom')}
`;

// eslint-disable-next-line import/prefer-default-export
export const Grid = {
  Container,
  Row,
  Col,
};
