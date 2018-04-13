import React from 'react';
import AdminHome from './AdminHome';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export class AddDepartment extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
        course_no: '',
        course_name: '',
        dep_no: '',
        faculty_no: '',
    };

}
handleAddDept(event){
  event.preventDefault();
  if(this.state.course_no==''& this.state.course_name==''&
  this.state.dep_no==''& this.state.faculty_no=='')
  {
    this.setState({fielderrorText:"field required"})
  }
  else{
   fetch('http://localhost:8090/course/adddep',{
     method:'POST',
     headers: { 'Content-Type': 'application/json' },
     body:JSON.stringify({
        course_no:this.state.course_no,
        course_name:this.state.course_name,
        department_no:this.state.dep_no,
        faculty_id:this.state.faculty_no
     })
   }).then((result=>{
     if(result.status==200){
      document.getElementById("myform").reset();
      window.alert("Add course Success");
     }
   }))
  }
}
render(){
  return(
  <div>
      <AdminHome/>
      <div className="container">
      <form id = "myform">
      <MuiThemeProvider>
        <br/>
        <div className="form-style">
                        <TextField
                            hintText="Enter course number"
                            floatingLabelText="Course Number"
                            floatingLabelStyle={{fontFamily:"Arial",fontWeight:"bold"}}
                            style={{ fontSize: '20px' }}
                            errorText={this.state.fielderrorText}
                            onChange={(event, newValue,fielderrorText) => this.setState({ course_no: newValue,fielderrorText:fielderrorText })}
                        />
                        <br />
                        <TextField
                            hintText="Enter course Name"
                            floatingLabelText="Course Name"
                            floatingLabelStyle={{fontFamily:"Arial",fontWeight:"bold"}}
                            style={{ fontSize: '20px' }}
                            errorText={this.state.fielderrorText}
                            onChange={(event, newValue,fielderrorText) => this.setState({ course_name: newValue,fielderrorText:fielderrorText })}                        />
                        <br />
                        <TextField
                            hintText="Enter Department number"
                            floatingLabelText="Department Number"
                            floatingLabelStyle={{fontFamily:"Arial",fontWeight:"bold"}}
                            style={{ fontSize: '20px' }}
                            errorText={this.state.fielderrorText}
                            onChange={(event, newValue,fielderrorText) => this.setState({ dep_no: newValue,fielderrorText:fielderrorText })}
                        />
                        <br />
                        <TextField
                            hintText="Enter Faculty number"
                            floatingLabelText="Faculty number"
                            floatingLabelStyle={{fontFamily:"Arial",fontWeight:"bold"}}
                            style={{ fontSize: '20px' }}
                            errorText={this.state.fielderrorText}
                            onChange={(event, newValue,fielderrorText) => this.setState({ faculty_no: newValue,fielderrorText:fielderrorText })}
                        />
                        <br />
                        <RaisedButton label="Submit" primary={true} style={style} onClick={(event) => this.handleAddDept(event)} />
                        </div>
        </MuiThemeProvider>
        </form>
      </div>
  </div>
  )};
}
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
const style = {
  margin: 15,
};
export default AddDepartment;
