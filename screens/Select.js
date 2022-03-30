import * as React from 'react';
import { StyleSheet, ScrollView, View, Text, Image, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

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
                    <Pressable 
                        style={levelStyles(value)} 
                        key={index}
                        onPress={() => navigation.navigate('Level', {
                            index: index
                        })}
                    >
                        <Text style={styles.id}>{value}</Text>
                    </Pressable>
                )
            })}
        </View>
    )
}

function levelStyles(value) {
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

function SelectScreen() {

    const navigation = useNavigation();

    return (
        <ScrollView style={styles.background}>
            <View style={styles.header}>
                <Pressable 
                    style={styles.back}
                    onPress={() => navigation.navigate('Home')}
                    >
                    <Image 
                        style={styles.button} 
                        source={{uri: "https://cdn3.iconfinder.com/data/icons/basic-user-interface-5/64/chevron_left_back_move_direction_arrow_arrows-256.png"}}
                    />
                </Pressable>
            </View>
            <View>{level()}</View>
            <View style={styles.bottom}></View>
        </ScrollView>
    );
}

export default SelectScreen;

const styles = StyleSheet.create({
    background: {
        backgroundColor: '#e9e9e9'
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
        borderRadius: 5,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#30C47C'
    },
    level2: {
        width: 75,
        height: 75,
        marginVertical: 7.5,
        marginHorizontal: 7.5,
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 5,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#70ACE5'
    },
    level3: {
        width: 75,
        height: 75,
        marginVertical: 7.5,
        marginHorizontal: 7.5,
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 5,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#C460DC'
    },
    level4: {
        width: 75,
        height: 75,
        marginVertical: 7.5,
        marginHorizontal: 7.5,
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 5,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#403C95'
    },
    id: {
        color: '#e9e9e9',
        fontSize: 28,
    },
    header: {
        marginTop: 45,
        height: 70,
    },
    button: {
        height: 50,
        width: 50,
        position: 'absolute',
        top: 5,
        left: 25,
    },
    bottom: {
        height: 50,
    },
})