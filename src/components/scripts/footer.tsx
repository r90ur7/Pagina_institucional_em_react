import React from "react"
// { useState, useEffect, useRef, useMemo, useCallback,useContext}

import FooterStyles from "../modules/footer.module.scss"
import { Newsletter } from "./celulas/Newsletter";
import { TopFooter } from "./celulas/FooterTop";
import { BottomFooter } from "./celulas/FooterBottom";
import { BackToTopButton } from "./moleculas/FixedBtn";

const Footer = () =>{
    return (
        <footer>
                <Newsletter Dadclass={FooterStyles.footer_wrapper}
                wraaperclass={FooterStyles.footer_wrapper_Form}
                FormClass={FooterStyles.footer_wrapper_Form__Newsletter}
                Errorclass={FooterStyles.hiden}
                />
                <TopFooter  DadClass={FooterStyles.footer_Top}
                    MenuClass={FooterStyles.footer_Top_menu}
                    DepartamentClass={FooterStyles.footer_Top_menu_departments}
                    SectionListCLass={FooterStyles.footer_Top_menu_departments_sections}
                    wrapperClass={FooterStyles.footer_Top_media}
                    MediaCLass={FooterStyles.footer_Top_media_MediaWraaper}
                    activeListCLass={FooterStyles.active}
                    hidenCLass={FooterStyles.hiden}
                />
                <BackToTopButton btnsclass={FooterStyles.footer_btn}/>
                <BottomFooter Dadclass={FooterStyles.footer_bottom}
                    wraaperclass={FooterStyles.footer_bottom_wraaper}
                    Paymentsclass={FooterStyles.footer_bottom_wraaper__Payments}
                    Authorclass={FooterStyles.footer_bottom_Authors}
                />
        </footer>
    )
};

export { Footer }