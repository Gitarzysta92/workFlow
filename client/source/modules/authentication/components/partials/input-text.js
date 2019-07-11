import React from 'react';

const InputText = ({id, placeHolder, value, onChange}) => {
	return (
		<div>
			<label htmlFor={id} className={'sr-only'}></label>
			<input 
				id={id} 
				className={'form-control'} 
				placeholder={placeHolder}
				required
				type='text'
				value={value}
				onChange={onChange()}
			/>
		</div>
	)
}
		
export default InputText;
