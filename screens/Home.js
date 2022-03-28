import * as React from 'react';
import { StyleSheet, Button, SafeAreaView, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function HomeScreen() {

    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.home}>
            <Text style={styles.logo}>WordGame</Text>
            <Button
                title="Levels"
                onPress={() => navigation.navigate('Select')}
            />
        </SafeAreaView>
    );
}

export default HomeScreen;

const styles = StyleSheet.create({
    home: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo: {
        marginVertical: 125,
        fontSize: 50,
    }
})