import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '../../../../foundation/layout/Grid';
import Text from '../../../../foundation/Text';

export function UserBio({ name, bio, display }) {
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
