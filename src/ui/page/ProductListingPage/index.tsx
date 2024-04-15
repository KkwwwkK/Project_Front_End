import NavList from "../../component/NavList/NavList.tsx";
import ProductItemList from "../../component/ProductListing/ProductItemList.tsx";
import {useLocation, useNavigate} from "react-router-dom";
import mockData from "./response.json";
import * as ProductListApi from "../../../api/ProductListApi.tsx"
import {ProductListDto} from "../../../data/ProductList/ProductListDto.tsx";
import {useEffect, useState} from "react";
import QuantityInput from "../../../util/QuantityInput.tsx";
import LoadingContainer from "../../component/ProductListing/LoadingContainer.tsx";

export default function ProductListingPage(){
    const location = useLocation();
    const [productListDto, setProductListDto]
        = useState<ProductListDto[] | undefined>(undefined);

    const navigate = useNavigate();

    // const fetchAllProducts = async () => {
    //     try {
    //         setProductListDto(undefined);
    //         const responseProductListDto: ProductListDto[] = await ProductListApi.getProductListDto();
    //         setProductListDto(responseProductListDto);
    //     } catch (error) {
    //         // navigate to error page
    //         navigate("/error");
    //     }
    // }
    //
    // useEffect(() => {
    //     fetchAllProducts()
    // }, []);


    useEffect(() => {
        setProductListDto(mockData)
    }, []);

    return(
        <>
            <NavList/>
            {
                productListDto
                ? <ProductItemList productListDto={productListDto}/>
                    :<LoadingContainer/>
            }
            {/*<h3>Pathname: {location.pathname} </h3>*/}
        </>
    )
}