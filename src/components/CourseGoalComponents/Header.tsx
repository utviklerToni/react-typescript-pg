import type { ReactNode } from 'react';

type HeaderProps = {
	children: ReactNode;
};

export default function Header({ children }: HeaderProps) {
	return (
		<header className='mb-8 border-b border-stone-800 pb-6'>
			<div className='mb-3 flex items-center gap-3 font-mono text-[9px] uppercase tracking-[0.35em] text-orange-700'>
				<span className='h-2 w-2 bg-orange-600 shadow-[0_0_10px_rgba(234,88,12,0.7)]' />
				OBJECTIVE CONTROL
			</div>

			<div className='flex items-end justify-between gap-6'>
				<div>
					<h1 className='font-mono text-3xl font-black uppercase tracking-tight text-stone-100'>
						{children}
					</h1>

					<div className='mt-2 font-mono text-[9px] uppercase tracking-[0.25em] text-stone-600'>
						// DEFINE YOUR MISSION
					</div>
				</div>

				<div className='hidden text-right font-mono text-[9px] uppercase tracking-[0.2em] text-stone-700 sm:block'>
					<div>SECTOR // 01</div>
					<div>STATUS // ACTIVE</div>
				</div>
			</div>
		</header>
	);
}
