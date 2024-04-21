import * as React from 'react';
import Box from '@mui/material/Box';
import FormLabel from '@mui/material/FormLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CreditCardRoundedIcon from '@mui/icons-material/CreditCardRounded';
import SimCardRoundedIcon from '@mui/icons-material/SimCardRounded';
import { styled } from '@mui/system';
import { Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
import LoadingContainer from "./LoadingContainer";
import * as TransactionApi from "../../../api/TransactionApi.ts";
import {TransactionDto} from "../../../data/Transaction/TransactionDto.tsx";

const FormGrid = styled('div')(() => ({
    display: 'flex',
    flexDirection: 'column',
}));

type Props = {
    transactionByTidDto: TransactionDto
}

export default function PaymentForm({transactionByTidDto }: Props) {
    const [cardNumber, setCardNumber] = React.useState('');
    const [cvv, setCvv] = React.useState('');
    const [expirationDate, setExpirationDate] = React.useState('');
    const [isLoading, setIsLoading] = React.useState<boolean>(false);
    const [cardNumberError, setCardNumberError] = React.useState<boolean>(false);
    const [cvvError, setCvvError] = React.useState<boolean>(false);
    const [expirationDateError, setExpirationDateError] = React.useState<boolean>(false);

    const navigate = useNavigate();

    const handleCardNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        let value = event.target.value.replace(/\D/g, ''); // Remove non-numeric characters
        if (value.length > 16) {
            value = value.slice(0, 16); // Truncate to 16 characters
        }
        const formattedValue = value.replace(/(\d{4})(?=\d)/g, '$1 '); // Add spaces every 4 digits
        setCardNumber(formattedValue);
        setCardNumberError(value.length !== 16); // Set error if length is not 16
    };

    const handleCvvChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        let value = event.target.value.replace(/\D/g, ''); // Remove non-numeric characters
        if (value.length > 3) {
            value = value.slice(0, 3); // Truncate to 3 characters
        }
        setCvv(value);
        setCvvError(value.length !== 3); // Set error if length is not 3
    };

    const handleExpirationDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        let value = event.target.value.replace(/\D/g, ''); // Remove non-numeric characters
        if (value.length > 4) {
            value = value.slice(0, 4); // Truncate to 4 characters
        }
        const formattedValue = value.replace(/(\d{2})(?=\d{2})/, '$1/'); // Add slash after first 2 characters
        setExpirationDate(formattedValue);
        setExpirationDateError(value.length !== 4); // Set error if length is not 4
    };

    const handleConfirmPayment = async () => {
        if (!cardNumber || !cvv || !expirationDate || cardNumberError || cvvError || expirationDateError) {
            // Show alert for invalid input
            alert('Please fill in all credit card information correctly.');
            return;
        }

        try {
            setIsLoading(true);
            await TransactionApi.processTransactionByTid(transactionByTidDto.tid);
            await TransactionApi.finishTransactionByTid(transactionByTidDto.tid);
            setIsLoading(false);
            navigate("/thankyou");
        } catch (error) {
            console.error('Error confirming payment:', error);
            setIsLoading(false);
            navigate('/error');
        }
    };

    return (
        <Container sx={{ display: 'flex', width: '43vw' }}>
            {isLoading && <LoadingContainer />}
            <Stack spacing={{ xs: 3, sm: 6 }} useFlexGap>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, objectFit: 'contain' }}>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        p: 3,
                        height: { xs: 300, sm: 350, md: 375 },
                        width: '50vw',
                        borderRadius: '20px',
                        border: '1px solid ',
                        borderColor: 'divider',
                        backgroundColor: 'background.paper',
                        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.05)',
                    }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Typography variant="subtitle2">Credit card</Typography>
                            <CreditCardRoundedIcon sx={{ color: 'text.secondary' }} />
                        </Box>
                        <SimCardRoundedIcon
                            sx={{ fontSize: { xs: 48, sm: 56 }, transform: 'rotate(90deg)', color: 'text.secondary' }}
                        />
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', gap: 2 }}>
                            <FormGrid sx={{ flexGrow: 1 }}>
                                <FormLabel htmlFor="card-number" required>Card number</FormLabel>
                                <OutlinedInput
                                    id="card-number"
                                    autoComplete="card-number"
                                    placeholder="0000 0000 0000 0000"
                                    required
                                    value={cardNumber}
                                    error={cardNumberError}
                                    onChange={handleCardNumberChange}
                                />
                            </FormGrid>
                            <FormGrid sx={{ maxWidth: '20%' }}>
                                <FormLabel htmlFor="cvv" required>CVV</FormLabel>
                                <OutlinedInput
                                    id="cvv"
                                    autoComplete="CVV"
                                    placeholder="123"
                                    required
                                    value={cvv}
                                    error={cvvError}
                                    onChange={handleCvvChange}
                                />
                            </FormGrid>
                        </Box>
                        <Box sx={{ display: 'flex', gap: 2 }}>
                            <FormGrid sx={{ flexGrow: 1 }}>
                                <FormLabel htmlFor="card-name" required>Name</FormLabel>
                                <OutlinedInput
                                    id="card-name"
                                    autoComplete="card-name"
                                    placeholder="John Smith"
                                    required
                                />
                            </FormGrid>
                            <FormGrid sx={{ flexGrow: 1 }}>
                                <FormLabel htmlFor="card-expiration" required>Expiration date</FormLabel>
                                <OutlinedInput
                                    id="card-expiration"
                                    autoComplete="card-expiration"
                                    placeholder="MM/YY"
                                    required
                                    value={expirationDate}
                                    error={expirationDateError}
                                    onChange={handleExpirationDateChange}
                                />
                            </FormGrid>
                        </Box>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={handleConfirmPayment}
                            sx={{
                                backgroundColor: '#212121',
                                color: '#fff',
                                '&:hover': { backgroundColor: '#333' },
                            }}
                        >
                            Confirm Payment
                        </Button>
                    </Box>
                </Box>
            </Stack>
        </Container>
    );
}




// import * as React from 'react';
//
// import Box from '@mui/material/Box';
// import FormLabel from '@mui/material/FormLabel';
// import OutlinedInput from '@mui/material/OutlinedInput';
// import Stack from '@mui/material/Stack';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button'; // Added Button import
//
// import CreditCardRoundedIcon from '@mui/icons-material/CreditCardRounded';
// import SimCardRoundedIcon from '@mui/icons-material/SimCardRounded';
//
// import { styled } from '@mui/system';
// import { Container } from "@mui/material";
// import {useNavigate} from "react-router-dom";
// import {useState} from "react";
// import {TransactionDto} from "../../../data/Transaction/TransactionDto.tsx";
// import * as TransactionApi from "../../../api/TransactionApi.ts";
// import LoadingContainer from "./LoadingContainer.tsx";
//
// const FormGrid = styled('div')(() => ({
//     display: 'flex',
//     flexDirection: 'column',
// }));
//
// type Props = {
//     transactionByTidDto: TransactionDto;
// }
//
// export default function PaymentForm({transactionByTidDto}: Props) {
//     const [cardNumber, setCardNumber] = React.useState('');
//     const [cvv, setCvv] = React.useState('');
//     const [expirationDate, setExpirationDate] = React.useState('');
//     const [isLoading, setIsLoading] = useState<boolean>(false); // Loading state
//
//
//     const handleCardNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//         const value = event.target.value.replace(/\D/g, '');
//         const formattedValue = value.replace(/(\d{4})(?=\d)/g, '$1 ');
//         if (value.length <= 16) {
//             setCardNumber(formattedValue);
//         }
//     };
//
//     const handleCvvChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//         const value = event.target.value.replace(/\D/g, '');
//         if (value.length <= 3) {
//             setCvv(value);
//         }
//     };
//
//     const handleExpirationDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//         const value = event.target.value.replace(/\D/g, '');
//         const formattedValue = value.replace(/(\d{2})(?=\d{2})/, '$1/');
//         if (value.length <= 4) {
//             setExpirationDate(formattedValue);
//         }
//     };
//
//     const handleConfirmPayment = async () => {
//         try {
//             setIsLoading(true); // Set loading state to true
//             await TransactionApi.processTransactionByTid(transactionByTidDto.tid); // Process transaction payment
//             await TransactionApi.finishTransactionByTid(transactionByTidDto.tid); // Finish transaction
//             setIsLoading(false); // Set loading state to false
//             navigate("/thankyou"); // Navigate to thank you page
//         } catch (error) {
//             console.error('Error confirming payment:', error);
//             setIsLoading(false); // Set loading state to false on error
//             navigate('/error'); // Navigate to error page
//         }
//     };
//
//     const navigate = useNavigate();
//
//     return (
//         <Container sx={{display:'flex', width: '43vw'}}>
//             <Stack spacing={{ xs: 3, sm: 6 }} useFlexGap>
//                 <Box
//                     sx={{
//                         display: 'flex',
//                         flexDirection: 'column',
//                         gap: 2,
//                         objectFit: 'contain'
//                     }}
//                 >
//                     <Box
//                         sx={{
//                             display: 'flex',
//                             flexDirection: 'column',
//                             justifyContent: 'space-between',
//                             p: 3,
//                             height: { xs: 300, sm: 350, md: 375 },
//                             width: '50vw',
//                             borderRadius: '20px',
//                             border: '1px solid ',
//                             borderColor: 'divider',
//                             backgroundColor: 'background.paper',
//                             boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.05)',
//                         }}
//                     >
//                         <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
//                             <Typography variant="subtitle2">Credit card</Typography>
//                             <CreditCardRoundedIcon sx={{ color: 'text.secondary' }} />
//                         </Box>
//                         <SimCardRoundedIcon
//                             sx={{
//                                 fontSize: { xs: 48, sm: 56 },
//                                 transform: 'rotate(90deg)',
//                                 color: 'text.secondary',
//                             }}
//                         />
//                         <Box
//                             sx={{
//                                 display: 'flex',
//                                 justifyContent: 'space-between',
//                                 width: '100%',
//                                 gap: 2,
//                             }}
//                         >
//                             <FormGrid sx={{ flexGrow: 1 }}>
//                                 <FormLabel htmlFor="card-number" required>
//                                     Card number
//                                 </FormLabel>
//                                 <OutlinedInput
//                                     id="card-number"
//                                     autoComplete="card-number"
//                                     placeholder="0000 0000 0000 0000"
//                                     required
//                                     value={cardNumber}
//                                     onChange={handleCardNumberChange}
//                                 />
//                             </FormGrid>
//                             <FormGrid sx={{ maxWidth: '20%' }}>
//                                 <FormLabel htmlFor="cvv" required>
//                                     CVV
//                                 </FormLabel>
//                                 <OutlinedInput
//                                     id="cvv"
//                                     autoComplete="CVV"
//                                     placeholder="123"
//                                     required
//                                     value={cvv}
//                                     onChange={handleCvvChange}
//                                 />
//                             </FormGrid>
//                         </Box>
//                         <Box sx={{ display: 'flex', gap: 2 }}>
//                             <FormGrid sx={{ flexGrow: 1 }}>
//                                 <FormLabel htmlFor="card-name" required>
//                                     Name
//                                 </FormLabel>
//                                 <OutlinedInput
//                                     id="card-name"
//                                     autoComplete="card-name"
//                                     placeholder="John Smith"
//                                     required
//                                 />
//                             </FormGrid>
//                             <FormGrid sx={{ flexGrow: 1 }}>
//                                 <FormLabel htmlFor="card-expiration" required>
//                                     Expiration date
//                                 </FormLabel>
//                                 <OutlinedInput
//                                     id="card-expiration"
//                                     autoComplete="card-expiration"
//                                     placeholder="MM/YY"
//                                     required
//                                     value={expirationDate}
//                                     onChange={handleExpirationDateChange}
//                                 />
//                             </FormGrid>
//                         </Box>
//                         {
//                             isLoading
//                             ? <LoadingContainer/>
//                                 : <Button variant="contained" color="primary"
//                                           onClick={handleConfirmPayment}
//                                           sx={{
//                                               backgroundColor: '#212121', // Background color
//                                               color: '#fff', // Font color
//                                               '&:hover': {
//                                                   backgroundColor: '#333', // Hover background color (optional)
//                                               },
//                                           }}>Confirm Payment</Button>
//                         }
//                     </Box>
//                 </Box>
//             </Stack>
//         </Container>
//     );
// }
