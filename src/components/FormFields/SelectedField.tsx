import { ISelectedFieldProps } from "models/formFields";
import { FormControl, FormHelperText, Select, Typography } from "@mui/material";
import { useController } from "react-hook-form";
import { MenuItem } from "@mui/material";

export function SelectedField(props: ISelectedFieldProps) {

    const { name, control, label, options, suffixComp, prefixComp, needHelperText, ...selectedProps } = props;
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
                <Select
                    value={value}
                    onChange={onChange}
                    onBlur={onBlur}
                    inputRef={ref}
                    error={invalid}
                    inputProps={selectedProps}
                    startAdornment={prefixComp}
                    endAdornment={suffixComp}
                    fullWidth
                >
                    {
                        options.map(option => (
                            <MenuItem key={option.value} value={option.value} >{option.label}</MenuItem>
                        ))
                    }
                </Select>
                {
                    needHelperText && <FormHelperText>{ error?.message }</FormHelperText>
                }
            </FormControl>
        </>
    )
}