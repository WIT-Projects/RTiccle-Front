import React, { useState } from 'react';
import AppStateContext from '../context/AppStateContext';

const AppStateProvier = ({children}) => {

  const [user, setUser] = useState([]);
  return (
    <AppStateContext.Provider value={{user, setUser}}>
      {children}
    </AppStateContext.Provider>
  )
}

export default AppStateProvier;
