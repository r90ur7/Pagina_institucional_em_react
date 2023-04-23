import React from "react";
import Face from "../../assets/icons/Facebook.svg"
import Insta from "../../assets/icons/Instagram.svg"
import Twiter from "../../assets/icons/Twiter.svg"
import Linkedin from "../../assets/icons/Linkedin.svg"
import Yt from "../../assets/icons/Youtube.svg"


interface Calsses {
    MediaCLass?: string;
}


export const SocialImages: React.FC<Calsses> = (
    {MediaCLass}
) => {
    return(
            <div className={MediaCLass}>
                <fieldset >
                    <a href="/">
                        <img datatype="" src={Face} alt="Facebook" />
                    </a>
                    <a href="/">
                        <img datatype="" src={Insta} alt="Instagram" />
                    </a>
                    <a href="/">
                        <img datatype="Twiter" src={Twiter} alt="Twiter" />
                    </a>
                    <a href="/">
                        <img datatype="Youtube" src={Yt} alt="Youtube" />
                    </a>
                    <a href="/">
                        <img datatype="Linkedin" src={Linkedin} alt="Linkedin" />
                    </a>
                </fieldset>
            </div>
    )
};