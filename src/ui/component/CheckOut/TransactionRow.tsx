import {Container} from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function TransactionRow(){
    return(
        <Container>
            <Box sx={{display: 'flex', flexDirection: 'row'}}>
                <Box sx={{display: 'flex', marginRight: '32px'}}>
                    <img src="https://m.media-amazon.com/images/I/713+ykRgTIL._AC_SL1500_.jpg"
                         style={{ width: '100px', height: '100px', objectFit: 'cover'}}
                    />
                </Box>
                <Box sx={{display: 'flex', flexDirection: 'column'}}>
                    <Box sx={{display: 'flex', marginBottom: '32px'}}>
                        <Typography>
                            Long Long long long Product Name~~!!!!!
                        </Typography>
                    </Box>
                    <Box sx={{display: 'flex', flexDirection: 'row'}}>
                        <Box sx={{display: 'flex', flexDirection: 'row', marginRight: '16px'}}>
                            <Box>
                                unit price$888: x
                            </Box>
                            <Box>
                                10
                            </Box>
                        </Box>
                        <Box>
                            subtotal: $99999
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Container>
    )
}