import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { Grid } from '../../../../../foundation/layout/Grid';
import Text from '../../../../../foundation/Text';
import { Avatar } from '../../../../../commons/Avatar';
import { breakpointsMedia } from '../../../../../../theme/utils/breakpointsMedia';

const Comments = styled.div`
  display: flex;
  padding: 0px 8px 24px 8px;
  /* padding-bottom: 24px; */
`;

const PostDescription = styled.div`
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  display: flex;
  align-items: center;
`;

const CommentsButton = styled.button`
  width: 54px;
  height: 24px;
  border-radius: 8px;
  border: 0;
  background-color: ${({ theme }) => theme.colors.borders.main.color};
  color: ${({ theme }) => theme.colors.tertiary.light.color};
`;

const OverlappedAvatars = styled.div`
  ${breakpointsMedia({
    xs: css`
      width: 60px;
    `,
  })}
  
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  position: relative;

  div > img {
    border: 3px solid white;
    border-radius: 50%;
  }

  div:nth-child(1) {
    grid-column: 1 / span 5;
    grid-row: 1; // must be on the same row as the other image
    z-index: 2; // make this image render on top of the bottom
  }

  div:nth-child(2) {
    grid-column: 3 / span 5;
    grid-row: 1; // must be on the same row as the other image
    z-index: 1; // make this image render on top of the bottom
  }

  div:nth-child(3) {
    grid-column: 5 / -1;
    grid-row: 1; // must be on the same row as the other image
    z-index: 0; // make this image render on top of the bottom
  }
`;

export function PostComments({ description }) {
  return (
    <Comments>
      <Grid.Col>
        <OverlappedAvatars>
          <Avatar
            src="https://via.placeholder.com/32"
            size={24}
          />
          <Avatar
            src="https://via.placeholder.com/32"
            size={24}
          />
          <Avatar
            src="https://via.placeholder.com/32"
            size={24}
          />
        </OverlappedAvatars>
      </Grid.Col>
      <PostDescription>
        <Text
          variant="paragraph2"
          color="tertiary.main"
        >
          {description}
        </Text>
      </PostDescription>
      <Grid.Col
        display="flex"
        justifyContent="flex-end"
      >
        <CommentsButton>
          <Text
            variant="paragraph2"
          >
            Mais
          </Text>
        </CommentsButton>
      </Grid.Col>
    </Comments>
  );
}

PostComments.propTypes = {
  description: PropTypes.string.isRequired,
};
