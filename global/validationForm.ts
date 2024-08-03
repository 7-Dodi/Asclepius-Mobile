import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
    nameUser: Yup.string().required('Nome é obrigatório'),
    emailUser: Yup.string().email('Email inválido').required('Email é obrigatório'),
    phoneUser: Yup.string().matches(/^\(\d{2}\) \d \d{4}-\d{4}$/, 'Telefone inválido').required('Telefone é obrigatório'),
    passwordUser: Yup.string().min(6, 'A senha deve ter pelo menos 6 caracteres').required('Senha é obrigatória'),
});