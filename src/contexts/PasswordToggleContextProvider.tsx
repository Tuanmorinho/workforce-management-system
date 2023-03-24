import { createContext, ReactNode, useState } from "react";

interface IPropsPasswordToggleContextProvider {
    children: ReactNode;
}

export interface IPasswordToggleContext {
    type: string;
    toggleType?: () => void;
}

export const PasswordToggleContext = createContext<IPasswordToggleContext>({ type: 'password' });

export const PasswordToggleProvider = (props: IPropsPasswordToggleContextProvider) => {
    const [type, setType] = useState<string>('password');

    const toggleType = () => {
        if (type === 'text') setType('password');
        if (type === 'password') setType('text');
    }
    
    return (
        <PasswordToggleContext.Provider value={{ type, toggleType }}>
            { props.children }
        </PasswordToggleContext.Provider>
    )
}