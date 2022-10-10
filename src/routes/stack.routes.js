import {createNativeStackNavigator} from '@react-navigation/native-stack';

const { Screen, Navigator } = createNativeStackNavigator();

import LoginScreen from '../screens/login_screen';
import MainScreen from '../screens/main_screen';
import MediaScreen from '../screens/social_media_screen';


export function StackRoutes(){
    return(
        <Navigator>
            <Screen name="login" component={LoginScreen}/>
            <Screen name="mainScreen" component={MainScreen}/>
            <Screen name="mediaScreen" component={MediaScreen}/>
        </Navigator>
    )
}