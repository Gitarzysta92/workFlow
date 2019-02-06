import React from 'react';

const SubmitButton = ({text, validate}) => {
	return (
		<button 
			className={'btn btn-lg btn-primary btn-block'} 
			type={'submit'}
			disabled={!validate()}
		>{text}</button>
	)
}
		
export default SubmitButton;
