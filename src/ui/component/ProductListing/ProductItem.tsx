import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import {ProductListDto} from "../../../data/ProductList/ProductListDto.tsx";
import Box from "@mui/material/Box";
import {Alert, AlertTitle, CardActionArea} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {useContext, useState} from "react";
import * as CartItemApi from "../../../api/CartItemApi.ts";
import {UserData} from "../../../data/user/UserData.tsx";
import {LoginUserContext} from "../../../context/LoginUserContext.ts";
import {CartContext, CartContextType} from "../../../context/CartContext.ts";


type Props = {
    listData: ProductListDto;
}

export default function ProductItem({listData}: Props) {
    // Checking: console.log("listData:", listData);

    const navigate = useNavigate();
    const [showSuccessAlert, setShowSuccessAlert] = useState(false);
    const [showErrorAlert, setShowErrorAlert] = useState(false);
    const [isAddingToCart, setIsAddingToCart] = useState(false);
    const loginUser = useContext<UserData | null | undefined>(LoginUserContext);

    // Ensure cartContext is defined before accessing properties
    const cartContext = useContext<CartContextType | undefined>(CartContext);
    const setCartItemNumber = cartContext?.setCartItemNumber;

    const handleAddToCart = async ()=> {
        try{
            if (!loginUser){
                navigate("/login");
                return;
            } else {
                setIsAddingToCart(true);
                await CartItemApi.putCartItem(listData.pid, 1);
                setIsAddingToCart(false);
                setShowSuccessAlert(true);
                // Automatically hide success alert after 1 second
                setTimeout(() => {
                    setShowSuccessAlert(false);
                }, 1000);

                if(setCartItemNumber){
                    setCartItemNumber((prevCount) => prevCount + 1);
                }
            }
        } catch(error){
            setIsAddingToCart(false);
            setShowErrorAlert(true);
            // Automatically hide error alert after 1 second
            setTimeout(() => {
                setShowErrorAlert(false);
            }, 1000);

            console.log(error);
        }
    }

    return (
        <Card sx={{height: '100%', display: 'flex', flexDirection: 'column'}}>
            <CardActionArea component="div" onClick={()=>{
                navigate(`/product/${listData.pid}/:userId`)
            }} sx={{ textDecoration: 'none', color: 'inherit', height: '30%'}}>
                <CardMedia component="img" height="200" image={listData.image_url} alt={listData.name}
                           sx={{
                               marginTop: '12px',
                               objectFit: 'scale-down', // Ensure the image covers the entire space
                           }}/>
                <CardContent sx={{ flexGrow: 1, paddingBottom: '16px' }}>
                    <Box sx={{ justifyContent: 'center', width: '100%', height: '50px'}}>
                        <Typography gutterBottom component="div" sx={{ fontSize: '16px', textAlign: 'center'}}>
                            {listData.name}
                        </Typography>
                    </Box>
                    <Box sx={{ justifyContent: 'center', width: '100%', height: '50px', mb: '12px'}}>
                        <Typography variant="body2" color="text.secondary" sx={{textAlign: 'center', marginTop: '12px',}}>
                            Price: ${listData.price.toLocaleString()}
                        </Typography>
                    </Box>
                </CardContent>
                <Box sx={{
                    position: 'absolute',
                    bottom: '50px', // Adjust bottom spacing as needed
                    width: '16vw', // Take full width of the container
                    height: '8vh',
                    textAlign: 'center', // Center align the alerts
                    ml: '4px'
                }}>
                    {showSuccessAlert && (
                        <Alert severity="success" onClose={() => setShowSuccessAlert(false)}
                               sx={{ height: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <AlertTitle>Item Added!</AlertTitle>
                        </Alert>
                    )}

                    {showErrorAlert && (
                        <Alert severity="error" onClose={() => setShowErrorAlert(false)}>
                            <AlertTitle>Failed to Add!</AlertTitle>
                        </Alert>
                    )}
                </Box>
            </CardActionArea>
            <CardActions sx={{ display: 'flex', justifyContent: 'center', mt: '-47px'}}>
                {listData.has_stock || (listData.stock && listData.stock > 0) ? (
                    <Button size="small" variant="contained" onClick={handleAddToCart} disabled={isAddingToCart}
                            sx={{
                                backgroundColor: '#212121', // Background color
                                color: '#fff', // Font color
                                '&:hover': {
                                    backgroundColor: '#333', // Hover background color (optional)
                                },
                            }}
                    >Add to Cart</Button>
                ) : (
                    <Button size="small" variant="contained"
                            sx={{
                                backgroundColor: 'grey', // Background color
                                color: 'white', // Font color
                                '&:hover': {
                                    backgroundColor: 'grey', // Hover background color (optional)
                                },
                            }}>Out of Stock</Button>
                )}
            </CardActions>
        </Card>
    );
}
