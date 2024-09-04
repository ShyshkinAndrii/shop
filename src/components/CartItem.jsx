import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { IoMdClose, IoMdAdd } from "react-icons/io";
import { FaMinus } from "react-icons/fa6";
import { CartContext } from '../contexts/CartContext';




const CartItem = ({ item }) => {
	const { title, description, image, price, id, amount } = item;
	const { removeFromCart, increaseAmount, decreaseAmount } = useContext(CartContext);

	return (
		<div className='flex gap-x-4 py-2 lg:px-6 border-b border-gray-200 font-light w-full text-gray-700'>
			<div className='w-full min-h-[150px] flex items-center gap-x-4'>
				<Link to={`/product/${id}`}>
					<img
						src={image} alt=""
						className='max-w-[80px]'
					/>
				</Link>
				<div className="w-full flex flex-col">
					<div className='flex justify-between mb-2'>
						<Link
							className='text-sm uppercase font-semibold hover:underline max-w-[240px]'
						>
							{title}
						</Link>
						<div className='text-xl cursor-pointer'>
							<IoMdClose
								className='text-gray-500 hover:text-red-500 transition'
								onClick={() => removeFromCart(id)}
							/>
						</div>
					</div>
					<div className='flex gap-x-2 h-[36px] text-sm '>
						<div className='flex flex-1 px-4 items-center gap-x-2 max-w-[100px] h-full border font-medium'>
							<div className='flex flex-1 justify-between items-center cursor-pointer h-full'>
								<FaMinus
									onClick={() => decreaseAmount(id)}
								/>
							</div>
							<div className='flex h-full justify-between items-center px-2'>
								{amount}
							</div>
							<div className='flex flex-1 justify-between items-center cursor-pointer h-full'>
								<IoMdAdd
									onClick={() => increaseAmount(id)}
								/>
							</div>
						</div>
						<div className='flex flex-1 items-center justify-around text-gray-400'>
							{`${parseFloat(price).toFixed(2)}`}
						</div>
						<div className='flex flex-1 items-center justify-end font-semibold'>
							{`$ ${parseFloat(price * amount).toFixed(2)}`}
						</div>
					</div>
				</div>


			</div>

		</div>
	)
}

export default CartItem
