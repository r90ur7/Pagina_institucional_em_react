import React from "react";
import { Author } from "../moleculas/Authors";
import { PaymentsMethod } from "../moleculas/PaymentsMethod";

interface Calsses {
    Dadclass?: string;
    Authorclass?: string;
    wraaperclass?: string;
    Paymentsclass?: string;
}

export const BottomFooter: React.FC<Calsses> = (
    {Dadclass,wraaperclass,Paymentsclass,Authorclass}
) => {


    return(
        <div className={Dadclass} >
            <div  className={wraaperclass}>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit, sed do eiusmod tempor
                </p>
                <PaymentsMethod Paymentsclass={Paymentsclass}/>
            </div>
            <Author Authorclass={Authorclass} />
        </div>
    )
};