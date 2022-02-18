import {
  View,
  Text,
  Pressable,
  ImageBackground,
  ScrollView,
  TextInput,
} from 'react-native';
import {styles} from '../Styles/SignupStyles';
import React, {useRef, useState} from 'react';
import {Field, Formik} from 'formik';
import {
  SignupValidationModel,
  SignupInitialValues,
} from '../Source/Models/SignupValidationModel';
import ErrorMessage from '../Source/Components/Typography/ErrorMessage';

const SignUp = props => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const mobileNoRef = useRef(null);
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);
  const [id, setId] = useState('');
  const [hidePassword, setHidePassword] = useState(true);

  const submitForm = values => {
    props.navigation.navigate('Login');
  };

  const goToLogin = () => {
    props.navigation.navigate('Login');
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
                  <Text style={styles.showHideLabel}>Show</Text>
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
        <Pressable style={styles.buttonWrapper} onPress={goToLogin}>
          <Text style={styles.loginButtonLabel}>
            Already a user? <Text style={styles.labelEmphasis}>Log In</Text>
          </Text>
        </Pressable>
      </ScrollView>
    </ImageBackground>
  );
};

export default SignUp;
