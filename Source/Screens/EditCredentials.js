import {ScrollView, StyleSheet} from 'react-native';
import React, {useState, useEffect} from 'react';
import {UserSession} from '../Models/Sessions/UserSession';
import EditCredentialBox from '../Components/Views/EditCredentialBox';

const EditCredentials = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailFormActive, setEmailFormActive] = useState(false);
  const [passwordFormActive, setPasswordFormActive] = useState(false);

  useEffect(() => {
    checkUserSession();
  }, [emailFormActive, passwordFormActive]);

  const checkUserSession = async () => {
    const user = await UserSession.getUserLoggedIn();
    if (email === user.email && password === user.password) return;
    setEmail(user.email);
    setPassword(user.password);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
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
    backgroundColor: '#FDEFF4',
  },
});
