import { Link as RouterLink, useNavigate } from "react-router-dom";
import { PersonIcon } from "assets/svg/icons";
import SearchIcon from '@mui/icons-material/Search';
import { Paper, Box, Stack, Button, IconButton, Link } from "@mui/material";

export function Header() {

    const navigate = useNavigate();

	return (
		<Paper sx={{ position: 'fixed', right: 0, left: 0, top: 0, bgcolor: 'transparent', borderRadius: 0 }} elevation={0}>
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
                        <Button variant="contained" startIcon={<PersonIcon />} sx={{ fontSize: '16px', width: '112px', height: '45px', backgroundColor: 'primary.main', borderRadius: '6px' }} onClick={() => navigate('/auth/login')}>Sign In</Button>
                    </Box>
                </Stack>
            </Box>
		</Paper>
	);
}