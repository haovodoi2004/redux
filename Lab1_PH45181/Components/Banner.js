import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Banner = () => {
  return (
    <View style={{height:200,borderRadius:10,width:'100%',justifyContent:'center',alignItems:'center'}}>
        
      <Image style={{height:200,width:'100%',borderRadius:20,borderColor:'orange',borderWidth:3}} source={{uri:'https://inkythuatso.com/uploads/thumbnails/800/2021/12/logo-fpt-polytechnic-inkythuatso-09-13-08-21.jpg'}}  />
    </View>
  )
}

export default Banner

const styles = StyleSheet.create({})