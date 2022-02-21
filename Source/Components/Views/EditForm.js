import {Pressable, Text, TextInput, StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import {EditCredentialsValidationModel} from '../../Models/EditCredentialsValidationModel';
import {Formik, Field} from 'formik';
import {UserSession} from '../../Models/Sessions/UserSession';
import ErrorMessage from '../Typography/ErrorMessage';

const EditForm = props => {
  const [id, setId] = useState('');

  const submitForm = async values => {
    const res = await UserSession.setUserLoggedIn(values);
    props.collapseForm(false);
  };

  // Renders in case of email
  if (props.label === 'email') {
    const initialValuesDeclared = {email: '', password: props.passwordValue};
    return (
      <Formik
        initialValues={initialValuesDeclared}
        onSubmit={values => submitForm(values)}
        validationSchema={EditCredentialsValidationModel}
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
          <View style={styles.formWrapper}>
            <Field>
              {() => (
                <TextInput
                  placeholder="Enter New Email"
                  placeholderTextColor="#ccc"
                  style={[
                    styles.input,
                    id === 'email' && styles.focus,
                    touched.email && errors.email && styles.errorInput,
                  ]}
                  keyboardType="email-address"
                  textContentType="emailAddress"
                  autoCapitalize="none"
                  onChangeText={handleChange('email')}
                  value={values.email}
                  onFocus={() => setId('email')}
                  onBlur={handleBlur('email')}
                />
              )}
            </Field>
            <Text>{isValid}</Text>
            {touched.email && errors.email && (
              <ErrorMessage
                touched={touched}
                errors={errors}
                inputKey="email"
              />
            )}
            <Pressable
              android_ripple={{color: 'white'}}
              onPress={handleSubmit}
              disabled={!isValid}
              style={[styles.buttonWrapper, !isValid && styles.disabledButton]}>
              <Text style={styles.buttonLabel}>Change Email</Text>
            </Pressable>
          </View>
        )}
      </Formik>
    );
  }

  // Renders in case of password
  if (props.label === 'password') {
    const initialValuesDeclared = {email: props.emailValue, password: ''};
    return (
      <Formik
        initialValues={initialValuesDeclared}
        onSubmit={values => submitForm(values)}
        validationSchema={EditCredentialsValidationModel}
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
          <View style={styles.formWrapper}>
            <Field>
              {() => (
                <TextInput
                  secureTextEntry={true}
                  placeholder="Enter Password"
                  placeholderTextColor="#ccc"
                  style={[
                    styles.input,
                    id === 'password' && styles.focus,
                    touched.password && errors.password && styles.errorInput,
                  ]}
                  keyboardType="default"
                  returnKeyType="done"
                  autoCapitalize="none"
                  onSubmitEditing={handleSubmit}
                  onChangeText={handleChange('password')}
                  value={values.password}
                  onFocus={() => setId('password')}
                  onBlur={handleBlur('password')}
                />
              )}
            </Field>
            <Text>{isValid}</Text>
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
              style={[styles.buttonWrapper, !isValid && styles.disabledButton]}>
              <Text style={styles.buttonLabel}>Change Password</Text>
            </Pressable>
          </View>
        )}
      </Formik>
    );
  }
};

export default EditForm;

const styles = StyleSheet.create({
  formWrapper: {
    margin: 10,
    padding: 10,
    backgroundColor: '#EF93CF',
    borderRadius: 10,
  },
  buttonWrapper: {
    backgroundColor: '#FF5C8D',
    padding: 8,
    borderRadius: 5,
    alignSelf: 'flex-start',
  },
  buttonLabel: {
    color: '#fff',
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
    padding: 5,
    backgroundColor: '#fff',
    borderRadius: 5,
    marginBottom: -10,
  },
});
