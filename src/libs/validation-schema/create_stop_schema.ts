import * as yup from 'yup';

const createStopSchema = yup
    .object({
        stopName: yup.string().required('Stop name is required'),
        stopAbbreviation: yup
            .string()
            .required('Stop abbreviation is required'),
    })
    .required();

export default createStopSchema;
