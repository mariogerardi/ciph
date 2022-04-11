import * as React from 'react';
import { StyleSheet, ScrollView, View, Text, Image, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

function SelectScreen() {
    
    const navigation = useNavigation();

    const [getValue, setGetValue] = React.useState('0');

    async function importData() {
        try {
          const keys = await AsyncStorage.getAllKeys();
          const result = await AsyncStorage.multiGet(keys);
          setGetValue(result)
        } catch (error) {
          console.error(error)
        }
    }

    React.useEffect(() => {
        importData();
    }, []);

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
                            style={levelStyles(value)} 
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
            return styles.level1
        }
        if (value < 41) {
            return styles.level2
        }
        if (value < 61) {
            return styles.level3
        }
        if (value < 81) {
            return styles.level4
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
    level1: {
        width: 75,
        height: 75,
        marginVertical: 7.5,
        marginHorizontal: 7.5,
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 15,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#30A47C'
    },
    level2: {
        width: 75,
        height: 75,
        marginVertical: 7.5,
        marginHorizontal: 7.5,
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 15,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#50ACE5'
    },
    level3: {
        width: 75,
        height: 75,
        marginVertical: 7.5,
        marginHorizontal: 7.5,
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 15,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#D4903C'
    },
    level4: {
        width: 75,
        height: 75,
        marginVertical: 7.5,
        marginHorizontal: 7.5,
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 15,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#403C95'
    },
    complete: {
        width: 75,
        height: 75,
        marginVertical: 7.5,
        marginHorizontal: 7.5,
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 15,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFB530'
    },
    id: {
        color: '#e9e9e9',
        fontSize: 38,
        fontFamily: 'KohinoorTelugu-Light'
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