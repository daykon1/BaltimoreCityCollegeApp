import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Login from './Login'
import Register from './Register'
import Home from './Home'
import Aboutus from './Aboutus'
import ContactInfo from './ContactInfo'
import Gallery from './Gallery'


const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Login}/>
      <Route path='/login' component={Login}/>
      <Route path='/register' component={Register}/>
      <Route path='/home' component={Home}/>
      <Route path='/aboutus' component={Aboutus}/>
      <Route path='/gallery' component={Gallery}/>
      <Route path='/contactInfo' component={ContactInfo}/>
    </Switch>
  </main>
)

export default Main;