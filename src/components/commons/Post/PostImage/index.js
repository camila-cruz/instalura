import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { propToStyle } from '../../../../theme/utils/propToStyle';
import LikeWrapper from './LikeWrapper';

const Image = styled.figure`
  position: relative;
  padding: 0;
  margin: 0;

  ${propToStyle('height')}
  ${propToStyle('width')}

  & > img {
    width: 100%;
    height: inherit;
    object-fit: cover;
    transition: 0.2s cubic-bezier(.17,.67,.83,.67);
  }

  & > div {
    display: none;
  }

  &:hover, &:focus {
    cursor: pointer;

    & > img {
      opacity: 0.5;
    }

    & > div {
      display: block;
    }
  }
`;

export function PostImage({
  src, filter, likesController, height, width,
}) {
  return (
    <Image
      className={(filter && filter.includes('filter') && filter) || `filter-${filter}`}
      height={height}
      width={width}
      onClick={likesController.toggleLike}
    >
      <img src={src} alt="Nicolas Cage e uma espada" loading="lazy" />
      <LikeWrapper likes={likesController.likesCount} isLiked={likesController.isLiked} />
    </Image>
  );
}

PostImage.defaultProps = {
  height: 'initial',
  width: 'initial',
};

PostImage.propTypes = {
  src: PropTypes.string.isRequired,
  filter: PropTypes.string.isRequired,
  likesController: PropTypes.shape({
    likesCount: PropTypes.number.isRequired,
    isLiked: PropTypes.bool.isRequired,
    toggleLike: PropTypes.func.isRequired,
  }).isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  height: PropTypes.any,
  // eslint-disable-next-line react/forbid-prop-types
  width: PropTypes.any,
};
