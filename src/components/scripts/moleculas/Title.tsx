import React from "react";

interface titleName {
    nameTitle:string;
    className?: string;
}

export const Title: React.FC<titleName> = ({ nameTitle, className }) => {
    return(
        <h1 className={className}>{nameTitle}</h1>
    )
};

export const BreadcrumbTitle: React.FC<titleName> = ({ nameTitle,className })  => {
    return (
        <h5 className={className}>{nameTitle}</h5>
    )
}
export const FormTitle: React.FC<titleName> = ({ nameTitle,className })  => {
    return (
        <h2 className={className}>{nameTitle}</h2>
    )
}