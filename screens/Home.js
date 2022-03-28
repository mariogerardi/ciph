import * as React from 'react';
import { StyleSheet, Button, SafeAreaView, Text } from 'react-native';

function HomeScreen({ navigation }) {
    return (
        <SafeAreaView style={styles.home}>
            <Text style={styles.logo}>WordGame</Text>
            <Button
                title="Go to Details"
                onPress={() => navigation.navigate('Details')}
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