import React from 'react';
import Login from './login';

export default class Navbar extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar bg-light">
                <div className="container-fluid">
                    <div className="navbar header">
                        <a className="navbar-brand" href="default">React Practice</a>
                    </div>
                    <ul className="nav navbar nav">
                        <li className="active"><a href="Homepage">Home</a></li>
                        <li className="nav-link"><a href="#">About Us</a></li>
                        <li className="nav-link"><a href="#">Contact</a></li>
                    </ul>
                </div>
            </nav>
        );
    }
}