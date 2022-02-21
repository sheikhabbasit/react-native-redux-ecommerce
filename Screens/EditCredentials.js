import {ScrollView, Text, StyleSheet, View, Pressable} from 'react-native';
import React, {useState, useEffect} from 'react';
import EditForm from '../Source/Components/Views/EditForm';
import {UserSession} from '../Source/Models/Sessions/UserSession';

const EditCredentials = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailFormActive, setEmailFormActive] = useState(false);
  const [passwordFormActive, setPasswordFormActive] = useState(false);

  useEffect(() => {
    checkUserSession();
    console.log('event triggered from parent');
  }, [emailFormActive, passwordFormActive]);

  const checkUserSession = async () => {
    const user = await UserSession.getUserLoggedIn();
    if (email === user.email && password === user.password) return;
    setEmail(user.email);
    setPassword(user.password);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.boxContainer}>
        <View style={styles.box}>
          <Text>Email: </Text>
          <Text>{email}</Text>
        </View>
        <Pressable
          onPress={() => setEmailFormActive(state => !state)}
          style={styles.button}>
          <Text style={styles.buttonLabel}>Edit Email</Text>
        </Pressable>
        {emailFormActive && (
          <EditForm
            collapseForm={setEmailFormActive}
            label="email"
            passwordValue={password}
          />
        )}
      </View>
      <View style={styles.boxContainer}>
        <View style={styles.box}>
          <Text>Password: </Text>
          <Text>{password}</Text>
        </View>
        <Pressable
          onPress={() => setPasswordFormActive(state => !state)}
          style={styles.button}>
          <Text style={styles.buttonLabel}>Edit Password</Text>
        </Pressable>
        {passwordFormActive && (
          <EditForm
            collapseForm={setPasswordFormActive}
            label="password"
            emailValue={email}
          />
        )}
      </View>
    </ScrollView>
  );
};

export default EditCredentials;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDEFF4',
  },
  boxContainer: {
    backgroundColor: '#FFBBBB',
    marginTop: 10,
    marginHorizontal: 10,
    padding: 10,
  },
  box: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#9C0F48',
    padding: 5,
    alignSelf: 'flex-start',
  },
  buttonLabel: {
    color: '#fff',
  },
});
