import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import { BrowserRouter as Router, Switch, Route, Link, browserHistory } from 'react-router-dom';
import Register from './Register';
export class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
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
                console.log("error",result.status);

            }
        });;
    }

    render() {
        return (
            <div>
                <div>
                    <MuiThemeProvider>
                        <div className="form-group">
                            <form className="form-style">
                                <TextField
                                    floatingLabelText="Username"
                                    style={{ fontSize: '30px' }}
                                    required
                                    onChange={(event, newValue) => this.setState({ username: newValue })}
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
                                    <button type="submit" className="btn btn-danger" primary={true} onClick={(event) => this.handleLogIn(event)}>Log In</button>
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
