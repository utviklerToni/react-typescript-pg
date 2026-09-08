import CourseGoal from './CourseGoal';
import { type CourseGoal as CourseGoalProps } from '../App.tsx';

type CourseGoalListProps = {
	goals: CourseGoalProps[];
};

export default function CourseGoalList({ goals }: CourseGoalListProps) {
	return (
		<div className='mt-6 space-y-4'>
			{goals.map((goal) => (
				<li key={goal.id} className='list-none'>
					<CourseGoal title={goal.title}>{goal.description}</CourseGoal>
				</li>
			))}
		</div>
	);
}
