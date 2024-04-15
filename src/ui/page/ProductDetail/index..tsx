import NavList from "../../component/NavList/NavList.tsx";
import {Params, useLocation, useNavigate, useParams} from "react-router-dom";
import ProductDetailInfo from "../../component/ProductDetailInfo/ProductDetailInfo.tsx";
import mockData from "./response.json";
import {useEffect, useState} from "react";
import {ProductDetailDto} from "../../../data/ProductDetail/ProductDetailDto.tsx";
import ErrorPage from "../../component/ErrorPage";
import * as ProductDetailApi from "../../../api/ProductDetailApi.tsx"
import LoadingContainer from "../../component/ProductListing/LoadingContainer.tsx";

type params = {
    productId: string,
    userId: string
}

export default function ProductDetail() {
    const params = useParams<params>();
    const location = useLocation();
    const [productDetailDto, setProductDetailDto]
        = useState<ProductDetailDto | undefined>(undefined);

    const navigate = useNavigate();
    const fetchProduct = async () => {
        try {
            setProductDetailDto(undefined);
            const responseProductDto = await ProductDetailApi.getProductDetailDto(Number(params.productId));
            setProductDetailDto(responseProductDto);
        } catch (error) {
            navigate("/error")
        }
    }

    useEffect(() => {
        fetchProduct();
    }, []);


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

            {/*<h1>Product Listing Page!</h1>*/}
            {/*<h2>The pid is {params.productId}</h2>*/}
            {/*<h2>The userId is {params.userId}</h2>*/}
            {/*<h3>Pathname: {location.pathname} </h3>*/}
        </div>
    )
}