import * as React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, SafeAreaView, View, Text, Pressable, Image, TextInput } from 'react-native';

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
                        style={styles.letterInput}
                        maxLength={1}
                        ref={inputId1}
                        onChangeText={text => { if (text !== "") inputId2.current.focus() }}
                        onKeyPress={({ nativeEvent }) => { if (nativeEvent.key === 'Backspace') { inputId1.current.focus() } }}
                        autoCorrect={false}>
                    </TextInput>
                </View>
                <View style={styles.inputBox}>
                    <TextInput
                        style={styles.letterInput}
                        maxLength={1}
                        ref={inputId2}
                        onChangeText={text => { if (text !== "") inputId3.current.focus() }}
                        onKeyPress={({ nativeEvent }) => { if (nativeEvent.key === 'Backspace') { inputId1.current.focus() } }}
                        autoCorrect={false}>
                    </TextInput>
                </View>
                <View style={styles.inputBox}>
                    <TextInput
                        style={styles.letterInput}
                        maxLength={1}
                        ref={inputId3}
                        onChangeText={text => { if (text !== "") inputId4.current.focus() }}
                        onKeyPress={({ nativeEvent }) => { if (nativeEvent.key === 'Backspace') { inputId2.current.focus() } }}
                        autoCorrect={false}>
                    </TextInput>
                </View>
                <View style={styles.inputBox}>
                    <TextInput
                        style={styles.letterInput}
                        maxLength={1}
                        ref={inputId4}
                        onChangeText={text => { if (text !== "") inputId5.current.focus() }}
                        onKeyPress={({ nativeEvent }) => { if (nativeEvent.key === 'Backspace') { inputId3.current.focus() } }}
                        autoCorrect={false}>
                    </TextInput>
                </View>
                <View style={styles.inputBox}>
                    <TextInput
                        style={styles.letterInput}
                        maxLength={1}
                        ref={inputId5}
                        onChangeText={text => { if (text !== "") inputId6.current.focus() }}
                        onKeyPress={({ nativeEvent }) => { if (nativeEvent.key === 'Backspace') { inputId4.current.focus() } }}
                        autoCorrect={false}>
                    </TextInput>
                </View>
                <View style={styles.inputBox}>
                    <TextInput
                        style={styles.letterInput}
                        maxLength={1}
                        ref={inputId6}
                        onChangeText={text => { if (text !== "") inputId7.current.focus() }}
                        onKeyPress={({ nativeEvent }) => { if (nativeEvent.key === 'Backspace') { inputId5.current.focus() } }}
                        autoCorrect={false}>
                    </TextInput>
                </View>
                <View style={styles.inputBox}>
                    <TextInput
                        style={styles.letterInput}
                        maxLength={1}
                        ref={inputId7}
                        onChangeText={text => { if (text !== "") inputId8.current.focus() }}
                        onKeyPress={({ nativeEvent }) => { if (nativeEvent.key === 'Backspace') { inputId6.current.focus() } }}
                        autoCorrect={false}>
                    </TextInput>
                </View>
                <View style={styles.inputBox}>
                    <TextInput
                        style={styles.letterInput}
                        maxLength={1}
                        ref={inputId8}
                        onChangeText={text => { if (text !== "") inputId8.current.focus() }}
                        onKeyPress={({ nativeEvent }) => { if (nativeEvent.key === 'Backspace') { inputId7.current.focus() } }}
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
            </View>
        )
    }

    return (
        <SafeAreaView>
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
            {answerBox()}
            <View style={styles.divider}></View>
            {allTheClues()}
            <View style={styles.hints}>
                <Text style={styles.hint}>{puzzles[route.params.index].clueHints[0]}</Text>
                <Text style={styles.hint}>{puzzles[route.params.index].clueHints[1]}</Text>
                <Text style={styles.hint}>{puzzles[route.params.index].clueHints[2]}</Text>
                <Text style={styles.hint}>{puzzles[route.params.index].clueHints[3]}</Text>
            </View>
            <View style={styles.divider}></View>
        </SafeAreaView>
    );
}

export default Level;

const styles = StyleSheet.create({
    header: {
        height: 70,
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
        height: 50,
        marginHorizontal: 25,
        backgroundColor: '#B0CCF5',
        display: 'flex',
        justifyContent: 'center',
        borderRadius: 10
    },
    themeText: {
        fontSize: 30,
        marginHorizontal: 15,
        borderRadius: 5
    },
    answerRow: {
        display: 'flex',
        flexDirection: 'row',
        marginHorizontal: 25,
        marginTop: 15,
        justifyContent: 'space-between'
    },
    clueRow: {
        display: 'flex',
        flexDirection: 'row',
        marginHorizontal: 25,
        marginTop: 15,
        justifyContent: 'space-between'
    },
    inputBox: {
        width: 40,
        height: 40,
        backgroundColor: '#e0e0e0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 4,
    },
    numberBox: {
        width: 40,
        height: 40,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        borderRadius: 4,
    },
    emptyBox: {
        width: 40,
        height: 40,
    },
    letterInput: {
        fontSize: 24,
    },
    numberInputRight: {
        fontSize: 14,
        marginRight: 25,
    },
    numberInputLeft: {
        fontSize: 14,
        marginLeft: 25,
    },
    hints: {
        marginHorizontal: 25,
        marginTop: 15,
    },
    hint: {
        padding: 3,
        fontSize: 15,
    },
    divider: {
        width: '90%',
        marginTop: 15,
        alignSelf: 'center',
        borderBottomWidth: 1,
        borderBottomColor: 'grey'
    }
})