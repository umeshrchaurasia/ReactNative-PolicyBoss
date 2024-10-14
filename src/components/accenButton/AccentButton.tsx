import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Colors, Fonts } from '../../utility/constants'

const AccentButton = () => {
  return (
    <TouchableOpacity style={styles.root}>
      <Text style={styles.btnText}>Submit</Text>
    </TouchableOpacity>
  )
}

export default AccentButton

const styles = StyleSheet.create({
    root:{
        height:51,
        justifyContent:"center",
        alignItems:"center",
        width:'100%',
        backgroundColor:Colors.silverSand,
    },
    btnText:{
        textAlign:"center",
        color:Colors.white,
        ...Fonts.robotoTextBold16
    }
})