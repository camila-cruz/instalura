import React from 'react';
import styled from 'styled-components';
import { Grid } from '../../../../../foundation/layout/Grid';

const Nav = styled.div`
  border: 1px solid red;
  display: flex;
  justify-content: space-around;
  
  padding: 16px 28px;
  `;

Nav.UserInfo = styled.div`
  display: flex;
  align-items: center;

  & > img {
    margin-right: 12px;
  }
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
          <img src="https://via.placeholder.com/32" alt="Avatar do Nicolas Cage" />
          Nicolas Cage
        </Nav.UserInfo>
      </Grid.Col>
      <Grid.Col
        value={{
          xs: 2,
        }}
      >
        <Nav.Menu>
          ...
        </Nav.Menu>
      </Grid.Col>
    </Nav>
  );
}
