import type React from 'react';

import InputApp from '../app/InputApp';
import GoalApp from '../app/GoalApp';
import WDS from '../app/WDS';

export type AppModule = {
	id: string;
	label: string;
	component: React.ComponentType;
};

export const appModules: AppModule[] = [
	{
		id: 'wds',
		label: 'wds',
		component: WDS,
	},

	{
		id: 'goals',
		label: 'Goal App',
		component: GoalApp,
	},

	{
		id: 'input',
		label: 'Input App',
		component: InputApp,
	},
];
