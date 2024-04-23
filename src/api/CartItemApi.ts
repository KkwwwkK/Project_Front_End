import * as FirebaseAuthService from "../authService/FirebaseAuthService.tsx";
import axios from "axios";
import {CartItemDto} from "../data/CartItem/CartItemDto.ts";


const baseUrl = "http://localhost:8080";



export async function putCartItem(pid:number, quantity:number) {
    const accessToken = await FirebaseAuthService.getAccessToken();

    if(!accessToken){
        throw new Error();
    }

    try{
        await axios.put(
            `${baseUrl}/cart/${pid}/${quantity}`,
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

export async function getUserCart(): Promise<CartItemDto[]> {
    const accessToken = await FirebaseAuthService.getAccessToken();

    if (!accessToken){
        throw new Error();
    }

    try{
        const response = await axios.get<CartItemDto[]>(
            `${baseUrl}/cart`,
            {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                }
            }
            );
        // Checking
        // console.log('getUserCart response:', response.data);

        return response.data;

    } catch(error){

        console.log(error);
        throw error;
    }
}

export async function updateUserCartItemQuantity(pid:number, quantity:number){
    const accessToken = await FirebaseAuthService.getAccessToken();

    if(!accessToken){
        throw new Error();
    }

    try{
        await axios.patch(
            `${baseUrl}/cart/${pid}/${quantity}`,
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

export async function removeItemByPid(pid:number){
    const accessToken = await FirebaseAuthService.getAccessToken();

    if(!accessToken){
        throw new Error();
    }

    try{
        await axios.delete(
            `${baseUrl}/cart/${pid}`,
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