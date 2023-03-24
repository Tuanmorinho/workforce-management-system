import { Typography } from "@mui/material";
import { Box, Stack } from "@mui/material";

export function Footer() {
    return (
        <Box width={'100%'} px={'44px'} pt={2} pb={'34px'}>
            <Stack direction='row' justifyContent='space-between' alignItems='center' width={'100%'} height={'max-content'}>
                <Typography color={'#667071'}>©2023 neologify solutions. All Right Reserved</Typography>
                <Stack direction='row' justifyContent='flex-end' alignItems='center'>
                    <Typography color={'#052225'} fontSize={'14px'} fontWeight={600} mr={'6px'}>NEOLOGIFY</Typography>
                    <Typography color={'#FFFFFF'} fontSize={'14px'} fontWeight={600} py={'3px'} px={'8px'} bgcolor={'#052225'}>SOLUTIONS</Typography>
                </Stack>
            </Stack>
        </Box>
    )
}