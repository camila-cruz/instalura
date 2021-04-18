import React from 'react';
import styled from 'styled-components';
import { Grid } from '../../../../foundation/layout/Grid';

const TabBarWrapper = styled.div`
  height: 64px;
  width: 100%;
  position: fixed;
  bottom: 0;
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
  background-color: yellow;
  z-index: 99;
`;

export function TabBar() {
  return (
    <TabBarWrapper>
      <Grid.Row>
        <Grid.Col
          offset={1}
          value={2}
        >
          home
        </Grid.Col>
        <Grid.Col
          value={2}
        >
          search
        </Grid.Col>
        <Grid.Col
          value={2}
        >
          add
        </Grid.Col>
        <Grid.Col
          value={2}
        >
          like
        </Grid.Col>
        <Grid.Col
          value={2}
        >
          profile
        </Grid.Col>
      </Grid.Row>
    </TabBarWrapper>
  );
}
