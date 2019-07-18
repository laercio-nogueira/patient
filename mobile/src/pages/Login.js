import React from 'react'
import { View, Button, StyleSheet } from 'react-native'
import { Actions } from 'react-native-router-flux'
import Logo from './../components/Logo'

export default props => {
  const verifyLogin = () => {
    Actions.pageHome()
  }

  return(
    <View style={style.box}>
      <Logo />
      <Button title="Clicar"  onPress={() => verifyLogin()}/>
    </View>
  )
}

const style = StyleSheet.create({
  box: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10
  }
})