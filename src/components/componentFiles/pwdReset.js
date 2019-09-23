import React, { Component } from 'react';
import '../../assets/styles/auth.css';
import axios from 'axios';
class PwdReset extends Component {

	constructor(props) {
		super(props);

		this.emailEl = React.createRef();
		this.passwordEl = React.createRef();
		this.confirmpasswordEl = React.createRef();
	}

	handleSignUp = (event) => {
		event.preventDefault();
		const email = this.emailEl.current.value;
		const password = this.passwordEl.current.value;
		const confirmpassword = this.confirmpasswordEl.current.value

		if (email.trim().length === 0 || password.trim().length === 0 || confirmpassword !== password) {
			return;
		}

		const requestBody = {
			email: `${email}`,
			password: `${password}`
		};

		// acces api
		axios
			.patch('https://royalframesmedia-api.herokuapp.com/photography/royalframesmedia/users/password_reset/', requestBody)
			.then((response) => {
				return response;
			})
			.catch((err) => {
			throw err;
			});
	};

	render() {
		return (
			<form className="auth-form" onSubmit={this.handleSignUp}>
				<div className="form-ctrl">
					<label htmlFor="email">E-mail:</label>
					<input placeholder="Enter your registered email" type="email" id="email" ref={this.emailEl} />
				</div>
				<div className="form-ctrl">
					<label htmlFor="password">Password:</label>
					<input type="password" id="password" ref={this.passwordEl} />
				</div>
				<div className="form-ctrl">
					<label htmlFor="confirmpassword">Confirm Password:</label>
					<input type="password" id="confirmpassword" ref={this.confirmpasswordEl} />
				</div>
				<div className="form-axon">
					<button type="submit">Reset</button>
				</div>
			</form>
		);
	}
}

export default PwdReset;
