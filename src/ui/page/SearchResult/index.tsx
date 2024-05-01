import NavList from "../../component/NavList/NavList.tsx";
import ProductItemList from "../../component/ProductListing/ProductItemList.tsx";
import {useParams} from "react-router-dom";
// import mockData from "./response.json";
import * as ProductApi from "../../../api/ProductApi.tsx"
import {ProductListDto} from "../../../data/ProductList/ProductListDto.tsx";
import {useEffect, useState} from "react";
// import QuantityInput from "../../../util/QuantityInput.tsx";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import StickyFooter from "../../../util/Footer.tsx";
import LoadingContainer from "../../component/ShoppingCart/LoadingContainer.tsx";

type params = {
    userInput: string,
}

export default function SearchResultPage(){
    // const location = useLocation();
    const [searchProductsDto, setSearchProductsDto]
        = useState<ProductListDto[] | undefined>(undefined);
    const {userInput} = useParams<params>();

    // const navigate = useNavigate();

    const fetchAllSearchProducts = async (userInput: string) => {
        try {
            setSearchProductsDto(undefined);
            const responseProductListDto: ProductListDto[] = await ProductApi.getSearchProducts(userInput);
            if (responseProductListDto.length === 0) {
                setSearchProductsDto([]); // Set empty array if no search results
            } else {
                setSearchProductsDto(responseProductListDto);
            }
        } catch (error) {
            // navigate to error page
            // navigate("/error");
            setSearchProductsDto([])
        }

    }

    useEffect(() => {
        if(userInput){
            fetchAllSearchProducts(userInput).then()
        }
    }, [userInput]);


    useEffect(() => {
        document.title = "Smart Check"
    }, []);

    return(
        <>
            <Box sx={{mb: "150px"}}>
                <NavList />
                <Box sx={{ display: 'flex', mt: '80px', ml: '10vw', p: 2 }}>
                    <Typography variant="h4" gutterBottom>
                        Your Searching Result...
                    </Typography>
                </Box>
                {searchProductsDto ? (
                    searchProductsDto.length === 0 ? (
                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
                            <Typography variant="h5">No such Product, Try again!</Typography>
                        </Box>
                    ) : (
                        <ProductItemList productListDto={searchProductsDto} />
                    )
                ) : (
                    <LoadingContainer />
                )}

            </Box>

            <StickyFooter/>

        </>
    )
}