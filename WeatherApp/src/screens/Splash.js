import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Fonts } from '../common/Fonts';

const Splash = (props) => {

    setTimeout(() => {
        props.navigation.navigate('Home')
    }, 1000);

    return (
        <View style={styles.mainContainer}>
            <Text style={styles.splashText}>WheatherApp</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    splashText: {
        color: "#00804A",
        fontSize: 40,
        fontFamily: Fonts.RobotoBold
    },
});

export default Splash;