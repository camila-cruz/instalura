import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { propToStyle } from '../../../theme/utils/propToStyle';

const AvatarBase = styled.div`
  border-radius: 50%;
  height: ${({ size }) => size}px;
  width: ${({ size }) => size}px;
  clip-path: circle(50% at 50% 50%);
  
  & > img {
    width: inherit;
  }

  ${propToStyle('height')}
  ${propToStyle('width')}
`;

export function Avatar({ src, size, alt = 'usuário' }) {
  return (
    <AvatarBase height={size} width={size} size={size}>
      <img src={src} alt={`Avatar do ${alt}`} />
    </AvatarBase>
  );
}

Avatar.propTypes = {
  src: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
  alt: PropTypes.string.isRequired,
};
