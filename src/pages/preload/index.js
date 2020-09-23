import React, {useEffect} from 'react';
import { View, StyleSheet, Image, ActivityIndicator } from 'react-native';
import WeeAppIcon from '../../assets/images/wee-icon-white-1.png';
import AsyncStorage from '@react-native-community/async-storage';

function Preload({navigation}) {
    useEffect(() =>{
        const checkToken = async () => {
            const token = await AsyncStorage.getItem('token');
            if(token){

            } else {
                navigation.navigate('Landing');
            };
        };

        checkToken();

    }, []);
    
    return(
        <View style={styles.container}>
            <Image source={WeeAppIcon} />
            <ActivityIndicator style={styles.loading} size='large' color='#fff' />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor:'#7E2DC2',
        flex: 1,
        justifyContent:"center",
        alignItems: "center",
    },

    loading: {
        marginTop:30,

    },
});

export default Preload;