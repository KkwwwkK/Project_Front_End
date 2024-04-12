import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import {ProductListDto} from "../../../data/ProductListDto.tsx";

// interface ProductItemProps {
//     img: string;
//     title: string;
//     author: string;
// }

type Props = {
    listData: ProductListDto;
}

export default function ProductItem({listData}: Props) {
    return (
        <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <CardMedia component="img" height="200" image={listData.image_url} alt={listData.name}
                       sx={{
                           objectFit: 'scale-down', // Ensure the image covers the entire space
                       }}/>
            <CardContent sx={{ flexGrow: 1, paddingBottom: '16px' }}>
                <Typography gutterBottom variant="h5" component="div" sx={{ fontSize: '20px'}}>
                    {listData.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Price: ${listData.price}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Out of Stock / Add to Cart</Button>
            </CardActions>
        </Card>
    );
}
