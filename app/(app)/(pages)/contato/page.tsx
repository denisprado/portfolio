'use client'
import ContactForm from '@/components/contact';
import { PageWrapper } from '@/components/page-wrapper';
import { Container } from '@/components/container';
import Image from 'next/image';

const ContatoPage = () => {
	return (
		<PageWrapper className="h-screen overflow-hidden bg-center bg-coverrelative">
			<Image
				src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
				alt="Montanhas majestosas"
				layout="fill"
				objectFit="cover"
				quality={100}
				className="z-0"
			/>
			<Container className="relative flex flex-col w-full mt-20">
				<div className="relative z-10 flex justify-center w-full pt-20 min-h-">
					<p className="w-4/6 font-serif text-6xl font-light text-center text-white drop-shadow-lg">
						Como podemos te ajudar?
					</p>
				</div>
			</Container>
			<ContactForm />
		</PageWrapper>
	);
};

export default ContatoPage;
