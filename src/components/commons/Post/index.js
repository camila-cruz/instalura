import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { Box } from '../../foundation/layout/Box';
import { PostNav } from './PostNav';
import { PostImage } from './PostImage';
import { PostActions } from './PostActions';
import { PostComments } from './PostComments';
import { breakpointsMedia } from '../../../theme/utils/breakpointsMedia';
import { useLikes } from '../../../infra/hooks/posts/useLike';

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
  filter,
  id,
  userInfo,
}) {
  const userID = userInfo.id;
  const postID = id;

  const likesController = useLikes({ postID, likes, userID });

  return (
    <PostWrapper>
      <Box>
        <PostNav user={userInfo.username} />
        <PostImage
          src={photoUrl}
          filter={filter}
          likesController={likesController}
          height={{
            xs: '320px',
            md: '510px',
          }}
        />
        <PostActions
          likes={likesController.likesCount}
          isLiked={likesController.isLiked}
        />
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
  filter: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  userInfo: PropTypes.object.isRequired,
};

export function ProfilePost({
  likes,
  photoUrl,
  filter,
  id,
  userID,
}) {
  const postID = id;

  const likesController = useLikes({ postID, likes, userID });

  return (
    <PostImage
      src={photoUrl}
      filter={filter}
      likesController={likesController}
      width="inherit"
      height="inherit"
    />
  );
}

ProfilePost.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  likes: PropTypes.array.isRequired,
  photoUrl: PropTypes.string.isRequired,
  filter: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  userID: PropTypes.string.isRequired,
};
