import { useState } from 'react';

export default function Hooks() {
	const [name, setName] = useState('kyle');

	function handleClick() {
		setName('shelly');
		console.log('first');
	}

	return (
		<div className='max-w-sm'>
			<div className='group relative mt-1 ml-auto flex items-center gap-4 border border-stone-700/60 bg-stone-950/65 px-4 py-2.5 font-mono transition-all duration-150 hover:border-orange-900/70 hover:bg-stone-950/80'>
				<div className='absolute inset-x-0 bottom-0 h-0.5 bg-orange-600 shadow-[0_0_12px_rgba(234,88,12,0.8)]'></div>
				<div className='text-amber-300' onClick={handleClick}>
					Hi {name}
				</div>
			</div>
			<input
				className='group relative mt-1 ml-auto flex items-center gap-4 border border-stone-700/60 bg-stone-950/65 px-4 py-2.5 font-mono transition-all duration-150 hover:border-orange-900/70 hover:bg-stone-950/80 text-amber-50'
				type='text'
				value={name}
				onChange={(e) => setName(e.target.value)}
			/>
		</div>
	);
}
