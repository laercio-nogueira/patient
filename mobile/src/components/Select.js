import React from 'react'
import { View, Text, Picker, StyleSheet } from 'react-native'

export default props => (
  <View style={style.select}>
    <Text>{props.title}</Text>
    <Picker onValueChange={value => props.handleChange(value)} selectedValue={props.selected}>
      <Picker.Item label={props.placeholder} value={null} key={0}/>
      {
        props.data.map((i, key) => (
          <Picker.Item label={i.label} value={i.value} key={key} />
        ))
      }
    </Picker>
  </View>
)

const style = StyleSheet.create({
  select: {
    borderColor: '#ddd',
    borderBottomWidth: 2,
    marginBottom: 10
  }
})