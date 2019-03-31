import React from 'react';

const InputEmail = ({value, onChange}) => {
	return (
		<div>
			<label htmlFor={'username'} className={'sr-only'}></label>
			<input 
				id={'username'} 
				className={'form-control'} 
				placeholder={'Your username'}
				required
				type='text'
				value={value}
				onChange={onChange()}
			/>
		</div>
	)
}
		
export default InputEmail;
