import {ScrollView, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import EditCredentialBox from '../Components/Views/EditCredentialBox';
import {useSelector} from 'react-redux';
import {useTheme} from '../Hooks/useTheme';

const EditCredentials = props => {
  const darkMode = useTheme();
  const {email, password} = useSelector(state => state.app.userInfo);
  const [emailFormActive, setEmailFormActive] = useState(false);
  const [passwordFormActive, setPasswordFormActive] = useState(false);

  return (
    <ScrollView
      contentContainerStyle={[
        styles.container,
        darkMode ? styles.darkContainer : null,
      ]}>
      <EditCredentialBox
        email={email}
        setEmailFormActive={setEmailFormActive}
        emailFormActive={emailFormActive}
        password={password}
        field="email"
      />
      <EditCredentialBox
        password={password}
        setPasswordFormActive={setPasswordFormActive}
        passwordFormActive={passwordFormActive}
        email={email}
        field="password"
      />
    </ScrollView>
  );
};

export default EditCredentials;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFBBBB',
  },
  darkContainer: {
    backgroundColor: '#062C30',
  },
});
