import React from 'react';
import {
    ActivityIndicator,
    StyleSheet,
    View,
    Dimensions
} from 'react-native';

export default Loader = ({ }) => {
    return (
        <View style={styles.loader}>
            <ActivityIndicator size="large" color='#00804A' />
        </View>
    )
}

const styles = StyleSheet.create({
    loader: {
        flex: 1,
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        position: 'absolute',
        alignSelf: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(245,245,245, 0.7)',
    }
});