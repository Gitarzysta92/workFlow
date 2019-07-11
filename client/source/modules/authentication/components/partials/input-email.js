import React from 'react';

const InputEmail = ({value, onChange}) => {
	return (
		<div>
			<label htmlFor={'email'} className={'sr-only'}></label>
			<input 
				id={'email'} 
				className={'form-control'} 
				placeholder={'Email address'}
				required
				type='email'
				value={value}
				onChange={onChange()}
			/>
		</div>
	)
}
		
export default InputEmail;
