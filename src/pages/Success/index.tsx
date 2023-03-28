import { Button, Typography } from "@mui/material";
import { Box, Paper, Stack } from "@mui/material";
import { CheckIcon, PersonIcon } from "assets/svg/icons";
import { useNavigate } from "react-router-dom";

export default function ThankYouPage() {
    const navigate = useNavigate();

    return (
        <Box width={'100%'} height={'100%'} position={'absolute'} top={0} left={0} bottom={0}>
            <Stack justifyContent={'center'} alignItems={'center'} width={'100%'} height={'100%'}>
                <Paper elevation={6} sx={{ borderRadius: '16px', width: 'min-content' }}>
                    <Stack direction={'column'} justifyContent={'space-between'} alignItems={'center'} px={'115px'} pt={'105px'} pb={'226px'}>
                        <Box sx={{ width: '560px', height: '236px', background: 'rgba(49, 85, 89, 0.03)', borderRadius: '10px', border: '1px dashed #1C969E' }}>
                            <Stack direction={'column'} justifyContent={'center'} alignItems={'center'} width={'100%'} height={'100%'}>
                                <CheckIcon viewBox={'0 0 50 50'} sx={{ width: '50px', height: '50px' }} />
                                <Typography fontWeight={500} fontSize={'28px'} lineHeight={'38px'} color={'primary.main'} sx={{ opacity: 0.75, mt: '5px' }}>Thank You</Typography>
                                <Typography fontWeight={400} fontSize={'18px'} lineHeight={'25px'} color={'#06191C'} sx={{ opacity: 0.75, mt: '5px' }}>Registered Successfully</Typography>
                            </Stack>
                        </Box>
                        <Button variant="contained" startIcon={<PersonIcon />} sx={{ fontSize: '16px', width: '112px', height: '45px', backgroundColor: 'primary.main', borderRadius: '6px', mt: '22px' }} onClick={() => navigate('/auth/login')}>Sign In</Button>
                    </Stack>
                </Paper>
            </Stack>
        </Box>
    )
}