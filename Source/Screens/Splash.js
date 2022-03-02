import {ImageBackground, ActivityIndicator} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';

const Splash = props => {
  const [loading, setLoading] = useState(true);
  const {userInfo} = useSelector(state => state.app);

  useEffect(() => {
    checkUserSession();
  }, []);

  const checkUserSession = () => {
    const isLogged = Object.keys(userInfo).length > 0;

    if (isLogged) {
      setLoading(false);
      handleNavigation('PrivateStackNavigator');
    } else {
      setLoading(false);
      handleNavigation('Login');
    }
  };

  const handleNavigation = name => {
    props.navigation.reset({
      index: 0,
      routes: [{name}],
    });
  };

  return (
    <ImageBackground
      source={require('../Resources/Images/splash.jpg')}
      style={{
        width: '100%',
        height: '100%',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <ActivityIndicator size="large" color="#FF5C8D" animating={loading} />
    </ImageBackground>
  );
};

export default Splash;
