import { connect } from 'react-redux';
import React, { Component } from 'react';
import '../../assets/styles/auth.css';
import HomePage from './home';
import signInAction from '../actions/signIn';
import { Link } from 'react-router-dom';
class LoginPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: ''
		};
	}

	onChange = (e) => {
		e.preventDefault();
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	handleSignUp = (event) => {
		event.preventDefault();
		const { email, password } = this.state;
		const loginData = { email, password };

		// eslint-disable-next-line react/prop-types
		this.props.signInAction(loginData);
	};

	render() {
		const userToken = localStorage.getItem('token');
		return (
			<React.Fragment>
				{!userToken ? (
					<form className="auth-form" onSubmit={this.handleSignUp}>
						<div className="form-ctrl">
							<label htmlFor="email">E-mail:</label>
							<input type="email" name="email" onChange={this.onChange} value={this.state.email} />
						</div>
						<div className="form-ctrl">
							<label htmlFor="password">Password:</label>
							<input
								type="password"
								name="password"
								onChange={this.onChange}
								value={this.state.password}
							/>
						</div>
						<div className="form-axon">
							<button type="submit">Login</button>
							<Link to="/signup">Or signup</Link>
						</div>
						<br />
						<div className="form-axon">
							<Link to="/link-to-reset">Forgot password?</Link>
						</div>
					</form>
				) : (
					<HomePage />
				)}
			</React.Fragment>
		);
	}
}
const mapStateToProps = (state) => ({
	signin: state.signInReducer.loginUser
});
export default connect(mapStateToProps, { signInAction })(LoginPage);
