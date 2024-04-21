import NavList from "../../component/NavList/NavList.tsx";
import ProductItemList from "../../component/ProductListing/ProductItemList.tsx";
import {useNavigate, useParams} from "react-router-dom";
// import mockData from "./response.json";
import * as ProductApi from "../../../api/ProductApi.tsx"
import {ProductListDto} from "../../../data/ProductList/ProductListDto.tsx";
import React, {useEffect, useState} from "react";
// import QuantityInput from "../../../util/QuantityInput.tsx";
import LoadingContainer from "../../component/ProductListing/LoadingContainer.tsx";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

type params = {
    userInput: string,
}

export default function SearchResultPage(){
    // const location = useLocation();
    const [searchProductsDto, setSearchProductsDto]
        = useState<ProductListDto[] | undefined>(undefined);
    const {userInput} = useParams<params>();

    const navigate = useNavigate();

    const fetchAllSearchProducts = async (userInput: string) => {
        try {
            setSearchProductsDto(undefined);
            const responseProductListDto: ProductListDto[] = await ProductApi.getSearchProducts(userInput);
            setSearchProductsDto(responseProductListDto);
        } catch (error) {
            // navigate to error page
            navigate("/error");
        }
    }

    useEffect(() => {
        if(userInput){
            fetchAllSearchProducts(userInput).then()
        }
    }, []);


    // useEffect(() => {
    //     setProductListDto(mockData)
    // }, []);

    return(
        <>
            <NavList/>
            <Box sx={{ display: 'flex', ml: '10vw', p: 2 }}> {/* Use Box component for styling and spacing */}
                <Typography variant="h4" gutterBottom>
                    Your Searching Result...
                </Typography>
            </Box>
            {
                searchProductsDto
                    ? <ProductItemList productListDto={searchProductsDto}/>
                    :<LoadingContainer/>
            }
            {/*<h3>Pathname: {location.pathname} </h3>*/}
        </>
    )
}