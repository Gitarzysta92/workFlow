import React from 'react';
import style from './style.scss';




class Jumbotron extends React.Component {

	render() {
		return (
			<div className={'container-fluid'}>
				<div className={'row'}>
					<div className={'col-6 tips-container'}>
						<h1>{'Proin lacus elit, luctus non tempor'}</h1>
					</div>
					<div className={'col-6 login-container'}>
						<form className={'form-signin'}>
							<img className={'mb-4'} src={''} alt={''}/>
							<h2>{'Hello '}<span>{'again!'}</span></h2>
							<label htmlFor={'inputEmail'} className={'sr-only'}></label>
							<input type={'email'} id={'inputEmail'} className={'form-control'} placeholder={'Email address'} required={''}/>
							<label htmlFor={'inputPassword'} className={'sr-only'}></label>
							<input type={'password'} id={'inputPassword'} className={'form-control'} placeholder={'Password'} required={''}/>
							<div className={'signin-approval'}>
								<small>{'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pharetra id neque at eleifend.'}</small>
							</div>
							<button className={'btn btn-lg btn-primary btn-block'} type={'submit'}>{'Sign in'}</button>
							<p className={'mt-5 mb-3 text-muted'}>{'© 2017-2018'}</p>
						</form>
					</div>
				</div>
			</div>

		)
	}
}

export default Jumbotron;
