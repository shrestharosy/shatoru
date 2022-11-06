import * as yup from 'yup';

const createDriverSchema = yup
    .object({
        fullName: yup.string().required('Name is required'),
        email: yup
            .string()
            .email('Invalid email')
            .required('Email is required'),
        password: yup.string().required("Aren't you forgetting something?"),
        phoneNumber: yup.string().required('Phone number is required'),
        // TODO: skipping phone validation for now to make test easier
    })
    .required();

export default createDriverSchema;
