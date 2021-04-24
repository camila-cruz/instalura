import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { Box } from '../../../../foundation/layout/Box';
import { PostNav } from './PostNav';
import { PostImage } from './PostImage';
import { PostActions } from './PostActions';
import { PostComments } from './PostComments';
import { breakpointsMedia } from '../../../../../theme/utils/breakpointsMedia';

const PostWrapper = styled.div`
  background-color: white;
  margin-bottom: 40px;
  max-width: 100vw;

  ${breakpointsMedia({
    md: css`
      max-width: 600px;
    `,
  })}
`;

export function Post({
  description,
  likes,
  photoUrl,
  user,
}) {
  return (
    <PostWrapper>
      <Box>
        <PostNav user={user} />
        <PostImage src={photoUrl} />
        <PostActions likes={likes} />
        <PostComments description={description} />
      </Box>
    </PostWrapper>
  );
}

Post.propTypes = {
  description: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  likes: PropTypes.array.isRequired,
  photoUrl: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
};
