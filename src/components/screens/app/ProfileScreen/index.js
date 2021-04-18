/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Box } from '../../../foundation/layout/Box';
import { Post } from './Post';
import { TabBar } from './TabBar';

const ProfileScreenWrapper = styled.div`
  background-color: #e9e9e9;
  width: 100%;
  padding-bottom: 30px;
`;

export default function ProfileScreen({ posts }) {
  return (
    <ProfileScreenWrapper>
      <Box>
        {/* eslint-disable-next-line react/prop-types */}
        {posts && posts.map((post) => <Post {...post} />)}
      </Box>
      <TabBar />
    </ProfileScreenWrapper>
  );
}

ProfileScreen.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  posts: PropTypes.array.isRequired,
};
