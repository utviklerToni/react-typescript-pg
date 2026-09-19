import { createBrowserRouter, Navigate } from 'react-router';

import { appModules } from '../playground/appRegistry';
import WastelandDeck from '../playground/WastelandDeck';

export const router = createBrowserRouter([
	{
		path: '/',
		Component: WastelandDeck,
		children: [
			// "/" redirects to the first module (skipped if registry is empty)
			...(appModules[0]
				? [
						{
							index: true,
							element: <Navigate to={appModules[0].path} replace />,
						},
					]
				: []),
			...appModules.map((mod) => ({
				path: mod.path,
				Component: mod.component,
			})),
		],
	},
]);
