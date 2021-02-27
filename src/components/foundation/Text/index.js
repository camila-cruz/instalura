import React from 'react';
import styled, { css } from 'styled-components';
import { get } from 'lodash';
import PropTypes from 'prop-types';
import { propToStyle } from '../../../theme/utils/propToStyle';
import { breakpointsMedia } from '../../../theme/utils/breakpointsMedia';

export const TextStyleVariantsMap = {
  paragraph1: css`
    font-size: ${({ theme }) => theme.typographyVariants.paragraph1.fontSize};
    font-weight: ${({ theme }) => theme.typographyVariants.paragraph1.fontWeight};
    line-height: ${({ theme }) => theme.typographyVariants.paragraph1.lineHeight};
  `,
  smallestException: css`
    font-size: ${({ theme }) => theme.typographyVariants.smallestException.fontSize};
    font-weight: ${({ theme }) => theme.typographyVariants.smallestException.fontWeight};
    line-height: ${({ theme }) => theme.typographyVariants.smallestException.lineHeight};
  `,
  title: css`
  ${({ theme }) => css`
    font-size: ${theme.typographyVariants.titleXS.fontSize};
    font-weight: ${theme.typographyVariants.titleXS.fontWeight};
    line-height: ${theme.typographyVariants.titleXS.lineHeight};
  `}
  ${breakpointsMedia({
    md: css`
        ${({ theme }) => css`
          font-size: ${theme.typographyVariants.title.fontSize};
          font-weight: ${theme.typographyVariants.title.fontWeight};
          line-height: ${theme.typographyVariants.title.lineHeight};
        `}
      `,
  })}
  `,
};

const TextBase = styled.span`
  ${(props) => TextStyleVariantsMap[props.variant]}
  color: ${(props) => get(props.theme, `colors.${props.color}.color`)};

  ${propToStyle('textAlign')}
`;

export default function Text({
  tag,
  variant,
  children,
  ...props
}) {
  return (
    <TextBase
      as={tag}
      variant={variant}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    >
      {children}
    </TextBase>
  );
}

/* Validação dos tipos de entrada dos atributos */
Text.propTypes = {
  tag: PropTypes.string,
  variant: PropTypes.string, // Não é obrigatório pq tem valor padrão
  children: PropTypes.node,
};

Text.defaultProps = {
  tag: 'span',
  variant: 'paragraph1',
  children: null,
};
