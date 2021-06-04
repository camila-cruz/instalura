import React from 'react';
import PropTypes from 'prop-types';
import { Avatar } from '../../../commons/Avatar';
import { Grid } from '../../../foundation/layout/Grid';
import { Box } from '../../../foundation/layout/Box';
import { UserStats } from './UserStats';
import { UserBio } from './UserBio';
import { UserPosts } from './UserPosts';
import { UserContext } from '../../../wrappers/WebsitePage/context/user';

export default function UserScreen({ userInfo, posts: serverPosts }) {
  const { posts, setPosts } = React.useContext(UserContext);

  React.useEffect(() => {
    setPosts(serverPosts.reverse());
  }, []);

  return (
    <Grid.Container
      marginTop={{ xs: '24px', md: '64px' }}
    >
      <Grid.Row
        justifyContent="center"
        columnGap={{ md: '10px' }}
      >
        <Grid.Col
          value={{ xs: 3, md: 2, lg: 3 }}
          // offset={{ md: 3 }}
          // padding={0}
        >
          <Box
            width={{
              xs: '70px',
              sm: '90px',
              md: '120px',
              lg: '188px',
            }}
          >
            <Avatar
              src="/images/avatar.png"
              alt="Foto de perfil deste usuário"
              size="inherit"
            />
          </Box>
        </Grid.Col>
        <UserStats
          statsCount={userInfo.totalPosts}
          statsTitle="Publicações"
        />
        <UserStats
          statsCount={userInfo.totalFollowing}
          statsTitle="Seguindo"
        />
        <UserStats
          statsCount={userInfo.totalFollowers}
          statsTitle="Seguidores"
        />
        <UserBio
          name="Nicolas Cage"
          bio={userInfo.bio}
          // display={{ xs: 'flex', md: 'none' }}
          display="flex"
        />
      </Grid.Row>
      <Box
        display="flex"
        flexWrap="wrap"
        justifyContent="space-between"
      >
        <UserPosts posts={posts} userID={userInfo.id} />
      </Box>
    </Grid.Container>
  );
}

UserScreen.propTypes = {
  userInfo: PropTypes.shape({
    id: PropTypes.string,
    bio: PropTypes.string,
    totalPosts: PropTypes.number,
    totalFollowing: PropTypes.number,
    totalFollowers: PropTypes.number,
  }).isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  posts: PropTypes.array.isRequired,
};
