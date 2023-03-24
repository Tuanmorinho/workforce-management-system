import { ACCESS_TOKEN } from "constants/index";
import { selectCurrentUser, selectIsLoggedIn } from "features/auth/authSlice";
import jwtDecode from "jwt-decode";
import { IAuthUser } from "models";
import { ReactNode, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "redux/hooks";

interface IAuthProps {
    children: ReactNode
}

export default function Auth({ children }: IAuthProps) {
    const navigate = useNavigate();

    const isLoggedIn: boolean = useAppSelector(selectIsLoggedIn);
    const currentUser: Partial<IAuthUser> | undefined = useAppSelector(selectCurrentUser);

    const token: string | null = localStorage.getItem(ACCESS_TOKEN);

    useEffect(() => {
        if (!isLoggedIn || !currentUser || !token || !jwtDecode(token)) navigate('/login');
    }, [isLoggedIn, currentUser, token])

    return (
        <>
            { children }
        </>
    )
}