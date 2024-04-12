import NavList from "../../component/NavList";
import ProductItemList from "../../component/ProductListing/ProductItemList.tsx";
import {useLocation} from "react-router-dom";
// import mockData from "./response.json";
import * as ProductListApi from "../../../api/ProductListApi.tsx"
import {ProductListDto} from "../../../data/ProductListDto.tsx";
import {useEffect, useState} from "react";

export default function ProductListingPage(){
    const location = useLocation();
    const [productListDto, setProductListDto]
        = useState<ProductListDto[] | undefined>(undefined);

    const fetchProductListDto = async () => {
        try {
            setProductListDto(undefined);
            const responseProductListDto: ProductListDto[] = await ProductListApi.getProductListDto();
            setProductListDto(responseProductListDto);
        } catch (error) {
            // navigate to error page
            console.log(error);
            throw error;
        }
    }

    useEffect(() => {
        fetchProductListDto()
    }, []);


    // useEffect(() => {
    //     setProductListDto(mockData)
    // }, []);

    return(
        <>
            <NavList/>
            {
                productListDto &&
                <ProductItemList productListDto={productListDto}/>
            }
            <h3>Pathname: {location.pathname} </h3>
        </>
    )
}