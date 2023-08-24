import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
	const [advice, setAdvice] = useState('');

	async function fetchAdvice() {
		axios
			.get(`https://api.adviceslip.com/advice`)
			.then(response => {
				const { advice } = response.data.slip;
				setAdvice(advice);
			})
			.catch(err => {
				console.log(err);
			});
	}

	useEffect(function () {
		fetchAdvice();
	}, []);

	return (
		<div className='app'>
			<div className='card'>
				<h1 className='heading'>{advice}</h1>
				<button className='button' onClick={fetchAdvice}>
					<span>Give Me Advice!</span>
				</button>
			</div>
		</div>
	);
}

export default App;
