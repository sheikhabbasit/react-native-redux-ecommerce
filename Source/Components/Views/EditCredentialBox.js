import {View, Text, StyleSheet, Pressable} from 'react-native';
import React, {useState} from 'react';
import EditForm from './EditForm';
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

  return (
    <View style={styles.boxContainer}>
      <View style={styles.box}>
        <Text>Email: </Text>
        <Text>{emailActive ? email : password}</Text>
      </View>
      <Pressable
        onPress={() =>
          emailActive
            ? setEmailFormActive(state => !state)
            : setPasswordFormActive(state => !state)
        }
        style={styles.button}>
        <Text style={styles.buttonLabel}>
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
