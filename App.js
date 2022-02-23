import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import PublicStackNavigator from './Source/Navigation/PublicStackNavigator';
import {Provider} from 'react-redux';
import {store} from './Source/Redux/Store';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <PublicStackNavigator />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
