import React from 'react';
import ReactDOM from 'react-dom';
import  Admin from './Admin';
import { BrowserRouter as Router, Switch, Route, Link, browserHistory } from 'react-router-dom';
import SplitterLayout from 'react-splitter-layout';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

export class AdminHome extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
        };

    }
    render(){
        return(
            <div className= "container">
             <MuiThemeProvider>
                <div>
                <AppBar title="" showMenuIconButton={false}>
                     <SelectField
                         floatingLabelText="Course" 
                         floatingLabelStyle={{flexi:"auto",fontFamily:"Arial",fontWeight:"bold",color:"black"}}
                         value={this.state.detail}
                            onChange={(event, navDetail) =>
                                this.setState({
                                    detail: navDetail,
                                })}>
                        <MenuItem value={1} containerElement={<Link to ="/addcourse"/>} 
                        primaryText="Add Course"/>
                        <MenuItem value={2} containerElement={<Link to ="/deletecourse"/>} 
                        primaryText="Delete Course" />
                        </SelectField>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                        <SelectField
                         floatingLabelText="Department" 
                         floatingLabelStyle={{flexi:"auto",fontFamily:"Arial",fontWeight:"bold",color:"black"}}
                         value={this.state.detail}
                            onChange={(event, navDetail) =>
                                this.setState({
                                    detail: navDetail,
                                })}>
                        <MenuItem value={1} containerElement={<Link to ="/adddep"/>} 
                        primaryText="Add Department"/>
                        <MenuItem value={2} containerElement={<Link to ="/deletedep"/>} 
                        primaryText="Delete Department" />
                        </SelectField>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <SelectField
                         floatingLabelText="Faculty" 
                         floatingLabelStyle={{flexi:"auto",fontFamily:"Arial",fontWeight:"bold",color:"black"}}
                         value={this.state.detail}
                            onChange={(event, navDetail) =>
                                this.setState({
                                    detail: navDetail,
                                })}>
                        <MenuItem value={1} containerElement={<Link to ="/addfaculty"/>} 
                        primaryText="Add Department"/>
                        <MenuItem value={2} containerElement={<Link to ="/deletefaculty"/>} 
                        primaryText="Delete Department" />
                        </SelectField>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <Link to="/login" style={{float:'right',color:'black',fontFamily:"Arial",fontWeight:"bold"}}>Logout</Link>
                        {/* <Link to ='/course' style={{flex:'auto',color:'black',fontFamily:"Arial",fontWeight:"bold"}}>Course</Link>
                        <Link to ='/department' style={{flex:'auto',color:'black',fontFamily:"Arial",fontWeight:"bold"}}>Department</Link>
                        <Link to ='/facultyInfo' style={{flex:'auto',color:'black',fontFamily:"Arial",fontWeight:"bold"}}>Faculty</Link>
                        <Link to="/login" style={{float:'right',color:'black',fontFamily:"Arial",fontWeight:"bold"}}>Logout</Link> */}
                </AppBar>
                </div>
                </MuiThemeProvider>
            
            </div>
        )
    }
}

export default AdminHome;