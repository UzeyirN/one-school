import * as yup from 'yup';

let schema = yup.object().shape({
    image: yup.string().required("Enter value"),
    name: yup.string().required("Enter value"),
    speciality: yup.string().required("Enter value"),
    comment: yup.string().required("Enter value").min(10).max(100),
    gain: yup.number().required("Enter value").positive("Enter positive degree").integer(),


});

export default schema