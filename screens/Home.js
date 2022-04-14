import * as React from 'react';
import { StyleSheet, TouchableOpacity, SafeAreaView, View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function HomeScreen() {

    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.home}>
            <View style={styles.logo}>
                <View style={[styles.letterBox, styles.easy, styles.border_easy]}>
                <Text style={styles.logoLetter}>C</Text>
                </View>
                <View style={[styles.letterBox, styles.medium, styles.border_medium]}>
                <Text style={styles.logoLetter}>I</Text>
                </View>
                <View style={[styles.letterBox, styles.hard, styles.border_hard]}>
                <Text style={styles.logoLetter}>P</Text>
                </View>
                <View style={[styles.letterBox, styles.very_hard, styles.border_very_hard]}>
                <Text style={styles.logoLetter}>H</Text>
                </View>
            </View>
            <TouchableOpacity
                title="Levels"
                style={[styles.button, styles.easy]}
                onPress={() => navigation.navigate('Select')}>
                <Text style={[styles.buttonText]}>Levels</Text>
            </TouchableOpacity>
            <TouchableOpacity
                title="Levels"
                style={[styles.button, styles.medium]}
                onPress={() => navigation.navigate('Tutorial', {
                    index: 0
                })}>
                <Text style={[styles.buttonText]}>How to Play</Text>
            </TouchableOpacity>
            <TouchableOpacity
                title="Levels"
                style={[styles.button, styles.hard]}
                onPress={() => navigation.navigate('About')}>
                <Text style={[styles.buttonText]}>About</Text>
            </TouchableOpacity>
            <TouchableOpacity
                title="Levels"
                style={[styles.button, styles.very_hard]}
                onPress={() => navigation.navigate('Settings')}>
                <Text style={[styles.buttonText]}>Settings</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

export default HomeScreen;

const styles = StyleSheet.create({
    home: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        height: '100%'
    },
    logo: {
        marginBottom: 100,
        flexDirection: 'row',
        alignSelf: 'center'
    },
    letterBox: {
        borderRadius: 10,
        marginHorizontal: 2.5,
    },
    logoLetter: {
        fontSize: 60,
        fontFamily: 'KohinoorTelugu-Light',
        textAlign: 'center',
        width: 65,
        height: 85,
        color: 'white',
        fontWeight: '900',
        marginHorizontal: 7.5,
    },
    button: {
        width: '85%',
        height: 75,
        borderRadius: 15,
        marginBottom: 25,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        fontSize: 35,
        fontFamily: 'KohinoorTelugu-Light',
        fontWeight: '900',
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
})