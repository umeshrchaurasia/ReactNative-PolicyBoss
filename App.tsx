import React from 'react'
import AppEntry from './src/AppEntry'
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {persistor, store} from './src/redux/store';
import {MenuProvider} from 'react-native-popup-menu';

function App():React.JSX.Element {  
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <MenuProvider>
        <AppEntry/>
        
       </MenuProvider>

    </PersistGate>
    </Provider>
  );
}

export default App;