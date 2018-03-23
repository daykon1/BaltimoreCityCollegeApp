import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import { withStyles } from 'material-ui/styles';

const styles = theme => ({
    root: {
        display: 'flex',
    },
    formControl: {
        margin: theme.spacing.unit * 3,
    },
    group: {
        margin: `${theme.spacing.unit}px 0`,
    },
});
export class Register extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            controlledDate: null,
            first_name: '',
            middle_name: '',
            last_name: '',
            mobile_number: '',
            Address: '',
            degreeProgram: '',
            email: '',
            password: ''

        };
    }
    handleSignUp(event) {
        event.preventDefault();
        fetch('http://localhost:8090/user/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                controlledDate: this.state.controlledDate,
                first_name: this.state.first_name,
                middle_name: this.state.middle_name,
                last_name: this.state.last_name,
                mobile_number: this.state.mobile_number,
                Address: this.state.Address,
                degreeProgram: this.state.degreeProgram,
                email: this.state.email,
                password: this.state.password

            })
        }).then((result) => {
            if (result.status == 201) {
                this.props.history.push('/login')
            }
            else {
                console.log("error", result.status);
            }
        });

    }
    render() {
        return (
            <div>
                <MuiThemeProvider>
                    <div className="form-style">
                        <TextField
                            hintText="Enter your First Name"
                            floatingLabelText="First Name"
                            style={{ fontSize: '20px' }}
                            onChange={(event, newValue) => this.setState({ first_name: newValue })}
                        />
                        <br />
                        <TextField
                            hintText="Enter your Middle Name"
                            floatingLabelText="Middle Name"
                            style={{ fontSize: '20px' }}
                            onChange={(event, newValue) => this.setState({ middle_name: newValue })}
                        />
                        <br />
                        <TextField
                            hintText="Enter your Last Name"
                            floatingLabelText="Last Name"
                            style={{ fontSize: '20px' }}
                            onChange={(event, newValue) => this.setState({ last_name: newValue })}
                        />
                        <br />
                        <TextField
                            hintText="Enter your Mobile Number"
                            floatingLabelText="Mobile Name"
                            style={{ fontSize: '20px' }}
                            onChange={(event, newValue) => this.setState({ mobile_number: newValue })}
                        />
                        <br />
                        <TextField
                            hintText="Enter your Address"
                            floatingLabelText="Address"
                            style={{ fontSize: '20px' }}
                            onChange={(event, newValue) => this.setState({ Address: newValue })}
                        />
                        <br />
                        <DatePicker
                            hintText="Date of Birth"
                            style={{ fontSize: '20px' }}
                            value={this.state.controlledDate}
                            onChange={(event, date) =>
                                this.setState({
                                    controlledDate: date,
                                })}
                        />
                        <TextField
                            hintText="Degree Program"
                            floatingLabelText="Degree Program"
                            style={{ fontSize: '20px' }}
                            onChange={(event, newValue) => this.setState({ degreeProgram: newValue })}
                        />
                        <br />
                        <TextField
                            hintText="Enter your Email"
                            type="email"
                            floatingLabelText="Email"
                            style={{ fontSize: '20px' }}
                            onChange={(event, newValue) => this.setState({ email: newValue })}
                        />
                        <br />
                        <TextField
                            type="password"
                            hintText="Enter your Password"
                            floatingLabelText="Password"
                            style={{ fontSize: '20px' }}
                            onChange={(event, newValue) => this.setState({ password: newValue })}
                        />
                        <br />
                        <RaisedButton label="Submit" primary={true} style={style} onClick={(event) => this.handleSignUp(event)} />
                    </div>
                </MuiThemeProvider>
            </div>
        );
    }
}
const style = {
    margin: 15,
};
export default Register;