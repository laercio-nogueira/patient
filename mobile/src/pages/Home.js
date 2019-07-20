import React from 'react'
import { View, StyleSheet, Button } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { connect } from 'react-redux'
import Legend from '../components/Legend'
import Header from '../components/Header'

const Home = props => {
  if (props.user.account) {
    return (
      <View style={style.container}>
        <Header />
        <View style={style.box}>
          <Legend title="Dashboard" />
          <Button 
            style={style.card} 
            title="Meus Pacientes" 
            color="#aaa" 
            onPress={() => Actions.pageListPatients()}
          />
        </View>
      </View>
    )
  } else {
    return (
      <View style={style.container}>
        <Header />
        <View style={style.box}>
          <Legend title="Dashboard" />
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
      </View>
    )
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1
  },
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
  },
  profile: {
    alignSelf: 'flex-end'
  },
  icon: {
    color: 'blue',
    marginLeft: 10,
    borderColor: 'blue',
    borderWidth: 1,
    borderRadius: 50
  }
})

const mapStateToProps = state => ({
  user: state.user
})

export default connect(mapStateToProps)(Home)