import React, { FC } from 'react'

interface Props {
	label: string,
	name: string,
	onChange: any,
	value: string,
	type?: string,
}

const FormField: FC<Props> = ({ label, name, onChange, value, type = "text" }) => {
	return (
		<div>
			<label htmlFor={name}>
				{label}
			</label>
			<input
				required
				id={name}
				name={name}
				type={type}
				onChange={onChange}
				value={value}
			/>
		</div>
	)
}

export default FormField
