import React, { useState } from 'react';
import AppStateContext from '../context/AppStateContext';

const AppStateProvier = ({children}) => {

  const [user, setUser] = useState([]);
  const [viewImageList, setViewImageList] = useState(true);

  return (
    <AppStateContext.Provider value={{user, setUser, viewImageList, setViewImageList}}>
      {children}
    </AppStateContext.Provider>
  )
}

export default AppStateProvier;
