import type { PropsWithChildren } from 'react';

type CourseGoalProps = PropsWithChildren<{
	id: number;
	title: string;
	onDelete: (id: number) => void;
}>;

export default function CourseGoal({
	id,
	title,
	children,
	onDelete,
}: CourseGoalProps) {
	return (
		<article className='group relative border border-stone-800 bg-stone-950 shadow-[0_8px_30px_rgba(0,0,0,0.25)] transition hover:border-orange-900'>
			{/* Active signal */}
			<div className='absolute left-0 top-0 h-full w-0.5 bg-stone-800 transition group-hover:bg-orange-700' />

			<div className='flex items-center justify-between gap-6 p-5 pl-6'>
				<div className='min-w-0'>
					<div className='mb-2 flex items-center gap-3'>
						<span className='font-mono text-[9px] tracking-[0.2em] text-stone-700'>
							OBJ // {String(id).padStart(2, '0')}
						</span>

						<span className='h-px w-8 bg-stone-800' />

						<span className='font-mono text-[8px] uppercase tracking-[0.2em] text-orange-800'>
							ACTIVE
						</span>
					</div>

					<h2 className='truncate font-mono text-base font-bold uppercase tracking-wide text-stone-200 transition group-hover:text-orange-400'>
						{title}
					</h2>

					<p className='mt-2 font-mono text-xs leading-relaxed text-stone-500'>
						{children}
					</p>
				</div>

				<button
					type='button'
					className='shrink-0 border border-stone-800 bg-stone-900 px-3 py-2 font-mono text-[9px] font-bold uppercase tracking-[0.15em] text-stone-600 transition hover:border-red-900 hover:bg-red-950/30 hover:text-red-500'
					onClick={() => onDelete(id)}
				>
					ABORT
				</button>
			</div>
		</article>
	);
}
