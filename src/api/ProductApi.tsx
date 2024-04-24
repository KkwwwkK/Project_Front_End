import axios from "axios";
import {ProductListDto} from "../data/ProductList/ProductListDto.tsx";
import {ProductDetailDto} from "../data/ProductDetail/ProductDetailDto.tsx";
import getEnvConfig from "../config/EnvConfig.ts";

const baseUrl = getEnvConfig().baseUrl;
export async function getAllProducts(): Promise<ProductListDto[]> {
    try {
        const response = await axios.get<ProductListDto[]>(`${baseUrl}/public/product`);
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export async function getProductById(pid: string):Promise<ProductDetailDto> {
    try {
        const response = await axios.get<ProductDetailDto>(`${baseUrl}/public/product/${pid}`)
        return response.data;
    } catch(error) {
        console.log(error);
        throw error;
    }
}

export async function getSearchProducts(userInput: string): Promise<ProductListDto[]> {
    try {
        const response = await axios.get<ProductListDto[]>(`${baseUrl}/public/product/all/${userInput}`);
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}