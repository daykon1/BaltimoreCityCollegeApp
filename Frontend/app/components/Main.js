import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Login from './Login'
import Register from './Register'
import Home from './Home'
import Aboutus from './Aboutus'
import ContactInfo from './ContactInfo'
import Gallery from './Gallery'
import Enroll from './Enroll'
import Drop from './Drop'
import Withdraw from './Withdraw'
import Grade from './Grade'
import EnrolledCourses from './EnrolledCourse'
import Admin from './Admin'
import Faculty from './Faculty'


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
      <Route path='/enroll' component={Enroll}/>
      <Route path='/drop' component={Drop}/>
      <Route path='/withdraw' component={Withdraw}/>
      <Route path='/grade' component={Grade}/>
      <Route path='/courses' component={EnrolledCourses}/>
      <Route path='/admin' component={Admin}/>
      <Route path='/faculty' component={Faculty}/>


    </Switch>
  </main>
)

export default Main;