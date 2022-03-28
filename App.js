import * as React from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
import PublicStackNavigator from './Source/Navigation/PublicStackNavigator';
import {Provider} from 'react-redux';
import {store} from './Source/Redux/Store';
import {PersistGate} from 'redux-persist/integration/react';
import {persistor} from './Source/Redux/Store';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <PaperProvider>
          <NavigationContainer>
            <PublicStackNavigator />
          </NavigationContainer>
        </PaperProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
