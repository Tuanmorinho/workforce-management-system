import { InputHTMLAttributes, ReactNode } from "react";
import { Control } from "react-hook-form";
export interface IInputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    control: Control<any>;
    label?: string;
    prefixComp?: ReactNode;
    suffixComp?: ReactNode;
    needHelperText: boolean;
}
export interface IInputPhoneFieldProps extends InputHTMLAttributes<HTMLInputElement> {
    handleEmitValue: (value: string) => void;
}