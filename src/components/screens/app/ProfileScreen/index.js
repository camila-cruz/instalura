import React from 'react';
import styled from 'styled-components';
import { Box } from '../../../foundation/layout/Box';
import { Post } from './Post';
import { TabBar } from './TabBar';

const ProfileScreenWrapper = styled.div`
  background-color: #e9e9e9;
  width: 100%;
  padding-bottom: 30px;
`;

export default function ProfileScreen() {
  return (
    <ProfileScreenWrapper>
      <Box>
        <Post />
        <Post />
      </Box>
      <TabBar />
    </ProfileScreenWrapper>
  );
}
