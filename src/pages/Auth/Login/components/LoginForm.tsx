import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Button, CircularProgress, Link, Stack } from "@mui/material";
import { PersonIcon } from "assets/svg/icons";
import { InputField } from 'components/FormFields';
import { PasswordToggleContext } from "contexts";
import { ILoginPayload } from "models";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link as RouterLink } from "react-router-dom";
import * as yup from 'yup';

export interface ILoginFormProps {
    initialValues?: ILoginPayload;
    onSubmit?: (formValues: ILoginPayload) => void;
}

export default function LoginForm(props: ILoginFormProps) {
    const { initialValues, onSubmit } = props;
    const { type } = useContext(PasswordToggleContext);

    const loginSchema = yup.object().shape({
        username: yup
            .string()
            .required('Please enter your username'),
        password: yup
            .string()
            .required('Please enter your password')
    });

    type TFormData = yup.InferType<typeof loginSchema>;

    const { 
        control,
        handleSubmit,
        formState: { isSubmitting, isValid }
    } = useForm<TFormData>({
        defaultValues: initialValues,
        resolver: yupResolver(loginSchema)
    });

    const handleFormSubmit = async (formValues: TFormData) => {
        try {
            await onSubmit?.(formValues);
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <Box>
            <form onSubmit={handleSubmit(handleFormSubmit)}>
                <Stack direction={'column'}>
                    <InputField name={'username'} control={control} label={'User Name'} needHelperText={false} />
                    <InputField name={'password'} control={control} label={'Password'} type={type} needHelperText={false} />
                </Stack>

                <Box mt={'21px'}>
                    <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
                        <Button variant="contained" type={'submit'} disabled={isSubmitting || !isValid} startIcon={ isSubmitting ? <CircularProgress size={16} /> : <PersonIcon />} sx={{ fontSize: '16px', width: '112px', height: '45px', backgroundColor: 'primary.main', borderRadius: '6px' }}>Sign In</Button>
                        <Box sx={{ fontSize: '15px' }}>
                            Forgot&ensp;&ensp;
                            <Link component={RouterLink} to={'/'} color={'#ABB0B0'}>
                                Username
                            </Link>&ensp;&ensp;|&ensp;&ensp;
                            <Link component={RouterLink} to={'/'} color={'#ABB0B0'}>
                                Password
                            </Link>
                        </Box>
                    </Stack>
                </Box>
            </form>
        </Box>
    )
}