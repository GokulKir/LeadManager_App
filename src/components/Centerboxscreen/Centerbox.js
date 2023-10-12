import { StyleSheet, Text, View } from "react-native";
import React from "react";
import HomeScreenStyle from "../styles/HomeScreenStyle";
import { TouchableOpacity } from "react-native-gesture-handler";
import { widthPercentageToDP } from "react-native-responsive-screen";
import { RFPercentage } from "react-native-responsive-fontsize";

export default function Centerbox() {
  const { styles } = HomeScreenStyle();
  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <View style={styles.BoxSize}>
        <View
          style={{
            width: "100%",
            height: 60,
            backgroundColor: "#fff",
            flexDirection: "row",
          }}
        >
          <TouchableOpacity
            style={{
              width: widthPercentageToDP(28),
              height: "100%",
              backgroundColor: "#fff",
              elevation: 2,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ color: "#000" }}>Leads</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              width: widthPercentageToDP(28),
              height: "100%",
              backgroundColor: "#e8e6e6",
              elevation: 2,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ color: "grey" }}>Customers</Text>
          </TouchableOpacity>

          <View
            style={{
              width: widthPercentageToDP(38.7),
              height: "100%",
              backgroundColor: "#c4c2c2",
              elevation: 2,
            }}
          ></View>
        </View>
        <View>
          <View
            style={{
              width: "95%",
              height: "80%",
              borderWidth: 0,
              alignSelf: "center",
              marginTop: 50,
              elevation: 1,
            }}
          >
            <View style={{ left: 10, top: 20 }}>
              <Text
                style={{
                  fontSize: RFPercentage(1.9),
                  color: "#000",
                  fontWeight: "300",
                }}
              >
                Leads By Status
              </Text>
            </View>

            <View 
            style={{
                
            }}
            >

            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
