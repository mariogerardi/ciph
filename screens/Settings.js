import * as React from 'react';
import { StyleSheet, TouchableOpacity, SafeAreaView, Text, View, Image, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

function Settings() {

    const navigation = useNavigation();

    const areYouSure = () =>
    Alert.alert(
      "Are you sure?",
      "This will erase all data, and cannot be undone.",
      [
        { text: "Nevermind"},
        {
          text: "Yes, Delete",
          onPress: () => clearAll()
        }
      ]
    );

    const confirmation = () =>
    Alert.alert(
      "Data Cleared",
      "Your data has been erased.",
      [
        { 
        text: "OK" ,
        onPress: () => navigation.navigate("Home")
        }
      ]
    );

    async function clearAll() {
        try {
            await AsyncStorage.clear();
            confirmation();
        } catch {
            confirmation();
        }
    } 

    return (
        <SafeAreaView style={styles.home}>
            <View style={styles.header}>
                <TouchableOpacity 
                    style={styles.back}
                    onPress={() => navigation.navigate("Home")}
                    >
                    <Image 
                        style={styles.button} 
                        source={require("../assets/arrow.png")}
                    />
                </TouchableOpacity>
            </View>
            <Text style={styles.logo}>Settings</Text>
            <TouchableOpacity
                title="Levels"
                style={styles.button1}
                onPress={() => areYouSure()}>
                <Text style={styles.buttonText}>Clear All Data</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

export default Settings;

const styles = StyleSheet.create({
    home: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo: {
        marginVertical: 75,
        fontSize: 60,
        fontFamily: 'KohinoorTelugu-Light'
    },
    header: {
        marginTop: 0,
        height: 70,
    },
    button: {
        height: 60,
        width: 60,
    },
    button1: {
        width: 250,
        height: 75,
        backgroundColor: '#C00C25',
        borderRadius: 20,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transform: [{rotate: '-2deg'}],
        marginVertical: 50
    },
    buttonText: {
        fontSize: 35,
        fontFamily: 'KohinoorTelugu-Light',
        fontWeight: "400",
        color: 'white'
    },
    back: {
        width: 60,
        height: 60,
        position: 'absolute',
        right: 100,
    }
})