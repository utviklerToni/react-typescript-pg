import { forwardRef, type ComponentPropsWithoutRef } from 'react';

type InputProps = {
	label: string;
	id: string;
} & ComponentPropsWithoutRef<'input'>;

export default forwardRef<HTMLInputElement, InputProps>(function Input(
	{ label, id, ...props },
	ref,
) {
	return (
		<div className='group space-y-2'>
			<label
				htmlFor={id}
				className='block text-xs font-bold uppercase tracking-[0.2em] text-[#C89B3C]'
			>
				{label}
			</label>

			<input
				ref={ref}
				id={id}
				name={id}
				{...props}
				className='
					w-full
					border border-[#70552C]
					border-b-[#C89B3C]
					bg-[#211D17]
					px-4 py-3
					font-mono text-sm
					text-[#E8D7AA]
					outline-none
					placeholder:text-[#75664B]
					transition-all duration-200
					hover:border-[#A87B2E]
					focus:border-[#D4A83E]
					focus:bg-[#29231A]
					focus:ring-1 focus:ring-[#C89B3C]/40
					focus:shadow-[0_0_12px_rgba(200,155,60,0.12)]
				'
			/>
		</div>
	);
});
