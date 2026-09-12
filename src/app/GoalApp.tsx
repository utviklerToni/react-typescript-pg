import CourseGoalList from '../components/CourseGoalComponents/CourseGoalList';
import Header from '../components/CourseGoalComponents/Header';
import NewGoal from '../components/CourseGoalComponents/NewGoal';
import goalImg from '../assets/hero.png';
import { useState } from 'react';

export type CourseGoal = {
	title: string;
	description: string;
	id: number;
};

export default function GoalApp() {
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
		<div className='mx-auto max-w-2xl'>
			<Header image={{ src: goalImg, alt: 'Course goals' }}>
				<h1 className='text-3xl font-bold tracking-tight'>
					Your Course Goals
				</h1>
			</Header>

			<NewGoal onAddGoal={handleAddGoals} />
			<CourseGoalList goals={goals} onDeleteGoal={handleDeleteGoal} />
		</div>
	);
}
