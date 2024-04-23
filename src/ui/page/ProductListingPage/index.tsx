import NavList from "../../component/NavList/NavList.tsx";
import ProductItemList from "../../component/ProductListing/ProductItemList.tsx";
import {useNavigate} from "react-router-dom";
// import mockData from "./response.json";
import * as ProductListApi from "../../../api/ProductApi.tsx"
import {ProductListDto} from "../../../data/ProductList/ProductListDto.tsx";
import {useEffect, useState} from "react";
// import QuantityInput from "../../../util/QuantityInput.tsx";
import LoadingContainer from "../../component/ProductListing/LoadingContainer.tsx";
import SlideShow from "../../../util/SlideShow.tsx";
import StickyFooter from "../../../util/Footer.tsx";
export default function ProductListingPage(){
    // const location = useLocation();
    const [productListDto, setProductListDto]
        = useState<ProductListDto[] | undefined>(undefined);

    const navigate = useNavigate();

    const fetchAllProducts = async () => {
        try {
            setProductListDto(undefined);
            const responseProductListDto: ProductListDto[] = await ProductListApi.getAllProducts();
            setProductListDto(responseProductListDto);
        } catch (error) {
            // navigate to error page
            navigate("/error");
        }
    }

    useEffect(() => {
        fetchAllProducts().then();
    }, []);

    useEffect(() => {
        document.title = "Ken's Smart Home"
    }, []);


    return(
        <>
            <NavList/>
            <SlideShow/>
            {
                productListDto
                ? <ProductItemList productListDto={productListDto}/>
                    :<LoadingContainer/>
            }
            <StickyFooter/>
        </>
    )
}