import Image from 'next/image'
import { motion } from 'framer-motion'

import decenterPic from '../assets/decenter.jpeg'

type Props = {}

export default function ExperienceCard({}: Props) {
	return (
		<article
			className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0
        w-[250px] md:w-[300px] xl:w-[450px] snap-center bg-[#292929] p-10 hover:opacity-100
        opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'
		>
			<motion.div
				initial={{ y: -100, opacity: 0 }}
				transition={{ duration: 1.2 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
			>
				<Image
					src={decenterPic}
					alt='decenterPicture'
					className='w-32 h-32 rounded-full xl:w[110px] xl:h-[110px] object-cover object-top'
				/>
			</motion.div>

			<div className='px-0 md:px-10'>
				<h4 className='text-4xl font-light'>
					Looking for opportunity to be a Web3 Developer
				</h4>
				<p className='font-bold text-2xl mt-1'>DECENTER</p>
				<div className='flex space-x-2 my-2'>
					{/* Tech used */}
					{/* Tech used */}
					{/* Tech used */}
				</div>
				<p className='uppercase py-5'>Got into Web3 one year ago...</p>

				<ul className='list-disc space-y-4 ml-5 text-lg'>
					<li>Summary points</li>
				</ul>
			</div>
		</article>
	)
}
