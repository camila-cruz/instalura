import React from 'react';
import styled, { css } from 'styled-components';
import { breakpointsMedia } from '../../../../../../theme/utils/breakpointsMedia';

const Image = styled.div`
  border: 1px solid blue;
  padding: 0;

  ${breakpointsMedia({
    xs: css`
      height: 320px;
    `,
    md: css`
      height: 510px;
    `,
  })}

  & > img {
    width: 100%;
    height: inherit;
    object-fit: cover;
  }
`;

export function PostImage() {
  return (
    <Image>
      <img src="https://via.placeholder.com/350x450" alt="Nicolas Cage e uma espada" />
    </Image>
  );
}
