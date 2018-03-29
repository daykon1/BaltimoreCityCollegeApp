import React from 'react';
import { Link } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import AppBar from 'material-ui/AppBar';



class Gallery extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            program: null,
        };

    }
    render(){
        return(
            <div>
                {/* <nav className="navbar navbar-dark bg-dark navbar-inverse">
                    <div className="container-fluid">
                        <Link to="/Aboutus" className="navbar-brand">About BCC</Link>
                        <Link to="/Gallery" className="navbar-brand">Gallery</Link>
                        <Link to="/ContactInfo" className="navbar-brand">ContactInfo</Link>
                        <Link to="/login" className="navbar-brand">Home</Link>
                    </div>
                </nav> */}
                <MuiThemeProvider>
                <AppBar title="" showMenuIconButton={false}>
                        <SelectField
                         floatingLabelText="About BCCC" 
                         floatingLabelStyle={{fontFamily:"Arial",fontWeight:"bold"}}
                         value={this.state.detail}
                            onChange={(event, navDetail) =>
                                this.setState({
                                    detail: navDetail,
                                })}>
                        <MenuItem value={1} containerElement={<Link to ="/Aboutus"/>} 
                        primaryText="About us"/>
                        <MenuItem value={2} containerElement={<Link to ="/Gallery"/>} 
                        primaryText="Gallery" />
                        <MenuItem value={3} containerElement={<Link to ="/ContactInfo"/>} 
                        primaryText="Contact us"/>
                        <MenuItem value={4} containerElement={<Link to ="/login"/>} 
                        primaryText="Home" />
                        </SelectField>
                        </AppBar>
                </MuiThemeProvider>
                    <img src={require("./BCCC1.jpg")} alt= "BCCC" width="300px" height="300px"/>&nbsp;&nbsp;
                    <img src={require("./BCCC2.jpg")} alt= "BCCC" width="300px" height="300px"/>&nbsp;&nbsp;
                    <img src={require("./campus.jpg")} alt= "Campus" width="300px" height="300px"/>&nbsp;&nbsp;
                    <img src={require("./campus1.jpg")} alt= "Campus" width="300px" height="300px"/>&nbsp;&nbsp;
                    <img src={require("./grad.jpg")} alt= "About College" width="300px" height="300px"/>
                </div>
        )
    }
}

export default Gallery;