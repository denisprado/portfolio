import React, { useState } from 'react';

const ContactForm = () => {
	const [formData, setFormData] = useState({ name: '', email: '', message: '' });
	const [isLoading, setIsLoading] = useState(false);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsLoading(true);
		try {
			const response = await fetch(`/contact`, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(formData),
			});

			if (response.ok) {
				alert('Mensagem enviada com sucesso!');
				setFormData({ name: '', email: '', message: '' });
			} else {
				const errorData = await response.json();
				throw new Error(errorData.message || `Erro na requisição: ${response.status} ${response.statusText}`);
			}
		} catch (error) {
			console.error('Erro:', error);
			alert('Erro ao enviar mensagem. Tente novamente.');
		} finally {
			setIsLoading(false);
		}
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	return (
		<form onSubmit={handleSubmit} className="relative z-10 max-w-md p-6 mx-auto mt-8 bg-white rounded-lg shadow-md bg-opacity-20 backdrop-filter backdrop-blur-lg">
			<div className="mb-4">
				<label htmlFor="name" className="block mb-2 text-sm font-bold text-primary-800">Nome</label>
				<input
					type="text"
					id="name"
					name="name"
					value={formData.name}
					onChange={handleChange}
					placeholder="Seu nome"
					required
					className="w-full px-3 py-2 border rounded-md placeholder-primary-300 border-primary-300 focus:outline-none focus:ring focus:ring-primary-100 focus:border-primary-500"
				/>
			</div>
			<div className="mb-4">
				<label htmlFor="email" className="block mb-2 text-sm font-bold text-primary-800">Email</label>
				<input
					type="email"
					id="email"
					name="email"
					value={formData.email}
					onChange={handleChange}
					placeholder="seu@email.com"
					required
					className="w-full px-3 py-2 border rounded-md placeholder-primary-300 border-primary-300 focus:outline-none focus:ring focus:ring-primary-100 focus:border-primary-500"
				/>
			</div>
			<div className="mb-4">
				<label htmlFor="message" className="block mb-2 text-sm font-bold text-primary-800">Mensagem</label>
				<textarea
					id="message"
					name="message"
					value={formData.message}
					onChange={handleChange}
					placeholder="Sua mensagem"
					required
					rows={4}
					className="w-full px-3 py-2 border rounded-md placeholder-primary-300 border-primary-300 focus:outline-none focus:ring focus:ring-primary-100 focus:border-primary-500"
				></textarea>
			</div>
			<div className="flex items-center justify-between">
				<button
					type="submit"
					disabled={isLoading}
					className="px-4 py-2 font-semibold text-white transition-colors duration-300 rounded-lg shadow-md bg-primary hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-opacity-75 disabled:bg-primary-300"
				>
					{isLoading ? 'Enviando...' : 'Enviar'}
				</button>
			</div>
		</form>
	);
};

export default ContactForm;
