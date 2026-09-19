import type React from 'react';

import InputApp from '../app/screen/InputApp';
import GoalApp from '../app/screen/GoalApp';
import WDS from '../app/screen/WDS';

export type AppModule = {
	id: string;
	label: string;
	path: string;
	component: React.ComponentType;
};

export const appModules: AppModule[] = [
	{
		id: 'wds',
		label: 'wds',
		path: '/playground/wds',
		component: WDS,
	},

	{
		id: 'goals',
		label: 'Goal App',
		path: '/playground/goals',
		component: GoalApp,
	},

	{
		id: 'input',
		label: 'Input App',
		path: '/playground/input',
		component: InputApp,
	},
];
