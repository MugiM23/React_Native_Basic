import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginComponent from '../AuthScreens/LoginComponent';
import HomeComponent from '../AppScreens/HomeComponent';
import UserDetailsComponent from '../AppScreens/UserDetailsComponent';


const Stack = createNativeStackNavigator();

export const AppScreens = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={HomeComponent} options={{ headerTitle: 'Home', headerShown: true }} />
            <Stack.Screen name="Details" component={UserDetailsComponent} options={{ headerTitle: 'Details', headerShown: true }} />

        </Stack.Navigator>
    )
}

export const AuthScreens = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Login" component={LoginComponent} />
        </Stack.Navigator>
    )
}