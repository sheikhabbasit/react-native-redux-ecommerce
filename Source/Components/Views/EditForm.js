import {Pressable, Text, TextInput, StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import {EditCredentialsValidationModel} from '../../Models/EditCredentialsValidationModel';
import {Formik, Field} from 'formik';
import ErrorMessage from '../Typography/ErrorMessage';
import {useDispatch} from 'react-redux';
import {AppActions} from '../../Redux/Actions/AppActions';

const EditForm = props => {
  const [id, setId] = useState('');
  const dispatch = useDispatch();
  const [emailActive, setEmailActive] = useState(
    props.label === 'email' ? true : false,
  );

  const submitForm = async values => {
    dispatch({type: AppActions.LOGIN, data: values});
    props.collapseForm(false);
  };

  const handleCancel = () => {
    props.collapseForm(false);
  };

  let initialValuesDeclared = {};

  if (props.label === 'email') {
    initialValuesDeclared = {email: '', password: props.passwordValue};
  }
  if (props.label === 'password') {
    initialValuesDeclared = {email: props.emailValue, password: ''};
  }

  return (
    <Formik
      initialValues={initialValuesDeclared}
      onSubmit={values => {
        console.log(values);
        submitForm(values);
      }}
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
                placeholder={
                  emailActive ? 'Enter New Email' : 'Enter New Password'
                }
                placeholderTextColor="#ccc"
                style={[
                  styles.input,
                  (id === 'email' || id === 'password') && styles.focus,
                  ((touched.email && errors.email) ||
                    (touched.password && errors.password)) &&
                    styles.errorInput,
                ]}
                keyboardType={emailActive ? 'email-address' : 'default'}
                autoCapitalize="none"
                onChangeText={
                  emailActive ? handleChange('email') : handleChange('password')
                }
                value={emailActive ? values.email : values.password}
                onFocus={() =>
                  emailActive ? setId('email') : setId('password')
                }
                onBlur={
                  emailActive ? handleBlur('email') : handleBlur('password')
                }
              />
            )}
          </Field>
          {touched.email && errors.email && (
            <ErrorMessage touched={touched} errors={errors} inputKey="email" />
          )}
          {touched.password && errors.password && (
            <ErrorMessage
              touched={touched}
              errors={errors}
              inputKey="password"
            />
          )}
          <View style={styles.box}>
            <Pressable
              android_ripple={{color: 'white'}}
              onPress={handleSubmit}
              disabled={!isValid}
              style={[styles.buttonWrapper, !isValid && styles.disabledButton]}>
              <Text style={styles.buttonLabel}>
                Change {emailActive ? 'Email' : 'Password'}
              </Text>
            </Pressable>
            <Pressable
              android_ripple={{color: 'white'}}
              onPress={handleCancel}
              style={styles.buttonWrapper}>
              <Text style={styles.buttonLabel}>Cancel</Text>
            </Pressable>
          </View>
        </View>
      )}
    </Formik>
  );
};

export default EditForm;

const styles = StyleSheet.create({
  formWrapper: {
    margin: 10,
    padding: 15,
    backgroundColor: '#9C0F48',
    borderRadius: 10,
  },
  box: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  buttonWrapper: {
    backgroundColor: '#FF5C8D',
    padding: 8,
    borderRadius: 5,
    alignSelf: 'flex-start',
    marginStart: 10,
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
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    marginBottom: 10,
  },
});
