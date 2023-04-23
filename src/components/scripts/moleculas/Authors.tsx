import React from "react";
import VtexLogo from "../../assets/imgs/VtexLogo.svg"
import M3 from "../../assets/imgs/M3_NameLogo.svg"

interface Calsses {
    Authorclass?: string;
}

interface AuthorProps extends Calsses {

}

export const Author: React.FC<AuthorProps> = (
    {Authorclass}
) => {
    return(
            <div className={Authorclass}>
                <p>Powered by</p>
                <a datatype="LinkVtex" href="https://vtex.com/br-pt/">
                    <img datatype="VtexLogo" src={VtexLogo} alt="vtex logo" />
                </a>
                <p>Developed by</p>
                <a datatype="LinkM3"  href="https://m3ecommerce.com">
                    <img datatype="M3" src={M3} alt="M3" />
                </a>
            </div>
    )
};