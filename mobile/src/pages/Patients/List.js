import React, { Fragment, useEffect, useState } from 'react'
import { View, FlatList, Text,  StyleSheet, TextInput } from 'react-native'
import { Button, Card } from 'react-native-elements';
import { Actions } from 'react-native-router-flux'
import Service from '../../services/doctor'
import Header from '../../components/Header'
import { connect } from 'react-redux'
import moment from 'moment'
import 'moment/locale/pt-br'

const List = props => {

  const componentList = ({item, index}) => (
    <Card containerStyle={item.status ? style.active : style.canceled} key={item.id}>
      <Text>{item.patient}</Text>
      <Text>{moment(item.date).format("MM/DD/YYYY")}</Text>
      <Text>{item.hour}</Text>
      <Text>{item.hospital}</Text>
      <Text>{item.status ? 'Aberto' : 'Cancelado'}</Text>
    </Card>
  )

  const [data, setData] = useState([])

  useEffect(() => {
    Service.getListPatients(props.user.id)
    .then(({data}) => {
      setData(data)
    })
    .catch(err => console.log('error: ' + err))
  }, [])

  return (
    <View>
      <Header />
      <TextInput style={style.title}>Seus pacientes</TextInput>
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
  },
  title: {
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
    textAlign: 'center',
    flexWrap: 'nowrap',
    fontWeight: 'bold',
    borderBottomWidth: 1,
    borderColor: '#ddd'
  }
})

const mapStateToProps = state => ({
  user: state.user
})

export default connect(mapStateToProps)(List)