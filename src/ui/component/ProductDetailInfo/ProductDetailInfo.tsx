import {Container} from "@mui/material";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from "@mui/material/Box";
import QuantityInput from "../../../util/QuantityInput.tsx";
import {ProductDetailDto} from "../../../data/ProductDetail/ProductDetailDto.tsx";
import {useState} from "react";

type Props = {
    productDetailDto: ProductDetailDto;
}

export default function ProductDetailInfo({productDetailDto}: Props){
    const[quantity, setQuantity] = useState<number>(1);
    const handleMinus = ()=> {
        if(quantity > 1){
            setQuantity((prevState:number) => (
                prevState - 1
        ))
        }
    }

    const handlePlus = ()=> {
        if(quantity < productDetailDto.stock){
            setQuantity((prevState:number) => (
                prevState + 1
            ))
        }
    }

    // const renderStock = ()=> {
    //     if (productDetailDto.stock >= 0){
    //         <Button size="small" variant="contained">Add to Cart</Button>
    //     } else {
    //         <Typography>Sorry, Out of Stock!</Typography>
    //     }
    // }



    return(
        <Container sx={{display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "80vh"}}>
            <Box
                height={550}
                width={400}
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
                        margin: "0 0 0 0",
                        whiteSpace: 'pre-line'
                    }} color="text.secondary">
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
                    <QuantityInput quantity={quantity} handleMinus={handleMinus} handlePlus={handlePlus}/>
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