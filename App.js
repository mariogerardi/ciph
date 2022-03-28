import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/Home';
import SelectScreen from './screens/Select';

const Stack = createNativeStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator 
                initialRouteName="Home">
                <Stack.Screen 
                    name="Home" component={HomeScreen} />
                <Stack.Screen 
                    name="Details" component={SelectScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;