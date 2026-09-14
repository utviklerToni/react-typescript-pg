import { type ComponentPropsWithoutRef } from 'react';

type ButtonProps = {
	el: 'button';
} & ComponentPropsWithoutRef<'button'>;

type AnchorProps = {
	el: 'anchor';
} & ComponentPropsWithoutRef<'a'>;

export default function Button(props: ButtonProps | AnchorProps) {
	if (props.el === 'anchor') {
		return (
			<a
				className='border border-orange-800 bg-orange-950/30 px-5 py-2.5 font-mono text-[9px] font-bold uppercase tracking-[0.2em] text-orange-500 transition hover:border-orange-600 hover:bg-orange-900/30 hover:text-orange-400'
				{...props}
			></a>
		);
	}

	return (
		<button
			className='border border-orange-800 bg-orange-950/30 px-5 py-2.5 font-mono text-[9px] font-bold uppercase tracking-[0.2em] text-orange-500 transition hover:border-orange-600 hover:bg-orange-900/30 hover:text-orange-400'
			{...props}
		></button>
	);
}
