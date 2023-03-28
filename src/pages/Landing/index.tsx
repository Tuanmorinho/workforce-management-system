import { Box, Button, Link, Stack, Grid, Typography } from "@mui/material";
import landingImg from 'assets/images/landing-img.png';
import { PersonIcon } from "assets/svg/icons";
import { Link as RouterLink, useNavigate } from "react-router-dom";

export default function LandingPage() {
    
    const navigate = useNavigate();
    
    return (
        <Box width={'100%'} height={'100%'} position={'absolute'} top={0} left={0} bottom={0}>
            <Stack direction={'row'} justifyContent='center' alignItems={'center'} width={'100%'} height={'100%'}>
                <Grid container spacing={0} direction={'row'} justifyContent='center' alignItems={'center'} height={'100%'}>
                    <Grid item sm={6} width={'100%'} textAlign={'right'}>
                        <img src={landingImg} alt="WFM..." style={{ width: '601px', height: '571px', objectFit: 'contain', marginBottom: '50px', marginRight: '-67px' }} />
                    </Grid>
                    <Grid item sm={6} width={'100%'}>
                        <Stack direction={'column'} justifyContent={'center'} alignItems={'start'} ml={'155px'}>
                            <Typography color={'#0D383D'} fontSize={'55px'} lineHeight={'65px'} align={'left'} fontWeight={'Bold'} width={'435px'}>Workforce Management System</Typography>
                            <Box mt={'33px'}>
                                <Stack direction={'row'} justifyContent='flex-start' alignItems={'center'}>
                                    <Button variant="contained" startIcon={<PersonIcon />} sx={{ fontSize: '16px', width: '112px', height: '45px', backgroundColor: 'primary.main', borderRadius: '6px' }} onClick={() => navigate('/auth/login')}>Sign In</Button>
                                    <Typography color={'#1C969E'} fontSize={'20px'} fontWeight={500} lineHeight={'25px'} mx={'25px'}>|</Typography>
                                    <Link component={RouterLink} to={'/auth/register'} pr={'25px'} color={'#5E6969'} fontSize={'18px'} fontWeight={500} lineHeight={'27.6px'}>
                                        Register Now!
                                    </Link>
                                </Stack>
                            </Box>
                        </Stack>
                    </Grid>
                </Grid>
            </Stack>
        </Box>
    )
}