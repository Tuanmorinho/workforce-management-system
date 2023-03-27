import { Typography } from "@mui/material";
import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css'
import { useState } from "react";
import { IInputPhoneFieldProps } from "models";

export function InputPhoneField(props: IInputPhoneFieldProps) {

    const { handleEmitValue } = props;

    const [stylePhoneInput, setStylePhoneInput] = useState<{ borderColor: string, boxShadow: string }>({ borderColor: 'rgba(6, 25, 28, 0.1)', boxShadow: 'none' });
    const [value, setValue] = useState<string>();
    
    return (
        <>
            <Typography mb={'6px'} fontSize={'15px'} lineHeight={'20px'} fontWeight={'400'}>Phone Number</Typography>
            <PhoneInput
                country={'ae'}
                value={value}
                buttonStyle={{ background: 'rgba(49, 85, 89, 0.04)', borderColor: 'rgba(6, 25, 28, 0.1) !important' }}
                inputStyle={{ width: '100%', paddingTop: '14px', paddingBottom: '14px', paddingLeft: '50px', paddingRight: '16.5px', backgroundColor: 'rgba(49, 85, 89, 0.04)', fontFamily: 'Manrope', fontSize: '15px', height: '54.56px', ...stylePhoneInput }}
                onFocus={() => setStylePhoneInput({ borderColor: 'rgba(13,110,253,.25)', boxShadow: '0 0 0 0.25rem rgba(13,110,253,.25)' })}
                onBlur={() => setStylePhoneInput({ borderColor: 'rgba(6, 25, 28, 0.1)', boxShadow: 'none' })}
                onChange={phone => {
                    setValue(phone);
                    handleEmitValue(phone)
                }}
            />
        </>
    )
}