import NavList from "../../component/NavList/NavList.tsx";
import ProductItemList from "../../component/ProductListing/ProductItemList.tsx";
import {useNavigate} from "react-router-dom";
// import mockData from "./response.json";
import * as ProductListApi from "../../../api/ProductApi.tsx"
import {ProductListDto} from "../../../data/ProductList/ProductListDto.tsx";
import {useEffect, useState} from "react";
// import QuantityInput from "../../../util/QuantityInput.tsx";
import SlideShow from "../../../util/SlideShow.tsx";
import StickyFooter from "../../../util/Footer.tsx";
import Box from "@mui/material/Box";
import LoadingContainer from "../../component/ShoppingCart/LoadingContainer.tsx";
export default function ProductListingPage(){
    // const location = useLocation();
    const [productListDto, setProductListDto]
        = useState<ProductListDto[] | undefined>(undefined);
    const [videoLoading, setVideoLoading] = useState(true);

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
            <Box sx={{display: 'flex', width: '100%', marginBottom:'4%'}}>
                <NavList/>
            </Box>
            <Box
                sx={{
                    display: "flex",
                    width: "100%",
                    justifyContent: "center",
                    marginTop: "4%",
                    marginBottom:"4%"
                }}
            >
                <video
                    autoPlay
                    muted
                    controls={false}
                    loop
                    style={{ width: "80%" }}
                    onLoadStart={() => setVideoLoading(true)} // Set loading state when video starts loading
                    onLoadedData={() => setVideoLoading(false)} // Unset loading state when video data is loaded
                >
                    <source
                        src="https://fsse2401-project-ken.s3.ap-southeast-1.amazonaws.com/Grenton+Smart+Home+system+-+3D+Animation.mp4"
                        type="video/mp4"
                    />
                </video>
                {videoLoading && <LoadingContainer />} {/* Render loading spinner while video is loading */}
            </Box>
            {/*<Box sx={{display: 'flex', width: '100%', justifyContent: 'center', marginTop: '8%'}}>*/}
            {/*    <video autoPlay muted controls={false} loop style={{width: '80%'}}>*/}
            {/*        <source src="https://fsse2401-project-ken.s3.ap-southeast-1.amazonaws.com/Grenton+Smart+Home+system+-+3D+Animation.mp4" type="video/mp4"/>*/}
            {/*    </video>*/}
            {/*</Box>*/}
            <Box sx={{
                width: '90%',
                display: 'flex',
                justifyContent: 'right',
                marginBottom: '0'
            }}>
                <img
                    src="https://assets-v2.lottiefiles.com/a/98a5f1ec-1164-11ee-b120-e331a2c2ea3f/r1BEKAxsbq.gif"
                        alt="Sample Image"
                        style={{display: 'flex', zIndex: 2, width:"16%"}}
                    />
            </Box>
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