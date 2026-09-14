import type { ReactNode } from 'react';

type HintBoxProps = {
	mode: 'hint';
	children: ReactNode;
};

type WarningBoxProps = {
	mode: 'warning';
	children: ReactNode;
	severity: 'low' | 'medium' | 'high';
};

type InfoBoxProps = HintBoxProps | WarningBoxProps;

export default function InfoBox(props: InfoBoxProps) {
	const { children, mode } = props;

	if (mode === 'hint') {
		return (
			<aside className='border border-stone-800 bg-stone-950 px-5 py-6'>
				<div className='mb-3 font-mono text-[9px] uppercase tracking-[0.25em] text-stone-700'>
					// SYSTEM MESSAGE
				</div>

				<div className='flex items-center gap-3'>
					<span className='h-1.5 w-1.5 bg-stone-600' />

					<p className='font-mono text-xs uppercase tracking-wide text-stone-500'>
						{children}
					</p>
				</div>
			</aside>
		);
	}

	const { severity } = props;

	const severityStyles = {
		low: 'border-amber-900/60 bg-amber-950/20 text-amber-600',
		medium: 'border-orange-900/70 bg-orange-950/20 text-orange-500',
		high: 'border-red-900/70 bg-red-950/20 text-red-500',
	};

	return (
		<aside className={`border px-5 py-4 ${severityStyles[severity]}`}>
			<div className='flex items-start gap-4'>
				<div className='mt-1 h-2 w-2 shrink-0 bg-current shadow-[0_0_10px_currentColor]' />

				<div>
					<h2 className='font-mono text-[9px] font-bold uppercase tracking-[0.3em]'>
						Warning // {severity}
					</h2>

					<p className='mt-2 font-mono text-xs'>{children}</p>
				</div>
			</div>
		</aside>
	);
}
