import React from 'react';
import { Card, FormField, Loader } from '../components';

const RenderCards = ({ data, title }) => {
	if (data?.length > 0) {
		return data.map((post) => <Card key={post._id} {...post} />);
	}

	return (
		<h2 className='mt-5 font-bold text-indigo-500 text-xl uppercase'>
			{title}
		</h2>
	);
};

const Home = () => {
	const [allPosts, setAllPosts] = React.useState([]);
	const [search, setSearch] = React.useState('');
	const [searchResults, setSearchResults] = React.useState([]);
	const [searchTimeout, setSearchTimeout] = React.useState(null);
	const [loading, setLoading] = React.useState(false);

	React.useEffect(() => {
		const fetchPosts = async () => {
			try {
				setLoading(true);

				const req = await fetch(
					'https://zeroxcanvas.onrender.com/api/v1/post'
				);
				const res = await req.json();

				console.log('fetchPosts -> res', res);
				setAllPosts(res.data.reverse());
			} catch (error) {
				console.log('fetchPosts -> error', error);
			} finally {
				setLoading(false);
			}
		};

		fetchPosts();
	}, []);

	const handleSearch = async (e) => {
		clearTimeout(searchTimeout);

		setSearch(e.target.value);

		setSearchTimeout(
			setTimeout(() => {
				const searchResults = allPosts.filter(
					(post) =>
						post.name
							.toLowerCase()
							.includes(search.toLowerCase()) ||
						post.prompt.toLowerCase().includes(search.toLowerCase())
				);

				setSearchResults(searchResults);
			}, 1500)
		);
	};

	return (
		<section className=' w-full max-w-7xl mx-auto'>
			<div>
				<h1 className='font-extrabold text-slate-900 text-2xl'>
					The Community Showcase
				</h1>

				<p className='mt-2 text-slate-400 max-w-3xl'>
					Browse through a collection of imaginative and visually
					stunning images generated by DALL·E AI.
				</p>
			</div>

			<div className='mt-10'>
				<FormField
					label='Search Posts'
					type='text'
					name='search'
					placeholder='Search Posts by Name or Prompt'
					value={search}
					handleChange={handleSearch}
				/>
			</div>

			<div className='mt-16'>
				{loading ? (
					<div className='flex justify-center items-center'>
						<Loader />
					</div>
				) : (
					<>
						{search && (
							<h2 className='font-medium text-slate-400 text-xl mb-3'>
								Showing results for{' '}
								<span className='text-slate-900'>{search}</span>
							</h2>
						)}

						<div className='grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3'>
							{search ? (
								<RenderCards
									data={searchResults}
									title='No search results found'
								/>
							) : (
								<RenderCards
									data={allPosts}
									title='No posts found'
								/>
							)}
						</div>
					</>
				)}
			</div>
		</section>
	);
};

export default Home;
