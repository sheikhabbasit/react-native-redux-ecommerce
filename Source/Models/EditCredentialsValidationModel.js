import * as Yup from 'yup';

export const EditCredentialsValidationModel = Yup.object().shape({
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
});
