import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import { withStyles } from 'material-ui/styles';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import { withAlert } from 'react-alert';
import { Link } from 'react-router-dom';

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
            email: '',
            password: '',
            errorText: '',
            DegreeProgram: null,
            fielderrorText:'',
            program:null,
        };

    }
    
    handleSignUp(event) {
        event.preventDefault();
        if(this.state.email=='' &  
        this.state.first_name=='' & 
        this.state.last_name=='' &
        this.state.password==''){
            this.setState({ fielderrorText: 'Field is Required' })
        }
        else{
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
                degreeProgram: this.state.DegreeProgram,
                email: this.state.email,
                password: this.state.password

            })
        }).then((result) => {
            if (result.status == 201) {
                document.getElementById("myform").reset();
                window.alert("Student Registration Success");
                this.props.history.push('/login')
            }
            else {
                if (result.status == 409) {
                    this.setState({ errorText: 'Email already exsists :' + result.statusText })
                }
                else {
                    this.setState({ errorText: 'Invalid email' })
                }

            }
        });

    }
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
                </nav> */}
                
                </div>
                <form id="myform">
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
                    <div className="form-style">
                        <TextField
                            hintText="Enter your First Name"
                            floatingLabelText="First Name"
                            floatingLabelStyle={{fontFamily:"Arial",fontWeight:"bold"}}
                            style={{ fontSize: '20px' }}
                            errorText={this.state.fielderrorText}
                            onChange={(event, newValue,fielderrorText) => this.setState({ first_name: newValue,fielderrorText:fielderrorText })}
                        />
                        <br />
                        <TextField
                            hintText="Enter your Middle Name"
                            floatingLabelText="Middle Name"
                            floatingLabelStyle={{fontFamily:"Arial",fontWeight:"bold"}}
                            style={{ fontSize: '20px' }}
                            onChange={(event, newValue) => this.setState({ middle_name: newValue })}
                        />
                        <br />
                        <TextField
                            hintText="Enter your Last Name"
                            floatingLabelText="Last Name"
                            floatingLabelStyle={{fontFamily:"Arial",fontWeight:"bold"}}
                            style={{ fontSize: '20px' }}
                            errorText={this.state.fielderrorText}
                            onChange={(event, newValue,fielderrorText) => this.setState({ last_name: newValue,fielderrorText:fielderrorText })}
                        />
                        <br />
                        <TextField
                            hintText="Enter your Mobile Number"
                            floatingLabelText="Mobile Name"
                            floatingLabelStyle={{fontFamily:"Arial",fontWeight:"bold"}}
                            style={{ fontSize: '20px' }}
                            errorText={this.state.fielderrorText}
                            onChange={(event, newValue,fielderrorText) => this.setState({ mobile_number: newValue,fielderrorText:fielderrorText })}
                        />
                        <br />
                        <TextField
                            hintText="Enter your Address"
                            floatingLabelText="Address"
                            floatingLabelStyle={{fontFamily:"Arial",fontWeight:"bold"}}
                            style={{ fontSize: '20px' }}
                            errorText={this.state.fielderrorText}
                            onChange={(event, newValue,fielderrorText) => this.setState({ Address: newValue,fielderrorText:fielderrorText })}
                        />
                        <br />
                        <DatePicker
                            hintText="Date of Birth"
                            openToYearSelection={true}
                            floatingLabelText="Date of Birth"
                            style={{ fontSize: '20px' }}
                            floatingLabelStyle={{fontFamily:"Arial",fontWeight:"bold"}}
                            value={this.state.controlledDate}
                            onChange={(event, date) =>
                                this.setState({
                                    controlledDate: date,
                                })}
                        />
                        <br />
                        <RadioButtonGroup name="gender" defaultSelected="female">
                            <RadioButton
                                labelStyle={{ color: '#7B7D7F', fontSize: '16px' }}
                                style={{ display: 'inline-block', width: '50%' }}
                                value="male"
                                label="Male"
                            />
                            <RadioButton
                                labelStyle={{ color: '#7B7D7F', fontSize: '16px', lineHeight: '22px' }}
                                style={{ display: 'inline-block', width: '50%' }}
                                value="female"
                                label="Female"
                            />
                        </RadioButtonGroup>

                        <SelectField
                            floatingLabelText="Degree Program"
                            floatingLabelStyle={{fontFamily:"Arial",fontWeight:"bold"}}
                            style={{ fontSize: '20px' }}
                            value={this.state.DegreeProgram}
                            onChange={(event, program) =>
                                this.setState({
                                    DegreeProgram: program,
                                })}
                        >
                            <MenuItem value={0} primaryText="COSC-Computer Science" />
                            <MenuItem value={1} primaryText="PSYC-Psychology" />
                            <MenuItem value={2} primaryText="MATH-Mathematics" />
                            <MenuItem value={3} primaryText="AIT-Applied Info Tech" />
                            <MenuItem value={4} primaryText="DANCE-Teaching Dance" />
                            </SelectField>
                        <TextField
                            hintText="Enter your Email"
                            type="email"
                            floatingLabelText="Email"
                            floatingLabelStyle={{fontFamily:"Arial",fontWeight:"bold"}}
                            style={{ fontSize: '20px' }}
                            errorText={this.state.errorText}
                            onChange={(event, newValue, errorText) => this.setState({ email: newValue, errorText: errorText})}
                        />
                        <br />
                        <TextField
                            type="password"
                            hintText="Enter your Password"
                            floatingLabelText="Password"
                            floatingLabelStyle={{fontFamily:"Arial",fontWeight:"bold"}}
                            style={{ fontSize: '20px' }}
                            errorText={this.state.fielderrorText}
                            onChange={(event, newValue,fielderrorText) => this.setState({ password: newValue,fielderrorText:fielderrorText })}
                        />
                        <br />
                        <RaisedButton label="Submit" primary={true} style={style} onClick={(event) => this.handleSignUp(event)} />
                    </div>
                </MuiThemeProvider>
                </form>
            </div>
        );
    }
}
const style = {
    margin: 15,
};
export default Register;