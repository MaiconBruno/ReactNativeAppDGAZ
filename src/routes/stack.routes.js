import { createNativeStackNavigator } from '@react-navigation/native-stack';

const { Screen, Navigator } = createNativeStackNavigator();

import LoginScreen from '../screens/login_screen';
import MainScreen from '../screens/main_screen';
import MediaScreen from '../screens/social_media_screen';
import Faq from '../screens/faq_screen';
import ReportsScreen from '../screens/report_panel_screen';
import ContactScreen from '../screens/contact_screen';
import ServicesScreen from '../screens/services_screen';

export function StackRoutes() {
    return (
        <Navigator screenOptions={
            {
                headerTitleAlign: 'center',
                animation:'slide_from_right',
                headerBlurEffect: 'systemChromeMaterialDark',
                statusBarAnimation: 'slide',
            }
        }>
             <Screen name="login" component={LoginScreen}
                options={
                    {
                        headerShown: false,
                    }
                }
            /> 
            <Screen name="app"
                options={
                    {
                        title: 'Tela inicial',
                        headerShown: false,
                    }
                }
                component={MainScreen} />
            <Screen name="midia" options={{ title: 'Mídias' }} component={MediaScreen} />
            <Screen name="faq" options={{ title: 'Perguntas Frequentes' }} component={Faq} />
            <Screen name="report" options={{ title: 'Relatórios' }} component={ReportsScreen} />
            <Screen name="service" options={{ title: 'Serviços' }} component={ServicesScreen} />
            <Screen name="contact" options={{ title: 'Contatos' }} component={ContactScreen} />
        </Navigator>
    )
}