import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const AvatarBase = styled.div`
  border-radius: 50%;
  height: ${({ size }) => size}px;
  width: ${({ size }) => size}px;
  clip-path: circle(50% at 50% 50%);
  
  & > img {
    width: inherit;
  }
`;

export function Avatar({ src, size }) {
  return (
    <AvatarBase size={size}>
      <img src={src} alt="Avatar do usuário" />
    </AvatarBase>
  );
}

Avatar.propTypes = {
  src: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
};
