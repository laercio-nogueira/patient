import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { DatePicker } from 'native-base'

export default props => {

  return (
    <View style={style.date}>
      <Text>{props.title}</Text>
      <DatePicker
        defaultDate={props.defaultDate ? new Date(props.defaultDate) : new Date()}
        locale={"br"}
        timeZoneOffsetInMinutes={undefined}
        modalTransparent={false}
        animationType={"fade"}
        androidMode={"default"}
        onDateChange={value => props.handleChange(value)}
      />
    </View>
  )
}

const style = StyleSheet.create({
  date: {
    borderColor: '#ddd',
    borderBottomWidth: 2,
    marginBottom: 10
  }
})