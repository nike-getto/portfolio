import { motion } from 'framer-motion'
import Image from 'next/image'

import portfolioPic from '../assets/portfolioImg.jpeg'

type Props = {}

export default function About({}: Props) {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1.5 }}
			className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10
                       justify-evenly mx-auto items-center'
		>
			<h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
				About
			</h3>

			<motion.div
				initial={{
					x: -200,
					opacity: 0,
				}}
				transition={{
					duration: 1.2,
				}}
				whileInView={{ x: 0, opacity: 1 }}
				viewport={{ once: true }}
			>
				<Image
					src={portfolioPic}
					alt='About Picture'
					className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 
                    md:h-95 xl:w-[400px] xl:h-[400px]'
				/>
			</motion.div>

			<div className='space-y-10 px-0 md:px-10'>
				<h4 className='text-4xl font-semibold'>
					Here is a{' '}
					<span className='underline decoration-[#f7ab0a]/50'>
						little
					</span>{' '}
					background
				</h4>
				<p className='text-base'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Quos nostrum, qui aliquid corporis dignissimos cum explicabo
					nihil culpa voluptas voluptatibus saepe excepturi eaque.
					Cumque assumenda veniam fugit, minima nam earum.
					Reprehenderit quam quod laudantium vero recusandae numquam
					reiciendis quis omnis veritatis similique sequi eveniet
					placeat corrupti illo magni rerum, mollitia a quasi aut
					facilis aliquam assumenda vitae! Odio, illo magnam.
					Similique aliquam quos cum ipsum dolor excepturi facilis.
					Ipsum tempore illum, omnis facere dolorem exercitationem
					architecto dolore aliquid voluptatem? Corrupti mollitia
					ullam similique sapiente. Ab alias possimus qui hic ad.
					Incidunt deserunt natus qui alias nemo? Recusandae esse rem
					ut atque at neque quis, doloremque eveniet cum veritatis
					accusamus rerum architecto. Rerum possimus nisi odio neque
					reiciendis, ducimus fugit? Sapiente! Itaque eum, doloremque
					ut voluptates neque rem laboriosam sequi, quo nostrum
					tempora dignissimos placeat laudantium illo quasi quam quas
					doloribus accusantium voluptate quibusdam dolor repellat
					obcaecati explicabo aperiam! Consectetur, tempora.
				</p>
			</div>
		</motion.div>
	)
}
