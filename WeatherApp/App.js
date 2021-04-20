import React, { useState } from 'react';
import { StatusBar } from 'react-native';
import { reducer } from './src/services/state/Reducer';
import { StateProvider } from './src/services/state/State';
import { initialState } from './src/services/state/InitialState';
import Navigator from './src/navigators/Navigator';

const App = () => {

  const [initialRoute, setInitialRoute] = useState(null);

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#003822" />
      <StateProvider initialState={initialState} reducer={reducer}>
        <Navigator initialRoute={initialRoute} />
      </StateProvider>
    </>
  );
};

export default App;