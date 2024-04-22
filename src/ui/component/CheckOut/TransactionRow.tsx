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
            <Box sx={{display: 'flex', flexDirection: 'row', mt: '4px'}}>
                <Box sx={{display: 'flex', marginRight: '32px'}}>
                    <img src={listData.product.image_url}
                         style={{ width: '100px', height: '100px', objectFit: 'cover'}}
                    />
                </Box>
                <Box sx={{display: 'flex', flexDirection: 'column', mt:'4px'}}>
                    <Box sx={{display: 'flex', marginBottom: '32px'}}>
                        <Typography>
                            {listData.product.name}
                        </Typography>
                    </Box>
                    <Box sx={{display: 'flex', flexDirection: 'row', width: '100%'}}>
                        <Box sx={{display: 'flex', flexDirection: 'row', marginRight: '16px', minWidth: '40%'}}>
                            <Box>
                                unit price: ${listData.product.price.toLocaleString()}
                            </Box>
                            <Box sx={{display: 'flex', margin: ' 0 12px'}}>
                                x {listData.quantity}
                            </Box>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'flex-end', ml: '124px', minWidth: '60%' }}>
                            subtotal: ${listData.subtotal.toLocaleString()}
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Container>
    )
}