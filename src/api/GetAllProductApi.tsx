import axios from "axios";
import {ProductListDto} from "../data/ProductList/ProductListDto.tsx";

const baseUrl = "http://localhost:8080";
export async function getAllProducts(): Promise<ProductListDto[]> {
    try {
        const response = await axios.get<ProductListDto[]>(`${baseUrl}/public/product`);
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}