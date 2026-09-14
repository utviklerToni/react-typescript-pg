import { useRef, type SubmitEvent } from 'react';

type NewGoalProps = {
	onAddGoal: (goal: string, summary: string) => void;
};

export default function NewGoal({ onAddGoal }: NewGoalProps) {
	const goal = useRef<HTMLInputElement>(null);
	const summary = useRef<HTMLInputElement>(null);

	function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
		event.preventDefault();

		const enteredGoal = goal.current!.value;
		const enteredSummary = summary.current!.value;

		event.currentTarget.reset();
		onAddGoal(enteredGoal, enteredSummary);
	}

	return (
		<form onSubmit={handleSubmit}>
			<div className='border border-stone-800 bg-stone-950 p-5 shadow-[0_8px_30px_rgba(0,0,0,0.25)]'>
				<div className='mb-5 flex items-center justify-between border-b border-stone-900 pb-3'>
					<div className='font-mono text-[9px] uppercase tracking-[0.3em] text-orange-700'>
						NEW OBJECTIVE
					</div>

					<div className='font-mono text-[8px] tracking-[0.2em] text-stone-700'>
						INPUT // READY
					</div>
				</div>

				<div className='grid gap-5 sm:grid-cols-2'>
					<p className='flex flex-col gap-2'>
						<label
							htmlFor='goal'
							className='font-mono text-[9px] uppercase tracking-[0.2em] text-stone-500'
						>
							Objective
						</label>

						<input
							id='goal'
							type='text'
							placeholder='Enter objective...'
							className='border border-stone-800 bg-stone-900 px-3 py-3 font-mono text-sm text-stone-200 outline-none transition placeholder:text-stone-700 focus:border-orange-700 focus:bg-stone-900'
							ref={goal}
						/>
					</p>

					<p className='flex flex-col gap-2'>
						<label
							htmlFor='summary'
							className='font-mono text-[9px] uppercase tracking-[0.2em] text-stone-500'
						>
							Briefing
						</label>

						<input
							id='summary'
							type='text'
							placeholder='Enter briefing...'
							className='border border-stone-800 bg-stone-900 px-3 py-3 font-mono text-sm text-stone-200 outline-none transition placeholder:text-stone-700 focus:border-orange-700 focus:bg-stone-900'
							ref={summary}
						/>
					</p>
				</div>

				<div className='mt-5 flex items-center justify-between border-t border-stone-900 pt-4'>
					<span className='font-mono text-[8px] uppercase tracking-[0.2em] text-stone-700'>
						// ALL FIELDS REQUIRED
					</span>

					<button
						type='submit'
						className='border border-orange-800 bg-orange-950/30 px-5 py-2.5 font-mono text-[9px] font-bold uppercase tracking-[0.2em] text-orange-500 transition hover:border-orange-600 hover:bg-orange-900/30 hover:text-orange-400'
					>
						Deploy Objective
					</button>
				</div>
			</div>
		</form>
	);
}
