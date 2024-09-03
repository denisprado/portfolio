import React, { useState } from 'react';

const ContactForm = () => {
	const [formData, setFormData] = useState({ name: '', email: '', message: '' });

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		try {
			const response = await fetch('/api/contact', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(formData),
			});
			if (response.ok) {
				alert('Mensagem enviada com sucesso!');
				setFormData({ name: '', email: '', message: '' });
			} else {
				alert('Erro ao enviar mensagem. Tente novamente.');
			}
		} catch (error) {
			console.error('Erro:', error);
			alert('Erro ao enviar mensagem. Tente novamente.');
		}
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	return (
		<form onSubmit={handleSubmit} className="max-w-md p-6 mx-auto mt-8 bg-white rounded-lg shadow-md">
			<div className="mb-4">
				<label htmlFor="name" className="block mb-2 text-sm font-bold text-gray-700">Nome</label>
				<input
					type="text"
					id="name"
					name="name"
					value={formData.name}
					onChange={handleChange}
					placeholder="Seu nome"
					required
					className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
				/>
			</div>
			<div className="mb-4">
				<label htmlFor="email" className="block mb-2 text-sm font-bold text-gray-700">Email</label>
				<input
					type="email"
					id="email"
					name="email"
					value={formData.email}
					onChange={handleChange}
					placeholder="seu@email.com"
					required
					className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
				/>
			</div>
			<div className="mb-4">
				<label htmlFor="message" className="block mb-2 text-sm font-bold text-gray-700">Mensagem</label>
				<textarea
					id="message"
					name="message"
					value={formData.message}
					onChange={handleChange}
					placeholder="Sua mensagem"
					required
					rows={4}
					className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
				></textarea>
			</div>
			<div className="flex items-center justify-between">
				<button
					type="submit"
					className="px-4 py-2 font-semibold text-white transition-colors duration-300 bg-indigo-600 rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-75"
				>
					Enviar
				</button>
			</div>
		</form>
	);
};

export default ContactForm;
