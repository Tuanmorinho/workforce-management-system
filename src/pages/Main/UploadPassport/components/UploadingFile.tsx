import { LinearProgress, Typography } from "@mui/material";
import { Box, Stack } from "@mui/material";
import { FileIcon } from "assets/svg/icons";
import { readPassportAction, selectIsReading, selectIsReadingSuccess } from "features/readPassport/readPassportSlice";
import { useEffect, useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import CloseIcon from '@mui/icons-material/Close';

export interface IUploadingFilemProps {
    filename: string;
}

export default function UploadingFile(props: IUploadingFilemProps) {

    const { filename } = props;

    const dispatch = useAppDispatch();

    const readingFile: boolean = useAppSelector(selectIsReading);
    const readSuccess: boolean = useAppSelector(selectIsReadingSuccess);

    const [progress, setProgress] = useState<number>(0);
    const intervalRef = useRef<any>();

    useEffect(() => {
        generateProgress();
    }, [readingFile]);

    const generateProgress = () => {
        if (intervalRef.current) clearInterval(intervalRef.current);
        if (readingFile) {
            intervalRef.current = setInterval(() => {
                setProgress((oldProgress) => {
                    const diff = Math.random() * 10;
                    return Math.min(oldProgress + diff, 90);
                });
            }, 500);
        }

        if (!readingFile && readSuccess) {
            setProgress(100);
            if (intervalRef.current) clearInterval(intervalRef.current);
        }

        if (!readingFile && !readSuccess) {
            setProgress(0);
            if (intervalRef.current) clearInterval(intervalRef.current);
        }
    }

    const handleCancelUpload = () => {
        clearInterval(intervalRef.current);
        setProgress(0);
        dispatch(readPassportAction.done());
    }

    return (
        <Box sx={{ width: '560px', height: '66px', backgroundColor: '#EFF7F8', borderRadius: '10px' }}>
            {
                // !readingFile ? (
                //     <Stack width={'100%'} height={'100%'} direction={'row'} justifyContent={'flex-start'} alignItems={'center'} ml={'25px'}>
                //         <FileIcon />
                //         <Typography fontWeight={400} fontSize={'15px'} lineHeight={'20px'} color={'#06191C'} sx={{ opacity: 0.75, ml: '10px' }}>{filename}</Typography>
                //     </Stack>
                // ) : (
                    <Stack width={'100%'} height={'100%'} direction={'row'} justifyContent={'center'} alignItems={'center'}>
                        <Box sx={{ width: '520px', height: '36px' }}>
                            <Stack width={'100%'} height={'100%'} direction={'row'} justifyContent={'space-between'} alignItems={'flex-start'}>
                                <Typography flexGrow={1} fontWeight={400} fontSize={'15px'} lineHeight={'20px'} color={'#06191C'} sx={{ opacity: 0.75 }}>{filename}%</Typography>
                                <Stack direction={'row'} justifyContent={'flex-end'} alignItems={'flex-start'}>
                                    <Typography fontWeight={400} fontSize={'12px'} lineHeight={'16px'} color={'#667071'} mr={'11px'}>{progress.toFixed(0)}%</Typography>
                                    <CloseIcon sx={{ fontSize: '15px', color: '#0D383D', '&:hover': { cursor: 'pointer' } }} onClick={handleCancelUpload} />
                                </Stack>
                            </Stack>
                            <LinearProgress variant={'determinate'} value={progress} />
                        </Box>
                    </Stack>
                // )
            }
        </Box>
    )
}