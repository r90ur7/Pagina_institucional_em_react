import React from "react"
import {SocialImages} from "../moleculas/SocialImages"

interface Calsses {
    wrapperClass?: string;
    MediaCLass?: string;
}


export const SocialMedia: React.FC<Calsses> = (
    {wrapperClass,MediaCLass}
) => {


    return(
        <div className={wrapperClass}>
            <SocialImages MediaCLass={MediaCLass} />
            <a href="https://br.lipsum.com">www.loremipsum.com</a>
        </div>
    )
};