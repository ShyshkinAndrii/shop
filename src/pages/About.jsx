import React from 'react';
import about from '../img/about.png';
import { SlSocialTwitter, SlSocialFacebook, SlSocialInstagram, SlSocialPintarest } from "react-icons/sl";


const About = () => {
	return (
		<div>
			<div className="flex flex-col justify-between items-center lg:flex-row mb-6">
				<div >
					<img
						className="max-h-[600px] "
						src={about} alt="" />
				</div>
				<div className="max-w-[600px]">
					<h1 className='text-lg font-semibold text-center lg:text-2xl mb-6'>About us</h1>
					<p className='text-sm  text-gray-600 font-medium px-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, ab? Corporis perspiciatis officiis qui ipsam saepe voluptatum facilis debitis ab porro, culpa dolorum impedit quasi error id eos facere quisquam?</p>
				</div>
			</div>
			<div className="flex justify-center items-center gap-x-12 lg:gap-x-20 text-4xl px-6 mb-6">
				<SlSocialTwitter className='h-16 w-16 bg-red-500 text-white p-2 shadow-lg rounded-md cursor-pointer hover:scale-110 hover:bg-red-400 hover:shadow-md' />
				<SlSocialFacebook className='h-16 w-16 bg-red-500 text-white p-2 shadow-lg rounded-md cursor-pointer hover:scale-110 hover:bg-red-400 hover:shadow-md' />
				<SlSocialInstagram className='h-16 w-16 bg-red-500 text-white p-2 shadow-lg rounded-md cursor-pointer hover:scale-110 hover:bg-red-400 hover:shadow-md' />
				<SlSocialPintarest className='h-16 w-16 bg-red-500 text-white p-2 shadow-lg rounded-md cursor-pointer hover:scale-110 hover:bg-red-400 hover:shadow-md' />
			</div>
		</div>
	)
}

export default About
