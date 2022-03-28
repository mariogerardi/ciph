import * as React from 'react';
import { StyleSheet, SafeAreaView, View, Text, Image, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function level() {

    const navigation = useNavigation();

    let levels = [];
    for (let i = 0; i < 50; i++) {
        levels.push(i + 1);
    }
    return (
        <View style={styles.grid}>
            {levels.map((value, index) => {
                return (
                    <Pressable 
                        style={styles.level} 
                        key={index}
                        onPress={() => navigation.navigate('Level', {
                            index: value
                        })}
                    >
                        <Text style={styles.id}>{value}</Text>
                    </Pressable>
                )
            })}
        </View>
    )
}

function SelectScreen() {

    const navigation = useNavigation();

    return (
        <SafeAreaView>
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
        </SafeAreaView>
    );
}

export default SelectScreen;

const styles = StyleSheet.create({
    grid: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    level: {
        width: 55,
        height: 55,
        marginVertical: 4,
        marginHorizontal: 7.5,
        borderWidth: .5,
        borderColor: 'black',
        borderRadius: 5,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    id: {
        color: 'green',
        fontSize: 28,
    },
    header: {
        height: 70,
    },
    button: {
        height: 50,
        width: 50,
        position: 'absolute',
        top: 5,
        left: 25,
    }
})