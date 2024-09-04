import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaEye, FaPlus } from "react-icons/fa";
import { CartContext } from '../contexts/CartContext';


const Product = ({ product }) => {
	const { title, image, id, category, price } = product;
	const { addToCart } = useContext(CartContext);
	return (
		<div>
			<div className='border border-[#e4e4e4] h-[300px] mb-4 flex justify-center items-center relative group transition duration-300 overflow-hidden'>
				<img
					className='h-[160px] group-hover:scale-105'
					src={image} alt="" />
				<div className='flex flex-col justify-center items-center absolute top-2 right-[-100%] opacity-0 gap-2 p-3  group-hover:opacity-100 group-hover:right-2 transition ease-in-out duration-500 '>
					<Link to={`/product/${id}`}>
						<FaEye size={50} className='bg-white shadow-xl cursor-pointer hover:scale-105' />
					</Link>
					<FaPlus
						size={50}
						className='bg-red-300 text-white shadow-xl cursor-pointer hover:scale-105'
						onClick={() => addToCart(id, product)} />
				</div>
			</div>
			<div>
				<div
					className='text-gray-500 font-semibold text-sm'>
					{category}
				</div>
				<div
					className='font-semibold text-xl'>
					<Link to={`/product/${id}`}>
						{title}
					</Link>
				</div>
				<div
					className='text-gray-500 font-semibold'>
					$ {price}</div>
			</div>
		</div>
	)
}

export default Product
