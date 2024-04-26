import ProductItem from './ProductItem.tsx';
import { Container } from '@mui/material';
import { ProductListDto } from '../../../data/ProductList/ProductListDto.tsx';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

type Props = {
    productListDto: ProductListDto[];
};

export default function ProductItemList({ productListDto }: Props) {
    return (
        <Container>
            <Grid container spacing={4}>
                {productListDto.map((value) => (
                    // Define different breakpoints for responsive layout
                    <Grid item xs={12} sm={6} md={4} lg={3} xl={3} key={value.pid}>
                        <Box sx={{ margin: '12px' }}>
                            <ProductItem listData={value} />
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}

