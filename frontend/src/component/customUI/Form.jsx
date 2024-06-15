'use client';

import { Button, Checkbox, Label, TextInput } from 'flowbite-react';

function DynamicForm({ fields, onSubmit }) {
	const handleSubmit = (event) => {
		event.preventDefault();
		const formData = new FormData(event.target);
		const data = Object.fromEntries(formData);
		onSubmit(data);
	};

	return (
		<form className='flex max-w-md flex-col gap-4' onSubmit={handleSubmit}>
			{fields.map((field, index) => (
				<div key={index}>
					<div className='mb-2 block'>
						<Label htmlFor={field.id} value={field.label} />
					</div>
					{field.type === 'checkbox' ? (
						<div className='flex items-center gap-2'>
							<Checkbox id={field.id} name={field.id} />
							<Label htmlFor={field.id}>{field.label}</Label>
						</div>
					) : (
						<TextInput
							id={field.id}
							name={field.id}
							type={field.type}
							placeholder={field.placeholder}
							required={field.required}
						/>
					)}
				</div>
			))}
			<Button type='submit'>Submit</Button>
		</form>
	);
}

export default DynamicForm;
