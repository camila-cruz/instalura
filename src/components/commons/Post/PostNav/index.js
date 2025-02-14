import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { MoreHorizontalOutline as DotsIcon } from '@styled-icons/evaicons-outline/MoreHorizontalOutline';
import { Avatar } from '../../Avatar';
import { Grid } from '../../../foundation/layout/Grid';
import Text from '../../../foundation/Text';

const Nav = styled.div`
  display: flex;
  justify-content: space-around;
  
  padding: 16px 12px;
`;

Nav.UserInfo = styled.div`
  display: flex;
  align-items: center;
  column-gap: 12px;
`;

Nav.Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  svg {
    fill: ${({ theme }) => theme.colors.tertiary.main.color};
  }
`;

export function PostNav({ user }) {
  return (
    <Nav>
      <Grid.Col
        value={{
          xs: 10,
        }}
      >
        <Nav.UserInfo>
          <Avatar
            src="/images/avatar.png"
            size={32}
            alt="Nicolas Cage"
          />
          <Text
            variant="paragraph2bold"
            color="tertiary.main"
          >
            {user}
          </Text>
        </Nav.UserInfo>
      </Grid.Col>
      <Grid.Col
        value={{
          xs: 2,
        }}
        display="flex"
        alignItems="center"
        justifyContent="flex-end"
      >
        <Nav.Menu>
          <DotsIcon size={24} />
        </Nav.Menu>
      </Grid.Col>
    </Nav>
  );
}

PostNav.propTypes = {
  user: PropTypes.string.isRequired,
};
