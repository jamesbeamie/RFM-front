import React from "react";
import "../../assets/styles/homenav.css";
import { NavLink } from "react-router-dom";
import rfmlogo from "../../assets/logo/rfmlogo.png";

class HomeHeader extends React.Component {
  logout = () => {
    return localStorage.removeItem("token");
  };
  render() {
    const userToken = localStorage.getItem("token");

    return (
      <nav className='navbar fixed-top navbar-expand-sm  navigation-stylo text-center'>
        <a className='navbar-brand' href='/'>
          <img src={rfmlogo} className='logo' alt='logo' />

          <hr className='laini' />
        </a>
        <button
          className='navbar-toggler ikon'
          type='button'
          data-toggle='collapse'
          data-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon' />
        </button>

        <div
          className='collapse navbar-collapse linkie'
          id='navbarSupportedContent'
        >
          <ul className='navbar-nav ml-auto'>
            <li className='nav-item'>
              <NavLink className='nav-link linkie' to='/about' exact>
                ABOUT
                <hr className='laini' />
              </NavLink>
            </li>
            <li className='nav-item active'>
              <NavLink className='nav-link linkie' to='/blog' exact>
                BLOG
                <hr className='laini' />
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className='nav-link linkie' to='/potraits' exact>
                POTRAITS
                <hr className='laini' />
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className='nav-link linkie' to='/engagements' exact>
                ENGAGEMENTS
                <hr className='laini' />
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className='nav-link linkie' to='/kids' exact>
                LITTLE ONES
                <hr className='laini' />
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className='nav-link linkie' to='/family' exact>
                FAMILY
                <hr className='laini' />
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className='nav-link linkie' to='/bumps' exact>
                BUMPS
                <hr className='laini' />
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className='nav-link linkie' to='/events' exact>
                EVENTS
                <hr className='laini' />
              </NavLink>
            </li>
            {userToken && (
              <li className='nav-item'>
                <NavLink
                  className='nav-link linkie'
                  to='/'
                  onClick={this.logout}
                  exact
                >
                  LOGOUT
                  <hr className='laini' />
                </NavLink>
              </li>
            )}
          </ul>
        </div>
      </nav>
    );
  }
}

export default HomeHeader;
