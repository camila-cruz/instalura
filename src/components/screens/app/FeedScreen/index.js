/* eslint-disable no-underscore-dangle */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Box } from '../../../foundation/layout/Box';
import { Post } from './Post';
import { Grid } from '../../../foundation/layout/Grid';
import Text from '../../../foundation/Text';
import { ProjectCard } from './ProjectCard';
import { useUserService } from '../../../../services/user/hook';

const FeedScreenWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.background.main.color};
  width: 100%;
  padding-bottom: 30px;
`;

export default function FeedScreen({ user }) {
  const [posts, setPosts] = React.useState([]);
  const dados = useUserService.getProfilePage();

  React.useEffect(() => {
    if (!dados.loading) setPosts(dados.data.posts.reverse());
  }, [dados]);

  return (
    <FeedScreenWrapper>
      <Box>
        <Grid.Container
          padding={{
            xs: '0px',
            md: 'initial',
          }}
        >
          <Grid.Row
            noMargin
            marginTop={{
              xs: '0px',
              md: '24px',
            }}
          >
            <Grid.Col
              value={{
                xs: 12,
                md: 6,
              }}
              offset={{
                xs: 0,
                md: 1,
              }}
              padding={{
                xs: '0px',
                md: 'initial',
              }}
            >
              {/* eslint-disable-next-line react/prop-types */}
              {posts && posts.map((post) => <Post {...post} key={post._id} />)}
            </Grid.Col>
            <Grid.Col
              display={{
                xs: 'none',
                md: 'flex',
              }}
              flexDirection="column"
              value={{
                xs: 0,
                md: 4,
              }}
            >
              <ProjectCard
                username={user.username}
                name="Camila Cruz"
                imageSrc="https://via.placeholder.com/64"
                githubUrl="https://github.com/camila-cruz"
                currentUser
              />
              <Text
                variant="paragraph1bold"
                color="tertiary.light"
                marginLeft="16px"
                marginBottom="24px"
              >
                Projetos da galera
              </Text>
              <ProjectCard
                username={user.username}
                name="Camila Cruz"
                imageSrc="https://via.placeholder.com/48"
                githubUrl="https://github.com/camila-cruz"
              />
              <ProjectCard
                username={user.username}
                name="Camila Cruz"
                imageSrc="https://via.placeholder.com/48"
                githubUrl="https://github.com/camila-cruz"
              />
              <ProjectCard
                username={user.username}
                name="Camila Cruz"
                imageSrc="https://via.placeholder.com/48"
                githubUrl="https://github.com/camila-cruz"
              />
              <ProjectCard
                username={user.username}
                name="Camila Cruz"
                imageSrc="https://via.placeholder.com/48"
                githubUrl="https://github.com/camila-cruz"
              />
            </Grid.Col>
          </Grid.Row>
        </Grid.Container>
      </Box>
    </FeedScreenWrapper>
  );
}

FeedScreen.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  user: PropTypes.object.isRequired,
};
