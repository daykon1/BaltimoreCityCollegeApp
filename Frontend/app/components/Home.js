import React from 'react';
import ReactDOM from 'react-dom';
import Login from './Login';
import { BrowserRouter as Router, Switch, Route, Link, browserHistory } from 'react-router-dom';
import SplitterLayout from 'react-splitter-layout';
import MultiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';


class Home extends React.Component{
    render(){
        return(
            <div className="container">

            <Link to="/login" style={{float:'right'}}>Logout</Link><hr/>
                <div>
                    <MultiThemeProvider>
                    <RadioButtonGroup name="actions" defaultSelected="register">
                            <RadioButton
                                labelStyle={{ color: '#7B7D7F', fontSize: '16px' }}
                                style={{ display: 'inline-block', width: '50%' }}
                                value="register"
                                label="Register"
                            />
                            <RadioButton
                                labelStyle={{ color: '#7B7D7F', fontSize: '16px', lineHeight: '22px' }}
                                style={{ display: 'inline-block', width: '50%' }}
                                value="drop"
                                label="Drop"
                            />
                             <RadioButton
                                labelStyle={{ color: '#7B7D7F', fontSize: '16px', lineHeight: '22px' }}
                                style={{ display: 'inline-block', width: '50%' }}
                                value="withdraw"
                                label="Withdraw"
                            />
                             <RadioButton
                                labelStyle={{ color: '#7B7D7F', fontSize: '16px', lineHeight: '22px' }}
                                style={{ display: 'inline-block', width: '50%' }}
                                value="grade"
                                label="Grade"
                            />
                             <RadioButton
                                labelStyle={{ color: '#7B7D7F', fontSize: '16px', lineHeight: '22px' }}
                                style={{ display: 'inline-block', width: '50%' }}
                                value="enrolled"
                                label="Courses Enrolled"
                            />
                        </RadioButtonGroup>
                        <hr/>
                        </MultiThemeProvider>
                </div>
            </div>
        )
    }
}
const style={
    margin:12,
};
export default Home;