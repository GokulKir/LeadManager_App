import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

import HomeScreen from '../screens/HomeScreen';
import SplashScreen from '../screens/SplashScreen';

function MyDrawer() {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name='Home' component={HomeScreen}/>
        </Drawer.Navigator>
    )
}

export default MyDrawer