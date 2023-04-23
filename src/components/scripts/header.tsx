import React, {useContext} from "react"
import { Formik,Form, Field, FormikHelpers } from 'formik';

import { Submenu } from "../../Modal/submenuModal";
import {SubmenuContext} from "../../contexts/SubmenuContext";
import { Link } from "react-router-dom";
import HeaderStyles from "../modules/header.module.scss"

import Logo from '../assets/imgs/Logo.png';
import LogoMobile from '../assets/imgs/Logo-M3Academy-mobile.png';
import Lupa from "../assets/icons/search_Icon_desk.svg";
import Cart from "../assets/icons/cart_desk_icon.svg";
import MenuMobile from "../assets/icons/Hamburger_menu.svg";

interface SearchboxTypes {
    search:string
}

const initialValues = {
    search:""
}

const Header = () =>{

    const { isOpened, setisOpened } = useContext(SubmenuContext)
    const handleSeacrhFormikSubmit = (values:SearchboxTypes, formik: FormikHelpers<SearchboxTypes>) =>{
        formik.resetForm();
    }

    return (
        <header >
            <div className={HeaderStyles["Header_wrapper"]}>
                <div className={HeaderStyles["Header_wrapper-top"]}>
                    <fieldset className={HeaderStyles["Header_wrapper-top-logo"]}>
                        <Link to="/">
                            <img src={Logo} alt="Logo" />
                        </Link>
                    </fieldset>
                        <Formik
                                initialValues={initialValues}
                                onSubmit={handleSeacrhFormikSubmit}
                        >
                            <Form className={HeaderStyles["Header_wrapper-top-Searchbox"]}>
                                <Field id="search" name="search" type="text" placeholder="Buscar" />
                                <label htmlFor="search">
                                    <button type="submit">
                                        <img src={Lupa} alt="Lupa" />
                                    </button>
                                </label>
                            </Form>
                        </Formik>


                    <div className={HeaderStyles["Header_wrapper-top-menu"]}>
                        <button className={HeaderStyles["Header_wrapper-top-menu-login"]}>Entrar</button>
                        <button className={HeaderStyles["Header_wrapper-top-menu-cart"]}>
                            <img src={Cart} alt="Carrinho_icon" />
                        </button>
                    </div>
                </div>

                <div className={HeaderStyles["Header_wrapper-mobileTop"]}>
                    <fieldset className={HeaderStyles["Header_wrapper-mobileTop-menu"]}>
                        <img
                            onClick={() => {setisOpened(true)}}
                            className={HeaderStyles["hamburguer"]}
                            src={MenuMobile}
                            alt="Logo-mobile"
                        />
                        <Submenu isOpened={isOpened} setisOpened={setisOpened}/>
                    </fieldset>
                    <fieldset className={HeaderStyles["Header_wrapper-mobileTop-logo"]}>
                        <a href="/">
                            <img src={LogoMobile} alt="Logo-mobile" />
                        </a>
                    </fieldset>
                    <button className={HeaderStyles["Header_wrapper-mobileTop-cart"]}>
                        <img src={Cart} alt="Carrinho_icon" />
                    </button>
                </div>
                <div className={HeaderStyles["Header_wrapper-mobilebottom"]}>
                    <Formik
                            initialValues={initialValues}
                            onSubmit={handleSeacrhFormikSubmit}
                            >
                                <Form className={HeaderStyles["Header_wrapper-mobilebottom-Searchbox"]}>
                                    <Field id="search" name="search" type="text" placeholder="Buscar" />
                                    <label htmlFor="search">
                                        <button>
                                            <img src={Lupa} alt="Lupa" />
                                        </button>
                                    </label>
                                </Form>
                    </Formik>
                </div>

                <div className={HeaderStyles["Header_wrapper-bottom"]}>
                    <nav className={HeaderStyles["Header_wrapper-bottom-navigator"]}>
                        <ul>
                            <li>
                                <button>
                                    <Link to="/Cursos">
                                        CURSOS
                                    </Link>
                                </button>
                            </li>
                            <li>
                                <button>
                                    <Link to="/saibamais">
                                        SAIBA MAIS
                                    </Link>
                                </button>
                            </li>
                            <li>
                                <button>
                                    <Link to="/Institucional">
                                        INSTITUCIONAIS
                                    </Link>
                                </button>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
};

export { Header }