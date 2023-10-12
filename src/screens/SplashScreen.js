import { StyleSheet, Text, View, Image } from "react-native";
import React, { useEffect, useState } from "react";
import SplashStyles from "../components/styles/SplashScreenStyles";
import { useNavigation } from "@react-navigation/native";
import * as Location from "expo-location";

export default function SplashScreen() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const navigation = useNavigation();
  const { styles } = SplashStyles();
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
      } else {
        let location = await Location.getCurrentPositionAsync({});
        setLocation(location);
      }
    })();
  }, []);

  useEffect(() => {
    if (location && location.coords) {
      // Location permission granted, and location is available
      setTimeout(() => {
        navigation.replace("Scanner");
      }, 2500);
    }
  }, [location]);

  let text = "Waiting..";
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  return (
    <View style={styles.container}>
      <Image
        style={styles.CenterLogoSize}
        source={require("../assets/logo.png")}
      />
    </View>
  );
}
