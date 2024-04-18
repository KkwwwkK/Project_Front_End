import {Container} from "@mui/material";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from "@mui/material/Box";
import QuantityInput from "../../../util/QuantityInput.tsx";
import {ProductDetailDto} from "../../../data/ProductDetail/ProductDetailDto.tsx";
import {ChangeEvent, useState} from "react";
import {useNavigate} from "react-router-dom";
import * as CartItemApi from "../../../api/CartItemApi.ts";

type Props = {
    productDetailDto: ProductDetailDto;
}

export default function ProductDetailInfo({productDetailDto}: Props){
    const[quantity, setQuantity] = useState<number>(1);
    // const navigate = useNavigate();

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

    const handleInputChange = (event:ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        const parsedValue = parseInt(value);

        if (!isNaN(parsedValue) && parsedValue > 1 && parsedValue < productDetailDto.stock) {
            setQuantity(parsedValue);
        }
        if (value === '' || /^\d+$/.test(value)) {
            setQuantity(parseInt(value) || 0);
        }
    };

    const handleAddToCart = async ()=> {
        try{
            await CartItemApi.putCartItem(productDetailDto.pid, quantity);
            window.alert('Item added to cart successfully!');
        } catch(error){
            window.alert('Failed to add item to cart. Please try again.');
            console.log(error);
            throw error;
        }
    }


    const renderAddToCart =()=> {
        if (productDetailDto.stock > 0){
            return(
                <Box>
                    <Box sx={{display:"flex", flexDirection: "column", ml: "16px"}}>
                        <QuantityInput
                            quantity={quantity}
                            handleMinus={handleMinus}
                            handlePlus={handlePlus}
                            handleInputChange={handleInputChange}
                            readOnly={false}
                        />
                    </Box>
                    <CardActions sx={{
                        paddingLeft: '16px', // Set left padding to 16px
                        justifyContent: 'flex-start', // Align items to the left
                        marginTop: '12px'
                    }}>
                        <Button size="small" variant="contained"
                                onClick={handleAddToCart}
                                >Add to Cart</Button>
                    </CardActions>
                </Box>
            )
        } else {
            return(
                <Box>
                    <Typography sx={{ml: "16px", color: "red"}}>Sorry, Out of Stock!</Typography>
                </Box>
            )
        }
    }



    return(
        <Container sx={{display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "90vh"}}>
            <Box
                height={600}
                width={500}
                my={4}
                display="flex"
                alignItems="center"
                gap={4}
                p={4}

            >
                <img src={productDetailDto.image_url}
                     alt="Product Image"
                     style={{ width: '100%', height: 'auto', objectFit: 'contain' }}
                />
            </Box>
            <Card
                sx={{
                        height: 500,
                        width: 400,
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

                </CardContent>
                {
                    renderAddToCart()
                }
            </Card>
        </Container>
    )
}