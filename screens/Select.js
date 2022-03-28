import * as React from 'react';
import { StyleSheet, SafeAreaView, Text } from 'react-native';

function SelectScreen() {
  return (
    <SafeAreaView style={styles.home}>
      <Text style={styles.logo}>Level Selection</Text>
    </SafeAreaView>
  );
}

export default SelectScreen;

const styles = StyleSheet.create({
    home: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo: {
        marginVertical: 25,
        fontSize: 35,
    }
})