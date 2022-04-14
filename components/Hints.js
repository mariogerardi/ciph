import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native'
import puzzles from '../assets/puzzles';

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

function Hints({data}) {
    return (
        <View style={[styles.hints, difficulty(data)]}>
            <Text style={styles.hint}>{puzzles[data.value - 1].clueHints[0]}</Text>
            <Text style={styles.hint}>{puzzles[data.value - 1].clueHints[1]}</Text>
            <Text style={styles.hint}>{puzzles[data.value - 1].clueHints[2]}</Text>
            <Text style={styles.hint}>{puzzles[data.value - 1].clueHints[3]}</Text>
        </View>
    )
}

export default Hints;

const styles = StyleSheet.create({
    hints: {
        height: 375,
        paddingVertical: 7.5,
        paddingHorizontal: 15,
    },
    hint: {
        color: 'white',
        marginVertical: 2.5,
        fontSize: 15,
        fontFamily: 'KohinoorTelugu-Light',
        fontWeight: "500",
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