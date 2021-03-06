import * as React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import puzzles from '../assets/puzzles';

function Congrats({route}) {

    const navigation = useNavigation();

    function difficulty(data) {
        if (data.value - 1 < 20) {
            return styles.easy;
        }
        if (data.value - 1 < 40) {
            return styles.medium;
        }
        if (data.value - 1 < 60) {
            return styles.hard;
        }
        if (data.value - 1 < 80) {
            return styles.very_hard;
        }
    }

    const setLevelComplete = async () => {
        try {
            const item = JSON.stringify(route.params.value);
            await AsyncStorage.setItem(`${item}`, "1")
        } catch(e) {
        }
    }

    React.useEffect(() => { 
        setLevelComplete();
    }, [])

    return (
        <View style={[styles.congrats, difficulty(route.params)]}>
            <Text style={styles.header}>Congratulations!</Text>
            <Text style={styles.text}>{route.params.data} was the correct answer.</Text>
            <TouchableOpacity
                style={styles.back}
                onPress={() => navigation.navigate("Select")}>
                <Text style={styles.backText}>Continue</Text>
                <Image
                    style={styles.button}
                    source={require("../assets/arrow.png")}/>
            </TouchableOpacity>
            <Text style={styles.funFact}>Fun fact: {puzzles[route.params.value - 1].funFact}</Text>
        </View>
    )
}

export default Congrats;

const styles = StyleSheet.create({
    congrats: {
        height: '100%',
        alignItems: 'center',
    },
    header: {
        top: 200,
        textAlign: 'center',
        fontFamily: 'KohinoorTelugu-Regular',
        fontSize: 42,
        color: 'white'
    },
    text: {
        top: 210,
        textAlign: 'center',
        fontFamily: 'KohinoorTelugu-Light',
        fontSize: 28,
        marginHorizontal: 25,
        color: 'white'
    },
    funFact: {
        top: 325,
        textAlign: 'center',
        fontFamily: 'KohinoorTelugu-Light',
        fontSize: 18,
        marginHorizontal: 25,
        color: 'white'
    },
    back: {
        width: '55%',
        height: 80,
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
        top: 260,
    },
    backText: {
        fontFamily: 'KohinoorTelugu-Light',
        fontSize: 35,
        color: 'white'
    },
    button: {
        width: 50,
        height: 50,
        padding: 10,
        tintColor: 'white',
        transform: [{scaleX: -1}]
    },
    easy: {
        backgroundColor: '#30A47C',
    },
    medium: {
        backgroundColor: '#50ACE5',
    },
    hard: {
        backgroundColor: '#F4901C',
    },
    very_hard: {
        backgroundColor: '#403C95',
    }
})