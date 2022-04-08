import * as React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, ScrollView, View, Text, Pressable, Image, TextInput } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import puzzles from '../components/puzzles';

console.log(puzzles[0])

const easy = '#30A47C'
const medium = '#50ACE5'
const hard = '#D4903C'
const very_hard = '#403C95'

const easy_header = '#30A47C'
const medium_header = '#70ACE5'
const hard_header = '#D4903C'
const very_hard_header = '#403C95'

function Level({ route }) {

    const navigation = useNavigation();

    const puzzles = [
        {
            puzzleId: 1,
            theme: "Animals",
            answer: ["E", "L", "E", "P", "H", "A", "N", "T"],
            clue1: ["?", "?", "?", "?", "!", "E", "!", "?"],
            clue2: ["?", "!", "!", "O", "P", "!", "R", "D"],
            clue3: ["!", "!", "K", "?", "?", "?", "?", "?"],
            clue4: ["?", "?", "?", "?", "!", "!", "W", "K"],
            clueHints: ["1. A domesticated female bird", "2. Can reach speeds of up to 36 miles per hour", "3. One of the largest species in the deer family", "4. A bird of prey"],
            statusTitle: "Take a guess!",
            encouragement: "You got this!",
            funFact: "Elephants are the largest land animals on Earth!",
        },
        {
            puzzleId: 2,
            theme: "Countries",
            answer: ["M", "A", "L", "A", "Y", "S", "I", "A"],
            clue1: ["!", "!", "!", "T", "A", "?", "?", "?"],
            clue2: ["?", "?", "!", "!", "O", "!", "?", "?"],
            clue3: ["?", "?", "!", "!", "T", "V", "!", "!"],
            clue4: ["?", "!", "!", "G", "E", "R", "!", "!"],
            clueHints: ["1. A European archipelago", "2. This country shares a border with Thailand", "3. The capital of this country is Riga", "4. The tenth largest country by area"],
            statusTitle: "What's your guess?",
            encouragement: "and no looking at any maps!",
            funFact: "70% of the population of Malaysia is urban.",
        },
        {
            puzzleId: 3,
            theme: "Mythical Creatures",
            answer: ["W", "E", "R", "E", "W", "O", "L", "F"],
            clue1: ["?", "?", "?", "?", "?", "E", "!", "!"],
            clue2: ["O", "G", "!", "!", "?", "?", "?", "?"],
            clue3: ["?", "?", "?", "T", "R", "!", "!", "L"],
            clue4: ["N", "!", "!", "!", "I", "D", "?", "?"],
            clueHints: ["1. A pointy-eared humanoid being", "2. A large humanoid being with great strength", "3. A magical creature that lives in the hills", "4. A sea nymph of the Mediterranean"],
            statusTitle: "and your answer is...",
            encouragement: "...don't worry, I'm patient.",
            funFact: "A werewolf's transformation is often associated with the appearance of a full moon.",
        },
        {
            puzzleId: 4,
            theme: "Musical Instruments",
            answer: ["M", "A", "N", "D", "O", "L", "I", "N"],
            clue1: ["?", "?", "V", "I", "!", "!", "!", "!"],
            clue2: ["B", "!", "!", "J", "!", "?", "?", "?"],
            clue3: ["H", "!", "!", "!", "P", "A", "N", "?"],
            clue4: ["?", "?", "O", "B", "!", "E", "?", "?"],
            clueHints: ["1. A four-stringed instrument", "2. A five-stringed instrument", "3. A subset of steelpan instruments", "4. A double-reed woodwind instrument"],
            statusTitle: "Compose an Answer...",
            encouragement: "...or just play it by ear.",
            funFact: "While a violin has four strings and a banjo has five, a mandolin has eight!",
        },
        {
            puzzleId: 5,
            theme: "Metals",
            answer: ["A", "L", "U", "M", "I", "N", "U", "M"],
            clue1: ["?", "?", "?", "Z", "!", "!", "C", "?"],
            clue2: ["?", "?", "?", "T", "!", "!", "?", "?"],
            clue3: ["?", "!", "I", "T", "H", "I", "!", "!"],
            clue4: ["!", "!", "L", "O", "Y", "?", "?", "?"],
            clueHints: ["1. This metal is good for your immune system", "2. Pewter is almost entirely composed of this", "3. This metal has an atomic number of 3", "4. A composition of two or more metals"],
            statusTitle: "F",
            encouragement: "...or just play it by ear.",
            funFact: "Aluminum is the third most abundant element in the earth's crust, after oxygen and silicon.",
        },
        {
            puzzleId: 6,
            theme: "Occupations",
            answer: ["M", "E", "C", "H", "A", "N", "I", "C"],
            clue1: ["?", "?", "!", "L", "E", "R", "!", "!"],
            clue2: ["?", "?", "!", "!", "E", "F", "?", "?"],
            clue3: ["!", "!", "D", "I", "C", "?", "?", "?"],
            clue4: ["?", "?", "!", "R", "I", "T", "!", "!"],
            clueHints: ["1. A religious leader or priest", "2. Trained in food preparation", "3. Administers first-aid at combat sites", "4. Someone who judges artwork professionally"],
            statusTitle: "Think of something...",
            encouragement: "...or you're fired!",
            funFact: "Queen Elizabeth II trained to be a mechanic and truck driver during WWII.",
        },
    ];

    let value = route.params.index + 1;

    const inputId1 = React.useRef();
    const inputId2 = React.useRef();
    const inputId3 = React.useRef();
    const inputId4 = React.useRef();
    const inputId5 = React.useRef();
    const inputId6 = React.useRef();
    const inputId7 = React.useRef();
    const inputId8 = React.useRef();

    function levelTheme() {
        return (
            <View style={themeDifficulty()}>
                <Text style={styles.themeText}>{puzzles[route.params.index].theme}</Text>
                {answerBox()}
            </View>
        )
    }

    function themeDifficulty() {
        if (value < 21) {
            return styles.themeBoxEasy;
        }
        if (value < 41) {
            return styles.themeBoxMedium;
        }
        if (value < 61) {
            return styles.themeBoxHard;
        }
        if (value < 81) {
            return styles.themeBoxVeryHard;
        }
    }

    function cluesDifficulty() {
        if (value < 21) {
            return styles.cluesEasy;
        }
        if (value < 41 && value > 20) {
            return styles.cluesMedium;
        }
        if (value < 61 && value > 40) {
            return styles.cluesHard;
        }
        if (value < 81 && value > 60) {
            return styles.cluesVeryHard;
        }
    }

    function hintsDifficulty() {
        if (value < 21) {
            return styles.hintsEasy;
        }
        if (value < 41 && value > 20) {
            return styles.hintsMedium;
        }
        if (value < 61 && value > 40) {
            return styles.hintsHard;
        }
        if (value < 81 && value > 60) {
            return styles.hintsVeryHard;
        }
    }

    function statusDifficulty() {
        if (value < 21) {
            return styles.statusEasy;
        }
        if (value < 41 && value > 20) {
            return styles.statusMedium;
        }
        if (value < 61 && value > 40) {
            return styles.statusHard;
        }
        if (value < 81 && value > 60) {
            return styles.statusVeryHard;
        }
    }

    function numberify1(j) {
        let firstIndex = puzzles[route.params.index].clue1.indexOf("?")
        let lastIndex = puzzles[route.params.index].clue1.lastIndexOf("?")
        if (lastIndex === 7 && firstIndex === 3) {
            puzzles[route.params.index].clue1.splice(3, 1, j)
        }
        if (firstIndex === 0 && lastIndex === 4) {
            puzzles[route.params.index].clue1.splice(4, 1, j)
        }
        if (lastIndex < 4 && puzzles[route.params.index].clue1[lastIndex + 1] !== "?") {
            puzzles[route.params.index].clue1.splice(lastIndex, 1, j)
        } else if (firstIndex > 3 && puzzles[route.params.index].clue1[firstIndex - 1] !== "?") {
            puzzles[route.params.index].clue1.splice(firstIndex, 1, j)
        } else if (lastIndex > 4 && puzzles[route.params.index].clue1[lastIndex - 1] !== "?") {
            puzzles[route.params.index].clue1.splice(lastIndex, 1, j)
        } else if (firstIndex < 3 && puzzles[route.params.index].clue1[firstIndex + 1] !== "?") {
            puzzles[route.params.index].clue1.splice(firstIndex, 1, j)
        } else if (firstIndex === 0 && lastIndex === 7) {
            if (puzzles[route.params.index].clue1[lastIndex - 2] !== "?") {
                puzzles[route.params.index].clue1.splice(lastIndex - 1, 1, j)
            } else if (puzzles[route.params.index].clue1[firstIndex + 2] !== "?") {
                puzzles[route.params.index].clue1.splice(firstIndex + 1, 1, j)
            }
        }
    }

    function numberify2(j) {
        let firstIndex = puzzles[route.params.index].clue2.indexOf("?")
        let lastIndex = puzzles[route.params.index].clue2.lastIndexOf("?")
        if (lastIndex === 7 && firstIndex === 3) {
            puzzles[route.params.index].clue2.splice(3, 1, j)
        }
        if (firstIndex === 0 && lastIndex === 4) {
            puzzles[route.params.index].clue2.splice(3, 1, j)
        }
        if (lastIndex < 4 && puzzles[route.params.index].clue2[lastIndex + 1] !== "?") {
            puzzles[route.params.index].clue2.splice(lastIndex, 1, j)
        } else if (firstIndex > 3 && puzzles[route.params.index].clue2[firstIndex - 1] !== "?") {
            puzzles[route.params.index].clue2.splice(firstIndex, 1, j)
        } else if (lastIndex > 4 && puzzles[route.params.index].clue2[lastIndex - 1] !== "?") {
            puzzles[route.params.index].clue2.splice(lastIndex, 1, j)
        } else if (firstIndex < 3 && puzzles[route.params.index].clue2[firstIndex + 1] !== "?") {
            puzzles[route.params.index].clue2.splice(firstIndex, 1, j)
        } else if (firstIndex === 0 && lastIndex === 7) {
            if (puzzles[route.params.index].clue2[lastIndex - 2] !== "?") {
                puzzles[route.params.index].clue2.splice(lastIndex - 1, 1, j)
            } else if (puzzles[route.params.index].clue2[firstIndex + 2] !== "?") {
                puzzles[route.params.index].clue2.splice(firstIndex + 1, 1, j)
            }
        }
    }

    function numberify3(j) {
        let firstIndex = puzzles[route.params.index].clue3.indexOf("?")
        let lastIndex = puzzles[route.params.index].clue3.lastIndexOf("?")
        if (lastIndex === 7 && firstIndex === 3) {
            puzzles[route.params.index].clue3.splice(3, 1, j)
        }
        if (firstIndex === 0 && lastIndex === 4) {
            puzzles[route.params.index].clue3.splice(3, 1, j)
        }
        if (lastIndex < 4 && puzzles[route.params.index].clue3[lastIndex + 1] !== "?") {
            puzzles[route.params.index].clue3.splice(lastIndex, 1, j)
        } else if (firstIndex > 3 && puzzles[route.params.index].clue3[firstIndex - 1] !== "?") {
            puzzles[route.params.index].clue3.splice(firstIndex, 1, j)
        } else if (lastIndex > 4 && puzzles[route.params.index].clue3[lastIndex - 1] !== "?") {
            puzzles[route.params.index].clue3.splice(lastIndex, 1, j)
        } else if (firstIndex < 3 && puzzles[route.params.index].clue3[firstIndex + 1] !== "?") {
            puzzles[route.params.index].clue3.splice(firstIndex, 1, j)
        } else if (firstIndex === 0 && lastIndex === 7) {
            if (puzzles[route.params.index].clue3[lastIndex - 2] !== "?") {
                puzzles[route.params.index].clue3.splice(lastIndex - 1, 1, j)
            } else if (puzzles[route.params.index].clue3[firstIndex + 2] !== "?") {
                puzzles[route.params.index].clue3.splice(firstIndex + 1, 1, j)
            }
        }
    }

    function numberify4(j) {
        let firstIndex = puzzles[route.params.index].clue4.indexOf("?")
        let lastIndex = puzzles[route.params.index].clue4.lastIndexOf("?")
        if (lastIndex === 7 && firstIndex === 3) {
            puzzles[route.params.index].clue4.splice(3, 1, j)
        }
        if (firstIndex === 0 && lastIndex === 4) {
            puzzles[route.params.index].clue4.splice(3, 1, j)
        }
        if (lastIndex < 4 && puzzles[route.params.index].clue4[lastIndex + 1] !== "?") {
            puzzles[route.params.index].clue4.splice(lastIndex, 1, j)
        } else if (firstIndex > 3 && puzzles[route.params.index].clue4[firstIndex - 1] !== "?") {
            puzzles[route.params.index].clue4.splice(firstIndex, 1, j)
        } else if (lastIndex > 4 && puzzles[route.params.index].clue4[lastIndex - 1] !== "?") {
            puzzles[route.params.index].clue4.splice(lastIndex, 1, j)
        } else if (firstIndex < 3 && puzzles[route.params.index].clue4[firstIndex + 1] !== "?") {
            puzzles[route.params.index].clue4.splice(firstIndex, 1, j)
        } else if (firstIndex === 0 && lastIndex === 7) {
            if (puzzles[route.params.index].clue4[lastIndex - 2] !== "?") {
                puzzles[route.params.index].clue4.splice(lastIndex - 1, 1, j)
            } else if (puzzles[route.params.index].clue4[firstIndex + 2] !== "?") {
                puzzles[route.params.index].clue4.splice(firstIndex + 1, 1, j)
            }
        }
    }

    function answerBox() {
        return (
            <View style={styles.answerRow}>
                <View style={styles.inputBox}>
                    <TextInput
                        editable = {isEditable()}
                        autoCapitalize = {"characters"}
                        style={styles.letterInput}
                        maxLength={1}
                        ref={inputId1}
                        onChangeText={text => {keepTrack(1, text)}}
                        onKeyPress={({ nativeEvent }) => { if (nativeEvent.key === 'Backspace') { inputId1.current.focus(); setLetter1(null) } }}
                        autoCorrect={false}>
                    </TextInput>
                </View>
                <View style={styles.inputBox}>
                    <TextInput
                        editable = {isEditable()}
                        autoCapitalize = {"characters"}
                        style={styles.letterInput}
                        maxLength={1}
                        ref={inputId2}
                        onChangeText={text => {keepTrack(2, text)}}
                        onKeyPress={({ nativeEvent }) => { if (nativeEvent.key === 'Backspace') { inputId1.current.focus(); setLetter2(null) } }}
                        autoCorrect={false}>
                    </TextInput>
                </View>
                <View style={styles.inputBox}>
                    <TextInput
                        editable = {isEditable()}
                        autoCapitalize = {"characters"}
                        style={styles.letterInput}
                        maxLength={1}
                        ref={inputId3}
                        onChangeText={text => {keepTrack(3, text)}}
                        onKeyPress={({ nativeEvent }) => { if (nativeEvent.key === 'Backspace') { inputId2.current.focus(); setLetter3(null) } }}
                        autoCorrect={false}>
                    </TextInput>
                </View>
                <View style={styles.inputBox}>
                    <TextInput
                        editable = {isEditable()}
                        autoCapitalize = {"characters"}
                        style={styles.letterInput}
                        maxLength={1}
                        ref={inputId4}
                        onChangeText={text => {keepTrack(4, text)}}
                        onKeyPress={({ nativeEvent }) => { if (nativeEvent.key === 'Backspace') { inputId3.current.focus(); setLetter4(null)  } }}
                        autoCorrect={false}>
                    </TextInput>
                </View>
                <View style={styles.inputBox}>
                    <TextInput
                        editable = {isEditable()}
                        autoCapitalize = {"characters"}
                        style={styles.letterInput}
                        maxLength={1}
                        ref={inputId5}
                        onChangeText={text => {keepTrack(5, text)}}
                        onKeyPress={({ nativeEvent }) => { if (nativeEvent.key === 'Backspace') { inputId4.current.focus(); setLetter5(null)  } }}
                        autoCorrect={false}>
                    </TextInput>
                </View>
                <View style={styles.inputBox}>
                    <TextInput
                        editable = {isEditable()}
                        autoCapitalize = {"characters"}
                        style={styles.letterInput}
                        maxLength={1}
                        ref={inputId6}
                        onChangeText={text => {keepTrack(6, text)}}
                        onKeyPress={({ nativeEvent }) => { if (nativeEvent.key === 'Backspace') { inputId5.current.focus(); setLetter6(null)  } }}
                        autoCorrect={false}>
                    </TextInput>
                </View>
                <View style={styles.inputBox}>
                    <TextInput
                        editable = {isEditable()}
                        autoCapitalize = {"characters"}
                        style={styles.letterInput}
                        maxLength={1}
                        ref={inputId7}
                        onChangeText={text => {keepTrack(7, text)}}
                        onKeyPress={({ nativeEvent }) => { if (nativeEvent.key === 'Backspace') { inputId6.current.focus(); setLetter7(null) } }}
                        autoCorrect={false}>
                    </TextInput>
                </View>
                <View style={styles.inputBox}>
                    <TextInput
                        editable = {isEditable()}
                        autoCapitalize = {"characters"}
                        style={styles.letterInput}
                        maxLength={1}
                        ref={inputId8}
                        onChangeText={text => {keepTrack(8, text)}}
                        onKeyPress={({ nativeEvent }) => { if (nativeEvent.key === 'Backspace') { inputId7.current.focus(); setLetter8(null) } }}
                        autoCorrect={false}>
                    </TextInput>
                </View>
            </View>
        )
    }

    function clue1(index) {
        if (puzzles[route.params.index].clue1[index] === "?") {
            return (
                <View style={styles.emptyBox}></View>
            )
        }
        if (puzzles[route.params.index].clue1[index] === "!") {
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
        if (typeof puzzles[route.params.index].clue1[index] === "number") {
            if (index >= 4) {
                if (puzzles[route.params.index].clue1[index - 1] !== "?") {
                    return (
                        <View style={styles.numberBox}>
                            <Text style={styles.numberInputRight}>{puzzles[route.params.index].clue1[index]}</Text>
                        </View>
                    )
                } else {
                    return (
                        <View style={styles.numberBox}>
                            <Text style={styles.numberInputLeft}>{puzzles[route.params.index].clue1[index]}</Text>
                        </View>
                    )
                }
            }
            if (index <= 3) {
                if (puzzles[route.params.index].clue1[index + 1] !== "?") {
                    return (
                        <View style={styles.numberBox}>
                            <Text style={styles.numberInputLeft}>{puzzles[route.params.index].clue1[index]}</Text>
                        </View>
                    )
                } else {
                    return (
                        <View style={styles.numberBox}>
                            <Text style={styles.numberInputRight}>{puzzles[route.params.index].clue1[index]}</Text>
                        </View>
                    )
                }
            }
        }
        else {
            return (
                <View style={styles.inputBox}>
                    <Text style={styles.letterInput}>{puzzles[route.params.index].clue1[index]}</Text>
                </View>
            )
        }
    }

    function clue2(index) {
        if (puzzles[route.params.index].clue2[index] === "?") {
            return (
                <View style={styles.emptyBox}></View>
            )
        }
        if (puzzles[route.params.index].clue2[index] === "!") {
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
        if (typeof puzzles[route.params.index].clue2[index] === "number") {
            if (index >= 4) {
                if (puzzles[route.params.index].clue2[index - 1] !== "?") {
                    return (
                        <View style={styles.numberBox}>
                            <Text style={styles.numberInputRight}>{puzzles[route.params.index].clue2[index]}</Text>
                        </View>
                    )
                } else {
                    return (
                        <View style={styles.numberBox}>
                            <Text style={styles.numberInputLeft}>{puzzles[route.params.index].clue2[index]}</Text>
                        </View>
                    )
                }
            }
            if (index <= 3) {
                if (puzzles[route.params.index].clue2[index + 1] !== "?") {
                    return (
                        <View style={styles.numberBox}>
                            <Text style={styles.numberInputLeft}>{puzzles[route.params.index].clue2[index]}</Text>
                        </View>
                    )
                } else {
                    return (
                        <View style={styles.numberBox}>
                            <Text style={styles.numberInputRight}>{puzzles[route.params.index].clue2[index]}</Text>
                        </View>
                    )
                }
            }
        }
        else {
            return (
                <View style={styles.inputBox}>
                    <Text style={styles.letterInput}>{puzzles[route.params.index].clue2[index]}</Text>
                </View>
            )
        }
    }

    function clue3(index) {
        if (puzzles[route.params.index].clue3[index] === "?") {
            return (
                <View style={styles.emptyBox}></View>
            )
        }
        if (puzzles[route.params.index].clue3[index] === "!") {
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
        if (typeof puzzles[route.params.index].clue3[index] === "number") {
            if (index >= 4) {
                if (puzzles[route.params.index].clue3[index - 1] !== "?") {
                    return (
                        <View style={styles.numberBox}>
                            <Text style={styles.numberInputRight}>{puzzles[route.params.index].clue3[index]}</Text>
                        </View>
                    )
                } else {
                    return (
                        <View style={styles.numberBox}>
                            <Text style={styles.numberInputLeft}>{puzzles[route.params.index].clue3[index]}</Text>
                        </View>
                    )
                }
            }
            if (index <= 3) {
                if (puzzles[route.params.index].clue3[index + 1] !== "?") {
                    return (
                        <View style={styles.numberBox}>
                            <Text style={styles.numberInputLeft}>{puzzles[route.params.index].clue3[index]}</Text>
                        </View>
                    )
                } else {
                    return (
                        <View style={styles.numberBox}>
                            <Text style={styles.numberInputRight}>{puzzles[route.params.index].clue3[index]}</Text>
                        </View>
                    )
                }
            }
        }
        else {
            return (
                <View style={styles.inputBox}>
                    <Text style={styles.letterInput}>{puzzles[route.params.index].clue3[index]}</Text>
                </View>
            )
        }
    }

    function clue4(index) {
        if (puzzles[route.params.index].clue4[index] === "?") {
            return (
                <View style={styles.emptyBox}></View>
            )
        }
        if (puzzles[route.params.index].clue4[index] === "!") {
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
        if (typeof puzzles[route.params.index].clue4[index] === "number") {
            if (index >= 4) {
                if (puzzles[route.params.index].clue4[index - 1] !== "?") {
                    return (
                        <View style={styles.numberBox}>
                            <Text style={styles.numberInputRight}>{puzzles[route.params.index].clue4[index]}</Text>
                        </View>
                    )
                } else {
                    return (
                        <View style={styles.numberBox}>
                            <Text style={styles.numberInputLeft}>{puzzles[route.params.index].clue4[index]}</Text>
                        </View>
                    )
                }
            }
            if (index <= 3) {
                if (puzzles[route.params.index].clue4[index + 1] !== "?") {
                    return (
                        <View style={styles.numberBox}>
                            <Text style={styles.numberInputLeft}>{puzzles[route.params.index].clue4[index]}</Text>
                        </View>
                    )
                } else {
                    return (
                        <View style={styles.numberBox}>
                            <Text style={styles.numberInputRight}>{puzzles[route.params.index].clue4[index]}</Text>
                        </View>
                    )
                }
            }
        }
        else {
            return (
                <View style={styles.inputBox}>
                    <Text style={styles.letterInput}>{puzzles[route.params.index].clue4[index]}</Text>
                </View>
            )
        }
    }

    function allTheClues() {
        return (
            <View style={cluesDifficulty()}>
                <View style={styles.clueRow}>
                    {numberify1(1)}
                    {clue1(0)}
                    {clue1(1)}
                    {clue1(2)}
                    {clue1(3)}
                    {clue1(4)}
                    {clue1(5)}
                    {clue1(6)}
                    {clue1(7)}
                </View>
                <View style={styles.clueRow}>
                    {numberify2(2)}
                    {clue2(0)}
                    {clue2(1)}
                    {clue2(2)}
                    {clue2(3)}
                    {clue2(4)}
                    {clue2(5)}
                    {clue2(6)}
                    {clue2(7)}
                </View>
                <View style={styles.clueRow}>
                    {numberify3(3)}
                    {clue3(0)}
                    {clue3(1)}
                    {clue3(2)}
                    {clue3(3)}
                    {clue3(4)}
                    {clue3(5)}
                    {clue3(6)}
                    {clue3(7)}
                </View>
                <View style={styles.clueRow}>
                    {numberify4(4)}
                    {clue4(0)}
                    {clue4(1)}
                    {clue4(2)}
                    {clue4(3)}
                    {clue4(4)}
                    {clue4(5)}
                    {clue4(6)}
                    {clue4(7)}
                </View>
            </View>
        )
    }

    const [letter1, setLetter1] = React.useState(null);
    const [letter2, setLetter2] = React.useState(null);
    const [letter3, setLetter3] = React.useState(null);
    const [letter4, setLetter4] = React.useState(null);
    const [letter5, setLetter5] = React.useState(null);
    const [letter6, setLetter6] = React.useState(null);
    const [letter7, setLetter7] = React.useState(null);
    const [letter8, setLetter8] = React.useState(null);

    let yourAnswer = [letter1, letter2, letter3, letter4, letter5, letter6, letter7, letter8]

    function keepTrack(letterID, text) { 
        if (text !== "") { 
            if (letterID === 1) {
                setLetter1(text)
                inputId2.current.focus() 
            }
            if (letterID === 2) {
                setLetter2(text)
                inputId3.current.focus() 
            }
            if (letterID === 3) {
                setLetter3(text)
                inputId4.current.focus() 
            }
            if (letterID === 4) {
                setLetter4(text)
                inputId5.current.focus() 
            }
            if (letterID === 5) {
                setLetter5(text)
                inputId6.current.focus() 
            }
            if (letterID === 6) {
                setLetter6(text)
                inputId7.current.focus() 
            }
            if (letterID === 7) {
                setLetter7(text)
                inputId8.current.focus() 
            }
            if (letterID === 8) { 
                setLetter8(text)
                inputId8.current.focus() 
            }
        }
    }

    function check() {
        let yourNewAnswer = yourAnswer.join("")
        let theRightAnswer = puzzles[route.params.index].answer.join("")
        if (!letter1 || !letter2 || !letter3 || !letter4 || !letter5 || !letter6 || !letter7 || !letter8) {
            return (
                <View style={statusDifficulty()}>
                    <Text style={styles.statusTitle}>{puzzles[route.params.index].statusTitle}</Text>
                    <Text style={styles.statusText}>{puzzles[route.params.index].encouragement}</Text>
                </View>
            )
        }
        if (letter1 && letter2 && letter3 && letter4 && letter5 && letter6 && letter7 && letter8 && yourNewAnswer.toUpperCase() !== theRightAnswer) {
            return (
                <View style={statusDifficulty()}>
                    <Text style={styles.statusTitle}>Not quite...</Text>
                    <Text style={styles.statusText}>{yourNewAnswer} is not the correct answer.</Text>
                    <Text style={styles.statusText}>Keep trying!</Text>
                </View>
            )
        }
        if (yourNewAnswer.toUpperCase() === theRightAnswer) {
            setLevelComplete(value);
            getLevelStatus(value);
            logCurrentStorage();
            return (
                <View style={statusDifficulty()}>
                    <Text style={styles.statusTitle}>Congratulations!</Text>
                    <Text style={styles.statusText}>{yourNewAnswer} is the correct answer!</Text>
                    <Text style={styles.statusFunFact}>Fun fact: {puzzles[route.params.index].funFact}</Text>
                </View>
            )
        }
    }

    function isEditable() {
        let yourNewAnswer = yourAnswer.join("")
        let theRightAnswer = puzzles[route.params.index].answer.join("")
        if (yourNewAnswer.toUpperCase() !== theRightAnswer) { 
            return true;
        }
        if (yourNewAnswer.toUpperCase() === theRightAnswer) { 
            return false
        }
    }


    const clearAll = async () => {
        try {
          await AsyncStorage.clear()
        } catch(e) {
        console.log(e)
        }  
        console.log('Deleted.')
    } 

    const setLevelComplete = async (value) => {
        try {
            const item = JSON.stringify(value);
            await AsyncStorage.setItem(`${item}`, "1")
        } catch(e) {
        }
    }

    const getLevelStatus = async (value) => {
        try {
            const item = JSON.stringify(value);
            return await AsyncStorage.getItem(`${item}`)
        }  
        catch(e) {
        }
    }

    function logCurrentStorage() {
        AsyncStorage.getAllKeys().then((keyArray) => {
          AsyncStorage.multiGet(keyArray).then((keyValArray) => {
            let myStorage = {};
            for (let keyVal of keyValArray) {
              myStorage[keyVal[0]] = keyVal[1]
            }
            console.log('CURRENT STORAGE: ', myStorage);
          })
        });
    }

    React.useEffect(() => {
        check();
        isEditable();
    });

    return (
        <ScrollView>
            <View style={styles.header}>
                <Pressable
                    style={styles.back}
                    onPress={() => navigation.pop()}
                >
                    <Image
                        style={styles.button}
                        source={require("../assets/arrow.png")}
                    />
                </Pressable>
                <Text style={styles.levelId}>Level {value}</Text>
            </View>
            {levelTheme()}
            {allTheClues()}
            <View style={hintsDifficulty()}>
                <Text style={styles.hint}>{puzzles[route.params.index].clueHints[0]}</Text>
                <Text style={styles.hint}>{puzzles[route.params.index].clueHints[1]}</Text>
                <Text style={styles.hint}>{puzzles[route.params.index].clueHints[2]}</Text>
                <Text style={styles.hint}>{puzzles[route.params.index].clueHints[3]}</Text>
            </View>
            {check()}
        </ScrollView>
    );
}

export default Level;

const styles = StyleSheet.create({
    header: {
        height: 70,
        marginTop: 40,
    },
    back: {
        width: 60,
        height: 60,
    },
    button: {
        height: 55,
        width: 55,
        position: 'absolute',
        top: 4,
        left: 25,
    },
    levelId: {
        marginTop: -56,
        alignSelf: 'center',
        fontSize: 40,
        fontFamily: 'KohinoorTelugu-Light',
        fontWeight: "600",
    },
    themeBoxEasy: {
        height: 125,
        backgroundColor: easy_header,
        display: 'flex',
        justifyContent: 'center',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
    },
    themeBoxMedium: {
        height: 125,
        marginHorizontal: 7.5,
        backgroundColor: medium_header,
        display: 'flex',
        justifyContent: 'center',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
    },
    themeBoxHard: {
        height: 125,
        marginHorizontal: 7.5,
        backgroundColor: hard_header,
        display: 'flex',
        justifyContent: 'center',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
    },
    themeBoxVeryHard: {
        height: 125,
        marginHorizontal: 7.5,
        backgroundColor: very_hard_header,
        display: 'flex',
        justifyContent: 'center',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
    },
    themeText: {
        fontSize: 36,
        fontFamily: 'KohinoorTelugu-Light',
        fontWeight: "600",
        color: 'white',
        alignSelf: 'center',
        marginTop: 5,
        marginBottom: 10,
    },
    statusTitle: {
        fontSize: 32,
        fontFamily: 'KohinoorTelugu-Light',
        fontWeight: "600",
        color: 'white',
        alignSelf: 'center',
        marginTop: 20,
    },
    answerRow: {
        display: 'flex',
        flexDirection: 'row',
        marginHorizontal: 15,
        justifyContent: 'space-between'
    },
    cluesEasy: {
        backgroundColor: easy,
        paddingTop: 35,
    },
    cluesMedium: {
        backgroundColor: medium,
        paddingTop: 35,
    },
    cluesHard: {
        backgroundColor: hard,
        paddingTop: 35,
    },
    cluesVeryHard: {
        backgroundColor: very_hard,
        paddingTop: 35,
    },
    clueRow: {
        display: 'flex',
        flexDirection: 'row',
        marginHorizontal: 15,
        marginVertical: 5,
        justifyContent: 'space-between'
    },
    inputBox: {
        width: 41,
        height: 41,
        backgroundColor: '#f9f9f9',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 4,
    },
    numberBox: {
        width: 41,
        height: 41,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        borderRadius: 4,
    },
    emptyBox: {
        width: 41,
        height: 41,
    },
    letterInput: {
        width: 42,
        fontSize: 24,
        fontFamily: 'KohinoorTelugu-Light',
        fontWeight: "400",
        textAlign: 'center'
    },
    letterInputLight: {
        width: 42,
        fontSize: 24,
        fontFamily: 'KohinoorTelugu-Light',
        fontWeight: "400",
        textAlign: 'center',
        color: '#999'
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
    hintsEasy: {
        backgroundColor: easy,
        paddingVertical: 7.5,
        paddingHorizontal: 15,
    },
    hintsMedium: {
        backgroundColor: medium,
        paddingVertical: 7.5,
        paddingHorizontal: 15,
    },
    hintsHard: {
        backgroundColor: hard,
        paddingVertical: 7.5,
        paddingHorizontal: 15,
    },
    hintsVeryHard: {
        backgroundColor: very_hard,
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
    statusText: {
        color: 'white',
        marginVertical: 2.5,
        marginHorizontal: 22.5,
        fontSize: 20,
        fontFamily: 'KohinoorTelugu-Light',
        fontWeight: "500",
        alignSelf: 'center'
    },
    statusFunFact: {
        color: 'white',
        marginTop: 5,
        marginHorizontal: 12,
        fontSize: 14,
        fontFamily: 'KohinoorTelugu-Light',
        fontWeight: "500",
        alignSelf: 'center'
    },
    statusEasy: {
        backgroundColor: easy,
        height: 300,
    },
    statusMedium: {
        backgroundColor: medium,
        marginHorizontal: 7.5,
        height: 200,
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
    },
    statusHard: {
        backgroundColor: hard,
        marginHorizontal: 7.5,
        height: 200,
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
    },
    statusVeryHard: {
        backgroundColor: very_hard,
        marginHorizontal: 7.5,
        height: 200,
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
    },
    divider: {
        alignSelf: 'center',
        marginVertical: 2,
        borderBottomWidth: .5,
        borderBottomColor: 'white'
    }
})