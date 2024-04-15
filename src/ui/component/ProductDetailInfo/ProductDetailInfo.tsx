import {Container} from "@mui/material";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from "@mui/material/Box";
import QuantityInput from "../../../util/QuantityInput.tsx";
import {ProductDetailDto} from "../../../data/ProductDetail/ProductDetailDto.tsx";

type Props = {
    productDetailDto: ProductDetailDto;
}

export default function ProductDetailInfo({productDetailDto}: Props){
    return(
        <Container sx={{display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "80vh"}}>
            <Box
                height={400}
                width={300}
                my={4}
                display="flex"
                alignItems="center"
                gap={4}
                p={2}
                sx={{}}
            >
                <img src={productDetailDto.image_url}
                     alt="Product Image"
                     style={{ width: '100%', height: 'auto', objectFit: 'contain' }}
                />
            </Box>
            <Card
                sx={{
                        height: 435,
                        width: 400
                }}
                >
                <CardContent>
                    <Typography  component="div" sx={{fontSize: '18px'}}>
                        {productDetailDto.name}
                    </Typography>
                    <Typography sx={{ mb: 1.5,
                    margin: "24px 0 0 0"}} color="text.secondary">
                        Description:
                    </Typography>
                    <Typography sx={{ mb: 1.5,
                        fontSize: '14px',
                        margin: "0 0 0 0"}} color="text.secondary">
                        {productDetailDto.description}
                    </Typography>
                    <Typography variant="body2" sx={{
                        margin: '16px 0',
                        fontSize: '16px'
                    }}>
                        Price: ${productDetailDto.price}
                        <br />
                    </Typography>
                    Quantity:
                    <QuantityInput/>
                </CardContent>
                <CardActions sx={{
                    paddingLeft: '16px', // Set left padding to 16px
                    justifyContent: 'flex-start', // Align items to the left
                }}>
                    <Button size="small" variant="contained">Add to Cart</Button>
                </CardActions>
            </Card>
        </Container>
    )
}