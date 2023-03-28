import { Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import { FilePDFIcon } from "assets/svg/icons";
import { IDragDropFileProps } from "models/upload";
import { FileUploader } from "react-drag-drop-files";

function CustomBoxDropZone() {
    return (
        <Box sx={{ width: '560px', height: '236px', background: '#fff', borderRadius: '10px', border: '1px solid #fff' }}>
            <Box sx={{ width: '560px', height: '236px', background: 'rgba(49, 85, 89, 0.03)', borderRadius: '10px', border: '1px dashed #1C969E' }}>
                <Stack direction={'column'} justifyContent={'center'} alignItems={'center'} width={'100%'} height={'100%'}>
                    <FilePDFIcon viewBox={'0 0 54 54'} sx={{ width: '54px', height: '54px' }} />
                    <Typography fontWeight={500} fontSize={'18px'} lineHeight={'25px'} color={'#06191C'} sx={{ opacity: 0.75, mt: '11px' }}>Drag & drop your files here</Typography>
                    <Stack mt={'8px'} direction={'row'} justifyContent={'center'} alignItems={'center'}>
                        <Typography fontWeight={400} fontSize={'15px'} lineHeight={'20px'} color={'#06191C'} sx={{ opacity: 0.75 }}>or&nbsp;</Typography>
                        <Typography fontWeight={400} fontSize={'15px'} lineHeight={'20px'} color={'primary.main'} sx={{ textDecoration: 'underline', '&:hover': { cursor: 'pointer' } }}>Browse files</Typography>
                        <Typography fontWeight={400} fontSize={'15px'} lineHeight={'20px'} color={'#06191C'} sx={{ opacity: 0.75 }}>&nbsp;from your computer</Typography>
                    </Stack>
                </Stack>
            </Box>
        </Box>
    )
}

export function DragDropFile(props: IDragDropFileProps) {

    const { fileType, onFile } = props;

    const handleChange = (file: File) => {
        onFile(file);
    }

    return (
        <FileUploader handleChange={handleChange} name="file" types={fileType} children={<CustomBoxDropZone />} />
    )
}