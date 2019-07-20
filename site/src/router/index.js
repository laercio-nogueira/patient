import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Signup from './../pages/Signup'

const Routers = () => (
  <Switch>
    <Route path='/signup' component={Signup} />
    <Route path='*' render={props => <Redirect to={{ pathname: '/signup' }} />} />
  </Switch>
)

export default Routers
