import * as FirebaseAuthService from "../authService/FirebaseAuthService.tsx";
import axios from "axios";
import {TransactionDto} from "../data/Transaction/TransactionDto.tsx";
import getEnvConfig from "../config/EnvConfig.ts";


const baseUrl = getEnvConfig().baseUrl;


export async function putTransaction(): Promise<TransactionDto>{
    const accessToken = await FirebaseAuthService.getAccessToken();

    if(!accessToken){
        throw new Error();
    }

    try{
        const response = await axios.put<TransactionDto>(
            `${baseUrl}/transaction/prepare`,
            null,
            {
                headers: {
                    Authorization:`Bearer ${accessToken}`,
                }
            }
        )
        return response.data;
    } catch(error){
        console.log(error);
        throw error;
    }
}

export async function getTransaction(tid:string): Promise<TransactionDto>{
    const accessToken = await FirebaseAuthService.getAccessToken();

    if(!accessToken){
        throw new Error();
    }

    try{
        const response = await axios.get<TransactionDto>(
            `${baseUrl}/transaction/${tid}`,
            {
                headers: {
                    Authorization:`Bearer ${accessToken}`,
                }
            }
        )
        return response.data;
    } catch(error){
        console.log(error);
        throw error;
    }
}

export async function processTransactionByTid(tid: number){
    const accessToken = await FirebaseAuthService.getAccessToken();

    if(!accessToken){
        throw new Error();
    }

    try{
        await axios.patch<TransactionDto>(
            `${baseUrl}/transaction/${tid}/pay`,
            null,
            {
                headers: {
                    Authorization:`Bearer ${accessToken}`,
                }
            }
        )
    } catch(error){
        console.log(error);
        throw error;
    }
}

export async function finishTransactionByTid(tid: number){
    const accessToken = await FirebaseAuthService.getAccessToken();

    if(!accessToken){
        throw new Error();
    }

    try{
        await axios.patch<TransactionDto>(
            `${baseUrl}/transaction/${tid}/finish`,
            null,
            {
                headers: {
                    Authorization:`Bearer ${accessToken}`,
                }
            }
        )
    } catch(error){
        console.log(error);
        throw error;
    }



}

