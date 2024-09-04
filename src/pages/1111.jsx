<section className='pt-24 pb-12 min-h-[600px] flex items-center'>
	<div className='mx-auto'>
		<div className='flex flex-col lg:flex-row items-center justify-between gap-x-16'>
			<div className='mb-4 lg:mb-0 flex flex-1 px-6'>
				<img src={image} alt=""
					className='max-w-[400px] lg:max-w-sm' />
			</div>
			<div className='max-w-[520px] mx-auto px-4 flex flex-col gap-y-6'>
				<div className="text-4xl font-semibold uppercase">{title}</div>
				<div className="text-gray-500 text-xl font-semibold">$ {price}</div>
				<div className="text-md">{description}</div>
				<button
					onClick={() => addToCart(product, product.id)}
					className='bg-red-500 text-white text-2xl py-4 px-8 shadow-md rounded-sm'>
					Add to cart
				</button>
			</div>
		</div>
	</div>


</section>



const { id } = useParams();
const { products } = useContext(ProductContext);


//get the single product based on the id
const product = products.find((item) => {
	return item.id === parseInt(id);
});
