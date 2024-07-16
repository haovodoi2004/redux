import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Btn = ({nut,OP}) => {
  return (
    <View>
        <TouchableOpacity onPress={OP}>
        <View style={styles.btn}>
      <Text style={{color:'white',fontWeight:'bold'}}>{nut}</Text>
    </View>
        </TouchableOpacity>
    </View>
  )
}

export default Btn

const styles = StyleSheet.create({
btn:{
    height:35,
    width:100,
    backgroundColor:'black',
    borderColor:'white',
    borderWidth:1,
    borderRadius:10,
    justifyContent:'center',
    alignItems:'center'
}

})