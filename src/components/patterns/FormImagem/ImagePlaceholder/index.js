import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ImagePlaceholderWrapper = styled.div`
  margin-top: 48px;
  height: 100vw;
  max-height: 375px;
  max-width: 375px;

  figure {
    margin: 0px;
    height: 100%;
    width: 100%;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;

export function ImagePlaceholder({ url, filter }) {
  const photoUrl = url || 'https://via.placeholder.com/200';

  return (
    <ImagePlaceholderWrapper>
      <figure className={`filter-${filter}`}>
        <img src={photoUrl} alt="" />
      </figure>
    </ImagePlaceholderWrapper>
  );
}

ImagePlaceholder.propTypes = {
  url: PropTypes.string.isRequired,
  filter: PropTypes.string.isRequired,
};
