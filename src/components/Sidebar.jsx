import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import CartItem from './CartItem';
import { SidebarContext } from '../contexts/SidebarContext';
import { FaArrowRight } from "react-icons/fa6";
import { CartContext } from '../contexts/CartContext';
import { RiDeleteBin6Line } from "react-icons/ri";



const Sidebar = () => {
	const { isOpen, handleClose } = useContext(SidebarContext);
	const { cart, clearCart, itemAmount, total } = useContext(CartContext);
	return (
		<div
			className={`${isOpen ? 'right-0' : '-right-full'} w-full h-full bg-white fixed top-0 md:w-[35vw] xl:max-w-[30vw] shadow-2xl transition-all duration-300 z-10 px-4 lg:px-[35px]`}>
			<div className='flex justify-between items-center py-8  border-b-2'>
				<div>
					<h1 className='font-semibold text-xl text-gray-800'>Shopping bag <span className='font-bold'>({itemAmount})</span></h1>
				</div>
				<div
					onClick={handleClose}
					className='font-semibold text-xl cursor-pointer'>
					<FaArrowRight />
				</div>
			</div>
			<div className=' flex flex-col h-[520px] overflow-y-auto py-4 lg:h-[680px] border-b overflow-x-hidden'>
				{cart.map((item) => {
					return <CartItem item={item} key={item.id} />
				})}
			</div>
			<div className="flex justify-between items-center mt-4">
				<div className="text-xl font-semibold uppercase text-gray-800 ">
					<span className='mr-4'>Total:</span> $ {parseFloat(total).toFixed(2)}</div>
				<div className="text-2xl ">
					<RiDeleteBin6Line
						className='cursor-pointer h-12 w-12 bg-red-500 text-white p-3'
						onClick={clearCart}
					/>
				</div>
			</div>
		</div>
	)
}

export default Sidebar;
