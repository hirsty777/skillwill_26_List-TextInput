import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Row = ({name, phone}) => {
  return (
    <View style={styles.row}>
      <Text style={{color:"#0C60F4"}}>{name}</Text>
      <Text style={{color:"#000000"}}>{phone}</Text>
    </View>
  )
}

export default Row

const styles = StyleSheet.create({
    row:{
        marginTop:15,
        backgroundColor:"rgba(4, 203, 29, 0.4)",
        alignItems:"center",
        borderRadius:5,
        elevation:1
    }
})