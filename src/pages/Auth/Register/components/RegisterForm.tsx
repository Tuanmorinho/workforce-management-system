import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Button, CircularProgress, Grid } from "@mui/material";
import { PersonIcon } from "assets/svg/icons";
import { InputField, InputPhoneField, SelectedField } from 'components/FormFields';
import { IRegisterPayload } from 'models';
import { useState } from 'react';
import { useForm } from "react-hook-form";
import 'react-phone-input-2/lib/style.css';
import * as yup from 'yup';
;

export interface IRegisterFormProps {
    initialValues?: IRegisterPayload;
    onSubmit?: (formValues: IRegisterPayload) => void;
}

export default function RegisterForm(props: IRegisterFormProps) {
    const { initialValues, onSubmit } = props;

    const [phoneNumber, setPhoneNumber] = useState<string>();

    const registerSchema = yup.object().shape({
        username: yup
            .string()
            .required('Please enter your username'),
        firstName: yup
            .string()
            .required('Please enter your first name'),
        lastName: yup
            .string()
            .required('Please enter your last name'),
        middleName: yup
            .string()
            .required('Please enter your middle name'),
        passportNo: yup
            .string()
            .required('Please enter your passport number'),
        nationality: yup
            .string()
            .required('Please choose your nationality'),
        password: yup
            .string()
            .required('Please enter your password')
            .matches(
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
                'Password must contain 8 characters, 1 uppercase, 1 lowercase, 1 number and 1 special case character'
            ),
        confirmPassword: yup
            .string()
            .required('Please enter your confirm password')
            .oneOf([yup.ref('password')], 'Password must match'),
        phoneNumber: yup.string()
    });

    type TFormData = yup.InferType<typeof registerSchema>;

    const { 
        control,
        handleSubmit,
        formState: { isSubmitting }
    } = useForm<TFormData>({
        defaultValues: initialValues,
        resolver: yupResolver(registerSchema)
    });

    const handleFormSubmit = async (formValues: TFormData) => {
        try {
            await onSubmit?.({ ...formValues, phoneNumber});
        } catch (error) {
            console.log(error)
        }
    }

    const handlePhoneValue = (phoneNumber: string) => {
        setPhoneNumber(phoneNumber)
    }

    return (
        <Box>
            <form onSubmit={handleSubmit(handleFormSubmit)}>
                <Grid container spacing={0} direction={'row'} justifyContent={'center'} alignItems={'flex-start'} width={'100%'}>
                    <Grid item sm={6} width={'100%'}>
                        <Box pr={1}>
                            <InputField name={'username'} control={control} label={'User Name'} needHelperText={true} placeholder={'Email'} />
                        </Box>
                    </Grid>
                    <Grid item sm={6} width={'100%'}>
                        <Box pl={1}>
                            <InputField name={'firstName'} control={control} label={'First Name'} needHelperText={true} placeholder={'As Per Passport'} />
                        </Box>
                    </Grid>
                    <Grid item sm={6} width={'100%'}>
                        <Box pr={1}>
                            <InputField name={'lastName'} control={control} label={'Last Name'} needHelperText={true} placeholder={'As Per Passport'} />
                        </Box>
                    </Grid>
                    <Grid item sm={6} width={'100%'}>
                        <Box pl={1}>
                            <InputField name={'middleName'} control={control} label={'Middle Name'} needHelperText={true} placeholder={'As Per Passport'} />
                        </Box>
                    </Grid>
                    <Grid item sm={6} width={'100%'}>
                        <Box pr={1}>
                            <InputField name={'passportNo'} control={control} label={'Passport No'} needHelperText={true} placeholder={'As Per Passport'} />
                        </Box>
                    </Grid>
                    <Grid item sm={6} width={'100%'}>
                        <Box pl={1}>
                            <SelectedField name={'nationality'} control={control} options={[{ label: 'India', value: '1' }]} label={'Nationality'} needHelperText={true} />
                        </Box>
                    </Grid>
                    <Grid item sm={6} width={'100%'}>
                        <Box pr={1}>
                            <InputField name={'password'} control={control} label={'Password'} type={'password'} needHelperText={true} />
                        </Box>
                    </Grid>
                    <Grid item sm={6} width={'100%'}>
                        <Box pl={1}>
                            <InputField name={'confirmPassword'} control={control} label={'Confirm Password'} type={'password'} needHelperText={true} />
                        </Box>
                    </Grid>
                    <Grid item sm={12} width={'100%'}>
                        <Box>
                            <InputPhoneField handleEmitValue={handlePhoneValue} />
                        </Box>
                    </Grid>
                </Grid>

                <Box mt={'25px'}>
                    <Button variant="contained" type={'submit'} disabled={isSubmitting} startIcon={ isSubmitting ? <CircularProgress size={16} /> : <PersonIcon />} sx={{ fontSize: '16px', width: '112px', height: '45px', backgroundColor: 'primary.main', borderRadius: '6px' }}>Register</Button>
                </Box>
            </form>
        </Box>
    )
}