import React, { Component } from 'react';
import '../../assets/styles/auth.css';
import axios from 'axios';
class ResetRequest extends Component {
	constructor(props) {
		super(props);

		// create refs to link input fields
		this.emailEl = React.createRef();
	}

	handleSignUp = (event) => {
		event.preventDefault();
		const email = this.emailEl.current.value;

		if (email.trim().length === 0) {
			return;
		}

		const requestBody = {
			email: `${email}`
		};
		// acces api
		axios
			.post('https://royalframesmedia-api.herokuapp.com/photography/royalframesmedia/users/password_request/', requestBody)
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
					<input
						placeholder="enter a registered email to recieve reset link"
						type="email"
						id="email"
						ref={this.emailEl}
					/>
				</div>
				<div className="form-axon">
					<button type="submit">Send link</button>
				</div>
			</form>
		);
	}
}

export default ResetRequest;
