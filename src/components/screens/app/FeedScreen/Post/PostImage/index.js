import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { breakpointsMedia } from '../../../../../../theme/utils/breakpointsMedia';

const Image = styled.figure`
  padding: 0;
  margin: 0;

  ${breakpointsMedia({
    xs: css`
      height: 320px;
    `,
    md: css`
      height: 510px;
    `,
  })}

  & > img {
    width: 100%;
    height: inherit;
    object-fit: cover;
  }
`;

export function PostImage({ src, filter }) {
  return (
    <Image className={`filter-${filter}`}>
      <img src={src} alt="Nicolas Cage e uma espada" loading="lazy" />
    </Image>
  );
}

PostImage.propTypes = {
  src: PropTypes.string.isRequired,
  filter: PropTypes.string.isRequired,
};
