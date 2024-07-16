import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Block = ({title,children}) => {
  return (
    <View style={{backgroundColor:'#FFCDD2',borderRadius:20,elevation:10,height:150,width:'100%',borderColor:'white',borderWidth:2,margin:10,justifyContent:'center',alignItems:'center'}}>
      <Text style={{fontSize:20,fontWeight:'bold',color:'red'}}>{title}</Text>
      {children}
    </View>
  )
}

export default Block

const styles = StyleSheet.create({})