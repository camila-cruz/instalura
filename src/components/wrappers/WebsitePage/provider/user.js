import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { UserContext } from '../context/user';

export function UserProvider({ children }) {
  const [posts, setPostsList] = useState([]);

  return (
    <UserContext.Provider
      value={{
        posts,
        setPosts: (postsList) => setPostsList(postsList),
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
