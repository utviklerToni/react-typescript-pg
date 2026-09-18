import type { ReactNode } from 'react';

type NameProps = {
	children: ReactNode;
};

export default function NameFunc({ children }: NameProps) {
	return (
		<div>
			<div className='text-amber-50'>{children}</div>
		</div>
	);
}
