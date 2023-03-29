import { Box, Stack, Step, StepLabel, Stepper, Typography } from "@mui/material";
import { selectIsReadingSuccess, selectReadResult } from "features/readPassport/readPassportSlice";
import { useAppSelector } from "redux/hooks";
import UploadPassportFailed from "./UploadPassportFailed";

export default function UploadPSV() {

    const resultPassport: any = useAppSelector(selectReadResult);
    const readPassportSuccess: boolean = useAppSelector(selectIsReadingSuccess);

    return (
        <Box width={'100%'}>
            <Stack direction={'column'} justifyContent={'flex-start'} alignItems={'center'} width={'100%'}>
                <Typography sx={{ fontWeight: 600, fontSize: '28px' }}>Upload Your PSV Report</Typography>
                <Box mt={'22px'}>
                    <Stepper>
                        <Step key={1}>
                            <StepLabel>PSV Report Upload</StepLabel>
                        </Step>
                        <Step key={2} completed={false} sx={{ ml: '15px' }}>
                            <StepLabel>Detail Confirmation</StepLabel>
                        </Step>
                        <Step key={3} completed={false} sx={{ ml: '15px' }}>
                            <StepLabel>Submit</StepLabel>
                        </Step>
                    </Stepper> 
                    <Box width={'710px'} position={'relative'} mt={'22px'}>
                        <Box position={'absolute'} width={'790px'} top={0} left={'-50px'}>
                            {
                                !readPassportSuccess && <UploadPassportFailed />
                            }
                        </Box>
                    </Box>
                </Box>
            </Stack>
        </Box>
    )
}