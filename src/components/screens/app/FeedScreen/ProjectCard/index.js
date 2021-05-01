import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { GithubOutline as GithubIcon } from '@styled-icons/evaicons-outline/GithubOutline';
import { Avatar } from '../../../../commons/Avatar';
import Text from '../../../../foundation/Text';
import Link from '../../../../commons/Link';
import { Grid } from '../../../../foundation/layout/Grid';

const ProjectCardBase = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 16px;

  ${({ currentUser }) => currentUser && css`
    margin-bottom: 48px;

    div:nth-child(1) {
      margin-right: 16px;
    }
/* 
    div:nth-child(2) {
      padding-right: 0px;
    }

    div:last-child {
      padding-right: 8px;
    } */
  `}
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;  
`;

export function ProjectCard({
  username, name, imageSrc, githubUrl, currentUser,
}) {
  return (
    <ProjectCardBase currentUser={currentUser}>
      <Grid.Col
        value={2}
      >
        <Avatar src={imageSrc} size={currentUser ? 64 : 48} />
      </Grid.Col>
      <Grid.Col
        value={7}
      >
        <UserInfo>
          <Text
            variant="paragraph1bold"
            color="tertiary.main"
          >
            {username}
          </Text>
          <Text
            variant="paragraph1"
            color="tertiary.light"
          >
            {name}
          </Text>
        </UserInfo>
      </Grid.Col>
      <Grid.Col
        padding={0}
        display="flex"
        justifyContent="flex-end"
      >
        <Link href={githubUrl}>
          <Text
            variant="paragraph1bold"
            color="secondary.main"
            style={{
              display: 'flex',
              alignItems: 'center',
              columnGap: '8px',
            }}
          >
            <GithubIcon size={24} />
            Github
          </Text>
        </Link>
      </Grid.Col>
    </ProjectCardBase>
  );
}

ProjectCard.defaultProps = {
  currentUser: false,
};

ProjectCard.propTypes = {
  username: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  githubUrl: PropTypes.string.isRequired,
  currentUser: PropTypes.bool,
};
