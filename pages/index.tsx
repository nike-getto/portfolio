import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Head from 'next/head'

export default function Home() {
	return (
		<div className='bg-[#242424] text-white h-screen snap-y snap-mandatory overflow-scroll z-0'>
			<Head>
				<title>Sava's Portfolio</title>
			</Head>

			<Header />

			<section id='hero' className='snap-center'>
				<Hero />
			</section>
		</div>
	)
}
