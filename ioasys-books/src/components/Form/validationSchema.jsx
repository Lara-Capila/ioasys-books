import * as Yup from 'yup';

const SIX = 6;
const TWELVE = 12;

const LoginSchema = Yup.object().shape({
  sehna: Yup.string()
    .min(SIX, 'Too Short!')
    .max(TWELVE, 'Too Long!')
    .required('Campo Obrigatório.'),
  email: Yup.string().email('Invalid email').required('Campo Obrigatório.'),
});

export default LoginSchema;
