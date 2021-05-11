import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { HeartOutline as LikeIcon } from '@styled-icons/evaicons-outline';
import { Box } from '../../../foundation/layout/Box';
import { propToStyle } from '../../../../theme/utils/propToStyle';

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

function LikeWrapper({ likes }) {
  return (
    <Box
      position="absolute"
      top={0}
      width="100%"
      height="100%"
    >
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        width="100%"
        height="100%"
      >
        <div>
          <LikeIcon size={32} />
        </div>
        <div
          style={{ fontSize: '24px' }}
        >
          {likes}
        </div>
      </Box>
    </Box>
  );
}

LikeWrapper.propTypes = {
  likes: PropTypes.number.isRequired,
};

export function PostImage({
  src, filter, likes, toggleLike, height, width,
}) {
  return (
    <Image
      className={(filter && filter.includes('filter') && filter) || `filter-${filter}`}
      height={height}
      width={width}
      onClick={toggleLike}
    >
      <img src={src} alt="Nicolas Cage e uma espada" loading="lazy" />
      <LikeWrapper likes={likes} />
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
  likes: PropTypes.number.isRequired,
  toggleLike: PropTypes.func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  height: PropTypes.any,
  // eslint-disable-next-line react/forbid-prop-types
  width: PropTypes.any,
};