import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Header = () => {
  const { singOutuser, user } = useAuth()
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div className="container">
        <NavLink to='/home' className="navbar-brand uppercase font-bold" href="/">Shoe Gallery</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item py-2 ml-4">
              <NavLink to='/home' className="nav-link font-medium" aria-current="page" >Home</NavLink>
            </li>
            <li className="nav-item py-2 ml-4">
              <NavLink to='/explore' className="nav-link font-medium" aria-current="page">Explore More</NavLink>
            </li>
            <li className="nav-item py-2 ml-4">
              <a href='#contact' className="nav-link font-medium" aria-current="page">Contact</a>
            </li>
            {
              user.email && <li className="nav-item py-2 ml-4">
                <NavLink to='/dashboard' className="nav-link font-medium" aria-current="page">Dashboard</NavLink>
              </li>
            }
            {
              user.email ? <li className="nav-item py-2 ml-4 flex items-center gap-2">
                <button onClick={singOutuser} className='px-4 rounded-sm primaryBtn text-white font-semibold py-2 bg-primary_bg'>Sing Out</button>
                <h2 className='text-blue border-b-2 border-dotted'>{user.displayName}</h2>
              </li>
                :
                <li className="nav-item py-2 ml-4">
                  <Link to='/login'>
                    <button className='px-4 rounded-sm primaryBtn text-white font-semibold py-2 bg-primary_bg'>Login</button>
                  </Link>
                </li>
            }
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;