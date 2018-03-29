import React from 'react';
import ReactDOM from 'react-dom';
import Admin from './Admin';
import Faculty from './Faculty';
import { BrowserRouter as Router, Switch, Route, Link, browserHistory } from 'react-router-dom';
import SplitterLayout from 'react-splitter-layout';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import Card from 'material-ui/Card';

class LoginHeader extends React.Component{
    render(){
        return(
            <div className="container">

                
                <div>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <div>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <form className="form-style">
                        <Card style={{width: "250px", position:"relative", height:"250px", textAlign:"center", backgroundColor:"#EEEEEE"}}>
                        <h4>Login as:</h4>
                        <Link to="/admin" style={{fontFamily:"Arial",color:"#42A5F5",float:"center",fontSize:"20px"}}>Admin</Link><br/>
                        <Link to="/faculty" style={{fontFamily:"Arial",color:"#42A5F5",float:"center",fontSize:"20px"}}>Faculty</Link><br/>
                        <Link to="/login" style={{fontFamily:"Arial",color:"#42A5F5",float:"center",fontSize:"20px"}}>Student</Link><br/>   
                        </Card>
                        </form>
                        </div>
                </div>
            </div>
        )
    }
}
const style={
    margin:12,
};
export default LoginHeader;