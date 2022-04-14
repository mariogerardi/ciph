import * as React from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import puzzles from '../assets/puzzles';

const easy = '#30A47C'
const medium = '#50ACE5'
const hard = '#D4903C'
const very_hard = '#403C95'

function Clues({data}) {

    let indexVal = data.value - 1

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

    function numberify(row) {
        let rowInQuestion = puzzles[indexVal].clues[row]
        let firstIndex = rowInQuestion.indexOf("0")
        for (let i = 0; i < rowInQuestion.length; i++) {
            if (firstIndex === i) {
                rowInQuestion.splice(i, 1, row + 1)
            }
        }
    }

    function clue(row, index) {
        if (puzzles[indexVal].clues[row][index] === "?") {
            return (
                <View style={styles.emptyBox}></View>
            )
        }
        if (puzzles[indexVal].clues[row][index] === "!") {
            return (
                <View style={styles.inputBox}>
                    <TextInput
                        autoCapitalize = {"characters"}
                        style={styles.letterInputLight}
                        maxLength={1}
                        autoCorrect={false}>
                    </TextInput>
                </View>
            )
        }
        if (typeof puzzles[indexVal].clues[row][index] === "number") {
            if (index >= 4) {
                if (puzzles[indexVal].clues[row][index - 1] !== "?") {
                    return (
                        <View style={styles.numberBox}>
                            <Text style={styles.numberInputRight}>{puzzles[indexVal].clues[row][index]}</Text>
                        </View>
                    )
                } else {
                    return (
                        <View style={styles.numberBox}>
                            <Text style={styles.numberInputLeft}>{puzzles[indexVal].clues[row][index]}</Text>
                        </View>
                    )
                }
            }
            if (index <= 3) {
                if (puzzles[indexVal].clues[row][index + 1] !== "?") {
                    return (
                        <View style={styles.numberBox}>
                            <Text style={styles.numberInputLeft}>{puzzles[indexVal].clues[row][index]}</Text>
                        </View>
                    )
                } else {
                    return (
                        <View style={styles.numberBox}>
                            <Text style={styles.numberInputRight}>{puzzles[indexVal].clues[row][index]}</Text>
                        </View>
                    )
                }
            }
        }
        else {
            return (
                <View style={styles.inputBox}>
                    <Text style={styles.letterInput}>{puzzles[indexVal].clues[row][index]}</Text>
                </View>
            )
        }
    }

    function allTheClues() {
        return (
            <View style={[styles.clues, difficulty(data)]}>
                <View style={styles.clueRow}>
                    {numberify(0)}
                    {clue(0, 0)}
                    {clue(0, 1)}
                    {clue(0, 2)}
                    {clue(0, 3)}
                    {clue(0, 4)}
                    {clue(0, 5)}
                    {clue(0, 6)}
                    {clue(0, 7)}
                </View>
                <View style={styles.clueRow}>
                    {numberify(1)}
                    {clue(1, 0)}
                    {clue(1, 1)}
                    {clue(1, 2)}
                    {clue(1, 3)}
                    {clue(1, 4)}
                    {clue(1, 5)}
                    {clue(1, 6)}
                    {clue(1, 7)}
                </View>
                <View style={styles.clueRow}>
                    {numberify(2)}
                    {clue(2, 0)}
                    {clue(2, 1)}
                    {clue(2, 2)}
                    {clue(2, 3)}
                    {clue(2, 4)}
                    {clue(2, 5)}
                    {clue(2, 6)}
                    {clue(2, 7)}
                </View>
                <View style={styles.clueRow}>
                    {numberify(3)}
                    {clue(3, 0)}
                    {clue(3, 1)}
                    {clue(3, 2)}
                    {clue(3, 3)}
                    {clue(3, 4)}
                    {clue(3, 5)}
                    {clue(3, 6)}
                    {clue(3, 7)}
                </View>
            </View>
        )
    };

    return (
        <View>
            {allTheClues()}
        </View>
    )
}

export default (Clues);

const styles = StyleSheet.create({
    clues: {
        paddingTop: 35,
    },
    clueRow: {
        display: 'flex',
        flexDirection: 'row',
        marginHorizontal: 10,
        marginVertical: 5,
        justifyContent: 'space-between'
    },
    inputBox: {
        width: 42,
        height: 42,
        backgroundColor: '#f9f9f9',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 4,
    },
    numberBox: {
        width: 42,
        height: 42,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        borderRadius: 4,
    },
    emptyBox: {
        width: 42,
        height: 42,
    },
    letterInput: {
        width: 42,
        fontSize: 24,
        fontFamily: 'KohinoorTelugu-Light',
        fontWeight: "400",
        textAlign: 'center'
    },
    numberInputRight: {
        fontSize: 18,
        marginRight: 25,
        fontFamily: 'KohinoorTelugu-Light',
        fontWeight: "500",
        color: 'white'
    },
    numberInputLeft: {
        fontSize: 18,
        marginLeft: 25,
        fontFamily: 'KohinoorTelugu-Light',
        fontWeight: "500",
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