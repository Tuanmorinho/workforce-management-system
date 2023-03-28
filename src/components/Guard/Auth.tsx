import { ACCESS_TOKEN } from "constants/index";
import { authAction, selectCurrentUser, selectIsLoggedIn } from "features/auth/authSlice";
import jwtDecode from "jwt-decode";
import { IAuthUser } from "models";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "redux/hooks";

export default function Auth() {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const isLoggedIn: boolean = useAppSelector(selectIsLoggedIn);
    const currentUser: Partial<IAuthUser> | undefined = useAppSelector(selectCurrentUser);

    const token: string | null = localStorage.getItem(ACCESS_TOKEN);

    useEffect(() => {
        if ((!isLoggedIn || !currentUser) && token) {
            dispatch(authAction.logout());
        };
        if (!isLoggedIn || !currentUser || !token || !jwtDecode(token)) navigate('/');
    }, [isLoggedIn, currentUser, token, navigate])

    return (
        <>
            <Outlet />
        </>
    )
}