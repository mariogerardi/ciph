import * as React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, ScrollView, View, Text, Pressable, Image, TextInput } from 'react-native';

const easy = '#30A47C'
const easy_header = '#30A47C'

function Tutorial({route}) {

    const navigation = useNavigation();

    const puzzles = [
        {
            puzzleId: 1,
            theme: "How To Play:",
            answer: ["T", "U", "T", "O", "R", "I", "A", "L"],
            clue1: ["!", "O", "!", "A", "L", "L", "Y", "?"],
            clue2: ["F", "!", "N", "?", "?", "?", "?", "?"],
            clue3: ["?", "?", "F", "!", "!", "?", "?", "?"],
            clue4: ["?", "?", "?", "?", "?", "A", "L", "!"],
            clueHints: ["1. Completely; Entirely; Absolutely; Fully", "2. This game is so much ___", "3. Rhymes with 'more'", "4. Everyone or everything"],
            encouragement: "...Does it make sense yet?",
            funFact: "You're ready to play!",
        }
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
        if (value === 1) {
            return styles.themeBoxEasy;
        }
    }

    function cluesDifficulty() {
        if (value === 1) {
            return styles.cluesEasy;
        }
    }

    function hintsDifficulty() {
        if (value === 1) {
            return styles.hintsEasy;
        }
    }

    function statusDifficulty() {
        if (value === 1) {
            return styles.statusEasy;
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
            puzzles[route.params.index].clue2.splice(4, 1, j)
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
            puzzles[route.params.index].clue3.splice(4, 1, j)
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
            puzzles[route.params.index].clue4.splice(4, 1, j)
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
                <View style={hintsDifficulty()}>
                    <Text style={styles.tutorial}>The first and third letters in the clue above correspond to the first and third letters of the puzzle's answer. Use the hints below to figure out the missing letters.</Text>
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
                <View style={hintsDifficulty()}>
                    <Text style={styles.tutorial}>Each hint below corresponds to a clue. Don't be afraid to brainstorm your guesses by typing letters in the empty boxes!</Text>
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
                    <Text style={styles.statusText}>{puzzles[route.params.index].encouragement}</Text>
                </View>
            )
        }
        if (letter1 && letter2 && letter3 && letter4 && letter5 && letter6 && letter7 && letter8 && yourNewAnswer.toUpperCase() !== theRightAnswer) {
            return (
                <View style={statusDifficulty()}>
                    <Text style={styles.statusText}>Not quite. Keep trying!</Text>
                </View>
            )
        }
        if (yourNewAnswer.toUpperCase() === theRightAnswer) {
            return (
                <View style={statusDifficulty()}>
                    <Text style={styles.statusText}>{yourNewAnswer} is the correct answer!</Text>
                    <Text style={styles.statusFunFact}>{puzzles[route.params.index].funFact}</Text>
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
            </View>
            {levelTheme()}
            <View style={hintsDifficulty()}>
                <Text style={styles.tutorial}>Type your answer in the space above. Try to guess the letters by solving the clues below.</Text>
            </View>            
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

export default Tutorial;

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
        height: 110,
        backgroundColor: easy_header,
        display: 'flex',
        justifyContent: 'center',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
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
        paddingVertical: 5,
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
        paddingVertical: 1,
        paddingHorizontal: 15,
    },
    hint: {
        color: 'white',
        marginVertical: 2.5,
        fontSize: 15,
        fontFamily: 'KohinoorTelugu-Light',
        fontWeight: "500",
    },
    tutorial: {
        color: 'white',
        marginVertical: 2.5,
        fontSize: 14,
        fontFamily: 'KohinoorTelugu-Light',
        fontWeight: "400",
    },
    statusText: {
        color: 'white',
        marginHorizontal: 22.5,
        marginTop: 10,
        marginBottom: 2.5,
        fontSize: 20,
        fontFamily: 'KohinoorTelugu-Light',
        fontWeight: "500",
        alignSelf: 'center'
    },
    statusFunFact: {
        color: 'white',
        marginTop: -5,
        marginHorizontal: 12,
        fontSize: 16,
        fontFamily: 'KohinoorTelugu-Light',
        fontWeight: "500",
        alignSelf: 'center'
    },
    statusEasy: {
        backgroundColor: easy,
        height: 350,
    }
})