import React from 'react';

const InputPassword = ({value, onChange}) => {
	return (
		<div>
			<label htmlFor={'password'} className={'sr-only'}></label>
			<input 
				id={'password'} 
				className={'form-control'} 
				placeholder={'Password'} 
				required
				type='password'
				value={value}
				onChange={onChange()}
			/>
		</div>
	)
}
		
export default InputPassword;
