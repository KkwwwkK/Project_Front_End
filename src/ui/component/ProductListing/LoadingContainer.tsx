import Box from "@mui/material/Box";

export default function LoadingContainer(){
    return(
        <Box
        sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '90vh'
        }}>
            <img src='https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjEx…9naWZfYnlfaWQmY3Q9Zw/3oEjI6SIIHBdRxXI40/giphy.gif'/>
        </Box>
    )
}