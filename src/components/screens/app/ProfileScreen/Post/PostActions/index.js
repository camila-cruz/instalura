import React from 'react';
import styled from 'styled-components';
import {
  HeartOutline as LikeIcon,
  PaperPlaneOutline as PlaneIcon,
  MessageCircleOutline as CommentIcon,
  BookmarkOutline as BookmarkIcon,
} from '@styled-icons/evaicons-outline';
import { Grid } from '../../../../../foundation/layout/Grid';
import Text from '../../../../../foundation/Text';

const ActionsBar = styled.div`
  display: flex;
  padding: 16px 24px;

  svg {
    fill: ${({ theme }) => theme.colors.tertiary.main.color};
  }
`;

const Action = styled.div`
  margin-right: 16px;
  display: flex;
  align-items: center;
  column-gap: 8px;
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
          <LikeIcon size={24} />
          <Text
            variant="paragraph2bold"
            color="tertiary.main"
          >
            5.2k
          </Text>
        </Action>
        <Action>
          <CommentIcon size={24} />
          <Text
            variant="paragraph2bold"
            color="tertiary.main"
          >
            1.2k
          </Text>
        </Action>
        <Action>
          <PlaneIcon size={24} />
        </Action>
      </Grid.Col>

      <Grid.Col
        value={2}
        display="flex"
        justifyContent="flex-end"
        padding={0}
      >
        <BookmarkIcon size={24} />
      </Grid.Col>
    </ActionsBar>
  );
}
