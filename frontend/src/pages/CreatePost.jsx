import React from 'react';
import { useNavigate } from 'react-router-dom';

import { preview } from '../assets';
import { getRandomPrompt } from '../utils';
import { FormField, Loader } from '../components';

const CreatePost = () => {
	const navigate = useNavigate();

	const [formData, setFormData] = React.useState({
		name: '',
		prompt: '',
		photo: '',
	});
	const [generatingImage, setGeneratingImage] = React.useState(false);
	const [loading, setLoading] = React.useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();
	};

	const handleChange = (e) => {
		//
	};

	const handleSurpriseMe = () => {
		//
	};

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
						placeholder='A plush toy robot sitting against a yellow wall'
						value={formData.prompt}
						handleChange={handleChange}
						isSurpriseMe
						handleSurpriseMe={handleSurpriseMe}
					/>
				</div>
			</form>
		</section>
	);
};

export default CreatePost;
