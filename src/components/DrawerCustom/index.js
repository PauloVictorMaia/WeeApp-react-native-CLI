import React from 'react';
import { Text, View, Image } from 'react-native';
import {StyleSheet} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import UserImage from '../../assets/images/userVictor.jpeg';

function DrawerCustom({navigation}) {
const goTo = (screen) => {
    navigation.navigate(screen)
};

    return(
    <View style={styles.container}>
        <Image style={styles.userImage} source={UserImage} />
        <Text style={styles.userName}>Victor Nery</Text>
        
        <TouchableOpacity onPress={() => goTo('TabsNavigation')}>
            <View style={styles.textContainer}><Text style={styles.textItem}>Home</Text></View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => goTo('Login')}>
            <View style={styles.textContainer}><Text style={styles.textItem}>Login</Text></View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => goTo('Opções')}>
            <View style={styles.textContainer}><Text style={styles.textItem}>Opções</Text></View>
        </TouchableOpacity>
    </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f2f2f2',
        flex: 1,
        alignItems: 'center',
    },

    userImage: {
        width: 120,
        height: 120,
        borderRadius: 75,
        borderWidth: 2,
        borderColor: '#7E2DC2',
        marginTop: 40,
    },

    userName: {
        fontSize: 17,
        fontWeight: 'bold',
        marginTop: 5,
    },

    textContainer: {
        width:190,
        height: 50,
        backgroundColor: '#e6e6e6',
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    
    textItem: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#7E2DC2',
    },

});

export default DrawerCustom;