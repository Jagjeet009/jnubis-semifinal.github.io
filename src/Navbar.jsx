import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
     return (
     <>
     <nav id="navbarExample" className="navbar navbar-expand-lg fixed-top navbar-light" aria-label="Main navigation">
    <div className="container">
        <a className="navbar-brand logo-image" href="index.html"><img src="images/logo.svg" alt="alternative" /></a> 
        <button className="navbar-toggler p-0 border-0" type="button" id="navbarSideCollapse" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="navbar-collapse offcanvas-collapse" id="navbarsExampleDefault">
            <ul className="navbar-nav ms-auto navbar-nav-scroll">
                             <li className="nav-item">
                                 <Link to='/' className="nav-link active">Home</Link>
                </li>
                             <li className="nav-item">
                                 <Link to='/contact' className="nav-link">Contact Us</Link>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="details.html">Details</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="features.html">Features</a>
                </li>
            </ul>
            <span className="nav-item">
                <a className="btn-solid-sm" href="quote.html">Get quote</a>
            </span>
        </div>
    </div>
</nav>       
     </>);
};
export default Navbar;