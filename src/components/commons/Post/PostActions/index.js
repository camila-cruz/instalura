import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {
  HeartOutline as LikeIcon,
  PaperPlaneOutline as PlaneIcon,
  MessageCircleOutline as CommentIcon,
  BookmarkOutline as BookmarkIcon,
} from '@styled-icons/evaicons-outline';
import { Heart as LikeSolidIcon } from '@styled-icons/evaicons-solid';
import { Grid } from '../../../foundation/layout/Grid';
import Text from '../../../foundation/Text';

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

export function PostActions({ likes, isLiked }) {
  return (
    <ActionsBar>
      <Grid.Col
        value={10}
        display="flex"
        padding={0}
      >
        <Action>
          {isLiked
            ? <LikeSolidIcon size={24} style={{ fill: 'red' }} />
            : <LikeIcon size={24} />}
          <Text
            variant="paragraph2bold"
            color="tertiary.main"
          >
            {likes}
            {/* 5.2k */}
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

PostActions.propTypes = {
  likes: PropTypes.number.isRequired,
  isLiked: PropTypes.bool.isRequired,
};
