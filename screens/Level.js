import * as React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, ScrollView, View, Text, TouchableOpacity, Image } from 'react-native';
import puzzles from '../assets/puzzles';
import Answer from '../components/Answer';
import Clues from '../components/Clues';
import Hints from '../components/Hints'

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