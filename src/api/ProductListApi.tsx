import axios from "axios";
import {ProductListDto} from "../data/ProductListDto.tsx";

export const getProductListDto = async (): Promise<ProductListDto[]> => {
    try {
        const apiUrl = "http://ec2-18-142-44-250.ap-southeast-1.compute.amazonaws.com:8080/public/product";
        const response = await axios.get<ProductListDto[]>(apiUrl);
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}