import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  Pressable,
} from 'react-native';
import React, {useRef, useState} from 'react';
const Login = props => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const ageRef = useRef(null);
  const mobileNoRef = useRef(null);
  const addressRef = useRef(null);
  const passwordRef = useRef(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [mobileNo, setMobileNo] = useState('');
  const [address, setAddress] = useState('');
  const [id, setId] = useState('');
  const [errorId, setErrorId] = useState('');

  const handleSubmit = () => {
    const data = {email, password, name, age, mobileNo, address};
    if (!email || !password || !name || !age || !mobileNo || !address) {
      return;
    }
    props.navigation.navigate('Dashboard', {data});
  };

  return (
    <View style={styles.parent}>
      <ScrollView>
        <View style={styles.box}>
          <Text style={styles.heading}>Login Page</Text>
        </View>

        <View>
          <TextInput
            autoFocus
            placeholder="Enter Full Name"
            placeholderTextColor="#ccc"
            style={[
              styles.input,
              id === 'name' && styles.focus,
              errorId === 'name' && styles.errorInput,
            ]}
            keyboardType="name-phone-pad"
            textContentType="givenName"
            autoCapitalize="none"
            returnKeyType="next"
            ref={nameRef}
            onSubmitEditing={() => emailRef.current.focus()}
            onChangeText={setName}
            value={name}
            onFocus={() => setId('name')}
            onBlur={() => {
              !name.includes(' ') ? setErrorId('name') : setErrorId('');
            }}
          />
          <TextInput
            placeholder="Enter Email"
            placeholderTextColor="#ccc"
            style={[
              styles.input,
              id === 'email' && styles.focus,
              errorId === 'email' && styles.errorInput,
            ]}
            keyboardType="email-address"
            textContentType="emailAddress"
            autoCapitalize="none"
            returnKeyType="next"
            ref={emailRef}
            onSubmitEditing={() => mobileNoRef.current.focus()}
            onChangeText={setEmail}
            value={email}
            onFocus={() => setId('email')}
            onBlur={() => {
              !email.includes('@') ? setErrorId('email') : setErrorId('');
            }}
          />
          <TextInput
            placeholder="Enter Mobile Number"
            placeholderTextColor="#ccc"
            style={[
              styles.input,
              id === 'mobileNo' && styles.focus,
              errorId === 'mobileNo' && styles.errorInput,
            ]}
            keyboardType="number-pad"
            returnKeyType="next"
            ref={mobileNoRef}
            onSubmitEditing={() => ageRef.current.focus()}
            onChangeText={setMobileNo}
            value={mobileNo}
            onFocus={() => setId('mobileNo')}
            onBlur={() => {
              mobileNo.length < 10 ? setErrorId('mobileNo') : setErrorId('');
            }}
          />
          <TextInput
            placeholder="Enter Age"
            placeholderTextColor="#ccc"
            style={[styles.input, id === 'age' && styles.focus]}
            keyboardType="number-pad"
            returnKeyType="next"
            ref={ageRef}
            onSubmitEditing={() => addressRef.current.focus()}
            onChangeText={setAge}
            value={age}
            onFocus={() => setId('age')}
          />
          <TextInput
            placeholder="Enter Address"
            placeholderTextColor="#ccc"
            style={[
              styles.input,
              id === 'address' && styles.focus,
              errorId === 'address' && styles.errorInput,
            ]}
            keyboardType="default"
            textContentType="addressCity"
            autoCapitalize="words"
            returnKeyType="next"
            ref={addressRef}
            onSubmitEditing={() => passwordRef.current.focus()}
            onChangeText={setAddress}
            value={address}
            onFocus={() => setId('address')}
            onBlur={() => {
              address.length === 0 ? setErrorId('mobileNo') : setErrorId('');
            }}
          />
          <TextInput
            secureTextEntry={true}
            placeholder="Enter Password"
            placeholderTextColor="#ccc"
            style={[styles.input, id === 'password' && styles.focus]}
            keyboardType="default"
            returnKeyType="done"
            autoCapitalize="none"
            ref={passwordRef}
            onSubmitEditing={handleSubmit}
            onChangeText={setPassword}
            value={password}
            onFocus={() => setId('password')}
          />
          <Pressable
            android_ripple={{color: 'white'}}
            onPress={handleSubmit}
            style={styles.buttonWrapper}>
            <Text style={styles.buttonLabel}>Login</Text>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
};
export default Login;
const styles = StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: '#FDEFF4',
  },
  box: {
    margin: 10,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  heading: {
    fontSize: 16,
    textAlign: 'center',
  },
  input: {
    marginHorizontal: 20,
    padding: 8,
    backgroundColor: '#fff',
    marginBottom: 10,
  },
  buttonWrapper: {
    backgroundColor: '#1261c0',
    margin: 20,
    paddingVertical: 10,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonLabel: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  focus: {
    borderColor: 'green',
    color: 'black',
    borderWidth: 1,
  },
  errorInput: {
    borderColor: 'red',
    color: 'red',
    borderWidth: 1,
  },
});
