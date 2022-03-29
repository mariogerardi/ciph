import * as React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, SafeAreaView, View, Text, Pressable, Image, TextInput } from 'react-native';

function Level({route}) {

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
    ];

    let value = route.params.index + 1;

    console.log(puzzles[route.params.index].clue1.join(""))

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

    function answerBox() {
        return (
            <View style={styles.answer}>
                <View style={styles.inputBox}>
                    <TextInput
                        style={styles.letterInput} 
                        maxLength={1} 
                        ref={inputId1} 
                        onChangeText={text => {if (text !== "") inputId2.current.focus()}} 
                        onKeyPress={({nativeEvent}) => {if (nativeEvent.key === 'Backspace') {inputId1.current.focus()}}}
                        autoCorrect="false">    
                    </TextInput>
                </View>
                <View style={styles.inputBox}>
                    <TextInput 
                        style={styles.letterInput} 
                        maxLength={1} 
                        ref={inputId2} 
                        onChangeText={text => {if (text !== "") inputId3.current.focus()}} 
                        onKeyPress={({nativeEvent}) => {if (nativeEvent.key === 'Backspace') {inputId1.current.focus()}}}
                        autoCorrect="false">    
                    </TextInput>
                </View>
                <View style={styles.inputBox}>
                    <TextInput 
                        style={styles.letterInput} 
                        maxLength={1} 
                        ref={inputId3} 
                        onChangeText={text => {if (text !== "") inputId4.current.focus()}} 
                        onKeyPress={({nativeEvent}) => {if (nativeEvent.key === 'Backspace') {inputId2.current.focus()}}}
                        autoCorrect="false">    
                    </TextInput>
                </View>
                <View style={styles.inputBox}>
                    <TextInput 
                        style={styles.letterInput} 
                        maxLength={1} 
                        ref={inputId4} 
                        onChangeText={text => {if (text !== "") inputId5.current.focus()}} 
                        onKeyPress={({nativeEvent}) => {if (nativeEvent.key === 'Backspace') {inputId3.current.focus()}}}
                        autoCorrect="false">    
                    </TextInput>
                </View>
                <View style={styles.inputBox}>
                    <TextInput 
                        style={styles.letterInput} 
                        maxLength={1} 
                        ref={inputId5} 
                        onChangeText={text => {if (text !== "") inputId6.current.focus()}} 
                        onKeyPress={({nativeEvent}) => {if (nativeEvent.key === 'Backspace') {inputId4.current.focus()}}}
                        autoCorrect="false">    
                    </TextInput>
                </View>
                <View style={styles.inputBox}>
                    <TextInput 
                        style={styles.letterInput} 
                        maxLength={1} 
                        ref={inputId6} 
                        onChangeText={text => {if (text !== "") inputId7.current.focus()}} 
                        onKeyPress={({nativeEvent}) => {if (nativeEvent.key === 'Backspace') {inputId5.current.focus()}}}
                        autoCorrect="false">    
                    </TextInput>
                </View>
                <View style={styles.inputBox}>
                    <TextInput 
                        style={styles.letterInput} 
                        maxLength={1} 
                        ref={inputId7} 
                        onChangeText={text => {if (text !== "") inputId8.current.focus()}} 
                        onKeyPress={({nativeEvent}) => {if (nativeEvent.key === 'Backspace') {inputId6.current.focus()}}}
                        autoCorrect="false">    
                    </TextInput>
                </View>
                <View style={styles.inputBox}>
                    <TextInput 
                        style={styles.letterInput} 
                        maxLength={1} 
                        ref={inputId8} 
                        onChangeText={text => {if (text !== "") inputId8.current.focus()}} 
                        onKeyPress={({nativeEvent}) => {if (nativeEvent.key === 'Backspace') {inputId7.current.focus()}}}
                        autoCorrect="false">    
                    </TextInput>
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
                        source={{uri: "https://cdn3.iconfinder.com/data/icons/basic-user-interface-5/64/chevron_left_back_move_direction_arrow_arrows-256.png"}}
                    />
                </Pressable>
            </View>
            <Text style={styles.levelId}>Level {value}</Text>
            {levelTheme()}
            {answerBox()}
            
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
        marginTop: 0,
        marginLeft: 20,
        marginBottom: -7,
        fontSize: 30,
    },
    themeBox: {
        height: 50,
        marginHorizontal: 10,
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
    answer: {
        display: 'flex',
        flexDirection: 'row',
        marginHorizontal: 10,
        marginVertical: 25,
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
    letterInput: {
        fontSize: 24,
    }
})