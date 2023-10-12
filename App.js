import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { useRecoilState } from 'recoil';
import { isAuthenticatedState } from './src/Recoil/recoil';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { createStackNavigator } from "@react-navigation/stack";
import { RecoilRoot } from "recoil";

const Stack = createStackNavigator();

// All Screens
import SplashScreen from './src/screens/SplashScreen';
import HomeScreen from './src/screens/HomeScreen';
import CodeScanner from './src/screens/CodeScanner';
// All Screens

export const AuthStack = () => {
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
}

export default function App() {
  return (
    <RecoilRoot>
      <AppContent />
    </RecoilRoot>
  );
}

function AppContent() {
  const [isAuthenticated, setIsAuthenticated] = useRecoilState(isAuthenticatedState);

  React.useEffect(() => {
    checkAuthStatus();
  }, []);

  const checkAuthStatus = async () => {
    try {
      const token = await AsyncStorage.getItem('scannedData');
      if (token) {
        setIsAuthenticated(true);
      }
    } catch (error) {
      console.error('Error retrieving token:', error);
    }
  };

  return (
    <NavigationContainer>
      {isAuthenticated ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
}
