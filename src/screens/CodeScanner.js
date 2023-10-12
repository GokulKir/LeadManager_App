import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import { TouchableOpacity } from "react-native-gesture-handler";
import { heightPercentageToDP } from "react-native-responsive-screen";
import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

export default function CodeScanner() {
  const navigation = useNavigation();
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    };

    getBarCodeScannerPermissions();
  }, []);

  const handleBarCodeScanned = async ({ type, data }) => {
    setScanned(true);
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    try {
      await AsyncStorage.setItem("scannedData", data);
      console.log(data);
      console.log("Scanned data saved to AsyncStorage");

      if (data === "https://patronus.theleadmanagerapp.com/") {
        navigation.navigate("Home");
      } else {
        alert("Invalid scanned URL. Please try again.");
      }

      // navigation.replace("Home");
    } catch (error) {
      console.error("Error saving data to AsyncStorage:", error);
    }
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      <View
        style={{ alignItems: "center", marginTop: heightPercentageToDP(85) }}
      >
        {scanned && (
          <TouchableOpacity
            onPress={() => setScanned(false)}
            style={{
              width: 70,
              height: 70,
              backgroundColor: "#3e73bd",
              borderRadius: 100,
              elevation: 5,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Ionicons name="scan" size={30} color="#fff" />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
  },
});
