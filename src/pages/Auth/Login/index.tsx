import { Box, Paper, Stack, Typography } from "@mui/material";
import { PasswordToggleProvider } from "contexts";
import { authAction } from "features/auth/authSlice";
import { ILoginPayload } from "models";
import { useAppDispatch } from "redux/hooks";

import loginImg from 'assets/images/login-img.png';
import LoginForm from "./components/LoginForm";

export default function LoginPage() {
    const dispatch = useAppDispatch();

    const initialValues: ILoginPayload = {
        username: '',
        password: ''
    }

    const handleLogin = (formValues: ILoginPayload) => {
        dispatch(authAction.login(formValues));
    }
    
    return (
        <Box width={'100%'} height={'100%'} position={'absolute'} top={0} left={0} bottom={0}>
            <Stack direction={'column'} justifyContent={'center'} alignItems={'center'} sx={{ width: '100%', height: '100%' }}>
                <Typography sx={{ fontWeight: 600, fontSize: '28px' }}>Sign In Your Account</Typography>
                <Paper elevation={6} sx={{ borderRadius: '16px', mt: '25px' }}>
                    <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'} position={'relative'}>
                        <Box sx={{ backgroundImage: `url(${loginImg})`, width: '360px', height: '100%', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', borderRadius: '16px 0 0 16px', position: 'absolute', top: 0, left: 0, bottom: 0 }}></Box>
                        <Box ml={'360px'} >
                            <Stack direction={'column'} justifyContent={'center'} alignItems={'center'} margin={'100px'}>
                                <Box width={'430px'}>
                                    <PasswordToggleProvider>
                                        <LoginForm initialValues={initialValues} onSubmit={handleLogin} />
                                    </PasswordToggleProvider>
                                </Box>
                            </Stack>
                        </Box>
                    </Stack>
                </Paper>
            </Stack>
        </Box>
    )
}