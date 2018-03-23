import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Login from './Login'
import Register from './Register'
import Home from './Home'

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Login}/>
      <Route path='/login' component={Login}/>
      <Route path='/register' component={Register}/>
      <Route path='/home' component={Home}/>
    </Switch>
  </main>
)

export default Main;