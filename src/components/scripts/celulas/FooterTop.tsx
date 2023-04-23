import React from "react";
import { MenuList } from "./ListMenu";
import { SocialMedia } from "./SocialMedia";

interface Classes {
    DadClass?: string;
    wrapperClass?: string;
    DepartamentClass?: string;
    MediaCLass?: string;
    MenuClass?: string;
    SectionListCLass?: string;
    hidenCLass?: string;
    activeListCLass?: string;
}
interface TopFooteratrr extends Classes{
}

export const TopFooter: React.FC<TopFooteratrr> = (
    {DadClass, MediaCLass,wrapperClass,MenuClass,DepartamentClass,SectionListCLass,activeListCLass,hidenCLass}
) => {

    return(
        <div className={DadClass}>
            <MenuList wrapperClass={MenuClass}
            DepartamentClass={DepartamentClass}
            SectionListCLass={SectionListCLass}
            activeListCLass={activeListCLass}
            hidenCLass={hidenCLass}
            />
            <SocialMedia wrapperClass={wrapperClass}
            MediaCLass={MediaCLass} />
        </div>
    )
};
