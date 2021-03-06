import { Avatar, Button, Card, CardActions, CardContent, CardMedia, Typography, CardHeader } from '@mui/material'
import { FC } from 'react'
import { Link } from 'react-router-dom'
import { Product } from '../../app/models/product'

interface IProductCardProps {
    product: Product
}

const ProductCard: FC<IProductCardProps> = ({
    product
}) => {
    return (
        <>
            <Card sx={{ maxWidth: 345 }}>
                <CardHeader
                    avatar={
                        <Avatar sx={{ bgcolor: 'secondary.main' }}>
                            {product.name.charAt(0).toString().toUpperCase()}

                        </Avatar>
                    }

                    title={product.name}
                    titleTypographyProps={{
                        sx: {
                            fontWeight: 'bold',
                            color: 'primary.main'
                        }
                    }}
                />
                <CardMedia
                    sx={{ height: 140, backgroundSize: 'contain', bgcolor: 'primary.light' }}
                    image={product.pictureUrl}
                    title={product.name}
                />
                <CardContent>
                    <Typography gutterBottom color="secondary" variant="h5" >
                        ${(product.price / 100).toFixed(2)}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {product.brand} /{product.type}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Add to cart</Button>
                    <Button size="small" component={Link} to={`/catalog/${product.id}`}>View cart </Button>
                </CardActions>
            </Card>
        </>
    )
}

export default ProductCard
