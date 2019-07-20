import React from 'react'
import { Header } from 'react-native-elements'
import { connect } from 'react-redux'

const HeaderCustom = props => (
  <Header
    containerStyle={{backgroundColor: '#0e5895'}}
    leftComponent={{ icon: 'menu', color: '#fff' }}
    centerComponent={{ text: props.user.name, style: { color: '#fff' } }}
    rightComponent={{ icon: 'person', color: '#fff' }}
  />
)

const mapStateToProps = state => ({
  user: state.user
})

export default connect(mapStateToProps)(HeaderCustom)