import * as yup from 'yup';

const createDriverSchema = yup
    .object({
        firstName: yup.string().required('First name is required'),
        lastName: yup.string().required('Second name is required'),
        email: yup
            .string()
            .email('Invalid email')
            .required('Email is required'),
        username: yup.string().required('Username is required'),
    })
    .required();

export default createDriverSchema;
