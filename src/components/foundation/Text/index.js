import React from 'react';
import styled, { css } from 'styled-components';

import PropTypes from 'prop-types';

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
};


const TextBase = styled.span`
    ${(props) => TextStyleVariantsMap[props.variant]}
`;

export default function Text({ tag, variant, children }) {
    return (
        <TextBase
            as={tag}
            variant={variant}
        >
            {children}
        </TextBase>
    );
}

/* Validação dos tipos de entrada dos atributos */
Text.propTypes = {
    tag: PropTypes.string.isRequired,
    variant: PropTypes.string,  // Não é obrigatório pq tem valor padrão
    children: PropTypes.node.isRequired,
}

Text.defaultProps = {
    tag: 'span',
    variant: 'paragraph1',
}