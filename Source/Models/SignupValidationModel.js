import * as Yup from 'yup';

export const SignupValidationModel = Yup.object().shape({
  name: Yup.string()
    .required('Name is required')
    .matches(/^[a-zA-Z ]+$/, 'Name must be alphabets only'),
  email: Yup.string()
    .email('Invalid email')
    .required('Email is required')
    .nullable(),
  password: Yup.string()
    .required('Password is required')
    .matches(
      /^(?=.*[a-z])(?=.*[A-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      'Password must contain at least 8 characters, one uppercase, one lowercase, one number and one special character',
    )
    .nullable(),
  confirmPassword: Yup.string()
    .required('Passwords must match')
    .oneOf([Yup.ref('password'), null], 'Passwords must match'),
  mobileNo: Yup.string()
    .required('Mobile No. is required')
    .matches(/^[6-9]\d{9}$/, 'Invalid Mobile No.')
    .nullable(),
});

export const SignupInitialValues = {
  name: '',
  email: '',
  password: '',
  mobileNo: '',
};
