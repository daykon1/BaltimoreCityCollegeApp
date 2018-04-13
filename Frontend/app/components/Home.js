import React from 'react';
import ReactDOM from 'react-dom';
import Login from './Login';
import { BrowserRouter as Router, Switch, Route, Link, browserHistory } from 'react-router-dom';
import SplitterLayout from 'react-splitter-layout';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import AppBar from 'material-ui/AppBar';


class Home extends React.Component{
    render(){
        return(
            <div className="container">
            <MuiThemeProvider>
                <div>
            <AppBar title="" showMenuIconButton={false}>
                        <Link to ='/enroll' style={{flex:'auto',color:'black',fontFamily:"Arial",fontWeight:"bold"}}>Enroll</Link>
                        <Link to ='/withdraw' style={{flex:'auto',color:'black',fontFamily:"Arial",fontWeight:"bold"}}>Withdraw</Link>
                        <Link to ='/drop' style={{flex:'auto',color:'black',fontFamily:"Arial",fontWeight:"bold"}}>Drop</Link>
                        <Link to ='/grade' style={{flex:'auto',color:'black',fontFamily:"Arial",fontWeight:"bold"}}>Grade</Link>
                        <Link to ='/courses' style={{flex:'auto',color:'black',fontFamily:"Arial",fontWeight:"bold"}}>Courses Enrolled</Link>
                        <Link to="/login" style={{float:'right',color:'black',fontFamily:"Arial",fontWeight:"bold"}}>Logout</Link>
                </AppBar>
                </div>
                </MuiThemeProvider>
            </div>
        )
    }
}
const style={
    margin:12,
};
export default Home;