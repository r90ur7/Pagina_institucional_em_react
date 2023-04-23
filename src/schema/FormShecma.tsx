import * as Yup from "yup";
import isCPF from 'cpf-check';
import moment from 'moment';


export default Yup.object().shape({
    name: Yup.string()
    .min(2, "* O nome deve ter pelo menos 2 caracteres")
    .required("* Campo Obrigatório"),
    email: Yup.string()
    .matches(
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@(?:gmail|hotmail|outlook)\.com$/,
    "Apenas emails Pessoais (Gmail, Hotmail ou outlook) são permitidos"
    )
    .required("* Campo Obrigatório")
    .email("* Email inválido"),
    // newsletter: Yup.string()
    // .matches(
    // /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@(?:gmail|hotmail|outlook)\.com$/,
    // ""
    // )
    // .email("* Email inválido"),

    cpf: Yup.string()
    .required("* Campo Obrigatório")
    .transform(value => isCPF.format(value))
    .test("cpf-valid", "* CPF inválido", value => isCPF.validate(value))
    ,

    birthdate: Yup.string()
    .matches(/^(0?[1-9]|[12][0-9]|3[01])\/?(0?[1-9]|1[012])\/?(\d{4})$/,"Data de nascimento inválida")
    .test('is-valid-date', '* Data de nascimento inválida', value => moment(value, "DD/MM/YYYY").isValid())
    .required("* Campo obrigatório")
    .transform(value => moment(value, "DD/MM/YYYY").format("DD/MM/YYYY")),

    phone:Yup.string()
    .matches(/^\(?\d{2}\)?[\s-]?\d{5}-?\d{4}$/, '* numero invalido')
    .required("* Campo Obrigatório"),

    instagram:Yup.string()
    .matches(/^@?[a-zA-Z0-9_]+$/, "* Formato de usuário inválido")
    .max(30, "* O nome de usuário não pode ter mais de 30 caracteres"),


    aceito: Yup.boolean()
    .required()
    .test(
    "checkbox-checked",
    "",
    value => value === true
    )
});






