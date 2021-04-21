import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { light, dark } from '../../../../theme';
import { GlobalStyle } from '../../../../theme/GlobalStyle';
import { ThemeSwitcher } from '../../../commons/ThemeSwitcher';

export default function WebsiteGlobalProvider({ children }) {
  const [theme, setTheme] = React.useState(light);

  function toggleTheme() {
    setTheme(theme === light ? dark : light);
  }

  return (
    <ThemeProvider theme={theme}>
      <ThemeSwitcher onClick={toggleTheme} theme={theme === light ? 'light' : 'dark'} />
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
}

WebsiteGlobalProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
