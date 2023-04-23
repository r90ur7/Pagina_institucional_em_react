import React, { useState } from "react"
import { Formik,Form, FormikHelpers } from 'formik';
import moment from 'moment';

import Homeicon  from "../components/assets/icons/home_icon.svg"
import Leftarrow  from "../components/assets/icons/Leftarrow.svg"
import MainStyles from "../components/modules/home.module.scss"
import FormShecma from "../schema/FormShecma";
import { Link } from "react-router-dom";
import { Title,BreadcrumbTitle,FormTitle } from "../components/scripts/moleculas/Title"
import { Inputform } from "../components/scripts/celulas/forminput"


const title = "INSTITUCIONAL"


interface FormTypes{
    name:string
    instagram:string,
    phone: string,
    cpf: string,
    birthdate: string,
    email: string,
    aceito:boolean
}
const initialValues = {
    name:"",
    instagram:"",
    phone: "",
    cpf: "",
    birthdate: "",
    email: "",
    aceito: false
}

const Institucional = () => {

    const [activeSection, setActiveSection] = useState("Sobre");
    const [isChecked, setIsChecked] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleClick = (section:string) => {
        setActiveSection(section);
    }

    const handleFormikSubmit = (values:FormTypes, formik: FormikHelpers<FormTypes>) =>{
        console.log(values)
        setIsChecked(false)
        values.birthdate = moment(values.birthdate, 'DDMMYYYY').format('DD/MM/YYYY');
        values.cpf = values.cpf.replace(/(\d{3})(\d)/, "$1.$2")
                                .replace(/(\d{3})(\d)/, "$1.$2")
                                .replace(/(\d{3})(\d{1,2})$/, "$1-$2")
        values.phone = values.phone.replace(/\D/g, '')
                                .replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
        if (!values.instagram.startsWith("@")) {
            values.instagram = `@${values.instagram}`;
        }
        formik.resetForm();
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 300000);
    }

    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        let checked = event.target.checked
        setIsChecked(checked);
    };

    return (
            <div className={MainStyles["main_wrapper"]}>
                <div className={MainStyles["main_wrapper_breadcrumb"]}>
                    <fieldset className={MainStyles["main_wrapper_breadcrumb-images"]}>
                        <a href="/">
                            <img id={MainStyles["iconHome"]} src={Homeicon} alt="breadcrumb-icon" />
                        </a>
                        <img id={MainStyles["iconarrow"]} src={Leftarrow} alt="seta" />
                    </fieldset>
                    <a  href="/">
                        <BreadcrumbTitle className={MainStyles.main_wrapper_breadcrumb_title} nameTitle={title}/>
                    </a>
                </div>

                <div className={MainStyles["main_wrapper_contend"]}>
                    <Title className={MainStyles.main_wrapper_contend_title} nameTitle={title} />

                    <div className={MainStyles["main_wrapper_contend-main"]}>
                        <div className={MainStyles["main_wrapper_contend-main-departaments"]}>
                            <Link to="/Institucional/sobre">
                                <button onClick={() => handleClick("Sobre")}
                                    className={activeSection === "Sobre" ? MainStyles["btn_open"] : MainStyles["btn_close"]}
                                >
                                    Sobre
                                </button>
                            </Link>
                            <button
                                className={activeSection === "Forma de Pagamento" ? MainStyles["btn_open"] : MainStyles["btn_close"]}
                            >
                                Forma de Pagamento
                            </button>
                            <button
                                className={activeSection === "Entrega" ? MainStyles["btn_open"] : MainStyles["btn_close"]}
                            >
                                Entrega
                            </button>
                            <button
                                className={activeSection === "Entrega" ? MainStyles["btn_open"] : MainStyles["btn_close"]}
                            >
                                Troca e Devolução
                            </button>
                            <button
                                className={activeSection === "Entrega" ? MainStyles["btn_open"] : MainStyles["btn_close"]}
                            >
                                Segurança e Privacidade
                            </button>
                            <Link to="/Institucional/contato">
                                <button onClick={() => handleClick("Contato")}
                                    className={activeSection === "Contato" ? MainStyles["btn_open"] : MainStyles["btn_close"]}
                                >
                                    Contato
                                </button>
                            </Link>
                        </div>
                        <div className={MainStyles["main_wrapper_contend-main-section"]}>
                            <section id={MainStyles["Sobre"]}
                                    className={activeSection === "Sobre" ? MainStyles["active"] : MainStyles["hiden"]}
                            >
                                <h2 id={MainStyles["title"]}>Sobre</h2>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </p>
                                <br />
                                <p>
                                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                                </p>
                                <br />
                                <p>
                                    Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
                                </p>
                            </section>
                            <Formik
                            validationSchema={FormShecma}
                            initialValues={initialValues}
                            id={MainStyles["Contato"]}
                            onSubmit={handleFormikSubmit}
                            >
                                {({isSubmitting ,errors,touched}) => (
                                <Form
                                    id={MainStyles["contact"]}
                                    className={activeSection === "Contato" ? MainStyles["active"] : MainStyles["hiden"]}
                                >
                                    <FormTitle className={MainStyles["contactTitlte"]}  nameTitle="Preencha o formulário "/>
                                    <Inputform className={MainStyles.form_col}
                                        id={MainStyles.Name}
                                        type="text" name="name"
                                        Label="NOME"
                                        placeholder="Seu nome completo"
                                        Errorclass={MainStyles.form_col_Invalid}
                                    />
                                    <Inputform className={MainStyles.form_col}
                                        id={MainStyles.Email}
                                        Label="E-MAIL" name="email"
                                        type="email"
                                        placeholder="Seu e-mail"
                                        Errorclass={MainStyles.form_col_Invalid}
                                    />
                                    <Inputform className={MainStyles.form_col}
                                        id={MainStyles.Cpf}
                                        Label="CPF" name="cpf"
                                        type="text"
                                        placeholder="000.000.000-00"
                                        Errorclass={MainStyles.form_col_Invalid}
                                    />
                                    <Inputform className={MainStyles.form_col}
                                        id={MainStyles.birthdate}
                                        Label="DATA DE NASCIMENTO" name="birthdate"
                                        type="text"
                                        placeholder="00.00.0000"
                                        Errorclass={MainStyles.form_col_Invalid}
                                    />
                                    <Inputform className={MainStyles.form_col}
                                        id={MainStyles.Phone}
                                        Label="TELEFONE" name="phone"
                                        type="text"
                                        placeholder="(00) 00000-0000"
                                        Errorclass={MainStyles.form_col_Invalid}
                                    />
                                    <Inputform className={MainStyles.form_col}
                                        id={MainStyles.instagram}
                                        Label="INSTAGRAM" name="instagram"
                                        type="text"
                                        placeholder="@seuuser"
                                        Errorclass={MainStyles.form_col_Invalid}
                                    />
                                    <Inputform
                                        className={MainStyles.form_check}
                                        id={MainStyles.checkbox}
                                        Label="Declaro que li e aceito" name="aceito"
                                        Labelclass= {`${MainStyles.checkLabel} ${isChecked && MainStyles.checked}`}
                                        Errorclass={MainStyles.form_col_Invalid}
                                        type="checkbox"
                                        checked={isChecked}
                                        onClick={handleCheckboxChange}
                                        Simbol="*"
                                        Simbolclass={MainStyles.Symbol}
                                    />
                                    <button type="submit">
                                        CADASTRE-SE
                                    </button>
                                    {submitted && <span className={MainStyles["submitted"]}>*Formulário enviado com sucesso!</span>}
                                </Form>
                                )}
                            </Formik>
                        </div>
                    </div>
                </div>
            </div>
    )
};



export default  Institucional