import React, {useRef, useState} from 'react';
import {
  Alert,
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  Pressable,
  ImageBackground,
} from 'react-native';
import {Field, Formik} from 'formik';
import {signInWithEmailAndPassword} from 'firebase/auth';
import {auth} from '../../Firebase/firebase-config';
import {
  LoginValidationModel,
  LoginInitialValues,
} from '../Models/LoginValidationModel';
import ErrorMessage from '../Components/Typography/ErrorMessage';
import HyperLink from '../Components/Views/HyperLink';
import {useDispatch} from 'react-redux';
import {AppActions} from '../Redux/Actions/AppActions';
import ErrorAuthShow from '../Components/Views/ErrorAuthShow';

const Login = props => {
  const [loading, setLoading] = useState(false);
  const [errorOccured, setErrorOccured] = useState(false);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [id, setId] = useState('');
  const [hidePassword, setHidePassword] = useState(true);
  const dispatch = useDispatch();

  const submitForm = async values => {
    setLoading(true);
    signInWithEmailAndPassword(auth, values.email, values.password)
      .then(res => {
        if (res.user.accessToken) {
          setErrorOccured(false);
          dispatch({
            type: AppActions.LOGIN,
            data: {email: res.user.email, token: res.user.accessToken},
          });
          props.navigation.reset({
            index: 0,
            routes: [{name: 'PrivateStackNavigator'}],
          });
        }
      })
      .catch(err => {
        setErrorOccured(true);
      });
    setLoading(false);
  };

  return (
    <ImageBackground
      source={require('../Resources/Images/loginbg.jpg')}
      style={styles.bg}>
      <ScrollView>
        <View style={styles.box}>
          <Text style={styles.heading}>Login Page</Text>
        </View>

        <View>
          <Formik
            initialValues={LoginInitialValues}
            onSubmit={values => submitForm(values)}
            validationSchema={LoginValidationModel}
            validateOnMount>
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              isValid,
              errors,
              touched,
            }) => (
              <React.Fragment>
                <Field>
                  {() => (
                    <TextInput
                      placeholder="Enter Email"
                      placeholderTextColor="#ccc"
                      style={[
                        styles.input,
                        id === 'email' && styles.focus,
                        touched.email && errors.email && styles.errorInput,
                      ]}
                      keyboardType="email-address"
                      textContentType="emailAddress"
                      autoCapitalize="none"
                      returnKeyType="next"
                      ref={emailRef}
                      onSubmitEditing={() => passwordRef.current.focus()}
                      onChangeText={handleChange('email')}
                      value={values.email}
                      onFocus={() => setId('email')}
                      onBlur={handleBlur('email')}
                    />
                  )}
                </Field>
                {touched.email && errors.email && (
                  <ErrorMessage
                    touched={touched}
                    errors={errors}
                    inputKey="email"
                  />
                )}
                <View
                  style={[
                    styles.passwordFlex,
                    id === 'password' && styles.focus,
                    touched.password && errors.password && styles.errorInput,
                  ]}>
                  <Field>
                    {() => (
                      <TextInput
                        secureTextEntry={hidePassword}
                        placeholder="Enter Password"
                        placeholderTextColor="#ccc"
                        style={[styles.passwordInput]}
                        keyboardType="default"
                        returnKeyType="done"
                        autoCapitalize="none"
                        ref={passwordRef}
                        onSubmitEditing={handleSubmit}
                        onChangeText={handleChange('password')}
                        value={values.password}
                        onFocus={() => setId('password')}
                        onBlur={handleBlur('password')}
                      />
                    )}
                  </Field>

                  <Pressable
                    style={styles.passwordIcon}
                    onPress={() => setHidePassword(state => !state)}>
                    <Text style={styles.showHideLabel}>
                      {hidePassword ? 'Show' : 'Hide'}
                    </Text>
                  </Pressable>
                </View>
                {touched.password && errors.password && (
                  <ErrorMessage
                    touched={touched}
                    errors={errors}
                    inputKey="password"
                  />
                )}
                <Pressable
                  android_ripple={{color: 'white'}}
                  onPress={handleSubmit}
                  disabled={!isValid}
                  style={[
                    styles.buttonWrapper,
                    !isValid && styles.disabledButton,
                  ]}>
                  <Text style={styles.buttonLabel}>Login</Text>
                </Pressable>
              </React.Fragment>
            )}
          </Formik>
        </View>
        {errorOccured && <ErrorAuthShow label="Invalid Credentials" />}
        <HyperLink path="SignUp" label="Go back to sign up" />
      </ScrollView>
    </ImageBackground>
  );
};

export default Login;

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
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
  buttonWrapper: {
    backgroundColor: '#FF5C8D',
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
  disabledButton: {
    backgroundColor: '#d3d3d3',
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
  input: {
    marginHorizontal: 20,
    padding: 8,
    backgroundColor: '#fff',
    marginTop: 10,
    marginBottom: 2,
    borderRadius: 5,
  },
  passwordFlex: {
    flexDirection: 'row',
    width: '88%',
    marginTop: 10,
    marginBottom: 2,
    marginHorizontal: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    backgroundColor: '#fff',
    opacity: 0.7,
    height: 47,
  },
  passwordInput: {
    flex: 1,
    borderRadius: 5,
  },
  passwordIcon: {
    color: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  showHideLabel: {
    color: 'black',
    marginHorizontal: 5,
  },
});
