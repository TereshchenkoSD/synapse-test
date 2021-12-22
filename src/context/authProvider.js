import { useState, useMemo } from 'react';
import authContext from './authContext';

export default function Provider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);

  const onLogIn = user => {
    setCurrentUser(user);
  };

  const onLogOut = () => {
    setCurrentUser(null);
  };

  const providerValue = useMemo(() => {
    return { currentUser, onLogIn, onLogOut };
  }, [currentUser]);

  return (
    <authContext.Provider value={providerValue}>
      {children}
    </authContext.Provider>
  );
}
