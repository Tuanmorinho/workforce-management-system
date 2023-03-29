import { ACCESS_TOKEN } from "constants/index";
import { authAction, selectCurrentUser, selectIsLoggedIn } from "features/auth/authSlice";
import jwtDecode from "jwt-decode";
import { IAuthUser } from "models";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import { AuthUtils } from "utils/auth";

export default function Auth() {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const isLoggedIn: boolean = useAppSelector(selectIsLoggedIn);
    const currentUser: Partial<IAuthUser> | undefined = useAppSelector(selectCurrentUser);

    const token: string | null = localStorage.getItem(ACCESS_TOKEN);

    useEffect(() => {
        check();
    }, [isLoggedIn, currentUser, token, navigate]);

    const check = () => {
        if (!token || !jwtDecode(token)) navigate('/');
        
        if ((!isLoggedIn || !currentUser) && token && AuthUtils.isTokenExpired(token)) {
            dispatch(authAction.logout());
        };

        if ((!isLoggedIn || !currentUser) && token && !AuthUtils.isTokenExpired(token)) {
            dispatch(authAction.reUpdate(jwtDecode(token)));
        };
    }

    return (
        <>
            <Outlet />
        </>
    )
}