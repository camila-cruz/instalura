import React from 'react';
import styled, { css } from 'styled-components';
import {
  HomeOutline as HomeIcon,
  SearchOutline as SearchIcon,
  PlusOutline as AddIcon,
  HeartOutline as HeartIcon,
} from '@styled-icons/evaicons-outline';
import NextLink from 'next/link';
import { Avatar } from '../Avatar';
import { breakpointsMedia } from '../../../theme/utils/breakpointsMedia';
import { propToStyle } from '../../../theme/utils/propToStyle';
import Modal from '../Modal';
import FormImagem from '../../patterns/FormImagem';
// import { authService } from '../../../services/auth/authService';

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

const Tab = styled.div`
  height: 40px;
  width: 40px;
  
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  transition: 0.3s ease;

  &:hover {
    opacity: 0.6;
  }

  svg {
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
    svg {
      fill: ${({ theme }) => theme.colors.primary.main.color};
      ${propToStyle('size')}
    }

    img {
      border: 2px solid ${({ theme }) => theme.colors.primary.main.color};
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
  const [tabSelected, setTabSelected] = React.useState('home');
  // const [user, setUser] = React.useState({});

  // React.useEffect(() => {
  //   authService()
  //     .getSession()
  //     .then((data) => setUser(data));
  // }, []);

  return (
    <TabBarWrapper>
      <Modal
        isOpen={isModalImagemOpen}
        onClose={() => setModalImagem(false)}
        animation={{
          open: {
            // y: 0,
            scale: 1,
          },
          closed: {
            // y: -100,
            scale: 0,
          },
        }}
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {(ModalCloseButton, propsDoModal) => (
          <FormImagem propsDoModal={propsDoModal} ModalCloseButton={ModalCloseButton} />
        )}
      </Modal>
      <Tab
        selected={tabSelected === 'home'}
        order={{
          md: 2,
        }}
        onClick={() => setTabSelected('home')}
      >
        <NextLink href="/app/feed/">
          <a href="/app/feed/">
            <HomeIcon />
          </a>
        </NextLink>
      </Tab>
      <Tab
        selected={tabSelected === 'search'}
        order={{
          md: 0,
        }}
        onClick={() => setTabSelected('search')}
      >
        <SearchIcon />
      </Tab>
      <Tab
        selected={tabSelected === 'new-post'}
        order={{
          md: 1,
        }}
        onClick={() => {
          setTabSelected('new-post');
          setModalImagem(true);
        }}
        rounded
      >
        <AddIcon />
      </Tab>
      <Tab
        selected={tabSelected === 'favorites'}
        order={{
          md: 3,
        }}
        onClick={() => setTabSelected('favorites')}
      >
        <HeartIcon />
      </Tab>
      <Tab
        selected={tabSelected === 'profile'}
        order={{
          md: 4,
        }}
        onClick={() => setTabSelected('profile')}
      >
        {/* <NextLink href={`/app/profile/${user.id}`}>
          <a href={`/app/profile/${user.id}`}> */}
        <NextLink href="/app/profile/">
          <a href="/app/profile/">
            <Avatar
              src="/images/avatar.png"
              size={{ xs: '24px', md: '32px' }}
              alt="Ir para a sua página de perfil"
            />
          </a>
        </NextLink>
      </Tab>
    </TabBarWrapper>
  );
}
