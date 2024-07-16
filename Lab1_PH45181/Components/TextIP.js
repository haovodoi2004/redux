import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const TextIP = ({hint,oct}) => {
  return (
    <View>
      <TextInput style={styles.ip} placeholder={hint} onChangeText={oct} placeholderTextColor='gray'  />
    </View>
  )
}

export default TextIP

const styles = StyleSheet.create({
ip:{
    borderColor:'black',
    borderWidth:1,
    borderRadius:10,
    width:200,
    height:40,
    padding:10,
    margin:5
    
}

})