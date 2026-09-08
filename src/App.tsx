import CourseGoal from './components/CourseGoal';
import goalImg from './assets/hero.png';
import Header from './components/Header';
import { useState } from 'react';
import CourseGoalList from './components/CourseGoalList';

export type CourseGoal = {
	title: string;
	description: string;
	id: number;
};

export default function App() {
	const [goals, setGoals] = useState<CourseGoal[]>([]);

	function handleAddGoals() {
		setGoals((prevGoals) => {
			const newGoal: CourseGoal = {
				id: Math.random(),
				title: 'Learn React + TS',
				description: 'learn in depth',
			};
			console.log('first');

			return [...prevGoals, newGoal];
		});
	}

	return (
		<main className='min-h-screen bg-slate-950 px-6 py-12 text-white'>
			<div className='mx-auto max-w-2xl'>
				<Header image={{ src: goalImg, alt: 'Course goals' }}>
					<h1 className='text-3xl font-bold tracking-tight'>
						Your Course Goals
					</h1>
				</Header>

				<div className='mt-8'>
					<button
						onClick={handleAddGoals}
						className='bg-cyan-500 px-4 py-1 font-semibold text-slate-950 transition hover:bg-cyan-400'
					>
						Add Goal
					</button>

					<CourseGoalList goals={goals} />
				</div>
			</div>
		</main>
	);
}
