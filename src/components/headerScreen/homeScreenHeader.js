import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HomeScreenStyle from '../styles/HomeScreenStyle'

export default function HomeScreenHeader() {
    const {styles} = HomeScreenStyle()

  return (
    <View style={styles.SecondContainer}>
      <Text style={{color:'#000'}}>homeScreenHeader</Text>
    </View>
  )
}

