import * as React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import Answer from '../components/Answer';
import Clues from '../components/Clues';
import Hints from '../components/Hints'

function Level({ route }) {

    const navigation = useNavigation();

    let value = route.params.index + 1;
    let data = {value: value}

    return (
        <View>
            <View style={styles.header}>
                <TouchableOpacity
                    style={styles.back}
                    onPress={() => navigation.pop()}
                >
                    <Image
                        style={styles.button}
                        source={require("../assets/arrow.png")}
                    />
                </TouchableOpacity>
                <Text style={styles.levelId}>Level {value}</Text>
            </View>
            <Answer data={data}/>
            <Clues data={data}/>
            <Hints data={data}/>
        </View>
    );
}

export default Level;

const styles = StyleSheet.create({
    header: {
        height: 70,
        marginTop: 25,
    },
    back: {
        width: 45,
        height: 45,
    },
    button: {
        height: 45,
        width: 45,
        position: 'absolute',
        top: 20,
        left: 25,
    },
    levelId: {
        marginTop: -25,
        alignSelf: 'center',
        fontSize: 30,
        fontFamily: 'KohinoorTelugu-Light',
        fontWeight: "600",
    }
})