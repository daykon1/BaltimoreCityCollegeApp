import React from 'react';
import { Link } from 'react-router-dom';
import FontIcon from 'material-ui/FontIcon';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import AppBar from 'material-ui/AppBar';

class Aboutus extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            program: null,
        };

    }
    render() {
        return (
            <div>
                {/* <nav className="navbar navbar-dark bg-dark navbar-inverse">
                    <div className="container-fluid">
                        <Link to="/Aboutus" className="navbar-brand">About BCC</Link>
                        <Link to="/Gallery" className="navbar-brand">Gallery</Link>
                        <Link to="/ContactInfo" className="navbar-brand">ContactInfo</Link>
                        <Link to="/login" className="navbar-brand">Home</Link>
                    </div>
                </nav> */}
                <MuiThemeProvider>
                <AppBar title="" showMenuIconButton={false}>
                        {/* <SelectField
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
                        </SelectField> */}
                        <Link to ='/Aboutus' style={{flex:'auto',color:'black',fontFamily:"Arial",fontWeight:"bold"}}>About us</Link>
                        <Link to ='/Gallery' style={{flex:'auto',color:'black',fontFamily:"Arial",fontWeight:"bold"}}>Gallery</Link>
                        <Link to ='/ContactInfo' style={{flex:'auto',color:'black',fontFamily:"Arial",fontWeight:"bold"}}>Contact us</Link>
                        <Link to ='/login' style={{flex:'auto',color:'black',fontFamily:"Arial",fontWeight:"bold"}}>Home</Link>
                        </AppBar>
                </MuiThemeProvider>
                <div>
                <h1 style={{color:"#FFAB91",}}>About BCCC</h1>
                        <hr className="hr-color"/>
                        <p><span style={{fontSize:"medium"}}>
                        At Baltimore City Community College (BCCC)
                         we meet students where they are through personal 
                         attention with the support of dedicated faculty. 
                         Each year we educate more than 15,000 students from Baltimore City, 
                         the State of Maryland, and the world.</span></p>
                         <p><span style={{fontSize:"medium"}}>
                         BCCC is a State-sponsored, comprehensive, 
                         degree-granting community college with five learning 
                         sites in Baltimore City. We offer 29 associate degree programs 
                         and 16 certifications in high-demand fields, affordable tuition and 
                         flexible classes scheduled to meet students needs.</span></p>
                         <p><span style={{fontSize:"medium"}}>
                         At BCCC students receive the quality education 
                         and specialized training critical to get good jobs, 
                         to transfer to four year institutions and to upgrade or 
                         acquire new skills to stay competitive in today&rsquo;s changing marketplace.
                         </span></p>
                         <p><span style={{fontSize:"medium"}}>
                         The College&rsquo;s Workforce Development and Continuing Education 
                         Division serves more than 8,000 students seeking new skills and 
                         personal growth. BCCC offers General Educational Development for 
                         students seeking high school diplomas, English as a Second Language 
                         instruction and Adult Basic Education to strengthen literary skills.
                         </span></p>
                         <p><span style={{fontSize:"medium"}}>
                         BCCC welcomes everyone who wants to enrich their lives 
                         through education and the pursuit of new skills.
                         </span></p>
                </div>
            </div>
        )
    }
}
const iconStyles = {
    marginRight: 24,
};
export default Aboutus;