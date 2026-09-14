import type React from 'react';

import InputApp from '../app/InputApp';
import GoalApp from '../app/GoalApp';

export type AppModule = {
	id: string;
	label: string;
	component: React.ComponentType;
};

export const appModules: AppModule[] = [
	{
		id: 'goals',
		label: 'GOALS',
		component: GoalApp,
	},

	{
		id: 'input',
		label: 'INPUT',
		component: InputApp,
	},
];
