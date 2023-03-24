import { Visibility, VisibilityOff } from "@mui/icons-material";
import { IconButton, InputAdornment } from "@mui/material";
import { PasswordToggleContext } from "contexts";
import { useContext, useState } from "react";

export default function SuffixPasswordToggle() {

    const { toggleType } = useContext(PasswordToggleContext);
    const [showPassword, setShowPassword] = useState<boolean>(false);

    const handleClickShowPassword = () => { 
        setShowPassword((show) => !show);
        toggleType?.();
    }

    const handleMouseDownPassword = (
        event: React.MouseEvent<HTMLButtonElement>
    ) => {
        event.preventDefault();
    };

    return (
        <InputAdornment position="end">
            <IconButton
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
            >
            {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
        </InputAdornment>
    )
}