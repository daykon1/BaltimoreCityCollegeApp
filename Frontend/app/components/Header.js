import React from 'react';
import { Link } from 'react-router-dom'
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import Aboutus from './Aboutus';
import ContactInfo from './ContactInfo';
import Gallery from './Gallery';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';


class Header extends React.Component {

    render() {

        return (
            <div>
                <div className="image">
                    <img src={require("./bccc.png")} alt="Baltimore City Community College" />
                </div><br/><br/>
                {/* <nav className="navbar navbar-dark bg-dark navbar-inverse">
                    <div className="container-fluid">
                        <Link to="/Aboutus" className="navbar-brand">About BCC</Link>
                        <Link to="/Gallery" className="navbar-brand">Gallery</Link>
                        <Link to="/ContactInfo" className="navbar-brand">ContactInfo</Link>
                        <Link to="/login" className="navbar-brand">Home</Link>
                    </div>
                </nav> */}
                <br />
                <br />
            </div>
            
        )
    }

}

export default Header;
