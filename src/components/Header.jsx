import React, { useState, useContext, useEffect } from 'react';
import { IoMenu, IoCloseSharp, IoBag } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { SidebarContext } from '../contexts/SidebarContext';
import { CartContext } from '../contexts/CartContext';


const Header = () => {
	const [nav, setNav] = useState(false);
	const [isActive, setIsActive] = useState(false);

	const { isOpen, setIsOpen } = useContext(SidebarContext);
	const { itemAmount } = useContext(CartContext);

	const handleNav = () => {
		setNav(!nav);
	};

	useEffect(() => {
		window.addEventListener('scroll', () => {
			window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
		});
	});

	return (
		<header className={`${isActive ? 'bg-white shadow-md' : 'bg-none'} fixed w-full transition-all z-10`}>
			<div className='flex justify-between items-center py-8 px-8 lg:px-24 xl:px-32 2xl:px-40'>
				{/*title */}
				<div className='flex items-center justify-start gap-x-8'>
					<div>
						<IoMenu
							size={30}
							className='cursor-pointer'
							onClick={handleNav}
						/>
					</div>
					<div>
						<Link to={'/'}>
							<h1
								className='text-3xl md:text-4xl font-bold'>
								9-ka. <span className='italic'>Shop</span>
							</h1>
						</Link>

					</div>
				</div>
				{/*cart icon */}
				<div className='relative'>
					<div>
						<IoBag
							size={30}
							className='cursor-pointer'
							onClick={() => setIsOpen(!isOpen)}
						/>
					</div>
					<div className="bg-red-500 text-white flex items-center justify-center h-6 w-6 rounded-full absolute top-3 -right-5 p-2">
						{itemAmount}
					</div>
				</div>
				{/*menu */}
				<div className={
					nav ? 'bg-black/70 fixed top-0 left-0 w-full h-screen z-20 text-gray-300 px-4 py-7 ease-in-out duration-500'
						: 'absolute top-0 h-screen left-[-100%] ease-in-out duration-500 z-10'
				}>
					<IoCloseSharp
						size={30}
						className='text-gray-300 font-bold absolute top-8 right-12 cursor-pointer hover:scale-110'
						onClick={handleNav}
					/>
					<ul className='flex flex-col w-full h-full justify-center items-center' >
						<Link to={'/'} >
							<li className='text-3xl p-8 font-bold hover:underline' onClick={handleNav} >Home</li>
						</Link>
						<Link to={'productpage'}>
							<li className='text-3xl p-8 font-bold hover:underline' onClick={handleNav}>Products</li>
						</Link>
						<Link to={'about'}>
							<li className='text-3xl p-8 font-bold hover:underline' onClick={handleNav}>About us</li>
						</Link>
					</ul>
				</div >
			</div >
		</header >

	)
}

export default Header
