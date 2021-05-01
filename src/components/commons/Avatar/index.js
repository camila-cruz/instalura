import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { propToStyle } from '../../../theme/utils/propToStyle';

const AvatarBase = styled.div`
  ${({ size }) => {
    if (typeof size === 'number') {
      return css`
        height: ${size}px;
        width: ${size}px;
      `;
    }
    return css`
      height: ${size};
      width: ${size};
    `;
  }}

  /* clip-path: circle(50% at 50% 50%); */
  
  & > img {
    width: inherit;
    border-radius: 50%;
  }

  ${propToStyle('height')}
  ${propToStyle('width')}
`;

export function Avatar({ src, size = 'inherit', alt = 'usuário' }) {
  return (
    <AvatarBase
      height={size}
      width={size}
      size={typeof size === 'object' ? '' : size}
    >
      <img src={src} alt={`Avatar do ${alt}`} />
    </AvatarBase>
  );
}

Avatar.propTypes = {
  src: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  size: PropTypes.any.isRequired,
  alt: PropTypes.string.isRequired,
};
