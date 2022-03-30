import * as React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, ScrollView, View, Text, Pressable, Image, TextInput, Alert } from 'react-native';
import { withSafeAreaInsets } from 'react-native-safe-area-context';
import { useEffect } from 'react/cjs/react.production.min';

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
            clueHints: ["1. A female chicken", "2. A type of large cat", "3. A species in the deer family", "4. A large bird"],
        },
        {
            puzzleId: 2,
            theme: "Countries",
            answer: ["M", "A", "L", "A", "Y", "S", "I", "A"],
            clue1: ["!", "!", "!", "T", "A", "?", "?", "?"],
            clue2: ["?", "?", "!", "!", "O", "!", "?", "?"],
            clue3: ["?", "?", "!", "!", "T", "V", "!", "!"],
            clue4: ["?", "!", "!", "G", "E", "R", "!", "!"],
            clueHints: ["1. A European archipelago", "2. This country borders Thailand", "3. The capital of this country is Riga", "4. The tenth largest country by area"],
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
            <View style={styles.themeBox}>
                <Text style={styles.themeText}>{puzzles[route.params.index].theme}</Text>
                {answerBox()}
            </View>
        )
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
                <View style={styles.inputBox}></View>
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
                <View style={styles.inputBox}></View>
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
                <View style={styles.inputBox}></View>
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
                <View style={styles.inputBox}></View>
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
            <View style={styles.clues}>
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
                <View style={styles.hints}>
                    <Text style={styles.hint}>{puzzles[route.params.index].clueHints[0]}</Text>
                    <Text style={styles.hint}>{puzzles[route.params.index].clueHints[1]}</Text>
                    <Text style={styles.hint}>{puzzles[route.params.index].clueHints[2]}</Text>
                    <Text style={styles.hint}>{puzzles[route.params.index].clueHints[3]}</Text>
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
        if (yourNewAnswer === theRightAnswer) {
            console.log("Well, you're right... now what?")
            conGratULaTions();
        }
        if (yourNewAnswer !== theRightAnswer) {
            console.log("Your answer was " + yourNewAnswer + ". The correct answer was " + theRightAnswer + ". Almost!")
        }
    }

    React.useEffect(() => {
        check();
    });

    function conGratULaTions() {
        console.log("Congrats! You guessed correctly.")
    }

    return (
        <ScrollView>
            <View style={styles.header}>
                <Pressable
                    style={styles.back}
                    onPress={() => navigation.pop()}
                >
                    <Image
                        style={styles.button}
                        source={{ uri: "https://cdn3.iconfinder.com/data/icons/basic-user-interface-5/64/chevron_left_back_move_direction_arrow_arrows-256.png" }}
                    />
                </Pressable>
                <Text style={styles.levelId}>Level {value}</Text>
            </View>
            {levelTheme()}
            {allTheClues()}
            <View style={styles.divider}></View>
        </ScrollView>
    );
}

export default Level;

const styles = StyleSheet.create({
    header: {
        height: 70,
        marginTop: 45,
    },
    button: {
        height: 50,
        width: 50,
        position: 'absolute',
        top: 5,
        left: 25,
    },
    levelId: {
        marginTop: 12,
        alignSelf: 'center',
        fontSize: 30,
    },
    themeBox: {
        height: 105,
        marginHorizontal: 7.5,
        backgroundColor: '#70ACE5',
        display: 'flex',
        justifyContent: 'center',
        borderRadius: 5
    },
    themeText: {
        fontSize: 30,
        alignSelf: 'center'
    },
    answerRow: {
        display: 'flex',
        flexDirection: 'row',
        marginHorizontal: 7.5,
        marginTop: 10,
        justifyContent: 'space-between'
    },
    clues: {
        backgroundColor: '#30C47C',
        marginHorizontal: 7.5,
        paddingVertical: 5,
        borderRadius: 5,
        marginTop: 10,
    },
    clueRow: {
        display: 'flex',
        flexDirection: 'row',
        marginHorizontal: 7.5,
        marginVertical: 5,
        justifyContent: 'space-between'
    },
    inputBox: {
        width: 42,
        height: 42,
        backgroundColor: '#e0e0e0',
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
        fontSize: 20,
    },
    numberInputRight: {
        fontSize: 14,
        marginRight: 30,
    },
    numberInputLeft: {
        fontSize: 14,
        marginLeft: 30,
    },
    hints: {
        marginHorizontal: 10,
        marginVertical: 5,
    },
    hint: {
        padding: 3,
        fontSize: 15
    },
    divider: {
        width: '96%',
        marginTop: 10,
        alignSelf: 'center',
        borderBottomWidth: 1,
        borderBottomColor: 'grey'
    },
    buttonBox: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 7.5,
        marginHorizontal: 5
    },
    formButtonClear: {
        width: 180,
        backgroundColor: 'red',
        paddingVertical: 20,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
    },
    formButtonSubmit: {
        width: 180,
        backgroundColor: 'green',
        paddingVertical: 20,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
        fontSize: 20,
    }
})