import {useLocation, useParams} from "react-router-dom";
import Transaction from "../../component/CheckOut/Transaction.tsx";
import PaymentForm from "../../component/CheckOut/PaymentForm.tsx";
import {Container} from "@mui/material";

export default function Checkout() {
    const params = useParams();
    const location = useLocation();

    return(
        <Container sx={{display: 'flex', width: '100vw', flexDirection: 'row', padding: '0 0', margin: '36px'}}>
            {/*<h1>Checkout Page!</h1>*/}
            <Transaction/>
            {/*<h2>TransactionID is {params.transactionId}</h2>*/}
            {/*<h3>Pathname: {location.pathname} </h3>*/}
        </Container>

    )
}