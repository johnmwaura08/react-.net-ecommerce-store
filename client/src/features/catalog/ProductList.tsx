import { Grid } from '@mui/material'
import { FC } from 'react'
import { Product } from '../../app/models/product'
import ProductCard from './ProductCard'


interface IProductListProps {
	products: Product[]
}
const ProductList: FC<IProductListProps> = ({
	products
}) => {
	return (
		<Grid container spacing={4}>
			{
				products.map(product => (
					<Grid item xs={3} key={product.id}>

						<ProductCard product={product} />
					</Grid>

				))
			}
		</Grid>
	)
}

export default ProductList
