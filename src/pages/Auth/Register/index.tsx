import { Box, Paper, Stack, Typography } from "@mui/material";
import { IRegisterPayload } from "models";
import { useAppDispatch } from "redux/hooks";

import loginImg from 'assets/images/login-img.png';
import RegisterForm from "./components/RegisterForm";

export default function RegisterPage() {
    const dispatch = useAppDispatch();

    const initialValues: IRegisterPayload = {
        username: '',
        firstName: '',
        lastName: '',
        middleName: '',
        passportNo: '',
        nationality: '1',
        password: '',
        confirmPassword: '',
        phoneNumber: ''
    }

    const handleRegister = (formValues: IRegisterPayload) => {
        console.log(formValues)
    }
    
    return (
        <Box width={'100%'} height={'100%'} position={'absolute'} top={0} left={0} bottom={0}>
            <Stack direction={'column'} justifyContent={'center'} alignItems={'center'} sx={{ width: '100%', height: '100%' }}>
                <Typography sx={{ fontWeight: 600, fontSize: '28px' }}>Register New Account</Typography>
                <Paper elevation={6} sx={{ borderRadius: '16px', mt: '25px' }}>
                    <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'} position={'relative'}>
                        <Box sx={{ backgroundImage: `url(${loginImg})`, width: '360px', height: '100%', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', borderRadius: '16px 0 0 16px', position: 'absolute', top: 0, left: 0, bottom: 0 }}></Box>
                        <Box ml={'360px'} >
                            <Stack direction={'column'} justifyContent={'center'} alignItems={'center'} margin={'100px'}>
                                <Box width={'500px'}>
                                    <RegisterForm initialValues={initialValues} onSubmit={handleRegister} />
                                </Box>
                            </Stack>
                        </Box>
                    </Stack>
                </Paper>
            </Stack>
        </Box>
    )
}