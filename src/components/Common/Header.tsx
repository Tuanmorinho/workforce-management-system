import { Link as RouterLink, useNavigate } from "react-router-dom";
import { PersonIcon } from "assets/svg/icons";
import SearchIcon from '@mui/icons-material/Search';
import { Paper, Box, Stack, Button, IconButton, Link } from "@mui/material";
import { useState, UIEvent, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import { authAction, selectCurrentUser, selectIsLoggedIn } from "features/auth/authSlice";
import { IAuthUser } from "models";
import Typography from "@mui/material/Typography";
import Avatar from 'assets/images/avatar-img.png';

export function Header() {

    const navigate = useNavigate();
    const [bgColor, setBgColor] = useState<string>('transparent');

    const dispatch = useAppDispatch();
    const isLoggedIn: boolean = useAppSelector(selectIsLoggedIn);
    const currentUser: Partial<IAuthUser> | undefined = useAppSelector(selectCurrentUser);

    useEffect(() => {
        const onScroll = (event: any) => {
            const scrollTop: number = event.target.documentElement.scrollTop;
            if (scrollTop > 95) {
                setBgColor('#F2F8F9');
            } else setBgColor('transparent');
        };
        window.addEventListener('scroll', onScroll);
        
        window.scrollTo({ top: 0, behavior: 'smooth' });

        return () => window.removeEventListener('scroll', onScroll);

    }, [])

	return (
		<Paper sx={{ position: 'fixed', right: 0, left: 0, top: 0, bgcolor: bgColor, borderRadius: 0, zIndex: 999 }} elevation={0}>
            <Box width={'100%'} px={'37px'}>
                <Stack direction='row' justifyContent='flex-end' alignItems='center' height={'max-content'} pt={'34px'} pb={2}>
                    <Box>
                        <Stack direction='row' justifyContent='flex-end' alignItems='center'>
                            <Link component={RouterLink} to={'/'} pr={'25px'} color={'#06191C'}>
                                About Neologify        
                            </Link>    
                            <Link component={RouterLink} to={'/'} pr={'25px'} color={'#06191C'}>
                                Services           
                            </Link>
                            <Link component={RouterLink} to={'/'} pr={'25px'} color={'#06191C'}>
                                Resources           
                            </Link>
                            <Link component={RouterLink} to={'/'} pr={'25px'} color={'#06191C'}>
                                FAQ         
                            </Link>
                            <Link component={RouterLink} to={'/'} pr={'25px'} color={'#06191C'}>
                                Contact Us
                            </Link>
                        </Stack>
                    </Box>
                    <Box pr={'28px'}>
                        <IconButton sx={{ '&:hover': { color: '#1C969E', backgroundColor: 'transparent' }, p: 0 }}>
                            <SearchIcon />
                        </IconButton>
                    </Box>
                    <Box>
                        {
                            isLoggedIn && currentUser ? (
                                <Stack direction={'row'} justifyContent={'flex-end'} alignItems={'center'}>
                                    <Typography fontWeight={'600'} fontSize={'16px'} lineHeight={'22px'} color={'primary'} mr={'12px'} sx={{ cursor: 'pointer' }} onClick={() => dispatch(authAction.logout())}>{currentUser.given_name}</Typography>
                                    <Box sx={{ width: '45px', height: '45px', border: '2px solid #FFFFFF', borderRadius: '10px', backgroundImage: `url(${Avatar})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', cursor: 'pointer' }} onClick={() => dispatch(authAction.logout())}></Box>
                                </Stack>
                            ) : (
                                <Button variant="contained" startIcon={<PersonIcon />} sx={{ fontSize: '16px', width: '112px', height: '45px', backgroundColor: 'primary.main', borderRadius: '6px' }} onClick={() => navigate('/auth/login')}>Sign In</Button>
                            )
                        }
                    </Box>
                </Stack>
            </Box>
		</Paper>
	);
}