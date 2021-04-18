import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { get } from 'lodash';
import { Grid } from '../../../../../foundation/layout/Grid';

const Comments = styled.div`
  display: flex;
  border: 1px solid green;
  padding-bottom: 24px;
`;

const PostDescription = styled.div`
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

const CommentsButton = styled.button`
  width: 54px;
  height: 24px;
  border-radius: 8px;
  /* background-color: ${({ theme }) => theme.colors.borders.main.color};
  color: ${({ theme }) => theme.colors.tertiary.light.color}; */
/* 
  background-color: ${(props) => get(props.theme, 'colors.borders.main.color')};
  color: ${(props) => get(props.theme, 'colors.tertiary.light.contrastText')}; */
`;

export function PostComments({ description }) {
  return (
    <Comments>
      <Grid.Col>
        avatares
      </Grid.Col>
      <PostDescription>
        {description}
      </PostDescription>
      <Grid.Col>
        <CommentsButton>
          Mais
        </CommentsButton>
      </Grid.Col>
    </Comments>
  );
}

PostComments.propTypes = {
  description: PropTypes.string.isRequired,
};
