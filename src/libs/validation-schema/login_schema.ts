import * as yup from 'yup';

const loginSchema = yup
    .object({
        email: yup
            .string()
            .email('Invalid email')
            .required('Email is required'),
        password: yup.string().required("Aren't you forgetting something?"),
    })
    .required();

export default loginSchema;
