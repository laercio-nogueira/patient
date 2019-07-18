import React from 'react'
import {Router, Stack, Scene} from 'react-native-router-flux'
import Login from './pages/Login'
import Home from './pages/Home'
import ListConsultation from './pages/Consultation/List'
import ScheduleConsultation from './pages/Consultation/Schedule'

export default () => (
  <Router>
    <Stack hideNavBar>
      <Scene key="pageLogin" component={Login} initial />
      <Scene key="pageHome" component={Home} />
      <Scene key="pageListConsultation" component={ListConsultation}  />
      <Scene key="pageScheduleConsultation" component={ScheduleConsultation} />
    </Stack>
  </Router>
)