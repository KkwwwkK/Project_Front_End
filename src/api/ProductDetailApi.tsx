import axios from "axios";
import {ProductDetailDto} from "../data/ProductDetail/ProductDetailDto.tsx";

const baseUrl = "http://localhost:8080";

export const getProductDetailDto = async (pid: number):Promise<ProductDetailDto> =>{
    try {
        const response = await axios.get<ProductDetailDto>(`${baseUrl}/public/product/${pid}`)
        return response.data;
    } catch(error) {
        console.log(error);
        throw error;
    }
}