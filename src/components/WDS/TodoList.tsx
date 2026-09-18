import { type ReactNode } from 'react';

type TodoListProps = {
	children: ReactNode;
	name: string;
	isComplete: boolean;
};

export default function TodoList({ children, isComplete }: TodoListProps) {
	return (
		<div>
			<label className='text-amber-600'>
				<input type='checkbox' defaultChecked={isComplete} />
				{children}
			</label>
		</div>
	);
}
