import React, { Component, useState } from 'react'
import './styles/header.css';
import { Close, MenuBookOutlined } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const HeaderComponent = () => {
    const [active, setActive] = useState(false);
    const ShowMenu = () => {
        setActive(!active);
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand text-white text-uppercase" href="#">Aayush Niraula Portfolio</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation" onClick={ShowMenu}>
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`collapse navbar-collapse ${active ? 'show' : ''}`} id="navbarNavDropdown">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link to={'/'}>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={'/'}>About</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={'/'}>Portfolio</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={'/'}>Blog</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={'/'}>Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default HeaderComponent;