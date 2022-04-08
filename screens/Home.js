import * as React from 'react';
import { StyleSheet, TouchableOpacity, SafeAreaView, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function HomeScreen() {

    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.home}>
            <Text style={styles.logo}>Word Game</Text>
            <TouchableOpacity
                title="Levels"
                style={styles.button1}
                onPress={() => navigation.navigate('Select')}>
                <Text style={styles.buttonText}>Levels</Text>
            </TouchableOpacity>
            <TouchableOpacity
                title="Levels"
                style={styles.button2}
                onPress={() => navigation.navigate('Select')}>
                <Text style={styles.buttonText}>How to Play</Text>
            </TouchableOpacity>
            <TouchableOpacity
                title="Levels"
                style={styles.button3}
                onPress={() => navigation.navigate('Select')}>
                <Text style={styles.buttonText}>About</Text>
            </TouchableOpacity>
            <TouchableOpacity
                title="Levels"
                style={styles.button4}
                onPress={() => navigation.navigate('Settings')}>
                <Text style={styles.buttonText}>Settings</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

export default HomeScreen;

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
    button1: {
        width: 250,
        height: 75,
        backgroundColor: '#30A47C',
        borderRadius: 20,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transform: [{rotate: '2deg'}]
    },
    button2: {
        width: 250,
        height: 75,
        backgroundColor: '#50ACE5',
        borderRadius: 20,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transform: [{rotate: '-2deg'}],
        marginVertical: 50
    },
    button3: {
        width: 250,
        height: 75,
        backgroundColor: '#D4903C',
        borderRadius: 20,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transform: [{rotate: '2deg'}]
    },
    button4: {
        width: 250,
        height: 75,
        backgroundColor: '#403C95',
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
    }
})