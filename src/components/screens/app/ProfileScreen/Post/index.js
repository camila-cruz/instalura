import React from 'react';
import styled from 'styled-components';
import { Box } from '../../../../foundation/layout/Box';
import { PostNav } from './PostNav';
import { PostImage } from './PostImage';
import { PostActions } from './PostActions';
import { PostComments } from './PostComments';

const PostWrapper = styled.div`
  background-color: white;
  margin-bottom: 40px;
`;

export function Post() {
  return (
    <PostWrapper>
      <Box>
        <PostNav />
        <PostImage />
        <PostActions />
        <PostComments />
      </Box>
    </PostWrapper>
  );
}
