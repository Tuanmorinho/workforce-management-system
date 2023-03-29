import { Box, Button, Paper, Stack } from "@mui/material";
import { UploadError } from "components/Upload";
import { useNavigate } from "react-router-dom";

export default function UploadPassportFailed() {

    const navigate = useNavigate();

    const handleReUpload = () => {
        navigate('/wms/passport');
    };

    return (
        <Box width={'100%'} height={'100%'}>
            <Paper elevation={6} sx={{ borderRadius: '16px', width: 'min-content' }}>
                <Stack direction={'column'} justifyContent={'space-between'} alignItems={'center'} px={'115px'} pt={'105px'} pb={'226px'}>
                    <UploadError />
                    <Stack direction={'row'} justifyContent={'center'} alignItems={'center'} mt={'33px'} width={'100%'}>
                        <Button variant="contained" sx={{ fontSize: '16px', width: '135px', height: '45px', backgroundColor: 'primary.main', borderRadius: '6px', mx: '10px'}} onClick={handleReUpload}>Re-Upload</Button>
                        <Button variant="contained" disabled sx={{ fontSize: '16px', width: '135px', height: '45px', backgroundColor: 'primary.main', borderRadius: '6px', mx: '10px' }}>Next</Button>
                    </Stack>
                </Stack>
            </Paper>
        </Box>
    )
}