import React, { useContext, useState } from 'react';
import { ProductContext } from '../contexts/ProductContext';
import Product from '../../../my_shop/src/components/Product';
import { CiSearch } from "react-icons/ci";


const ProductsPage = () => {
	const { products } = useContext(ProductContext);


	return (
		<div className='mx-auto'>
			<section className='py-16'>
				<div className='container mx-auto'>
					<div
						className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm md:max-w-none mx-auto md:mx-0 ">
						{products.map((product) => {
							return <Product product={product} key={product.id} />
						})}
					</div>
				</div>
			</section>
		</div>
	)
}

export default ProductsPage;
