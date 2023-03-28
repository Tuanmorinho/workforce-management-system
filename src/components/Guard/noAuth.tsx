import { ACCESS_TOKEN } from "constants/index";
import { selectCurrentUser, selectIsLoggedIn } from "features/auth/authSlice";
import { IAuthUser } from "models";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useAppSelector } from "redux/hooks";

export default function NoAuth() {
    const navigate = useNavigate();

    const isLoggedIn: boolean = useAppSelector(selectIsLoggedIn);
    const currentUser: Partial<IAuthUser> | undefined = useAppSelector(selectCurrentUser);

    const token: string | null = localStorage.getItem(ACCESS_TOKEN);

    useEffect(() => {
        if (isLoggedIn || currentUser || token) navigate('/wms');
    }, [isLoggedIn, currentUser, token])

    return (
        <>
            <Outlet />
        </>
    )
}