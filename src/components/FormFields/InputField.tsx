import { IInputFieldProps } from "models/formFields";
import { FormControl, FormHelperText, OutlinedInput, Typography } from "@mui/material";
import { useController } from "react-hook-form";

export function InputField(props: IInputFieldProps) {

    const { name, control, label, suffixComp, prefixComp, needHelperText, ...inputProps } = props;
    // input props like disable, readonly,....

    const {
        field: { value, onChange, onBlur, ref },
        fieldState: { invalid, error }
    } = useController({
        name,
        control
    });
    
    return (
        <>
            <FormControl variant="outlined" margin={'normal'} fullWidth>
                <Typography mb={'6px'} fontSize={'15px'} lineHeight={'20px'} fontWeight={'400'}>{label}</Typography>
                <OutlinedInput
                    value={value}
                    onChange={onChange}
                    onBlur={onBlur}
                    inputRef={ref}
                    error={invalid}
                    inputProps={inputProps}
                    startAdornment={prefixComp}
                    endAdornment={suffixComp}
                    fullWidth
                />
                {
                    needHelperText && <FormHelperText>{ error?.message }</FormHelperText>
                }
            </FormControl>
        </>
    )
}