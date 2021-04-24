import React, { useContext } from 'react';
import styled, { css } from 'styled-components';
import { get } from 'lodash';
import PropTypes from 'prop-types';
import { propToStyle } from '../../../theme/utils/propToStyle';
import { breakpointsMedia } from '../../../theme/utils/breakpointsMedia';
import Link from '../../commons/Link';
import { WebsitePageContext } from '../../wrappers/WebsitePage/context';

function TextStyle(variant) {
  return css`
    font-size: ${({ theme }) => theme.typographyVariants[variant].fontSize};
    font-weight: ${({ theme }) => theme.typographyVariants[variant].fontWeight};
    line-height: ${({ theme }) => theme.typographyVariants[variant].lineHeight};
  `;
}

export const TextStyleVariantsMap = {
  title: breakpointsMedia({
    xs: TextStyle('titleXS'),
    md: TextStyle('title'),
  }),
  subTitle: TextStyle('subTitle'),
  paragraph1: TextStyle('paragraph1'),
  paragraph2: TextStyle('paragraph2'),
  paragraph1bold: TextStyle('paragraph1bold'),
  paragraph2bold: TextStyle('paragraph2bold'),
  smallestException: TextStyle('smallestException'),
};

const TextBase = styled.span`
  ${(props) => TextStyleVariantsMap[props.variant]}
  color: ${(props) => get(props.theme, `colors.${props.color}.color`)};

  ${propToStyle('textAlign')}
  ${propToStyle('marginBottom')}
  ${propToStyle('marginLeft')}
`;

export default function Text({
  tag,
  variant,
  children,
  href,
  cmsKey,
  ...props
}) {
  const websitePageContext = useContext(WebsitePageContext);

  const componentContent = cmsKey
    ? websitePageContext.getCMSContent(cmsKey)
    : children;

  return (
    <TextBase
      as={href ? Link : tag}
      href={href}
      variant={variant}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    >
      {componentContent}
    </TextBase>
  );
}

/* Validação dos tipos de entrada dos atributos */
Text.propTypes = {
  tag: PropTypes.string,
  href: PropTypes.string,
  variant: PropTypes.string, // Não é obrigatório pq tem valor padrão
  children: PropTypes.node,
  cmsKey: PropTypes.string,
};

Text.defaultProps = {
  tag: 'span',
  variant: 'paragraph1',
  children: null,
  href: null,
  cmsKey: '',
};
