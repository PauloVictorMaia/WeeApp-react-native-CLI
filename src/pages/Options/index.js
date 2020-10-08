import React from 'react';
import {View,Text,StatusBar} from 'react-native';
import styles from './styles';

function Options() {
    return(
        <>
            <StatusBar barStyle="dark-content" />
                <View style={styles.container}>
                    <Text>Opções</Text>
                </View>
        </>
    )
}

export default Options;