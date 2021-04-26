import React from 'react';
import PropTypes from 'prop-types';
import { Avatar } from '../../../commons/Avatar';
import { Grid } from '../../../foundation/layout/Grid';
import Text from '../../../foundation/Text';
import { Box } from '../../../foundation/layout/Box';

function UserStats({ statsCount, statsTitle }) {
  return (
    <Grid.Col
      value={{ xs: 3 }}
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

UserStats.propTypes = {
  statsCount: PropTypes.number.isRequired,
  statsTitle: PropTypes.string.isRequired,
};

function UserPosts() {
  const arr = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  return (
    arr.map(() => <img src="https://via.placeholder.com/95" alt="" />)
  );
}

export default function UserScreen() {
  return (
    <Grid.Container>
      <Grid.Row>
        <Grid.Col
          value={{ xs: 3 }}
          // padding={0}
        >
          <Avatar
            src="https://via.placeholder.com/88"
            size={70}
          />
        </Grid.Col>
        <UserStats
          statsCount="234"
          statsTitle="Publicações"
        />
        <UserStats
          statsCount="22k"
          statsTitle="Seguindo"
        />
        <UserStats
          statsCount="134k"
          statsTitle="Seguidores"
        />
        <Grid.Col
          value={{ xs: 12, md: 12 }}
          display="flex"
          flexDirection="column"
          justifyContent="flex-start"
          padding="16px"
        >
          <Text
            variant="paragraph1bold"
            color="tertiary.main"
          >
            Nicolas Cage
          </Text>
          <Text
            variant="paragraph2"
            color="tertiary.light"
          >
            A wholesome person responsible for the best movies ever.
          </Text>
        </Grid.Col>
      </Grid.Row>
      <Box
        display="flex"
        flexWrap="wrap"
        justifyContent="space-between"
      >
        <UserPosts />
      </Box>
    </Grid.Container>
  );
}
