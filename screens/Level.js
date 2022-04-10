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

    const puzzles = [
        {
            puzzleId: 1,
            theme: "Animals",
            answer: ["E", "L", "E", "P", "H", "A", "N", "T"],
            clues: [
                ["?", "?", "?", "?", "!", "E", "!", "?"], 
                ["?", "!", "!", "O", "P", "!", "R", "D"],
                ["!", "!", "K", "?", "?", "?", "?", "?"],
                ["?", "?", "?", "?", "!", "!", "W", "K"]
            ],
            clueHints: ["1. A domesticated female bird", "2. Can reach speeds of up to 36 miles per hour", "3. One of the largest species in the deer family", "4. A bird of prey"],
            statusTitle: "Take a guess!",
            encouragement: "You got this!",
            funFact: "Elephants are the largest land animals on Earth!",
        },
        {
            puzzleId: 2,
            theme: "Countries",
            answer: ["M", "A", "L", "A", "Y", "S", "I", "A"],
            clues: [
                ["!", "!", "!", "T", "A", "?", "?", "?"], 
                ["?", "?", "!", "!", "O", "!", "?", "?"], 
                ["?", "?", "!", "!", "T", "V", "!", "!"], 
                ["?", "!", "!", "G", "E", "R", "!", "!"]
            ],
            clueHints: ["1. A European archipelago", "2. This country shares a border with Thailand", "3. The capital of this country is Riga", "4. The tenth largest country by area"],
            statusTitle: "What's your guess?",
            encouragement: "and no looking at any maps!",
            funFact: "70% of the population of Malaysia is urban.",
        },
        {
            puzzleId: 3,
            theme: "Mythical Creatures",
            answer: ["W", "E", "R", "E", "W", "O", "L", "F"],
            clues: [
                ["?", "?", "?", "?", "?", "E", "!", "!"], 
                ["O", "G", "!", "!", "?", "?", "?", "?"], 
                ["?", "?", "?", "T", "R", "!", "!", "L"], 
                ["N", "!", "!", "!", "I", "D", "?", "?"]
            ],
            clueHints: ["1. A pointy-eared humanoid being", "2. A large humanoid being with great strength", "3. A magical creature that lives in the hills", "4. A sea nymph of the Mediterranean"],
            statusTitle: "and your answer is...",
            encouragement: "...don't worry, I'm patient.",
            funFact: "A werewolf's transformation is often associated with the appearance of a full moon.",
        },
        {
            puzzleId: 4,
            theme: "Musical Instruments",
            answer: ["M", "A", "N", "D", "O", "L", "I", "N"],
            clues: [
                ["?", "?", "V", "I", "!", "!", "!", "!"], 
                ["B", "!", "!", "J", "!", "?", "?", "?"], 
                ["H", "!", "!", "!", "P", "A", "N", "?"], 
                ["?", "?", "O", "B", "!", "E", "?", "?"]
            ],
            clueHints: ["1. A four-stringed instrument", "2. A five-stringed instrument", "3. A subset of steelpan instruments", "4. A double-reed woodwind instrument"],
            statusTitle: "Compose an Answer...",
            encouragement: "...or just play it by ear.",
            funFact: "While a violin has four strings and a banjo has five, a mandolin has eight!",
        },
        {
            puzzleId: 5,
            theme: "Metals",
            answer: ["A", "L", "U", "M", "I", "N", "U", "M"],
            clues: [
                ["?", "?", "?", "Z", "!", "!", "C", "?"], 
                ["?", "?", "?", "T", "!", "!", "?", "?"], 
                ["?", "!", "I", "T", "H", "I", "!", "!"], 
                ["!", "!", "L", "O", "Y", "?", "?", "?"]
            ],
            clueHints: ["1. This metal is good for your immune system", "2. Pewter is almost entirely composed of this", "3. This metal has an atomic number of 3", "4. A composition of two or more metals"],
            statusTitle: "F",
            encouragement: "...or just play it by ear.",
            funFact: "Aluminum is the third most abundant element in the earth's crust, after oxygen and silicon.",
        },
        {
            puzzleId: 6,
            theme: "Occupations",
            answer: ["M", "E", "C", "H", "A", "N", "I", "C"],
            clues: [
                ["?", "?", "!", "L", "E", "R", "!", "!"], 
                ["?", "?", "!", "!", "E", "F", "?", "?"], 
                ["!", "!", "D", "I", "C", "?", "?", "?"], 
                ["?", "?", "!", "R", "I", "T", "!", "!"]
            ],
            clueHints: ["1. A religious leader or priest", "2. Trained in food preparation", "3. Administers first-aid at combat sites", "4. Someone who judges artwork professionally"],
            statusTitle: "Think of something...",
            encouragement: "...or you're fired!",
            funFact: "Queen Elizabeth II trained to be a mechanic and truck driver during WWII.",
        },
        {
            puzzleId: 7,
            theme: "Art",
            answer: ["A", "B", "S", "T", "R", "A", "C", "T"],
            clues: [
                ["P", "A", "!", "!", "E", "L", "?", "?"], 
                ["?", "?", "?", "?", "C", "!", "S", "!"], 
                ["?", "F", "A", "B", "!", "I", "!", "?"], 
                ["?", "!", "A", "U", "H", "!", "U", "S"]
            ],
            clueHints: ["1. Consists of powdered pigment and a binder", "2. One of four main sculpture techniques", "3. Textile cloth made by weaving, knitting, or felting fibers", "4. A German art school established in 1919"],
            statusTitle: "Get Creative!",
            encouragement: "Or get back to the drawing board...",
            funFact: "You might recognize surrealism, dadaism, and cubism as subsets of abstract art, but there are actually 18 different types of abstract art!",
        },
        {
            puzzleId: 8,
            theme: "Colors",
            answer: ["C", "E", "R", "U", "L", "E", "A", "N"],
            clues: [
                ["!", "!", "!", "I", "S", "E", "?", "?"], 
                ["?", "?", "?", "?", "C", "Y", "!", "!"], 
                ["?", "!", "!", "I", "N", "?", "?", "?"], 
                ["?", "M", "A", "!", "V", "!", "?", "?"]
            ],
            clueHints: ["1. A deep, reddish pink", "2. The C in CMYK", "3. A shade of green, named for Ireland", "4. A pale shade of purple"],
            statusTitle: "Guess!",
            encouragement: "The answer isn't black OR white.",
            funFact: "Blue is the most common favorite color.",
        },
        {
            puzzleId: 9,
            theme: "U.S. Cities",
            answer: ["S", "Y", "R", "A", "C", "U", "S", "E"],
            clues: [
                ["?", "?", "!", "!", "!", "I", "N", "!"], 
                ["?", "?", "?", "!", "M", "E", "!", "?"], 
                ["?", "E", "!", "I", "E", "?", "?", "?"], 
                ["I", "T", "H", "!", "!", "A", "?", "?"]
            ],
            clueHints: ["1. The fifth most-populous city in Wisconsin", "2. The university in this Iowan city makes up over half its population", "3. On the south shore of a lake with the same name", "4. The home city of Cornell University"],
            statusTitle: "Where are we?",
            encouragement: "And, again, no maps.",
            funFact: "Syracuse's namesake is a town in Sicily, Siracusa.",
        },
        {
            puzzleId: 10,
            theme: "Events",
            answer: ["F", "E", "S", "T", "I", "V", "A", "L"],
            clues: [
                ["?", "?", "!", "O", "!", "R", "E", "E"], 
                ["?", "R", "E", "C", "!", "T", "!", "!"], 
                ["?", "?", "!", "O", "C", "I", "!", "!"], 
                ["I", "T", "H", "!", "!", "A", "?", "?"]
            ],
            clueHints: ["1. The fifth most-populous city in Wisconsin", "2. The university in this Iowan city makes up over half its population", "3. On the south shore of a lake with the same name", "4. The home city of Cornell University"],
            statusTitle: "Where are we?",
            encouragement: "And, again, no maps.",
            funFact: "Syracuse's namesake is a town in Sicily, Siracusa, which also has famous salt deposits, sits next to a lake, and has a neighboring town called Salina.",
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

    function allTheClues() {
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