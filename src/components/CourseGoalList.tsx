import CourseGoal from './CourseGoal';
import { type CourseGoal as CourseGoalProps } from '../App.tsx';

type CourseGoalListProps = {
	goals: CourseGoalProps[];
	onDeleteGoal: (id: number) => void;
};

export default function CourseGoalList({
	goals,
	onDeleteGoal,
}: CourseGoalListProps) {
	return (
		<div className='mt-6 space-y-4'>
			{goals.map((goal) => (
				<li key={goal.id} className='list-none'>
					<CourseGoal
						id={goal.id}
						title={goal.title}
						onDelete={onDeleteGoal}
					>
						{goal.description}
					</CourseGoal>
				</li>
			))}
		</div>
	);
}
