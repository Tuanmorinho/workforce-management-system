import { ACCESS_TOKEN } from "constants/index";
import { authAction, selectCurrentUser, selectIsLoggedIn } from "features/auth/authSlice";
import jwtDecode from "jwt-decode";
import { IAuthUser } from "models";
import { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "redux/hooks";

export default function NoAuth() {
    const navigate = useNavigate();
    const location = useLocation();

    const isLoggedIn: boolean = useAppSelector(selectIsLoggedIn);
    const currentUser: Partial<IAuthUser> | undefined = useAppSelector(selectCurrentUser);

    const token: string | null = localStorage.getItem(ACCESS_TOKEN);

    useEffect(() => {
        if (isLoggedIn || currentUser || token) navigate(location.pathname);
    }, [isLoggedIn, currentUser, token, navigate, location.pathname])

    return (
        <>
            <Outlet />
        </>
    )
}