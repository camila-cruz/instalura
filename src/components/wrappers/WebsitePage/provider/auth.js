import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { AuthContext } from '../context/auth';
import { authService } from '../../../../services/auth/authService';
import { UserProvider } from './user';

export function AuthProvider({ children }) {
  const [user, setUser] = useState({});
  const [hasActiveSession, setHasActiveSession] = useState(false);

  useEffect(() => {
    authService(null)
      .hasActiveSession()
      .then((status) => setHasActiveSession(status));

    authService(null)
      .getSession()
      .then((session) => setUser(session));
  }, []);

  return (
    <AuthContext.Provider
      value={{
        hasActiveSession,
        user,
      }}
    >
      <UserProvider>
        {children}
      </UserProvider>
    </AuthContext.Provider>
  );
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
