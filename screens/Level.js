import * as React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, ScrollView, View, Text, Pressable, Image, TextInput } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import puzzles from '../components/puzzles';

const easy = '#30A47C'
const medium = '#50ACE5'
const hard = '#D4903C'
const very_hard = '#403C95'

function Level({ route }) {

    const navigation = useNavigation();

    let value = route.params.index + 1;

    function levelTheme() {
        return (
            <View style={difficulty(1)}>
                <Text style={styles.themeText}>{puzzles[route.params.index].theme}</Text>
                {answerBox()}
            </View>
        )
    }

    function difficulty(section) {
        if (section === 1) {
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
        if (section === 2) {
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
        if (section === 3) {
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
        if (section === 4) {
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
    }

    function numberify(row) {
        let rowInQuestion = puzzles[route.params.index].clues[row]
        let firstIndex = rowInQuestion.indexOf("?")
        let lastIndex = rowInQuestion.lastIndexOf("?")
        if (lastIndex === 7 && firstIndex === 3) {
            rowInQuestion.splice(3, 1, row + 1)
        }
        if (firstIndex === 0 && lastIndex === 4) {
            rowInQuestion.splice(4, 1, row + 1)
        }
        if (lastIndex < 4 && rowInQuestion[lastIndex + 1] !== "?") {
            rowInQuestion.splice(lastIndex, 1, row + 1)
        } else if (firstIndex > 3 && rowInQuestion[firstIndex - 1] !== "?") {
            rowInQuestion.splice(firstIndex, 1, row + 1)
        } else if (lastIndex > 4 && rowInQuestion[lastIndex - 1] !== "?") {
            rowInQuestion.splice(lastIndex, 1, row + 1)
        } else if (firstIndex < 3 && rowInQuestion[firstIndex + 1] !== "?") {
            rowInQuestion.splice(firstIndex, 1, row + 1)
        } else if (firstIndex === 0 && lastIndex === 7) {
            if (rowInQuestion[lastIndex - 2] !== "?") {
                rowInQuestion.splice(lastIndex - 1, 1, row + 1)
            } else if (rowInQuestion[firstIndex + 2] !== "?") {
                rowInQuestion.splice(firstIndex + 1, 1, row + 1)
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

    function clue(row, index) {
        if (puzzles[route.params.index].clues[row][index] === "?") {
            return (
                <View style={styles.emptyBox}></View>
            )
        }
        if (puzzles[route.params.index].clues[row][index] === "!") {
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
        if (typeof puzzles[route.params.index].clues[row][index] === "number") {
            if (index >= 4) {
                if (puzzles[route.params.index].clues[row][index - 1] !== "?") {
                    return (
                        <View style={styles.numberBox}>
                            <Text style={styles.numberInputRight}>{puzzles[route.params.index].clues[row][index]}</Text>
                        </View>
                    )
                } else {
                    return (
                        <View style={styles.numberBox}>
                            <Text style={styles.numberInputLeft}>{puzzles[route.params.index].clues[row][index]}</Text>
                        </View>
                    )
                }
            }
            if (index <= 3) {
                if (puzzles[route.params.index].clues[row][index + 1] !== "?") {
                    return (
                        <View style={styles.numberBox}>
                            <Text style={styles.numberInputLeft}>{puzzles[route.params.index].clues[row][index]}</Text>
                        </View>
                    )
                } else {
                    return (
                        <View style={styles.numberBox}>
                            <Text style={styles.numberInputRight}>{puzzles[route.params.index].clues[row][index]}</Text>
                        </View>
                    )
                }
            }
        }
        else {
            return (
                <View style={styles.inputBox}>
                    <Text style={styles.letterInput}>{puzzles[route.params.index].clues[row][index]}</Text>
                </View>
            )
        }
    }

    const allTheClues = () => {
        return (
            <View style={difficulty(2)}>
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

    const inputId1 = React.useRef();
    const inputId2 = React.useRef();
    const inputId3 = React.useRef();
    const inputId4 = React.useRef();
    const inputId5 = React.useRef();
    const inputId6 = React.useRef();
    const inputId7 = React.useRef();
    const inputId8 = React.useRef();

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
                <View style={difficulty(4)}>
                    <Text style={styles.statusTitle}>{puzzles[route.params.index].statusTitle}</Text>
                    <Text style={styles.statusText}>{puzzles[route.params.index].encouragement}</Text>
                </View>
            )
        }
        if (letter1 && letter2 && letter3 && letter4 && letter5 && letter6 && letter7 && letter8 && yourNewAnswer.toUpperCase() !== theRightAnswer) {
            return (
                <View style={difficulty(4)}>
                    <Text style={styles.statusTitle}>Not quite...</Text>
                    <Text style={styles.statusText}>{yourNewAnswer} is not the correct answer.</Text>
                    <Text style={styles.statusText}>Keep trying!</Text>
                </View>
            )
        }
        if (yourNewAnswer.toUpperCase() === theRightAnswer) {
            setLevelComplete(value);
            return (
                <View style={difficulty(4)}>
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

    const setLevelComplete = async (value) => {
        try {
            const item = JSON.stringify(value);
            await AsyncStorage.setItem(`${item}`, "1")
        } catch(e) {
        }
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
            <View style={difficulty(3)}>
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
        backgroundColor: easy,
        display: 'flex',
        justifyContent: 'center',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
    },
    themeBoxMedium: {
        height: 125,
        marginHorizontal: 7.5,
        backgroundColor: medium,
        display: 'flex',
        justifyContent: 'center',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
    },
    themeBoxHard: {
        height: 125,
        marginHorizontal: 7.5,
        backgroundColor: hard,
        display: 'flex',
        justifyContent: 'center',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
    },
    themeBoxVeryHard: {
        height: 125,
        marginHorizontal: 7.5,
        backgroundColor: very_hard,
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
        height: 400,
    },
    statusMedium: {
        backgroundColor: medium,
        height: 400,
    },
    statusHard: {
        backgroundColor: hard,
        height: 400,
    },
    statusVeryHard: {
        backgroundColor: very_hard,
        height: 400,
    },
    divider: {
        alignSelf: 'center',
        marginVertical: 2,
        borderBottomWidth: .5,
        borderBottomColor: 'white'
    }
})