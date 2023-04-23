import React from "react";
import "./Submenu.scss"

import close from "../components/assets/icons/close.svg";

interface SUbmenuProps {
    isOpened: boolean,
    setisOpened: React.Dispatch<React.SetStateAction<boolean>>
}

const Submenu = ({isOpened, setisOpened } : SUbmenuProps) =>  {

    return (
    <div className={`Submenu-wrapper ${isOpened && "opened"}  `}>
            <div className={`Submenu-wrapper-menu ${isOpened && "opened"} `}>
                <div className="Submenu-wrapper-menu-header">
                    <span>
                            <a href="/">
                                <button>
                                    ENTRAR
                                </button>
                            </a>
                    </span>
                    <span>
                        <img
                            onClick={() => {setisOpened(false)}}
                            className={ `Submenu-wrapper-menu-header-close ${isOpened && "opened"} ` }
                            src={close}
                            alt="close_icon"
                        />
                    </span>
                </div>
                <div className="Submenu-wrapper-menu-options" >
                    <nav>
                        <ul>
                            <li>
                                <a href="/">
                                    <button>CURSOS</button>
                                </a>
                            </li>
                            <li>
                                <a href="/">
                                    <button>SAIBA MAIS</button>
                                </a>
                            </li>
                            <li>
                                <a href="/">
                                        <button>INSTITUCIONAIS</button>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
            <div onClick={() => {setisOpened(false)}} className={`Submenu-wrapper-overlay ${isOpened && "opened"} `}/>
    </div>
    )

}

export {Submenu}