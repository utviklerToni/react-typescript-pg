import { Outlet } from 'react-router';
import WastelandDeck from '../../playground/WastelandDeck';

export default function PlaygroundLayout() {
	return (
		<div className='min-h-screen bg-slate-600 text-stone-200'>
			<main className='min-h-screen pb-32'>
				<Outlet />
			</main>
			<WastelandDeck />
		</div>
	);
}
