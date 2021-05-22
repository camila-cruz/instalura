import React from 'react';
import { Lottie } from '@crello/react-lottie';
import PropTypes from 'prop-types';
import { Box } from '../../../../foundation/layout/Box';

import likeAnimation from './animations/likeAnimation.json';

export default function LikeWrapper({ likes, isLiked }) {
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
          <Lottie
            width="50px"
            height="50px"
            className="lottie-container basic"
            playingState={isLiked ? 'playing' : 'stopped'}
            config={{ animationData: likeAnimation, loop: false, autoplay: false }}
          />
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
  isLiked: PropTypes.bool.isRequired,
};
