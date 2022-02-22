import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import PublicStackNavigator from './Source/Navigation/PublicStackNavigator';

const App = () => {
  return (
    <NavigationContainer>
      <PublicStackNavigator />
    </NavigationContainer>
  );
};

export default App;
