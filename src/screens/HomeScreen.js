import React, { useEffect, useState } from "react";
import {
  PermissionsAndroid,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import HomeScreenStyle from "../components/styles/HomeScreenStyle";
import HomeScreenHeader from "../components/headerScreen/homeScreenHeader";
import { ScrollView } from "react-native-gesture-handler";
import Centerbox from "../components/Centerboxscreen/Centerbox";
import { widthPercentageToDP } from "react-native-responsive-screen";
import { RFPercentage } from "react-native-responsive-fontsize";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Entypo } from "@expo/vector-icons";
import * as Contacts from "expo-contacts";
import usePlatform from "../hooks/usePlatform";
import { WebView } from 'react-native-webview';
import AsyncStorage from "@react-native-async-storage/async-storage";


export default function HomeScreen() {
  const [url , setUrl] = React.useState('')
 
  React.useEffect(() => {
    checkAuthStatus();
  }, []);

  const checkAuthStatus = async () => {
    try {
      const token = await AsyncStorage.getItem('scannedData');
      if (token) {
       console.log("Scanned device url");
       console.log(token);
       setUrl(token)
       
      }
    } catch (error) {
      console.error('Error retrieving token:', error);
    }
  };


  return (
    <WebView
      style={styles.container}
      source={{ uri: `${url}` }}
    />
  )
}

const styles = StyleSheet.create({
  container : {
    flex:1 ,
  }
})

