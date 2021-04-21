import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { parseCookies, setCookie } from 'nookies';
import { light, dark } from '../../../../theme';
import { GlobalStyle } from '../../../../theme/GlobalStyle';
import { ThemeSwitcher } from '../../../commons/ThemeSwitcher';

export default function WebsiteGlobalProvider({ children }) {
  const [theme, setTheme] = React.useState(() => {
    const { APP_THEME } = parseCookies(null);
    return APP_THEME === 'light' ? light : dark;
  });

  useEffect(() => {
    setCookie(null, 'APP_THEME', theme === light ? 'light' : 'dark', {
      path: '/',
      maxAge: 30 * 24 * 60 * 60,
    });
  }, [theme]);

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
