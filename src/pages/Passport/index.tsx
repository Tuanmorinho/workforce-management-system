import { Box, Button, Paper, Stack, Typography } from "@mui/material";
import { DragDropFile } from "components/Upload";
import { readPassportAction, selectIsReading, selectIsReadingSuccess, selectReadResult } from "features/readPassport/readPassportSlice";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import UploadingFile from "./components/UploadingFile";

export default function UploadPassport() {

    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const readingFile: boolean = useAppSelector(selectIsReading);
    const readSuccess: boolean = useAppSelector(selectIsReadingSuccess);
    const result: any = useAppSelector(selectReadResult);

    const [file, setFile] = useState<File | null>(null);

    const handleGetFileUpload = (file: File) => {
        setFile(file);
    }

    const handleUploadFile = () => {
        file && dispatch(readPassportAction.readPDF(file));
    }

    const handleNextToUploadPSV = () => {
        setFile(null);
        navigate('/wms/psv');
    }

    return (
        <Box width={'100%'} height={'100%'}>
            <Stack direction={'column'} justifyContent={'center'} alignItems={'center'} sx={{ width: '100%', height: '100%' }}>
                <Typography sx={{ fontWeight: 600, fontSize: '28px' }}>{ readingFile ? 'Uploading Passport' : 'Upload Your Passport' }</Typography>
                <Paper elevation={6} sx={{ borderRadius: '16px', width: 'min-content', mt: '25px' }}>
                    <Stack direction={'column'} justifyContent={'space-between'} alignItems={'center'} px={'115px'} pt={'105px'} pb={'226px'}>
                        <DragDropFile onFile={handleGetFileUpload} fileType={['PDF']} />
                        <Box mt={'13px'}>
                            {
                                file && <UploadingFile filename={file.name} />
                            }
                        </Box>
                        {
                            readSuccess && result && <Button variant="contained" disabled={!result} sx={{ fontSize: '16px', width: '135px', height: '45px', backgroundColor: 'primary.main', borderRadius: '6px', mt: '20px' }} onClick={handleNextToUploadPSV}>Continue</Button>
                        }
                        {
                            !readSuccess && <Button variant="contained" disabled={readingFile} sx={{ fontSize: '16px', width: '135px', height: '45px', backgroundColor: 'primary.main', borderRadius: '6px', mt: '20px' }} onClick={handleUploadFile}>Upload File</Button>
                        }
                    </Stack>
                </Paper>
            </Stack>
        </Box>
    )
}