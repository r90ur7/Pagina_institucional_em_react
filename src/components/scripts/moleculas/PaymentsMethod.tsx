import React from "react";
import Master from "../../assets/icons/Master.svg"
import Visa from "../../assets/icons/Visa.svg"
import AmericanExpress from "../../assets/icons/Diners.svg"
import Elo from "../../assets/icons/Elo.svg"
import HiperCard from "../../assets/icons/Hiper.svg"
import Pagseguro from "../../assets/icons/Pagseguro.svg"
import Boleto from "../../assets/icons/Boleto.svg"
import Vtex from "../../assets/icons/vtex-pci-200.svg"

interface Calsses {
    Paymentsclass?: string;
}

interface AuthorProps extends Calsses {

}
interface PaymentsMethodatrr extends AuthorProps {

}

export const PaymentsMethod: React.FC<PaymentsMethodatrr> = (
    {Paymentsclass}
) => {
    return(
            <div className={Paymentsclass}>
                <fieldset >
                    <img datatype="master__card" src={Master} alt="master card" />
                    <img datatype="Visa" src={Visa} alt="cartão visa" />
                    <img datatype="American__Express" src={AmericanExpress} alt="American Express" />
                    <img datatype="Elo" src={Elo} alt="Elo" />
                    <img datatype="HiperCard" src={HiperCard} alt="HiperCard" />
                    <img datatype="Pagseguro" src={Pagseguro} alt="Pay Pal" />
                    <img datatype="Boleto" src={Boleto} alt="Boleto" />
                </fieldset>
                <fieldset datatype="Payments">
                    <img datatype="VtexPci" src={Vtex} alt="VtexPci" />
                </fieldset>
            </div>
    )
};