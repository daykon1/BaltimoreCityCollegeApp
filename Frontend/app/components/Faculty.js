import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import { BrowserRouter as Router, Switch, Route, Link, browserHistory } from 'react-router-dom';
import Register from './Register';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Card from 'material-ui/Card';
import Admin from './Admin';
import LoginHeader from './LoginHeader';
export class Faculty extends React.Component {
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
                        <br/><br/>
                        <div className="row">
                         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <div className="column">
                        <LoginHeader/>
                        </div>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                        <div className="column">
                        <div className="form-group">
                        <form className="form-style">
                        <Card style={{width: "450px", position:"relative", height:"375px", textAlign:"center", backgroundColor:"#EEEEEE"}}>
                        <h4><b>Please Login</b></h4>
                        <p style={{fontSize:'10px'}}>Enter your faculty EmailID and password to login</p>
                        <p style={{fontSize:'10px'}}>if you don&rsquo;t have register now</p>
                            <form className="form-style">
                                <TextField
                                    floatingLabelText="Username"
                                    floatingLabelStyle={{fontFamily:"Arial",fontWeight:"bold"}}
                                    style={{ fontSize: '30px' }}
                                    errorText= {this.state.errorText}
                                    onChange={(event, newValue,errorText) => this.setState({ username: newValue,errorText:errorText })}
                                    
                                />
                                <br />
                                <TextField
                                    type="password"
                                    floatingLabelText="Password"
                                    floatingLabelStyle={{fontFamily:"Arial",fontWeight:"bold"}}
                                    style={{ fontSize: '30px' }}
                                    onChange={(event, newValue) => this.setState({ password: newValue })}
                                />
                                <div>
                                    <span>
                                        <Link to="/register" style={{fontFamily:"Arial",color:"#42A5F5",float:"left"}}>Register</Link>
                                    </span>
                                <span className="span-button">
                                    <button type="submit" className="btn btn-info" primary="true" onClick={(event) => this.handleLogIn(event)}>Log In</button>
                                </span>
                                </div>
                                <div>
                                <br/><br/>
                                <Link to="/register" style={{fontFamily:"Arial",color:"#42A5F5",float:"left",fontSize:"20px"}}>Forget password</Link> 
                            </div>
                            </form>
                            </Card>
                            </form>
                            </div>
                        </div>
                        </div>
                    </MuiThemeProvider>
                </div>
            </div>
        );
    }
}
export default Faculty;
const style = {
    margin: 15,
};
