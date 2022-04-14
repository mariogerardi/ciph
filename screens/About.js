import * as React from 'react';
import { StyleSheet, TouchableOpacity, SafeAreaView, Text, View, Image, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function About() {

    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.home}>
            <View>
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
            <Text style={styles.logo}>About</Text>
            <Text style={styles.text}>Ciphe was dually inspired by my love of crossword puzzles and the word game Wordle, developed by Welsh software engineer Josh Wardle. It was created using React Native, by a dedicated and caffeinated developer that appreciates you for reading the About section.</Text>
        </SafeAreaView>
    );
}

export default About;

const styles = StyleSheet.create({
    home: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo: {
        marginTop: 55,
        marginBottom: 15,
        fontSize: 60,
        fontFamily: 'KohinoorTelugu-Light'
    },
    text: {
        marginHorizontal: 20,
        marginBottom: 10,
        fontSize: 20,
        fontFamily: 'KohinoorTelugu-Light',
        textAlign: 'justify'
    },
    button: {
        height: 60,
        width: 60,
    },
    back: {
        width: 60,
        height: 60,
        position: 'absolute',
        right: 100,
    }
})