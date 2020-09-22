import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import TopBar from '../../components/topbar/index'

function ToExperiment() {
    return(
        <>
        <TopBar />
        <View>
            <Text>Experimentar</Text>
        </View>
        </>
    )
}

export default ToExperiment;