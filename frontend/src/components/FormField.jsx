import React from 'react';

const FormField = ({
	label,
	type,
	name,
	placeholder,
	value,
	handleChange,
	isSurpriseMe,
	handleSurpriseMe,
}) => {
	return (
		<div>
			<div className='flex items-center gap-2 mb-2'>
				<label
					htmlFor={name}
					className='block text-sm font-medium text-slate-900'
				>
					{label}
				</label>

				{isSurpriseMe && (
					<button
						type='button'
						onClick={handleSurpriseMe}
						className='font-semibold text-xs bg-gray-300 py-1 px-2 rounded-sm text-slate-900'
					>
						Surprise Me
					</button>
				)}
			</div>

			<input
				type={type}
				id={name}
				name={name}
				placeholder={placeholder}
				value={value}
				onChange={handleChange}
				className='bg-gray-50 border border-gray-300 text-slate-900 text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 outline-none block w-full p-3'
				required
			/>
		</div>
	);
};

export default FormField;
