import * as React from 'react';
import { StyleSheet, TouchableOpacity, SafeAreaView, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function HomeScreen() {

    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.home}>
            <Text style={styles.logo}>CIPHE</Text>
            <TouchableOpacity
                title="Levels"
                style={[styles.button, styles.easy, styles.tilt_right]}
                onPress={() => navigation.navigate('Select')}>
                <Text style={styles.buttonText}>Levels</Text>
            </TouchableOpacity>
            <TouchableOpacity
                title="Levels"
                style={[styles.button, styles.medium, styles.tilt_left]}
                onPress={() => navigation.navigate('Tutorial', {
                    index: 0
                })}>
                <Text style={styles.buttonText}>How to Play</Text>
            </TouchableOpacity>
            <TouchableOpacity
                title="Levels"
                style={[styles.button, styles.hard, styles.tilt_right]}
                onPress={() => navigation.navigate('About')}>
                <Text style={styles.buttonText}>About</Text>
            </TouchableOpacity>
            <TouchableOpacity
                title="Levels"
                style={[styles.button, styles.very_hard, styles.tilt_left]}
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
        marginTop: 75,
        marginBottom: 100,
        fontSize: 60,
        fontFamily: 'KohinoorTelugu-Light'
    },
    button: {
        width: 250,
        height: 75,
        borderRadius: 20,
        marginBottom: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        fontSize: 35,
        fontFamily: 'KohinoorTelugu-Light',
        fontWeight: "400",
        color: 'white'
    },
    easy: {
        backgroundColor: '#30A47C',
    },
    medium: {
        backgroundColor: '#50ACE5',
    },
    hard: {
        backgroundColor: '#D4903C',
    },
    very_hard: {
        backgroundColor: '#403C95',
    },
    tilt_left: {
        transform: [{rotate: "2deg"}]
    },
    tilt_right: {
        transform: [{rotate: "-2deg"}]
    }
})