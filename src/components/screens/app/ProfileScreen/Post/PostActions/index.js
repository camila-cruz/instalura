import React from 'react';
import styled from 'styled-components';
import { Grid } from '../../../../../foundation/layout/Grid';

const ActionsBar = styled.div`
  display: flex;
  border: 1px solid orange;
  padding: 16px 24px;
`;

const Action = styled.div`
  margin-right: 16px;
`;

export function PostActions() {
  return (
    <ActionsBar>
      <Grid.Col
        value={10}
        display="flex"
        padding={0}
      >
        <Action>
          5.2k
        </Action>
        <Action>
          1.2k
        </Action>
        <Action>
          avião
        </Action>
      </Grid.Col>

      <Grid.Col
        value={2}
        display="flex"
        justifyContent="flex-end"
        padding={0}
      >
        book
        {/* bookmark */}
      </Grid.Col>
    </ActionsBar>
  );
}
