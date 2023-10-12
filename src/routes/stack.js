import { createStackNavigator } from "@react-navigation/stack";
import { RecoilRoot } from "recoil";

const Stack = createStackNavigator();

//All Screens//
import SplashScreen from "../screens/SplashScreen";
import HomeScreen from "../screens/HomeScreen";
import MyDrawer from "./drawer";
import CodeScanner from "../screens/CodeScanner";
//All Screens//

export function AuthStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Splash"
        component={SplashScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Scanner"
        component={CodeScanner}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          headerStyle: {
            backgroundColor: "#fff",
            borderBottomWidth: 1,
          },
        }}
      />
    </Stack.Navigator>
  );
}

export const AppStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          headerStyle: {
            backgroundColor: "#fff",
            borderBottomWidth: 1,
          },
        }}
      />
    </Stack.Navigator>
  );
};

// export function AuthStack() {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen
//         name="Home"
//         component={HomeScreen}
//         options={{
//           headerShown: false,
//           headerStyle: {
//             backgroundColor: "#fff",
//             borderBottomWidth: 1,
//           },
//         }}
//       />
//     </Stack.Navigator>
//   );
// }
