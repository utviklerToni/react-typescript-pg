import type { ReactNode } from 'react';

type HeaderProps = {
	image: {
		src: string;
		alt: string;
	};
	children: ReactNode;
};

export default function Header({ image, children }: HeaderProps) {
	return (
		<header className='flex items-center gap-5'>
			<img
				{...image}
				className='h-16 w-16 rounded-full object-cover bg-gray-700 p-2 shadow-lg'
			/>

			<div>{children}</div>
		</header>
	);
}
