// import {useLocation, useParams} from "react-router-dom";
import Transaction from "../../component/CheckOut/Transaction.tsx";
// import PaymentForm from "../../component/CheckOut/PaymentForm.tsx";
import {Container} from "@mui/material";
import {useContext, useEffect, useState} from "react";
import {UserData} from "../../../data/user/UserData.tsx";
import {LoginUserContext} from "../../../context/LoginUserContext.ts";
import {TransactionDto} from "../../../data/Transaction/TransactionDto.tsx";
import {useNavigate, useParams} from "react-router-dom";
import * as TransactionApi from "../../../api/TransactionApi.ts";
import LinearLoadingContainer from "../../component/CheckOut/LinearLoadingContainer.tsx";

type params = {
    transactionId: string
}

export default function Checkout() {
    // const params = useParams();
    // const location = useLocation();
    const[transactionByTidDto, setTransactionByTidDto] = useState<TransactionDto | undefined>(undefined);
    const loginUser = useContext<UserData | undefined | null>(LoginUserContext);
    const {transactionId} = useParams<params>();
    const navigate = useNavigate();

    const fetchTransactionByTid = async (transactionId: string): Promise<void>=> {
        try {
            setTransactionByTidDto(undefined);
            const responseTransactionByTidDto = await TransactionApi.getTransaction(transactionId);
            setTransactionByTidDto(responseTransactionByTidDto);
        } catch(error){
            navigate("/error");
        }
    }

    useEffect(() => {
        if(loginUser){
            if (transactionId){
                fetchTransactionByTid(transactionId).then();
            } else {
                navigate("/error")
            }
        }

    }, [loginUser]);

    // useEffect(() => {
    //     setTransactionByTidDto(mockData)
    // }, []);

    return(
        <Container sx={{display: 'flex', width: '100vw', flexDirection: 'row', padding: '0 0', margin: '36px'}}>
            {
                transactionByTidDto
                ? <Transaction transactionByTidDto={transactionByTidDto}/>
                    : < LinearLoadingContainer/>
            }
        </Container>

    )
}