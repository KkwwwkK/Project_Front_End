import axios from "axios";
import {ProductListDto} from "../data/ProductListDto.tsx";

export const getProductListDto = async (): Promise<ProductListDto[]> => {
    try {
        const apiUrl = "http://localhost:8080/public/product";
        const response = await axios.get<ProductListDto[]>(apiUrl);
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}