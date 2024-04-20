import Stack from '@mui/material/Stack';
import LinearProgress from '@mui/material/LinearProgress';
import Box from "@mui/material/Box";

export default function LinearLoadingContainer() {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '90vh'
            }}>
            <Stack sx={{ width: '100%', color: 'grey.500' }} spacing={2}>
                <LinearProgress color="secondary" />
                <LinearProgress color="success" />
                <LinearProgress color="inherit" />
            </Stack>
        </Box>
    );
}