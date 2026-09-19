import CourseGoal from './CourseGoal';
import { type CourseGoal as CourseGoalProps } from '../../../app/screen/GoalApp';
import InfoBox from './InfoBox';
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
			<InfoBox mode='hint'>
				No objectives detected. Start adding to populate the mission log.
			</InfoBox>
		);
	}

	let warningBox: ReactNode;

	if (goals.length >= 4) {
		warningBox = (
			<div className='mb-5'>
				<InfoBox mode='warning' severity='medium'>
					Objective load is approaching critical capacity.
				</InfoBox>
			</div>
		);
	}

	return (
		<>
			{warningBox}

			<div className='mb-3 flex items-center justify-between border-b border-stone-900 pb-2'>
				<span className='font-mono text-[9px] uppercase tracking-[0.3em] text-stone-700'>
					MISSION LOG
				</span>

				<span className='font-mono text-[9px] text-orange-800'>
					{String(goals.length).padStart(2, '0')} OBJECTIVES
				</span>
			</div>

			<ul className='space-y-3'>
				{goals.map((goal) => (
					<li key={goal.id}>
						<CourseGoal
							id={goal.id}
							title={goal.title}
							onDelete={onDeleteGoal}
						>
							{goal.description}
						</CourseGoal>
					</li>
				))}
			</ul>
		</>
	);
}
