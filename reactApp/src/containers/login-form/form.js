import React from 'react';





class Jumbotron extends React.Component {

	render() {
		return (
			<form className={'form-signin'}>
				<img className={'mb-4'} src={''} alt={''}/>
				<h1 className={'h3 mb-3 font-weight-normal'}></h1>
				<label htmlFor={'inputEmail'} className={'sr-only'}></label>
				<input type={'email'} id={'inputEmail'} className={'form-control'} placeholder={'Email address'} required={''}/>
				<label htmlFor={'inputPassword'} className={'sr-only'}></label>
				<input type={'password'} id={'inputPassword'} className={'form-control'} placeholder={'Password'} required={''}/>
				<div className={'checkbox mb-3'}>
					<label>
						<input type={'checkbox'} value={'remember-me'}/>
					</label>
				</div>
				<button className={'btn btn-lg btn-primary btn-block'} type={'submit'}>{'Sign in'}</button>
				<p className={'mt-5 mb-3 text-muted'}>{'© 2017-2018'}</p>
			</form>
		)
	}
}

export default Jumbotron;
