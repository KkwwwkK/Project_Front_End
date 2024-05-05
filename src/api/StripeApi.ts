import axios from "axios";

export async function checkout(): Promise<string>{
    const response = await axios.post<string>('http://localhost:8080/public/checkout', null);
    return response.data;
}