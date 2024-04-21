import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {Container} from "@mui/material";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {TransactionDto} from "../../../data/Transaction/TransactionDto.tsx";
import * as TransactionApi from "../../../api/TransactionApi.ts"
import LoadingContainer from "./LoadingContainer.tsx";

type Props={
    totalPrice : number;
}
export default function OrderSummary({totalPrice}: Props) {
    const [isSticky, setIsSticky] = useState(false);
    const navigate = useNavigate();
    // const [transactionDto, setTransactionDto] = useState<TransactionDto | undefined>(undefined);
    const [isPuttingTransaction, setIsPuttingTransaction] = useState<boolean>(false);

    // Handle scroll event to toggle sticky behavior
    const handleScroll = () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        setIsSticky(scrollTop > 100); // Example threshold for sticky behavior
    };

    const handleCheckout = async () => {
        try {
            setIsPuttingTransaction(true);
            const responseTransactionDto: TransactionDto = await TransactionApi.putTransaction();
            setIsPuttingTransaction(false);
            navigate(`/checkout/${responseTransactionDto.tid}`);
        } catch (error) {
            console.error('Error fetching transaction:', error);
            navigate('/error');
        }
    };

    // const fetchTransactionDto = async() => {
    //     try {
    //         setTransactionDto(undefined);
    //         const responseTransactionDto = await TransactionApi.putTransaction();
    //         setTransactionDto(responseTransactionDto);
    //     } catch(error){
    //         console.log(error);
    //         navigate("/error")
    //     }
    // }
    //
    // const handleCheckout = async() => {
    //     setIsPuttingTransaction(true);
    //     await fetchTransactionDto().then();
    //     setIsPuttingTransaction(false);
    //     if (transactionDto && isPuttingTransaction === false){
    //         navigate(`/checkout/${transactionDto.tid}`)
    //     }
    // }



    // Attach scroll event listener when component mounts
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <Container sx={{
            display: 'flex', width: '33vw', maxHeight: "30vh",
            position: isSticky ? 'sticky' : 'static', // Toggle position based on isSticky state
            top: 0, // Adjust top position for fixed positioning
            right: 0, // Adjust right position for fixed positioning
            zIndex: 1000
        }}>
            <Box sx={{p: 2, border: '1px solid #ccc', borderRadius: '4px'}}>
                <Typography variant="h5" sx={{ marginBottom: 2, fontSize: '1.5rem' }}>
                    Order Summary
                </Typography>
                <Typography  sx={{margin: "24px 0"}}>
                    Total Price:
                    $ {totalPrice.toLocaleString()}
                </Typography>
                {isPuttingTransaction ? (
                    <LoadingContainer /> // Show loading spinner
                ) : (
                    <Button
                        onClick={handleCheckout}
                        variant="contained"
                        disabled={totalPrice === 0} // Disable button if totalPrice is 0
                        sx={{
                            backgroundColor: '#212121',
                            color: '#fff',
                            '&:hover': {
                                backgroundColor: '#333',
                            },
                        }}
                    >
                        Checkout
                    </Button>
                )}
                {/*<Button onClick={handleCheckout} variant="contained"*/}
                {/*        sx={{*/}
                {/*            backgroundColor: '#212121', // Background color*/}
                {/*            color: '#fff', // Font color*/}
                {/*            '&:hover': {*/}
                {/*                backgroundColor: '#333', // Hover background color (optional)*/}
                {/*            },*/}
                {/*        }}>*/}
                {/*    Checkout*/}
                {/*</Button>*/}
            </Box>
        </Container>
    )
}