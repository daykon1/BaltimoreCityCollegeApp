import React from 'react';
import { Link } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import AppBar from 'material-ui/AppBar';


class ContactInfo extends React.Component{
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
                <h1 style={{color:"#FFAB91",}}>About BCCC</h1>
                        <hr className="hr-color"/>
                <p>Please contact us with any inquiries or thoughts you may 
                    needs to discuss with regards to furthering your education, 
                    finances or fields of study. </p>
                <h3 style={{textAlign:"center"}}> Campus</h3>
                <p style={{textAlign:"center"}}>Main Building - 2901 Liberty Heights Avenue Baltimore, MD 21215-7807
                </p>
                <p style={{textAlign:"center"}}>Phone - 410-462-8300</p>


                </div>
        )
    }
}

export default ContactInfo;