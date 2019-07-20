import React, { useState, useEffect, Fragment } from 'react'
import { View, StyleSheet, Alert } from 'react-native'
import { Button } from 'react-native-elements';
import { lifecycle, compose, withState, withHandlers } from 'recompose';
import { Actions } from 'react-native-router-flux';
import Legend from '../../components/Legend'
import Select from '../../components/Select'
import Date from '../../components/Date'
import Service from '../../services/consumer'
import Header from '../../components/Header'

const Schedule = props => {

  let hour = [
    { label: '08:00', value: '08:00:00' },
    { label: '09:00', value: '09:00:00' },
    { label: '10:00', value: '10:00:00' },
    { label: '11:00', value: '11:00:00' }
  ]

  let popUpAlert = (msg, status) => {
    Alert.alert(
      'Aviso',
      msg,
      [
        { text: 'OK', onPress: () => status ? Actions.pageListConsultation() : null}
      ]
    )
  }

  let saveData = () => {
    Service.saveNewConsultation(props.data)
      .then(({data, status}) => popUpAlert("Consulta agendada com sucesso", 1))
      .catch(err => console.log(err))
  }

  let editData = () => {
    Service.editConsultation(props.data, props.id)
      .then(({data, status}) => popUpAlert("Consulta atualizada com sucesso", 1))
      .catch(err => console.log(err))
  }

  let handleClick = () => {
    const { doctor, date, hour, hospital } = props.data
    if (doctor && date && hour && hospital) {
      props.id !== undefined ? editData() : saveData()
    } else {
      popUpAlert('Preencha todos os campos', null)
    }
  }

  let canceledData = () => {
    Alert.alert(
      'Aviso',
      'Tem certeza que deseja cancelar sua consulta?',
      [
        { text: 'SIM', onPress: () => {
          Service.cancelConsultation(props.id)
            .then(resp => popUpAlert('Consulta cancelada com sucesso', 1))
        } },
        { text: 'NÃO' }
      ]
    )
  }

  return (
    <View>
      <Header />
      <View style={style.box}>
        <Legend title="Consulta" />
        <Select 
          title="Doutor" 
          data={props.doctor} 
          handleChange={value => { props.setData({...props.data, doctor: value}) }}
          selected={props.data.doctor}
          placeholder="Selecione um doutor"
        />

        <Select 
          title="Hospital" 
          data={props.hospital} 
          handleChange={value => { props.setData({...props.data, hospital: value}) }}
          selected={props.data.hospital}
          placeholder="Selecione um hospital"
        />

        <Date
          title="Data Consulta" 
          handleChange={value => { props.setData({...props.data, date: value}) }}
          defaultDate={props.data.date}
          placeHolderText="Selecione uma data"
        />

        <Select 
          title="Hora" 
          data={hour} 
          handleChange={value => props.setData({...props.data, hour: value}) }
          selected={props.data.hour}
          placeholder="Selecione um horario"
        />

        <Button 
          primary 
          onPress={() => handleClick()} 
          title="Enviar"
          size={20} 
        />

        { props.id ?
          <Button 
            buttonStyle={style.danger} 
            onPress={() => canceledData()} 
            title="Cancelar Consulta"
            size={20} 
          /> :
          <Fragment /> 
        }

      </View>
    </View>
  )
}
const style = StyleSheet.create({
  box: {
    margin: 20
  },
  danger: {
    backgroundColor: '#a6656b',
    marginTop:10
  }
})

export default compose(
  withState('data', 'setData', {
    doctor: null,
    date: null,
    hour: null,
    hospital: null
  }),
  withState('doctor', 'setDoctor', []),
  withState('hospital', 'setHospital', []),
  lifecycle({
    componentDidMount() {
      Service.getListDoctor()
        .then(resp => {
          this.props.setDoctor(resp.data)
          return Service.getListHospital()
        })
        .then(resp => {
          this.props.setHospital(resp.data)
        })
        
      if (this.props.id) {
        Service.getConsultationById(this.props.id)
        .then((resp) => {
          console.log(resp.data[0])
          this.props.setData({...resp.data[0]})
        })
        .catch(err => console.log(err))
      }  
    }
  })
)(Schedule);