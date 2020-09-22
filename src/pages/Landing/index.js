import React from 'react';
import {View,Text,StatusBar,Image,TouchableOpacity} from 'react-native';
import styles from './styles';
import WeeAppIcon from '../../assets/images/wee-icon-white-1.png'

function Landing({navigation}) {
    return(
        <>
    <StatusBar barStyle="dark-content" />
        <View style={styles.container}>
            <Image style={styles.WeeAppIcon} source={WeeAppIcon} />
            <Text style={styles.text}>Bem vindo ao Wee App!</Text>
            <View style={styles.ButtonBlock}>
                <TouchableOpacity style={[styles.Button, styles.ButtonPrimary]} 
                    onPress={() =>navigation.navigate('ToExperiment')}>
                        <Text style={styles.TextButton} >Experimentar !</Text>
                </TouchableOpacity>         
                <TouchableOpacity style={[styles.Button, styles.ButtonSecond]}
                    onPress= {() => navigation.navigate('Login')}>
                        <Text style={styles.TextButton}>Efetuar Login</Text>
                </TouchableOpacity>
                </View> 
                <View style={styles.TextContainer} >
                    <Text style={styles.TextAccount} 
                        onPress={() =>navigation.navigate('Register')}>
                            Deseja criar uma conta?
                    </Text>
                </View>
        </View>
      </>
    )
}

export default Landing;