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
			<div className='flex flex-col items-baseline justify-between border border-slate-800 bg-slate-900 p-5 shadow-lg my-3'>
				<p className='flex flex-col'>
					<label htmlFor='goal'>Your goal</label>
					<input
						id='goal'
						type='text'
						className='border-fuchsia-500 border-2'
						ref={goal}
					/>
				</p>
				<p className='flex flex-col'>
					<label htmlFor='summary'>Short summary</label>
					<input
						id='summary'
						type='text'
						className='border-fuchsia-500 border-2'
						ref={summary}
					/>
				</p>
			</div>

			<p>
				<button className='bg-green-500/10 px-3 py-1.5 text-sm font-medium text-green-400 transition hover:bg-green-500/20 my-3'>
					Add Goal
				</button>
			</p>
		</form>
	);
}
