import { useRef } from 'react';
import Container from '../components/Section_2-Advanced_Input_Components/Container';
import Input from '../components/Section_2-Advanced_Input_Components/Input';
import Form from '../components/Section_2-Advanced_Input_Components/Form';
import Button from '../components/Section_2-Advanced_Input_Components/Button';

export default function InputApp() {
	function handleSave(data: unknown) {
		const extractedData = data as { name: string; age: string };
		console.log(extractedData);
	}
	return (
		<div className='flex items-center justify-center p-6'>
			<div
				className='
					w-full max-w-md
					space-y-6
					border border-[#4A3A22]
					bg-[#262018]
					p-8
					shadow-[0_15px_50px_rgba(0,0,0,0.65)]
				'
			>
				{/* Header */}
				<div className='border-b border-[#5C4727] pb-5'>
					<p className='font-mono text-[10px] uppercase tracking-[0.3em] text-[#75664B]'>
						// WASTELAND TERMINAL
					</p>

					<h1 className='mt-2 font-mono text-2xl font-bold uppercase tracking-[0.15em] text-[#D4A83E]'>
						Dune Access
					</h1>

					<p className='mt-2 font-mono text-xs uppercase tracking-wider text-[#8A795A]'>
						Sector 07 // Identity Registry
					</p>
				</div>

				{/* Inputs */}
				<Form onSave={handleSave}>
					<Input type='text' label='Name' id='name' />
					<Input type='number' label='Age' id='age' />
					<p>
						<Button>Save</Button>
					</p>
				</Form>

				{/* Footer */}
				<div className='border-t border-[#3F321F] pt-4'>
					<p className='font-mono text-[10px] uppercase tracking-[0.2em] text-[#665740]'>
						⚠ Authorization required // Dust protocol active
					</p>
				</div>
				<div className='text-stone-50 group relative mt-1 ml-auto flex items-center gap-4 border border-stone-700/60 bg-stone-950/65 px-4 py-2.5 font-mono transition-all duration-150 hover:border-orange-900/70 hover:bg-stone-950/80'>
					<Container as={'button'}>Click me</Container>
				</div>
			</div>
		</div>
	);
}
