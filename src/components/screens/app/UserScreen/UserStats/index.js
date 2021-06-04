import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '../../../../foundation/layout/Grid';
import Text from '../../../../foundation/Text';

export function UserStats({ statsCount, statsTitle }) {
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
