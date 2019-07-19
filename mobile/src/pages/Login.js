import React from 'react'
import { View, Button, StyleSheet } from 'react-native'
import { Actions } from 'react-native-router-flux'
import Logo from './../components/Logo'
import { Container, Content, Form, Item, Input, Label } from 'native-base';

export default props => {
  const verifyLogin = () => {
    Actions.pageHome()
  }

  return(
    <View style={style.box}>
      <Logo />
        <View style={style.blockInput}>
          <Item inlineLabel>
            <Label>Email:</Label>
            <Input />
          </Item>
          <Item inlineLabel last >
            <Label>Senha:</Label>
            <Input password secureTextEntry={true}/>
          </Item>
        </View>
      <Button title="Clicar"  onPress={() => verifyLogin()}/>
    </View>
  )
}

const style = StyleSheet.create({
  box: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10
  },
  blockInput: {
    marginTop: 50,
    marginBottom: 50,
  },
  input: {
    marginTop: 20,
    marginBottom: 20
  }
})