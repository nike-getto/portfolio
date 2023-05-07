import About from '@/components/About'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Skills from '@/components/Skills'
import WorkExperience from '@/components/WorkExperience'
import Head from 'next/head'

export default function Home() {
	return (
		<div className='bg-[#242424] text-white h-screen snap-y snap-mandatory overflow-scroll z-0'>
			<Head>
				<title>Sava Portfolio</title>
			</Head>

			<Header />

			<section id='hero' className='snap-start'>
				<Hero />
			</section>

			<section id='about' className='snap-center'>
				<About />
			</section>

			<section id='experience' className='snap-center'>
				<WorkExperience />
			</section>

			<section id='skills' className='snap-start'>
				{/* <Skills /> */}
			</section>
		</div>
	)
}
