import {useLocation, useParams} from "react-router-dom";
import TransactionRecord from "../../component/CheckOut/TransactionRecord.tsx";
import PaymentForm from "../../component/CheckOut/PaymentForm.tsx";
import {Container} from "@mui/material";

export default function Checkout() {
    const params = useParams();
    const location = useLocation();

    return(
        <Container sx={{display: 'flex', width: '100vw', flexDirection: 'row', padding: '0 0'}}>
            {/*<h1>Checkout Page!</h1>*/}
            <TransactionRecord/>
            {/*<h2>TransactionID is {params.transactionId}</h2>*/}
            {/*<h3>Pathname: {location.pathname} </h3>*/}
            <PaymentForm/>
        </Container>

    )
}