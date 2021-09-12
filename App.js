import React from 'react';
import 'react-native-gesture-handler';

import AppStateProvier from './src/data/provider/AppStateProvider';
import Nav from './src/components/Nav';

function App() {
  return (
    <>
    <AppStateProvier>
      <Nav/>
    </AppStateProvier>
    </>

  );
};

export default App;
