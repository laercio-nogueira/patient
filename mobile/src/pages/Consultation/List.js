import React, { Fragment } from 'react'
import { View, FlatList, Text,  StyleSheet } from 'react-native'
import { Button } from 'react-native-elements';
import { Card } from 'react-native-elements'
import { Actions } from 'react-native-router-flux'
import Legend from './../../components/Legend'
export default props => {
  const teste = () => console.log('teste')
  const componentList = ({item, index}) => {
    let style = StyleSheet.create({
      card: {
        backgroundColor: item.status ? '#fff' : '#f8d7da'
      },
      button: {
        marginTop: 10,
        width: 100
      }
    })

    return (
      <Card containerStyle={style.card}>
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
              onPress={() => Actions.pageScheduleConsultation()} 
              title="Editar"
              size={20} 
            /> : 
            <Fragment /> 
        }
      </Card>
    )
  }

  const data = [
    {
      id: 0,
      doctor: "Dr Marcelo Antonio",
      date: '12/08/2019',
      hour: '14:00',
      hospital: 'Hospital A',
      status: 1
    },
    {
      id: 1,
      doctor: "Dra Fernanda Silva",
      date: '12/08/2019',
      hour: '18:00',
      hospital: 'Hospital A',
      status: 1
    },
    {
      id: 2,
      doctor: "Dr Daniel Rodrigues",
      date: '16/08/2019',
      hour: '11:00',
      hospital: 'Hospital B',
      status: 0
    },
    {
      id: 3,
      doctor: "Dra Mariana da SIlva",
      date: '18/09/2019',
      hour: '08:00',
      hospital: 'Hospital C',
      status: 1
    },
    {
      id: 4,
      doctor: "Dr Fabio Souza",
      date: '19/08/2019',
      hour: '14:30',
      hospital: 'Hospital B',
      status: 1
    },
    {
      id: 5,
      doctor: "Dra Daniela Martins",
      date: '22/09/2019',
      hour: '13:30',
      hospital: 'Hospital D',
      status: 0
    }
  ]

  return (
    <View>
      <Legend title="Suas Consultas"/>
      <FlatList data={data} renderItem={componentList}/>
    </View>
  )
}