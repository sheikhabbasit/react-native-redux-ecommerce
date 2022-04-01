import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  Pressable,
  ImageBackground,
  ScrollView,
  TextInput,
  StyleSheet,
} from 'react-native';
import {auth} from '../../Firebase/firebase-config';
import {createUserWithEmailAndPassword, updateProfile} from 'firebase/auth';
import {Field, Formik} from 'formik';
import {useDispatch} from 'react-redux';
import {
  SignupValidationModel,
  SignupInitialValues,
} from '../Models/SignupValidationModel';
import ErrorMessage from '../Components/Typography/ErrorMessage';
import HyperLink from '../Components/Views/HyperLink';
import {ToastActions} from '../Redux/Actions/ToastActions';

const SignUp = props => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const mobileNoRef = useRef(null);
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);
  const [id, setId] = useState('');
  const dispatch = useDispatch();
  const [hidePassword, setHidePassword] = useState(true);

  const submitForm = values => {
    createUserWithEmailAndPassword(auth, values.email, values.password)
      .then(res => {
        if (res.user.accessToken) {
          dispatch({type: ToastActions.SET_SIGNUP_SUCCESSFUL});
          updateProfile(auth.currentUser, {displayName: values.name});
          props.navigation.navigate('Login');
        }
      })
      .catch(err => {
        dispatch({type: ToastActions.SET_SIGNUP_ERROR, data: err.message});
      });
  };

  return (
    <ImageBackground
      source={require('../Resources/Images/signupbg.jpg')}
      style={styles.bg}>
      <ScrollView contentContainerStyle={styles.parent}>
        <Formik
          initialValues={SignupInitialValues}
          onSubmit={values => submitForm(values)}
          validationSchema={SignupValidationModel}
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
                    autoFocus
                    placeholder="Enter Full Name"
                    placeholderTextColor="#ccc"
                    style={[
                      styles.input,
                      id === 'name' && styles.focus,
                      touched.name && errors.name && styles.errorInput,
                    ]}
                    keyboardType="name-phone-pad"
                    textContentType="givenName"
                    autoCapitalize="none"
                    returnKeyType="next"
                    ref={nameRef}
                    onSubmitEditing={() => emailRef.current.focus()}
                    onChangeText={handleChange('name')}
                    value={values.name}
                    onFocus={() => setId('name')}
                    onBlur={handleBlur('name')}
                  />
                )}
              </Field>
              {touched.name && errors.name && (
                <ErrorMessage
                  touched={touched}
                  errors={errors}
                  inputKey="name"
                />
              )}
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
                    onSubmitEditing={() => mobileNoRef.current.focus()}
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
              <Field>
                {() => (
                  <TextInput
                    placeholder="Enter Mobile Number"
                    placeholderTextColor="#ccc"
                    style={[
                      styles.input,
                      id === 'mobileNo' && styles.focus,
                      touched.mobileNo && errors.mobileNo && styles.errorInput,
                    ]}
                    keyboardType="number-pad"
                    returnKeyType="next"
                    ref={mobileNoRef}
                    onSubmitEditing={() => passwordRef.current.focus()}
                    onChangeText={handleChange('mobileNo')}
                    value={values.mobileNo}
                    onFocus={() => setId('mobileNo')}
                    onBlur={handleBlur('mobileNo')}
                  />
                )}
              </Field>
              {touched.mobileNo && errors.mobileNo && (
                <ErrorMessage
                  touched={touched}
                  errors={errors}
                  inputKey="mobileNo"
                />
              )}
              <View style={styles.passwordFlex}>
                <Field>
                  {() => (
                    <TextInput
                      secureTextEntry={hidePassword}
                      placeholder="Enter Password"
                      placeholderTextColor="#ccc"
                      style={[
                        styles.passwordInput,
                        id === 'password' && styles.focus,
                        touched.password &&
                          errors.password &&
                          styles.errorInput,
                      ]}
                      keyboardType="default"
                      returnKeyType="done"
                      autoCapitalize="none"
                      ref={passwordRef}
                      onSubmitEditing={() => confirmPasswordRef.current.focus()}
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
              <Field>
                {() => (
                  <TextInput
                    secureTextEntry={true}
                    placeholder="Confirm Password"
                    placeholderTextColor="#ccc"
                    style={[
                      styles.input,
                      id === 'confirmPassword' && styles.focus,
                      touched.confirmPassword &&
                        errors.confirmPassword &&
                        styles.errorInput,
                    ]}
                    keyboardType="default"
                    returnKeyType="done"
                    autoCapitalize="none"
                    ref={confirmPasswordRef}
                    onSubmitEditing={handleSubmit}
                    onChangeText={handleChange('confirmPassword')}
                    value={values.confirmPassword}
                    onFocus={() => setId('confirmPassword')}
                    onBlur={handleBlur('confirmPassword')}
                  />
                )}
              </Field>
              {touched.confirmPassword && errors.confirmPassword && (
                <ErrorMessage
                  touched={touched}
                  errors={errors}
                  inputKey="confirmPassword"
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
                <Text style={styles.buttonLabel}>Sign Up</Text>
              </Pressable>
            </React.Fragment>
          )}
        </Formik>
        <HyperLink label="Already a user? Log In" path="Login" />
      </ScrollView>
    </ImageBackground>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  parent: {
    flex: 1,
    margin: 10,
    alignItems: 'center',
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
    marginTop: 10,
    marginBottom: 2,
    width: '90%',
    opacity: 0.7,
    borderRadius: 5,
  },
  buttonWrapper: {
    backgroundColor: '#FF5C8D',
    margin: 15,
    paddingVertical: 10,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    width: '55%',
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
  passwordFlex: {
    flexDirection: 'row',
    width: '90%',
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
  whiteLabel: {
    color: 'white',
  },
  labelEmphasis: {
    fontWeight: 'bold',
  },
  successSignUp: {
    backgroundColor: '#08a626',
    padding: 10,
    margin: 10,
  },
});
