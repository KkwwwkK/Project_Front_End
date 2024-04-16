import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import {ProductListDto} from "../../../data/ProductList/ProductListDto.tsx";
import Box from "@mui/material/Box";
import {CardActionArea} from "@mui/material";
import {Link} from "react-router-dom";


type Props = {
    listData: ProductListDto;
}

export default function ProductItem({listData}: Props) {
    return (
        <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column'}}>
            <CardActionArea>
            <Link to={`/product/${listData.pid}/:userId`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <CardMedia component="img" height="200" image={listData.image_url} alt={listData.name}
                           sx={{
                               marginTop: '12px',
                               objectFit: 'scale-down', // Ensure the image covers the entire space
                           }}/>
                <CardContent sx={{ flexGrow: 1, paddingBottom: '16px' }}>
                    <Box sx={{ width: '200px', height: '50px'}}>
                        <Typography gutterBottom component="div" sx={{ fontSize: '16px', textAlign: 'center'}}>
                            {listData.name}
                        </Typography>
                    </Box>
                    <Typography variant="body2" color="text.secondary" sx={{textAlign: 'center', marginTop: '10px'}}>
                        Price: ${listData.price}
                    </Typography>
                </CardContent>
                </Link>
                <CardActions sx={{ display: 'flex', justifyContent: 'center' }}>
                    {listData.has_stock ? (
                        <Button size="small" variant="contained">Add to Cart</Button>
                    ) : (
                        <Button size="small" variant="contained">Out of Stock</Button>
                    )}
                </CardActions>
            </CardActionArea>
        </Card>
    );
}
