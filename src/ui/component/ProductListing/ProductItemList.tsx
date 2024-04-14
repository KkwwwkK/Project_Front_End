import ProductItem from './ProductItem.tsx';
import {Container, Grid} from "@mui/material";
import {ProductListDto} from "../../../data/ProductListDto.tsx";
import Box from "@mui/material/Box";


const itemData = [
    {
        img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
        title: 'Breakfast',
        author: '@bkristastucchio',
    },
    {
        img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
        title: 'Burger',
        author: '@rollelflex_graphy726',
    },
    {
        img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
        title: 'Camera',
        author: '@helloimnik',
    },
    {
        img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
        title: 'Coffee',
        author: '@nolanissac',
    },
    // {
    //     img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    //     title: 'Hats',
    //     author: '@hjrc33',
    // },
    // {
    //     img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    //     title: 'Honey',
    //     author: '@arwinneil',
    // },
    // {
    //     img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    //     title: 'Basketball',
    //     author: '@tjdragotta',
    // },
    // {
    //     img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    //     title: 'Fern',
    //     author: '@katie_wasserman',
    // },
    // {
    //     img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
    //     title: 'Mushrooms',
    //     author: '@silverdalex',
    // },
    // {
    //     img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
    //     title: 'Tomato basil',
    //     author: '@shelleypauls',
    // },
    // {
    //     img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
    //     title: 'Sea star',
    //     author: '@peterlaster',
    // },
    // {
    //     img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    //     title: 'Bike',
    //     author: '@southside_customs',
    // },
];

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
                {/*{itemData.map((item, index) => (*/}
                {/*    <Grid item xs={12} sm={6} md={3} key={index}>*/}
                {/*        <ProductItem img={item.img} title={item.title} author={item.author} />*/}
                {/*    </Grid>*/}
                {/*))}*/}
            </Grid>
        </Container>
    );
}