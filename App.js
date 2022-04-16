import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/Home';
import SelectScreen from './screens/Select';
import Level from './screens/Level';
import Settings from './screens/Settings'
import Tutorial from './screens/Tutorial'
import About from './screens/About'
import Congrats from './screens/Congrats'
import { LogBox } from 'react-native';

LogBox.ignoreLogs([]);

const Stack = createNativeStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator 
                initialRouteName="Home"
                screenOptions={{headerShown: false}}>
                <Stack.Screen 
                    name="Home" component={HomeScreen} />
                <Stack.Screen 
                    name="Select" component={SelectScreen} />
                <Stack.Screen 
                    name="Level" component={Level} />
                <Stack.Screen 
                    name="Congrats" component={Congrats} />
                <Stack.Screen 
                    name="Tutorial" component={Tutorial} />
                <Stack.Screen 
                    name="About" component={About} />
                <Stack.Screen 
                    name="Settings" component={Settings} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;