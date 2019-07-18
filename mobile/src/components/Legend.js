import React from 'react'
import { TextInput, StyleSheet, View } from 'react-native'

export default props => (
  <TextInput style={style.title}>{props.title}</TextInput>
)

const style = StyleSheet.create({
  title: {
    margin: 15,
    textAlign: 'center',
    flexWrap: 'nowrap'
  }
})