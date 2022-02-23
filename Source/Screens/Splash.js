import {ImageBackground, ActivityIndicator} from 'react-native';
import React, {useEffect, useState} from 'react';
import {UserSession} from '../Models/Sessions/UserSession';
import {useDispatch} from 'react-redux';
import {AppActions} from '../Redux/Actions/AppActions';

const Splash = props => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    checkUserSession();
  }, []);

  const checkUserSession = async () => {
    const user = await UserSession.getUserLoggedIn();

    if (user) {
      dispatch({type: AppActions.LOGIN, data: user});
      handleNavigation('PrivateStackNavigator');
    } else {
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
      source={require('../Resources/Images/loginbg.jpg')}
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
