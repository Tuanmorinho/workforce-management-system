import { Box, Button, Paper, Stack, Typography } from "@mui/material";
import { DragDropFile } from "components/Upload";
import { readPassportAction, selectIsReadingSuccess } from "features/readPassport/readPassportSlice";
import { useState } from "react";
import { useAppDispatch } from "redux/hooks";
import UploadingFile from "./components/UploadingFile";
import { selectIsReading } from "features/readPassport/readPassportSlice";
import { useAppSelector } from "redux/hooks";

export default function UploadPassport() {

    const dispatch = useAppDispatch();
    const readingFile: boolean = useAppSelector(selectIsReading);
    const readSuccess: boolean = useAppSelector(selectIsReadingSuccess);

    const [file, setFile] = useState<File>();

    const handleGetFileUpload = (file: File) => {
        setFile(file);
    }

    const handleUploadFile = () => {
        file && dispatch(readPassportAction.readPDF(file));
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
                            file && readSuccess && <Button variant="contained" disabled={readingFile} sx={{ fontSize: '16px', width: '135px', height: '45px', backgroundColor: 'primary.main', borderRadius: '6px', mt: '20px' }}>Continue</Button>
                        }
                        {
                            !readingFile && <Button variant="contained" disabled={!Boolean(file)} sx={{ fontSize: '16px', width: '135px', height: '45px', backgroundColor: 'primary.main', borderRadius: '6px', mt: '20px' }} onClick={handleUploadFile}>Upload File</Button>
                        }
                    </Stack>
                </Paper>
            </Stack>
        </Box>
    )
}