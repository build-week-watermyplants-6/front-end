// import * as yup from 'yup'

const profileSchema = yup.object().shape({
    email: yup
    .string()
    .trim()
    .required(),

    password: yup
    .string()
    .trim()
    .matches(/^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
    "Password must contain at least 8 characters, one uppercase, one number and one special case character")
    .required(),

    phone: yup
    .string()
    .trim()
    .required()
})

export default profileSchema