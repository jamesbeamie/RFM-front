import React from 'react';
import '../../assets/styles/header.css';
import { NavLink } from 'react-router-dom';
import rfmlogo from '../../assets/logo/rfmlogo.png';

class Header extends React.Component {
	logout = () => {
		return localStorage.removeItem('token')
	}
	render() {
		const userToken = localStorage.getItem('token');
		
		return (
			<nav className="navbar fixed-top navbar-expand-sm navbar-light bg-light navigation-style text-center">
				<a className="navbar-brand" href="/">
					<img src={rfmlogo} className="logo" alt="logo" />
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon" />
				</button>

				<div className="collapse navbar-collapse linki" id="navbarSupportedContent">
					<ul className="navbar-nav ml-auto">
						<li className="nav-item active">
							<NavLink className="nav-link linki" to="/blog" exact>
								BLOG
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink className="nav-link linki" to="/potraits" exact>
								POTRAITS
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink className="nav-link linki" to="/engagements" exact>
								ENGAGEMENTS
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink className="nav-link linki" to="/kids" exact>
								LITTLE ONES
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink className="nav-link linki" to="/family" exact>
								FAMILY
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink className="nav-link linki" to="/bumps" exact>
								BUMPS
							</NavLink>
						</li>
						{!userToken && (
							<li className="nav-item">
								<NavLink className="nav-link linki" to="/signin" exact>
									`
								</NavLink>
							</li>
						)}
						{userToken && (
							<li className="nav-item">
								<NavLink className="nav-link linki" to="/" onClick={this.logout} exact>
									LOGOUT
								</NavLink>
							</li>
						)}
					</ul>
				</div>
			</nav>
		);
	}
}

export default Header;
