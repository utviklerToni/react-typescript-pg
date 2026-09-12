import { useState } from 'react';
import { appModules } from './appRegistry';

function WastelandDeck() {
	const [activeId, setActiveId] = useState(appModules[0]?.id);
	const [isOpen, setIsOpen] = useState(false);

	const activeModule = appModules.find((app) => app.id === activeId);

	if (!activeModule) {
		return (
			<div className='flex min-h-screen items-center justify-center bg-slate-950 font-mono text-orange-500'>
				NO MODULES FOUND
			</div>
		);
	}

	const ActiveComponent = activeModule.component;
	const activeIndex = appModules.indexOf(activeModule);

	function selectModule(id: string) {
		setActiveId(id);
		setIsOpen(false);
	}

	return (
		<div className='relative min-h-screen overflow-hidden bg-slate-950'>
			{/* Atmospheric grid */}
			<div className='pointer-events-none absolute inset-0 opacity-[0.025]'>
				<div
					className='h-full w-full'
					style={{
						backgroundImage:
							'radial-gradient(#f59e0b 1px, transparent 1px)',
						backgroundSize: '18px 18px',
					}}
				/>
			</div>

			{/* Main playground */}
			<div className='relative z-10 min-h-screen px-6 pb-32 pt-12'>
				<div className='mx-auto max-w-6xl'>
					{/* Module header */}
					<div className='mb-10 border-b border-stone-800 pb-4'>
						<div className='mb-3 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.35em] text-orange-700'>
							<span className='h-2 w-2 bg-orange-600 shadow-[0_0_10px_rgba(234,88,12,0.7)]' />
							WASTELAND TRAINING DECK
						</div>

						<div className='flex items-end justify-between'>
							<div>
								<div className='mb-1 font-mono text-[9px] uppercase tracking-[0.3em] text-stone-700'>
									CURRENT MODULE
								</div>

								<h1 className='font-mono text-3xl font-black tracking-tight text-stone-100'>
									{activeModule.label}
								</h1>
							</div>

							<div className='hidden text-right font-mono text-[9px] uppercase tracking-[0.2em] text-stone-700 sm:block'>
								<div>
									MODULE // {String(activeIndex + 1).padStart(2, '0')}
								</div>

								<div>STATUS // ONLINE</div>
							</div>
						</div>
					</div>

					{/* Active experiment */}
					<ActiveComponent />
				</div>
			</div>

			{/* ================================================== */}
			{/* WASTELAND CONTROL DECK */}
			{/* ================================================== */}

			<div className='fixed bottom-4 left-1/2 z-50 w-[calc(100%-2rem)] max-w-5xl -translate-x-1/2'>
				{/* DEPLOYED DECK */}
				<div
					className={[
						'overflow-hidden border border-stone-700/70 bg-stone-950/75 shadow-[0_10px_40px_rgba(0,0,0,0.45)]',
						'transition-all duration-150',
						isOpen
							? 'max-h-80 opacity-100'
							: 'pointer-events-none max-h-0 opacity-0',
					].join(' ')}
				>
					{/* Header */}
					<div className='flex items-center justify-between border-b border-stone-800/80 px-4 py-3'>
						<div className='flex items-center gap-3'>
							<span className='h-1.5 w-1.5 bg-orange-600 shadow-[0_0_8px_rgba(234,88,12,0.8)]' />

							<span className='font-mono text-[9px] uppercase tracking-[0.3em] text-orange-700'>
								AVAILABLE MODULES
							</span>
						</div>

						<span className='font-mono text-[8px] tracking-[0.2em] text-stone-700'>
							{String(appModules.length).padStart(2, '0')} LOADED
						</span>
					</div>

					{/* Modules */}
					<div className='flex max-h-48 flex-wrap overflow-y-auto'>
						{appModules.map((module, index) => {
							const isActive = module.id === activeId;

							return (
								<button
									key={module.id}
									type='button'
									onClick={() => selectModule(module.id)}
									className={[
										'relative min-w-[110px] flex-1 border-b border-r border-stone-800/80 px-4 py-4 text-left font-mono transition-colors duration-100',
										'hover:bg-orange-950/30',
										isActive
											? 'bg-orange-950/20 text-orange-500'
											: 'text-stone-600 hover:text-orange-400',
									].join(' ')}
								>
									{isActive && (
										<div className='absolute inset-x-0 bottom-0 h-0.5 bg-orange-600 shadow-[0_0_12px_rgba(234,88,12,0.8)]' />
									)}

									<div className='mb-1 text-[8px] tracking-[0.2em] text-stone-700'>
										{String(index + 1).padStart(2, '0')}
									</div>

									<div className='text-[10px] font-bold tracking-widest'>
										{module.label}
									</div>
								</button>
							);
						})}
					</div>

					{/* Status strip */}
					<div className='flex items-center justify-between border-t border-stone-900 px-4 py-2'>
						<span className='font-mono text-[8px] uppercase tracking-[0.25em] text-stone-700'>
							WLD // 001
						</span>

						<span className='font-mono text-[8px] uppercase tracking-[0.2em] text-stone-700'>
							ACTIVE:{' '}
							<span className='text-orange-800'>
								{activeModule.label}
							</span>
						</span>

						<span className='hidden font-mono text-[8px] uppercase tracking-[0.2em] text-stone-700 sm:block'>
							CLICK MODULE TO DEPLOY
						</span>
					</div>
				</div>

				{/* ================================================== */}
				{/* DORMANT CONTROL STRIP */}
				{/* ================================================== */}

				<button
					type='button'
					onClick={() => setIsOpen((current) => !current)}
					aria-label={
						isOpen
							? 'Close wasteland module deck'
							: 'Open wasteland module deck'
					}
					className={[
						'group relative mt-1 ml-auto flex items-center gap-4 border border-stone-700/60',
						'bg-stone-950/65 px-4 py-2.5',
						'font-mono transition-all duration-150',
						'hover:border-orange-900/70 hover:bg-stone-950/80',
					].join(' ')}
				>
					{/* Signal */}
					<span
						className={[
							'h-1.5 w-1.5 bg-orange-700',
							'shadow-[0_0_8px_rgba(194,65,12,0.7)]',
							isOpen ? 'bg-orange-500' : '',
						].join(' ')}
					/>

					{/* Identity */}
					<span className='text-[8px] uppercase tracking-[0.25em] text-stone-600 transition-colors group-hover:text-orange-700'>
						WLD // 001
					</span>

					{/* Active module */}
					<span className='hidden text-[8px] uppercase tracking-[0.2em] text-stone-800 sm:block'>
						{activeModule.label}
					</span>

					{/* Loaded count */}
					<span className='text-[8px] tracking-[0.2em] text-stone-800'>
						{String(appModules.length).padStart(2, '0')}
					</span>

					{/* Orange deployment line */}
					<span
						className={[
							'absolute -top-px right-0 h-px bg-orange-600',
							'shadow-[0_0_10px_rgba(234,88,12,0.8)]',
							'transition-all duration-150',
							isOpen ? 'w-full' : 'w-8 group-hover:w-20',
						].join(' ')}
					/>

					{/* Small mechanical indicator */}
					<span
						className={[
							'text-[9px] text-stone-700 transition-transform duration-150',
							isOpen ? 'rotate-180 text-orange-700' : '',
						].join(' ')}
					>
						▲
					</span>
				</button>
			</div>
		</div>
	);
}

export default WastelandDeck;
