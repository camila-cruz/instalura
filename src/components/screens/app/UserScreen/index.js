import React from 'react';
import PropTypes from 'prop-types';
import { Avatar } from '../../../commons/Avatar';
import { Grid } from '../../../foundation/layout/Grid';
import Text from '../../../foundation/Text';
import { Box } from '../../../foundation/layout/Box';
import { ProfilePost } from '../../../commons/Post';
import { AuthContext } from '../../../wrappers/WebsitePage/context/auth';
import { useUserService } from '../../../../services/user/hook';

function UserStats({ statsCount, statsTitle }) {
  return (
    <Grid.Col
      value={{ xs: 3, md: 1 }}
      display="flex"
      flexDirection="column"
      justifyContent="center"
    >
      <Text
        variant="paragraph1bold"
        color="tertiary.main"
      >
        {statsCount}
      </Text>
      <Text
        variant="smallestException"
        color="tertiary.light"
      >
        {statsTitle}
      </Text>
    </Grid.Col>
  );
}

UserStats.defaultProps = {
  statsCount: 0,
};

UserStats.propTypes = {
  statsCount: PropTypes.number,
  statsTitle: PropTypes.string.isRequired,
};

function UserPostsRow(posts, index, userID) {
  const sizes = {
    xs: '95px',
    sm: '120px',
    md: '150px',
    lg: '250px',
  };

  return (
    <Grid.Row marginBottom={{ xs: '4px', md: '32px' }} key={index}>
      {posts.map((post) => (
        // eslint-disable-next-line no-underscore-dangle
        <Grid.Col value={4} display="flex" justifyContent="center" key={post._id}>
          <Box
            width={sizes}
            height={sizes}
          >
            <ProfilePost
              likes={post.likes}
              photoUrl={post.photoUrl}
              filter={post.filter}
              // eslint-disable-next-line no-underscore-dangle
              id={post._id}
              userID={userID}
            />
          </Box>
        </Grid.Col>
      ))}
    </Grid.Row>
  );
}

function UserPosts({ posts, userID }) {
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

function UserBio({ name, bio, display }) {
  return (
    <Grid.Col
      value={{ xs: 12, lg: 6 }}
      // display="flex"
      display={display}
      flexDirection="column"
      justifyContent="flex-start"
      padding="16px"
    >
      <Text
        variant="paragraph1bold"
        color="tertiary.main"
      >
        {name}
      </Text>
      <Text
        variant="paragraph2"
        color="tertiary.light"
      >
        {bio}
      </Text>
    </Grid.Col>
  );
}

UserBio.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  display: PropTypes.any.isRequired,
  name: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
};

export default function UserScreen({ userInfo }) {
  const { posts, setPosts } = React.useContext(AuthContext);
  const dados = useUserService.getProfilePage();

  React.useEffect(() => {
    if (!dados.loading) setPosts(dados.data.posts.reverse());
  }, [dados]);

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
};
