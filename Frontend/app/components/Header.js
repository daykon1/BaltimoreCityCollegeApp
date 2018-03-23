import React from 'react';
import { Link } from 'react-router-dom'
class Header extends React.Component {
    render() {

        return (
            <div>
                <nav className="navbar navbar-dark bg-dark navbar-inverse">
                    <div className="container-fluid">
                        <a href="#" className="navbar-brand">About BCC</a>
                        <a href="#" className="navbar-brand">Gallery</a>
                        <a href="#" className="navbar-brand">Contact Information</a>
                        <a href="#" className="navbar-brand">Address</a>
                    </div>
                </nav>
                <br />
                <div className="image">
                    <img src={require("./bccc.png")} alt="Baltimore City Community College" />
                </div>
                <br />
            </div>
        )
    }

}

export default Header;
