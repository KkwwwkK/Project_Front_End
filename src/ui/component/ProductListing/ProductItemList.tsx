import ProductItem from './ProductItem.tsx';
import {Container, Grid} from "@mui/material";
import {ProductListDto} from "../../../data/ProductList/ProductListDto.tsx";
import Box from "@mui/material/Box";


type Props = {
    productListDto: ProductListDto[]
}

export default function ProductItemList({productListDto}:Props) {
    return (
        <Container>
            <Grid container spacing={4}>
                {
                    productListDto.map((value) => (
                        <Grid item xs={12} sm={6} md={3} key={value.pid}>
                            <Box sx={{ margin: '12px 12px' }}>
                                <ProductItem listData={value} />
                            </Box>
                        </Grid>
                    ))
                }
            </Grid>
        </Container>
    );
}