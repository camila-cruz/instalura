import React from 'react';
import styled from 'styled-components';
import { MoreHorizontalOutline as DotsIcon } from '@styled-icons/evaicons-outline/MoreHorizontalOutline';
import { Avatar } from '../../../../../commons/Avatar';
import { Grid } from '../../../../../foundation/layout/Grid';
import Text from '../../../../../foundation/Text';

const Nav = styled.div`
  border: 1px solid red;
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
`;

export function PostNav() {
  return (
    <Nav>
      <Grid.Col
        value={{
          xs: 10,
        }}
      >
        <Nav.UserInfo>
          <Avatar
            src="https://via.placeholder.com/32"
            size={32}
            alt="Nicolas Cage"
          />
          <Text
            variant="paragraph2bold"
          >
            Nicolas Cage
          </Text>
        </Nav.UserInfo>
      </Grid.Col>
      <Grid.Col
        value={{
          xs: 2,
        }}
        display="flex"
        alignItems="center"
      >
        <Nav.Menu>
          <DotsIcon size={24} />
        </Nav.Menu>
      </Grid.Col>
    </Nav>
  );
}
