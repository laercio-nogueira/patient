import React from 'react'
import { Text, StyleSheet } from 'react-native'

export default props => (
  <Text style={style.logo}>PATIENT v0.1</Text>
)

const style = StyleSheet.create({
  logo: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 32,
    marginTop: 100
  }
})