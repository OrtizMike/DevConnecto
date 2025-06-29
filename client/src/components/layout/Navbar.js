import React from 'react'
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';

const Navbar = ({ auth: {isAuthenticated, loading}, logout }) => {
  const authLinks = (
    <ul>
      <li>
        <Link to="/profiles" className="nav-item">Developers</Link>
      </li>
      <li>
        <Link to="/posts" className="nav-item">Posts</Link>
      </li>
      <li>
        <i className="fas fa-user"></i>{' '}
        <Link to="/dashboard" className="nav-item">
          <span className='hide-sm'>Dashboard</span></Link>
      </li>
      <li>
        <a onClick={logout} href='#!'>
          <i className="fas fa-sign-out-alt"></i>{' '}
          <span className='hide-sm'>Logout</span>
        </a>
      </li>
    </ul>
  );

  const guestLinks = (
    <ul>
      <li>
        <Link to="/profiles" className="nav-item">Developers</Link>
      </li>
      <li>
        <Link to="/register" className="nav-item">Register</Link>
      </li>
      <li>
        <Link to="/login" className="nav-item">Login</Link>
      </li>
    </ul>
  )

  return (
    <nav className="navbar bg-dark">
      <h1>
        <Link to="/">
            <i className="fas fa-code"></i> DevConnector
        </Link>
      </h1>
      { !loading && (
        <>
          {isAuthenticated ? authLinks : guestLinks }
        </>
      ) }
    </nav>
  )
}

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  auth: state.auth,
})

export default connect(mapStateToProps, { logout })(Navbar);