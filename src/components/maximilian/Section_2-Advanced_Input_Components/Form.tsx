import type { ComponentPropsWithoutRef, SyntheticEvent } from 'react';

type FormProps = ComponentPropsWithoutRef<'form'> & {
	onSave: (value: unknown) => void;
};

export default function Form({ onSave, children, ...otherProps }: FormProps) {
	function handleSubmit(event: SyntheticEvent<HTMLFormElement>) {
		event.preventDefault();

		const formData = new FormData(event.currentTarget);
		const data = Object.fromEntries(formData);

		onSave(data);
	}

	return (
		<div>
			<form onSubmit={handleSubmit} {...otherProps}>
				{children}
			</form>
		</div>
	);
}
