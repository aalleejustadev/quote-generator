import { useEffect, useState } from 'react';

function App() {
	const [advice, setAdvice] = useState('');

	async function fetchAdvices() {
		const res = await fetch('https://api.adviceslip.com/advice');
		const data = await res.json();
		setAdvice(data.slip.advice);
	}

	useEffect(function () {
		fetchAdvices();
	}, []);

	return (
		<div className='App'>
			<h1>{advice}</h1>
			<button onClick={fetchAdvices}>Get advice</button>
		</div>
	);
}

export default App;
