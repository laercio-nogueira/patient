import React, { useState } from 'react'
import { View, Button, StyleSheet } from 'react-native'
import Logo from './../components/Logo'
import { Item, Input, Label } from 'native-base';
import Auth from '../middleware/Auth'

export default props => {

  let [user, setUser] = useState({
    email: null,
    password: null
  })

  const verifyLogin = () => {
    if (user.email && user.password) {
      Auth(user)
    }    
  }

  return(
    <View style={style.box}>
      <Logo />
        <View style={style.blockInput}>
          <Item inlineLabel>
            <Label>Email:</Label>
            <Input 
              onChange={e => setUser({...user, email: e.nativeEvent.text.toLocaleLowerCase().trim()})}
            />
          </Item>
          <Item inlineLabel last >
            <Label>Senha:</Label>
            <Input 
              secureTextEntry={true}
              onChange={e => setUser({...user, password: e.nativeEvent.text.trim()})}/>
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