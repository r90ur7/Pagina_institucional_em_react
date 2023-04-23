import React from "react";
import { Field, ErrorMessage } from 'formik';

interface classes{
    className?: string;
    Errorclass?: string;
    Labelclass?: string;
    Inputclass?: string;
    Simbolclass?: string;
}

interface inputProps extends classes {
    type:string
    name?:string;
    required?:boolean
    id?: string;
    Label?: string;
    placeholder?: string;
}
interface checkbox extends inputProps {
    Simbol?: string;
    checked?:boolean
    onClick?: (checked:React.ChangeEvent<HTMLInputElement>) => void
}

export const Inputform: React.FC<checkbox> = (
    { type="text",name,className,Inputclass,Simbol,Labelclass,Simbolclass,id,Label,placeholder, onClick,checked,Errorclass,required = false}
    ) => {
    return(
        <div className={className}>
                <span className={Simbolclass}>{Simbol}</span>
            <label className={Labelclass} htmlFor={id}>{Label}</label>
            <Field
            onClick={onClick}
            checked={checked}
            className={Inputclass}
            id={id} name={name}
            type={type}
            placeholder={placeholder}
            required={required}/>
            <ErrorMessage
                component="span"
                name={String(name)}
                className={Errorclass}
            />
        </div>
    )
};
