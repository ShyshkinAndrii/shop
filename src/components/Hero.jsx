import React from 'react';
import { FaArrowRight } from "react-icons/fa6";
import woman from '../img/woman.png';
import { Link } from 'react-router-dom';



const Hero = () => {
	return (
		<div className=' mt-10'>
			<div
				className='bg-[url("./src/img/bg_hero.svg")] bg-no-repeat bg-cover bg-center h-[400px] lg:h-[680px] '
			>
				<div className="flex justify-center items-center gap-x-4 px-6">
					<div className="flex flex-col justify-center items-center h-full">
						<h1 className='text-7xl font-bold uppercase pt-4 text-center'>Autumn sales</h1> <br />
						<Link to={'productpage'}>
							<button className='text-3xl px-6 py-4 text-white font-semibold bg-red-500 border-none rounded-xl hover:scale-105 active:bg-red-400 flex justify-between items-center gap-x-3'>
								<p>Visit our shop</p> <FaArrowRight size={25} />
							</button>
						</Link>
					</div>
					<div className="max-w-[1000px]">
						<img src={woman} alt="/"
							className='max-h-[1000px] hidden lg:block'
						/>
					</div>
				</div>

			</div>
		</div>
	)
}

export default Hero
