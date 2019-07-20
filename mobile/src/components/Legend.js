import React from 'react'
import { TextInput, StyleSheet, View } from 'react-native'

export default props => (
  <TextInput style={style.title}>{props.title}</TextInput>
)

const style = StyleSheet.create({
  title: {
    marginTop: 10,
    marginBottom: 10,
    textAlign: 'center',
    flexWrap: 'nowrap',
    fontWeight: 'bold',
    borderBottomWidth: 1,
    borderColor: '#ddd'
  }
})