import React from 'react';
import ArrowUp from "../../assets/icons/Uparrow.svg"
import Zap from "../../assets/icons/Zap.svg"

interface Calsses {
    btnsclass?: string;
}

export const  BackToTopButton: React.FC<Calsses> = ({btnsclass}) => {

    const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    let number = "5524999046395"

    return (
        <>
            <button  datatype='btnzap'  className={btnsclass}>
                <a target='_blank' href={`https://wa.me/${number}`}>
                    <img src={Zap} alt="Subir para o topo da página" />
                </a>
            </button>
            <button  onClick={handleBackToTop} className={btnsclass}>
                <img src={ArrowUp} alt="Subir para o topo da página" />
            </button>
        </>
    );
}
