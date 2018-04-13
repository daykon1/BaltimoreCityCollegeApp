import React from 'react';
import Home from './Home';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import { SelectField } from 'material-ui';
const Enroll = () => (
  <div className="container">
  <Home/>
  <MuiThemeProvider>
    <SelectField>
      <Option>
        </Option>
      </SelectField>
    </MuiThemeProvider>
  </div>
)

export default Enroll
