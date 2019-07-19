import React, { Fragment, useEffect, useState } from 'react'
import { View, FlatList, Text,  StyleSheet } from 'react-native'
import { Button, Card } from 'react-native-elements';
import { Actions } from 'react-native-router-flux'
import Service from './../../services/consumer'
import Legend from './../../components/Legend'

export default props => {
  const componentList = ({item, index}) => (
    <Card containerStyle={item.status ? style.active : style.canceled} key={item.id}>
      <Text>{item.doctor}</Text>
      <Text>{item.date}</Text>
      <Text>{item.hour}</Text>
      <Text>{item.hospital}</Text>
      <Text>{item.status ? 'Aberto' : 'Cancelado'}</Text>
      { 
        item.status ? 
          <Button 
            primary 
            containerStyle={style.button} 
            onPress={() => Actions.pageScheduleConsultation({ id: item.id })} 
            title="Editar"
            size={20} 
          /> : 
          <Fragment /> 
      }
    </Card>
  )

  const [data, setData] = useState([])

  useEffect(() => {
    Service.getListConsultation()
    .then(({data}) => {
      setData(data)
    })
    .catch(err => console.log('error: ' + err))
  }, [])

  return (
    <View style={style.list}>
      <Legend title="Suas Consultas"/>
      <FlatList data={data} renderItem={componentList}/>
    </View>
  )
}

let style = StyleSheet.create({
  active: {
    backgroundColor: '#fff'
  },
  canceled: {
    backgroundColor: '#f8d7da'
  },
  button: {
    marginTop: 10,
    width: 100
  },
  list: {
    flex: 1
  }
})