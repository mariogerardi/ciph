import * as React from 'react';
import { StyleSheet, ScrollView, View, Text, Image, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

function SelectScreen() {
    
    const navigation = useNavigation();

    const [getValue, setGetValue] = React.useState(0);
    
    React.useEffect(() => {
        importData();
    }, [getValue]);

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

    async function importData() {
        try {
            const keys = await AsyncStorage.getAllKeys();
            const result = await AsyncStorage.multiGet(keys);
            setGetValue(result)
        } catch (error) {
            console.error(error)
        }
    }

    function level() {

        const navigation = useNavigation();
    
        let levels = [];
        for (let i = 0; i < 80; i++) {
            levels.push(i + 1);
        }

        return (
            <View style={styles.grid}>
                {levels.map((value, index) => {
                    return (
                        <TouchableOpacity 
                            style={[styles.level, difficulty(value), levelStyles(value)]} 
                            key={index}
                            onPress={() => navigation.navigate('Level', {
                                index: index
                            })}
                        >
                            <Text style={styles.id}>{value}</Text>
                        </TouchableOpacity>
                    )
                })}
            </View>
        )
    }

    function levelStyles(value) {
        for (let i = 0; i < getValue.length; i++) {
            let completedLevelKey = getValue[i][0]
            let completedLevelVal = getValue[i][1]
            if (JSON.stringify(value) === completedLevelKey && completedLevelVal === "1") {
                return styles.complete
            }
        }
        if (value < 21) {
            return styles.easy_unbeaten
        }
        if (value < 41) {
            return styles.medium_unbeaten
        }
        if (value < 61) {
            return styles.hard_unbeaten
        }
        if (value < 81) {
            return styles.very_hard_unbeaten
        }
    }

    return (
        <ScrollView style={styles.background}>
            <View style={styles.header}>
                <TouchableOpacity 
                    style={styles.back}
                    onPress={() => navigation.popToTop()}
                    >
                    <Image 
                        style={styles.button} 
                        source={require("../assets/arrow.png")}
                    />
                </TouchableOpacity>
            </View>
            <Text style={styles.progressHeader}>Levels Completed:</Text>
            <Text style={styles.progress}>{getValue.length}/80</Text>
            {level()}
            <View style={styles.bottom}>
            </View>
        </ScrollView>
    );
}

export default SelectScreen;

const styles = StyleSheet.create({
    background: {
        backgroundColor: '#f9f9f9'
    },
    back: {
        width: 60,
        height: 60,
    },
    grid: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    level: {
        width: 75,
        height: 75,
        marginVertical: 7.5,
        marginHorizontal: 7.5,
        borderWidth: 5,
        borderColor: 'white',
        borderRadius: 15,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    complete: {
        backgroundColor: '#FFB530',
        borderColor: '#FFB530',
    },
    easy_unbeaten: {
        backgroundColor: '#30A47C',
        borderColor: '#30A47C',
    },
    medium_unbeaten: {
        backgroundColor: '#50ACE5',
        borderColor: '#50ACE5',
    },
    hard_unbeaten: {
        backgroundColor: '#D4903C',
        borderColor: '#D4903C',
    },
    very_hard_unbeaten: {
        backgroundColor: '#403C95',
        borderColor: '#403C95',
    },
    id: {
        fontSize: 42,
        fontFamily: 'KohinoorTelugu-Light',
        fontWeight: '900',
        color: 'white'
    },
    progressHeader: {
        textAlign: 'center',
        fontSize: 40,
        fontFamily: 'KohinoorTelugu-Light',
        marginBottom: -15,
        marginTop: -10,
    },
    progress: {
        textAlign: 'center',
        fontSize: 55,
        fontFamily: 'KohinoorTelugu-Light',
        marginBottom: 10,
    },
    header: {
        marginTop: 45,
        height: 70,
    },
    button: {
        height: 60,
        width: 60,
        position: 'absolute',
        top: 2.5,
        left: 25,
    },
    bottom: {
        height: 50,
    },
})