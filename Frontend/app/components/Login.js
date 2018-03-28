import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import { BrowserRouter as Router, Switch, Route, Link, browserHistory } from 'react-router-dom';
import Register from './Register';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
export class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            errorText:'',
            program: null,
        };

    }

    handleLogIn(event) {
        event.preventDefault();
        fetch('http://localhost:8090/user/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: this.state.username,
                password: this.state.password

            })
        }).then((result)=>{
            if(result.status==200){
                this.props.history.push('/home')

            }
            else{
                this.setState({errorText:'Invalid Username or Password : '+result.statusText})
            }
        });;
    }

    render() {
        return (
            <div>
                <div>
                {/* <nav className="navbar navbar-dark bg-dark navbar-inverse">
                    <div className="container-fluid">
                        <Link to="/Aboutus" className="navbar-brand">About BCC</Link>
                        <Link to="/Gallery" className="navbar-brand">Gallery</Link>
                        <Link to="/ContactInfo" className="navbar-brand">ContactInfo</Link>
                        <Link to="/login" className="navbar-brand">Home</Link>
                    </div>
                </nav><br/><br/> */}
                    <MuiThemeProvider>
                        <AppBar title="" showMenuIconButton={false}>
                        <SelectField
                         floatingLabelText="About BCCC" 
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
                        <br/><br/>
                        <div className="form-group">
                            <form className="form-style">
                                <TextField
                                    floatingLabelText="Username"
                                    style={{ fontSize: '30px' }}
                                    errorText= {this.state.errorText}
                                    onChange={(event, newValue,errorText) => this.setState({ username: newValue,errorText:errorText })}
                                    
                                />
                                <br />
                                <TextField
                                    type="password"
                                    floatingLabelText="Password"
                                    style={{ fontSize: '30px' }}
                                    onChange={(event, newValue) => this.setState({ password: newValue })}
                                />
                                <div>
                                    <span>
                                        <Link to="/register">Register</Link>
                                    </span>
                                <span className="span-button">
                                    <button type="submit" className="btn btn-danger" primary="true" onClick={(event) => this.handleLogIn(event)}>Log In</button>
                                </span>
                                </div>
                            </form>
                        </div>
                    </MuiThemeProvider>
                </div>
            </div>
        );
    }
}
export default Login;
const style = {
    margin: 15,
};
