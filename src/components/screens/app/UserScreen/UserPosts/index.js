import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '../../../../foundation/layout/Grid';
import { UserPostsRow } from './UserPostsRow';

export function UserPosts({ posts, userID }) {
  const gridRowLength = 3;

  // eslint-disable-next-line react/prop-types
  const postsDividedByChunks = posts.reduce((chunk, item, index) => {
    const chunkIndex = Math.floor(index / gridRowLength);

    if (!chunk[chunkIndex]) {
      // eslint-disable-next-line no-param-reassign
      chunk[chunkIndex] = []; // start a new chunk
    }

    chunk[chunkIndex].push(item);

    return chunk;
  }, []);

  return (
    <Grid.Col value={{ md: 8 }} offset={{ md: 2 }}>
      {postsDividedByChunks.map((postsChunk, index) => UserPostsRow(postsChunk, index, userID))}
    </Grid.Col>
  );
}

UserPosts.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  posts: PropTypes.array.isRequired,
  userID: PropTypes.string.isRequired,
};
