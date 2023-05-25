import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import { Link, useNavigate,NavLink } from 'react-router-dom';
import { AuthContext } from '../AuthProviders/AuthProviders';

const Navigation = () => {
  const {user,logOut} = useContext(AuthContext);
  const navigate = useNavigate();
  const handleSignOut = ()=>{
    logOut()
    .then(()=>{
      navigate('/login');
    })
    .catch(error=>console.log(error))
  }
  return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">ThaiTongue</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="nav-item">
            <NavLink to="/blog">Blog</NavLink>
            </li>
            <li className="nav-item">
            <NavLink to="/aboutus">About</NavLink>
            </li>
            
          </ul>
          <div className="d-flex">
            {
              user?
              <>
                <img src={user.photoURL} alt="" className='head-pic rounded-circle'/>
                <button className="btn btn-outline-success" type="submit" onClick={handleSignOut}>Logout</button>
              </>
              :
              <Link to="/login">
              <button className="btn btn-outline-success" type="submit">Login</button>
              </Link>
            }
            
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;