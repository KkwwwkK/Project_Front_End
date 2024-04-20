import {Container} from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {Item} from "../../../data/Transaction/TransactionDto.tsx";

type Props = {
    listData: Item
}
export default function TransactionRow({listData}: Props){
    return(
        <Container>
            <Box sx={{display: 'flex', flexDirection: 'row'}}>
                <Box sx={{display: 'flex', marginRight: '32px'}}>
                    <img src={listData.product.image_url}
                         style={{ width: '100px', height: '100px', objectFit: 'cover'}}
                    />
                </Box>
                <Box sx={{display: 'flex', flexDirection: 'column'}}>
                    <Box sx={{display: 'flex', marginBottom: '32px'}}>
                        <Typography>
                            {listData.product.name}
                        </Typography>
                    </Box>
                    <Box sx={{display: 'flex', flexDirection: 'row', width: '20vw'}}>
                        <Box sx={{display: 'flex', flexDirection: 'row', marginRight: '16px'}}>
                            <Box>
                                unit price${listData.product.price.toLocaleString()}: x
                            </Box>
                            <Box>
                                {listData.quantity}
                            </Box>
                        </Box>
                        <Box>
                            subtotal: ${listData.subtotal.toLocaleString()}
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Container>
    )
}