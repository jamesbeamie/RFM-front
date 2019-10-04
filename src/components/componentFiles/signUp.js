import { connect } from 'react-redux';
import React, { Component } from 'react';
import '../../assets/styles/auth.css';
import signUpAction from '../actions/singUp';
import { Link } from 'react-router-dom';
class AuthPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
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
		const { username, email, password } = this.state;
		const userData = { username, email, password };

		// eslint-disable-next-line react/prop-types
		this.props.signUpAction(userData);
	};

	render() {
		return (
			<form className="auth-form" onSubmit={this.handleSignUp}>
				<div className="form-ctrl">
					<label htmlFor="username">Username:</label>
					<input type="text" name="username" onChange={this.onChange} value={this.state.username} />
				</div>
				<div className="form-ctrl">
					<label htmlFor="email">E-mail:</label>
					<input type="email" name="email" onChange={this.onChange} value={this.state.email} />
				</div>
				<div className="form-ctrl">
					<label htmlFor="password">Password:</label>
					<input type="password" name="password" onChange={this.onChange} value={this.state.password} />
				</div>
				<div className="form-axon">
					<button type="submit">Sign Up</button>
					<Link to="/signin">Or login</Link>
				</div>
			</form>
		);
	}
}

const mapStateToProps = (state) => ({
	signup: state.signUpReducer.newUser
});
export default connect(mapStateToProps, { signUpAction })(AuthPage);
