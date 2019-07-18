import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import { Actions } from 'react-native-router-flux'
import Legend from './../components/Legend'

export default () => (
  <View style={style.box}>
    <Legend title="Bem vindo ao sistema" />
    <Button 
      style={style.card} 
      title="Minhas Consultas" 
      color="#aaa" 
      onPress={() => Actions.pageListConsultation()}
    />
    <Button 
      style={style.card} 
      title="Agendar Consulta" 
      color="#aaa"onPress={() => Actions.pageScheduleConsultation()}/>
  </View>
)

const style = StyleSheet.create({
  box: {
    margin: 20,
    flex: 1
  },
  card: {
    flexDirection: 'row',
    borderColor: '#bbb',
    borderWidth: 1,
    marginTop: 15,
    elevation:5,
    shadowOffset: { width: 5, height: 5 },
    shadowColor: "grey",
    shadowOpacity: 0.5,
    shadowRadius: 3,
    padding: 10
  },
  text: {
    textAlign: 'center',
    justifyContent: 'center',
    textAlignVertical: "center",
    alignItems: "center"
  }
})