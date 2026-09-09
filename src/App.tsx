import CourseGoal from './components/CourseGoal';
import goalImg from './assets/hero.png';
import Header from './components/Header';
import { useState } from 'react';
import CourseGoalList from './components/CourseGoalList';
import NewGoal from './components/NewGoal';

export type CourseGoal = {
	title: string;
	description: string;
	id: number;
};

export default function App() {
	const [goals, setGoals] = useState<CourseGoal[]>([]);

	function handleAddGoals(goal: string, summary: string) {
		setGoals((prevGoals) => {
			const newGoal: CourseGoal = {
				id: Math.random(),
				title: goal,
				description: summary,
			};

			return [...prevGoals, newGoal];
		});
	}

	function handleDeleteGoal(id: number) {
		setGoals((prevGoals) => prevGoals.filter((goal) => goal.id !== id));
	}

	return (
		<main className='min-h-screen bg-slate-950 px-6 py-12 text-white'>
			<div className='mx-auto max-w-2xl'>
				<Header image={{ src: goalImg, alt: 'Course goals' }}>
					<h1 className='text-3xl font-bold tracking-tight'>
						Your Course Goals
					</h1>
				</Header>

				<NewGoal onAddGoal={handleAddGoals} />
				<CourseGoalList goals={goals} onDeleteGoal={handleDeleteGoal} />
			</div>
		</main>
	);
}
