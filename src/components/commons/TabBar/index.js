import React from 'react';
import styled, { css } from 'styled-components';
import {
  HomeOutline as HomeIcon,
  SearchOutline as SearchIcon,
  PlusOutline as AddIcon,
  HeartOutline as HeartIcon,
} from '@styled-icons/evaicons-outline';
import { get } from 'lodash';
import { Avatar } from '../Avatar';
import { breakpointsMedia } from '../../../theme/utils/breakpointsMedia';
import { propToStyle } from '../../../theme/utils/propToStyle';
import Modal from '../Modal';
import FormImagem from '../../patterns/FormImagem';

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

  background-color: ${({ theme }) => theme.colors.background.light.color};

  box-shadow: 0px -10px 16px rgba(0, 0, 0, 0.04);
  border-radius: 24px 24px 0px 0px;
  border-top-color: ${({ theme }) => theme.colors.borders.main.color};
  border-top-style: solid;
  border-top-width: 1px;

  z-index: 99;

  ${breakpointsMedia({
    // Quando estiver no menu superior
    md: css`
      position: relative;
      width: auto;
      display: flex;
      justify-content: flex-end;
      column-gap: 32px;
      padding: 0px;
      box-shadow: none;
      border: none;
    `,
  })}
`;

// const TabIcon = (icon) => styled(icon)`
//   fill: ${({ theme }) => theme.colors.tertiary.main.color};
// `;

const Tab = styled.div`
  height: 40px;
  width: 40px;
  
  display: flex;
  justify-content: center;
  align-items: center;

  & > svg {
    fill: ${({ theme }) => theme.colors.tertiary.main.color};
    ${breakpointsMedia({
    xs: css`
      width: 24px;
      height: 24px;
    `,
    md: css`
      width: 32px;
      height: 32px;
    `,
  })}
  }

  ${({ rounded }) => rounded && css`
    background-color: #FB7B6B;
    border-radius: 50%;
    & > svg {
      fill: #FFFFFF;
      width: 24px;
      height: 24px;
    }
  `};

  ${({ selected }) => selected && css`
    & > svg {
      fill: ${(props) => get(props.theme, `colors.${props.variant}.color`)};
      ${propToStyle('size')}
    }
  `}
    

  ${breakpointsMedia({
    md: css`
      height: 32px;
      width: 32px;
    `,
  })}

  ${propToStyle('order')}
`;

export function TabBar() {
  const [isModalImagemOpen, setModalImagem] = React.useState(false);

  return (
    <TabBarWrapper>
      <Modal isOpen={isModalImagemOpen} onClose={() => setModalImagem(false)}>
        {(propsDoModal) => (
          <FormImagem propsDoModal={propsDoModal} />
        )}
      </Modal>
      <Tab
        order={{
          md: 2,
        }}
      >
        {/* {TabIcon(HomeIcon)} */}
        <HomeIcon />
      </Tab>
      <Tab
        order={{
          md: 0,
        }}
      >
        <SearchIcon />
      </Tab>
      <Tab
        order={{
          md: 1,
        }}
        rounded
        onClick={() => setModalImagem(true)}
      >
        <AddIcon />
      </Tab>
      <Tab
        order={{
          md: 3,
        }}
      >
        <HeartIcon />
      </Tab>
      <Tab
        order={{
          md: 4,
        }}
      >
        <Avatar src="https://via.placeholder.com/32" size={{ xs: '24px', md: '32px' }} />
      </Tab>
    </TabBarWrapper>
  );
}
