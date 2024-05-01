import NavList from "../../component/NavList/NavList.tsx";
import {useNavigate, useParams} from "react-router-dom";
import ProductDetailInfo from "../../component/ProductDetailInfo/ProductDetailInfo.tsx";
// import mockData from "./response.json";
import {useEffect, useState} from "react";
import {ProductDetailDto} from "../../../data/ProductDetail/ProductDetailDto.tsx";
// import ErrorPage from "../../component/ErrorPage/ErrorPage.tsx";
import * as ProductDetailApi from "../../../api/ProductApi.tsx"
import StickyFooter from "../../../util/Footer.tsx";
import LoadingContainer from "../../component/ShoppingCart/LoadingContainer.tsx";

type params = {
    productId: string,
    userId: string
}

export default function ProductDetail() {

    // const location = useLocation();
    const [productDetailDto, setProductDetailDto]
        = useState<ProductDetailDto | undefined>(undefined);
    const {productId} = useParams<params>();

    const navigate = useNavigate();
    const fetchProductDetail = async (productId: string): Promise<void>=>  {
        try {
            setProductDetailDto(undefined);
            const responseProductDto = await ProductDetailApi.getProductById(productId);
            setProductDetailDto(responseProductDto);
            // return responseProductDto.pid;
        } catch (error) {
            navigate("/error")
        }
    }

    useEffect(() => {
        if(productId){
            fetchProductDetail(productId);

        } else {
            navigate("/error")
        }
    }, []);

    useEffect(() => {
        if(productDetailDto){
            document.title = productDetailDto.name;
        }
    }, [productDetailDto]);


    // useEffect(() => {
    //     setProductDetailDto(mockData)
    // }, []);

    return(
        <div className="product-listing-container">
            <NavList/>
            {
                productDetailDto
                ?<ProductDetailInfo productDetailDto={productDetailDto}/>
                    : <LoadingContainer/>
            }
            <StickyFooter />
        </div>
    )
}