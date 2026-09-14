import Button from '../components/Section_2-Advanced_Input_Components/Button';
import Input from '../components/Section_2-Advanced_Input_Components/Input';

export default function InputApp() {
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
				<div className='space-y-5'>
					<Input id='name-1' label='Your Name' type='text' />
					<Input id='name-2' label='Callsign' type='number' />
				</div>

				{/* Footer */}
				<div className='border-t border-[#3F321F] pt-4'>
					<p className='font-mono text-[10px] uppercase tracking-[0.2em] text-[#665740]'>
						⚠ Authorization required // Dust protocol active
					</p>
				</div>
				<div>
					<p>
						<Button el='button'>A Button</Button>
					</p>
				</div>
				<div>
					<p>
						<Button el='anchor' href='https://google.com'>
							A link
						</Button>
					</p>
				</div>
			</div>
		</div>
	);
}
