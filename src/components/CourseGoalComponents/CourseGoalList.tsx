import CourseGoal from './CourseGoal';
import { type CourseGoal as CourseGoalProps } from '../../app/GoalApp.tsx';
import InfoBox from '../InfoBox.tsx';
import type { ReactNode } from 'react';

type CourseGoalListProps = {
	goals: CourseGoalProps[];
	onDeleteGoal: (id: number) => void;
};

export default function CourseGoalList({
	goals,
	onDeleteGoal,
}: CourseGoalListProps) {
	if (goals.length === 0) {
		return (
			<InfoBox mode='hint'>No goals yet, start adding to populate</InfoBox>
		);
	}

	let warningBox: ReactNode;

	if (goals.length >= 4) {
		warningBox = (
			<div className='bg-red-500/10 px-3 py-1.5 text-sm font-medium text-red-400 transition '>
				<InfoBox mode='warning' severity='medium'>
					Too many goals
				</InfoBox>
			</div>
		);
	}

	return (
		<>
			{warningBox}
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
		</>
	);
}
