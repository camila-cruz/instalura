import React from 'react';
import PropTypes from 'prop-types';
import Logo from '../../../theme/Logo';
import { Button } from '../Button';
import { MenuWrapper } from './styles/MenuWrapper';
import Link from '../Link';
import { TabBar } from '../TabBar';
import { Grid } from '../../foundation/layout/Grid';
import { authService } from '../../../services/auth/authService';

const links = [
  {
    texto: 'Home',
    url: '/',
  },
  {
    texto: 'Perguntas frequentes',
    url: '/faq',
  },
  {
    texto: 'Sobre',
    url: '/sobre',
  },
];

export default function Menu({ onCadastrarClick }) {
  const hasActiveSession = authService(null).hasActiveSession();

  if (hasActiveSession) {
    return (
      <MenuWrapper hasActiveSession={hasActiveSession}>
        <Grid.Col
          value={{
            xs: 12,
            md: 2,
          }}
          offset={{
            xs: 0,
            md: 1,
          }}
        >
          <MenuWrapper.LeftSide hasActiveSession={hasActiveSession}>
            <Logo />
          </MenuWrapper.LeftSide>
        </Grid.Col>
        <Grid.Col
          value={{
            md: 3,
          }}
          offset={{
            md: 5,
          }}
        >
          <MenuWrapper.RightSide>
            <TabBar />
          </MenuWrapper.RightSide>
        </Grid.Col>
      </MenuWrapper>
    );
  }

  return (
    <MenuWrapper>
      <MenuWrapper.LeftSide>
        <Logo />
      </MenuWrapper.LeftSide>
      <MenuWrapper.CentralSide>
        {links.map((link) => (
          <li key={link.url}>
            <Link href={link.url}>
              {link.texto}
            </Link>
          </li>
        ))}
      </MenuWrapper.CentralSide>
      <MenuWrapper.RightSide>
        <Button ghost variant="secondary.main" href="/app/login">
          Entrar
        </Button>
        <Button variant="primary.main" onClick={onCadastrarClick}>
          Cadastrar
        </Button>
      </MenuWrapper.RightSide>
    </MenuWrapper>
  );
}

Menu.propTypes = {
  onCadastrarClick: PropTypes.func.isRequired,
};
