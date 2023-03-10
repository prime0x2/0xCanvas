import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { preview } from '../assets';
import { getRandomPrompt } from '../utils';
import { FormField, Loader } from '../components';
import { createPost, generateImage } from '../api';

const CreatePost = () => {
	/* ---------- hooks ---------- */

	const navigate = useNavigate();
	const queryClient = useQueryClient();

	/* ---------- states ---------- */

	const [formData, setFormData] = React.useState({
		name: '',
		prompt: '',
		photo: '',
	});

	/* ---------- api actions ---------- */

	const newPost = useMutation({
		mutationFn: (data) => createPost(data),
		onSuccess: () => {
			queryClient.invalidateQueries(['posts']);
			navigate('/');
		},
	});

	const newImage = useMutation({
		mutationFn: (prompt) => generateImage(prompt),
		onSuccess: (data) => {
			const imageUrl = `data:image/jpeg;base64,${data.image}`;
			setFormData({ ...formData, photo: imageUrl });
		},
	});

	/* ---------- handlers ---------- */

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSurpriseMe = () => {
		const randomPrompt = getRandomPrompt(formData.prompt);
		setFormData({ ...formData, prompt: randomPrompt });
	};

	const handleGenerateImage = () => {
		if (!formData.prompt) return;

		newImage.mutate(formData.prompt);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (!formData.name || !formData.prompt || !formData.photo) return;

		newPost.mutate(formData);
	};

	/* ---------- render ---------- */

	return (
		<section className='w-full max-w-7xl mx-auto'>
			<div>
				<h1 className='font-extrabold text-slate-900 text-2xl'>
					Create
				</h1>

				<p className='mt-2 text-slate-400 max-w-4xl'>
					Create imaginative and visually stunning images through
					DALL·E AI and share them with the community.
				</p>
			</div>

			<form className='mt-16 max-w-3xl' onSubmit={handleSubmit}>
				<div className='flex flex-col gap-5'>
					<FormField
						label='Your Name'
						type='text'
						name='name'
						placeholder='John Doe'
						value={formData.name}
						handleChange={handleChange}
					/>

					<FormField
						label='Prompt'
						type='text'
						name='prompt'
						placeholder='An Impressionist oil painting of sunflowers in a purple vase…'
						value={formData.prompt}
						handleChange={handleChange}
						isSurpriseMe
						handleSurpriseMe={handleSurpriseMe}
					/>

					<div className='relative bg-gray-50 border border-gray-300 text-slate-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-64 p-3 h-64 flex justify-center items-center'>
						{formData.photo ? (
							<img
								src={formData.photo}
								alt={formData.prompt}
								className='w-full h-full object-contain'
							/>
						) : (
							<img
								src={preview}
								alt='preview'
								className='w-9/12 h-9/12 object-contain opacity-40'
							/>
						)}

						{newImage.isLoading && (
							<div className='absolute inset-0 z-0 flex justify-center items-center bg-black/50 rounded-lg'>
								<Loader />
							</div>
						)}
					</div>
				</div>

				<div className='mt-5 flex gap-5'>
					<button
						type='button'
						onClick={handleGenerateImage}
						className='text-white bg-green-600 font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center'
					>
						{newImage.isLoading ? 'Generating...' : 'Generate'}
					</button>
				</div>

				<div className='mt-10'>
					<p className='mt-2 text-gray-400 text-sm'>
						Once you have created the image you want, you can share
						it with other's in the community.
					</p>

					<button
						type='submit'
						className='mt-5 text-white bg-blue-600 font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center'
					>
						{newPost.isLoading
							? 'Sharing...'
							: 'Share with the community'}
					</button>
				</div>
			</form>
		</section>
	);
};

export default CreatePost;
