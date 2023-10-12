import { StyleSheet } from "react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import usePlatform from "../../hooks/usePlatform";


const useStyle = () => {
  const {isTablet} = usePlatform();

  useEffect(() => {
    if (isTablet) {
      console.log('This is a tablet');
    } else {
      console.log('This is a mobile device');
    }
  });

}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  SecondContainer : {
    flex:1 ,
    alignItems:'center' ,
  } ,
  textStyleTop : {
    fontSize:RFPercentage(3) ,
    fontWeight:'300' ,
    color:'#000'
  },
  textStyleTopSec : {
    fontSize:RFPercentage(2) ,
    fontWeight:'300' ,
    color:'grey'
  } ,
  CenterBox : {
    alignItems:'center' ,

  } ,
  BoxSize : {
    width : wp(95) ,
    height:hp(80),
    borderWidth:0.4 ,
    borderColor:'grey' ,
    marginTop:30,
    elevation:2
    
  }

});

const HomeScreenStyle = () => {
  return {
    styles,
  };
};

export default HomeScreenStyle;