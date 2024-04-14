import NavList from "../../component/NavList/NavList.tsx";
import {useLocation, useParams} from "react-router-dom";
import ProductDetailInfo from "../../component/ProductDetailInfo/ProductDetailInfo.tsx";

type params = {
    productId: string,
    userId: string
}

export default function ProductDetail() {
    const params = useParams<params>();
    const location = useLocation();

    return(
        <div className="product-listing-container">
            <NavList/>
            <ProductDetailInfo/>
            {/*<h1>Product Listing Page!</h1>*/}
            {/*<h2>The pid is {params.productId}</h2>*/}
            {/*<h2>The userId is {params.userId}</h2>*/}
            {/*<h3>Pathname: {location.pathname} </h3>*/}
        </div>
    )
}