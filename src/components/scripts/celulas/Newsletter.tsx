import React from "react";
import { Formik,Form, FormikHelpers } from 'formik';
import { Inputform } from "./forminput";
import NewsletterSchema from "../../../schema/NewsletterSchema";

interface Calsses {
    Dadclass?: string;
    wraaperclass?: string;
    FormClass?: string;
    Errorclass?: string;
    Labelclass?: string;
    Inputclass?: string;
    Buttonclass?: string;
    Simbol?: string;
    Simbolclass?: string;
}
interface FormTypes{
    newsletter: string,
}
const initialValues = {
    newsletter: "",
}

export const Newsletter: React.FC<Calsses> = (
    {Dadclass,wraaperclass,FormClass,Inputclass,Buttonclass,Errorclass}
) => {

    const handleFormikSubmit = (values:FormTypes, formik: FormikHelpers<FormTypes>) =>{
        console.log(values)
        formik.resetForm();
    }

    return(
        <div className={Dadclass}>
            <div className={wraaperclass}>
                    <h2>Assine nossa Newsletter</h2>
                    <Formik
                        validationSchema={NewsletterSchema}
                        onSubmit={handleFormikSubmit}
                        initialValues={initialValues}>
                        <Form className={FormClass}>
                            <Inputform
                                name="newsletter"
                                type="email"
                                placeholder="E-mail"
                                className={Inputclass}
                                Errorclass={Errorclass}
                            />
                            <button type="submit" className={Buttonclass}>Enviar</button>
                        </Form>
                    </Formik>
            </div>
        </div>
    )
};
