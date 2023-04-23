import * as Yup from "yup";


export default Yup.object().shape({
    newsletter: Yup.string()
    .matches(
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@(?:gmail|hotmail|outlook)\.com$/,
    ""
    )
    .email("* Email inválido"),
});