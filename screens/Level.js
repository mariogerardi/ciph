import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { StyleSheet, SafeAreaView, View, Text, Pressable, Image } from 'react-native';

function Level({route}) {

    const navigation = useNavigation();

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
            <View style={styles.home}>
                <Text style={styles.logo}>Level {route.params.index}</Text>
            </View>
        </SafeAreaView>
    );
}

export default Level;

const styles = StyleSheet.create({
    home: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo: {
        marginVertical: 125,
        fontSize: 50,
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