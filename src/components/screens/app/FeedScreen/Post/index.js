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
  background-color: ${({ theme }) => theme.colors.background.light.color};
  margin-bottom: 40px;
  max-width: 100vw;
  border-top: 1px solid ${({ theme }) => theme.colors.borders.main.color};
  border-bottom: 1px solid ${({ theme }) => theme.colors.borders.main.color};

  ${breakpointsMedia({
    md: css`
      max-width: 600px;
      border: 1px solid ${({ theme }) => theme.colors.borders.main.color};
    `,
  })}
`;

export function Post({
  description,
  likes,
  photoUrl,
  user,
  filter,
}) {
  return (
    <PostWrapper>
      <Box>
        <PostNav user={user} />
        <PostImage src={photoUrl} filter={filter} likes={likes.length} />
        <PostActions likes={likes.length} />
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
  filter: PropTypes.string.isRequired,
};
