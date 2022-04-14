import * as React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, ScrollView, View, Text, TouchableOpacity, Image } from 'react-native';
import puzzles from '../assets/puzzles';
import Answer from '../components/Answer';
import Clues from '../components/Clues';
import Hints from '../components/Hints'

const easy = '#30A47C'
const medium = '#50ACE5'
const hard = '#D4903C'
const very_hard = '#403C95'

function Level({ route }) {

    const navigation = useNavigation();

    let value = route.params.index + 1;
    let data = {value: value}

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

    const [letter1, setLetter1] = React.useState(null);
    const [letter2, setLetter2] = React.useState(null);
    const [letter3, setLetter3] = React.useState(null);
    const [letter4, setLetter4] = React.useState(null);
    const [letter5, setLetter5] = React.useState(null);
    const [letter6, setLetter6] = React.useState(null);
    const [letter7, setLetter7] = React.useState(null);
    const [letter8, setLetter8] = React.useState(null);

    let yourAnswer = [letter1, letter2, letter3, letter4, letter5, letter6, letter7, letter8]

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
        }
    }

    React.useEffect(() => {
        check();
    });

    return (
        <ScrollView>
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