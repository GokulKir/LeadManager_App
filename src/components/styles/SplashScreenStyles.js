import { StyleSheet } from "react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  CenterLogoSize : {
   width : wp(81),
   height:hp(9)
  }
});

const SplashStyles = () => {
  return {
    styles,
  };
};

export default SplashStyles;
