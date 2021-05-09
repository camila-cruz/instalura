import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { HeartOutline as LikeIcon } from '@styled-icons/evaicons-outline';
import { breakpointsMedia } from '../../../../../../theme/utils/breakpointsMedia';
import { Box } from '../../../../../foundation/layout/Box';

const Image = styled.figure`
  position: relative;
  padding: 0;
  margin: 0;
  /* transition: 1s cubic-bezier(.17,.67,.83,.67); */

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

function LikeWrapper({ toggleLike, likes }) {
  return (
    <Box
      position="absolute"
      top={0}
      width="100%"
      height="100%"
      onClick={toggleLike}
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
  toggleLike: PropTypes.func.isRequired,
  likes: PropTypes.number.isRequired,
};

export function PostImage({
  src, filter, likes, toggleLike,
}) {
  return (
    <Image className={`filter-${filter}`}>
      <img src={src} alt="Nicolas Cage e uma espada" loading="lazy" />
      <LikeWrapper likes={likes} toggleLike={toggleLike} />
    </Image>
  );
}

PostImage.propTypes = {
  src: PropTypes.string.isRequired,
  filter: PropTypes.string.isRequired,
  likes: PropTypes.number.isRequired,
  toggleLike: PropTypes.func.isRequired,
};
