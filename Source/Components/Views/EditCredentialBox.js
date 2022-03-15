import {View, Text, StyleSheet, Pressable} from 'react-native';
import React, {useState} from 'react';
import EditForm from './EditForm';
import {useTheme} from '../../Hooks/useTheme';
const EditCredentialBox = props => {
  const {
    field,
    email,
    setEmailFormActive,
    emailFormActive,
    password,
    setPasswordFormActive,
    passwordFormActive,
  } = props;
  const [emailActive, setEmailActive] = useState(
    field === 'email' ? true : false,
  );
  const darkMode = useTheme();

  return (
    <View
      style={[styles.boxContainer, darkMode ? styles.darkBoxContainer : null]}>
      <View style={styles.box}>
        <Text style={[styles.boldText, darkMode ? styles.darkText : null]}>
          {emailActive ? 'Email' : 'Password'}:{' '}
        </Text>
        <Text style={styles.credential}>{emailActive ? email : password}</Text>
      </View>
      <Pressable
        onPress={() =>
          emailActive
            ? setEmailFormActive(state => !state)
            : setPasswordFormActive(state => !state)
        }
        style={[styles.button, darkMode ? styles.darkButton : null]}>
        <Text style={[styles.buttonLabel, darkMode ? styles.darkText : null]}>
          Edit {emailActive ? 'Email' : 'Password'}
        </Text>
      </Pressable>
      {emailFormActive && (
        <EditForm
          collapseForm={setEmailFormActive}
          label="email"
          passwordValue={password}
        />
      )}
      {passwordFormActive && (
        <EditForm
          collapseForm={setPasswordFormActive}
          label="password"
          emailValue={email}
        />
      )}
    </View>
  );
};

export default EditCredentialBox;

const styles = StyleSheet.create({
  boxContainer: {
    backgroundColor: '#9C0F48',
    marginTop: 10,
    marginHorizontal: 10,
    padding: 10,
    borderRadius: 10,
  },
  darkBoxContainer: {
    backgroundColor: '#05595B',
  },
  box: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  boldText: {
    fontWeight: 'bold',
    fontSize: 15,
    color: '#eda6c2',
  },
  darkText: {
    color: '#fff',
  },
  button: {
    backgroundColor: '#eda6c2',
    padding: 8,
    alignSelf: 'flex-start',
    borderRadius: 5,
  },
  darkButton: {
    backgroundColor: '#062C30',
  },
  buttonLabel: {
    color: '#9C0F48',
  },
  credential: {
    color: '#a39696',
  },
});
