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
		<article className='flex items-center justify-between border border-slate-800 bg-slate-900 p-5 shadow-lg'>
			<div>
				<h2 className='text-lg font-semibold text-cyan-400'>{title}</h2>

				<p className='mt-1 text-slate-400'>{children}</p>
			</div>

			<button
				className='bg-red-500/10 px-3 py-1.5 text-sm font-medium text-red-400 transition hover:bg-red-500/20'
				onClick={() => onDelete(id)}
			>
				Delete
			</button>
		</article>
	);
}
