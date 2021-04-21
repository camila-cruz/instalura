import React from 'react';
import styled, { css } from 'styled-components';
import {
  HomeOutline as HomeIcon,
  SearchOutline as SearchIcon,
  PlusOutline as AddIcon,
  HeartOutline as HeartIcon,
} from '@styled-icons/evaicons-outline';
import { get } from 'lodash';
import { Avatar } from '../../../../commons/Avatar';

const TabBarWrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  /* height: 64px; */
  width: 100%;
  width: -webkit-fill-available;

  display: flex;
  justify-content: space-between;
  padding: 12px 26px;

  border-top-left-radius: 24px;
  border-top-right-radius: 24px;

  background-color: yellow;
  z-index: 99;
`;

const Tab = styled.div`
  height: 40px;
  width: 40px;
  
  display: flex;
  justify-content: center;
  align-items: center;

  ${({ rounded }) => rounded && css`
    background-color: #FB7B6B;
    border-radius: 50%;
    & > svg {
      fill: #FFFFFF;
    }
  `};

  ${({ selected }) => selected && css`
    & > svg {
      fill: ${(props) => get(props.theme, `colors.${props.variant}.color`)};
    }
  `}
`;

export function TabBar() {
  return (
    <TabBarWrapper>
      <Tab>
        <HomeIcon size={24} />
      </Tab>
      <Tab>
        <SearchIcon size={24} />
      </Tab>
      <Tab rounded>
        <AddIcon size={24} />
      </Tab>
      <Tab>
        <HeartIcon size={24} />
      </Tab>
      <Tab>
        <Avatar src="https://via.placeholder.com/32" size={24} />
      </Tab>
    </TabBarWrapper>
  );
}
