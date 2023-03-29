import { Box, Stack, Typography } from "@mui/material";
import { ErrorUploadIcon } from "assets/svg/icons";

export function UploadError() {
    return (
        <Box sx={{ width: '560px', height: '236px', background: '#fff', borderRadius: '10px', border: '1px solid #fff' }}>
            <Box sx={{ width: '560px', height: '236px', background: 'rgba(49, 85, 89, 0.03)', borderRadius: '10px', border: '1px dashed #1C969E' }}>
                <Stack direction={'column'} justifyContent={'center'} alignItems={'center'} width={'100%'} height={'100%'}>
                    <ErrorUploadIcon viewBox={'0 0 45 45'} sx={{ width: '45px', height: '45px' }} />
                    <Typography fontWeight={500} fontSize={'28px'} lineHeight={'38px'} color={'#FF7A00'} sx={{ opacity: 0.75, mt: '9px' }}>Error !</Typography>
                    <Typography fontWeight={400} fontSize={'18px'} lineHeight={'25px'} color={'#06191C'} sx={{ opacity: 0.75, mt: '5px' }}>Re-Upload Your Document</Typography>
                </Stack>
            </Box>
        </Box>
    )
}