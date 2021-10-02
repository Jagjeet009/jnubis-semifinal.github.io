import React from 'react';
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
                    <a className="nav-link active" aria-current="page" href="#header">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#services">Services</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#details">Details</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#features">Features</a>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="dropdown01" data-bs-toggle="dropdown" aria-expanded="false">Drop</a>
                    <ul className="dropdown-menu" aria-labelledby="dropdown01">
                        <li><a className="dropdown-item" href="article.html">Article Details</a></li>
                        <li><div className="dropdown-divider"></div></li>
                        <li><a className="dropdown-item" href="terms.html">Terms Conditions</a></li>
                        <li><div className="dropdown-divider"></div></li>
                        <li><a className="dropdown-item" href="privacy.html">Privacy Policy</a></li>
                    </ul>
                </li>
            </ul>
            <span className="nav-item">
                <a className="btn-solid-sm" href="#contact">Get quote</a>
            </span>
        </div>
    </div>
</nav>       
     </>);
};
export default Navbar;