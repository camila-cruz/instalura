import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const THEME_COLORS = {
  light: '#000',
  dark: '#FFF',
};

const ThemeSwitcherBase = styled.button`
  height: 40px;
  width: 40px;

  border: none;
  border-radius: 50%;

  position: fixed;
  bottom: 20px;
  right: 20px;

  cursor: pointer;

  ${({ currentTheme }) => css`
    background-color: ${THEME_COLORS[currentTheme]};
  `}
`;

export function ThemeSwitcher({ onClick, theme }) {
  return (
    <ThemeSwitcherBase
      role="switch"
      aria-checked
      onClick={onClick}
      currentTheme={theme}
    >
      {theme && theme === 'light' ? '🌛' : '🌞'}
    </ThemeSwitcherBase>
  );
}

ThemeSwitcher.propTypes = {
  onClick: PropTypes.func.isRequired,
  theme: PropTypes.string.isRequired,
};
