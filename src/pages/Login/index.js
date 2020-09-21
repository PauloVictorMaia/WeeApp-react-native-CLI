import React from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, Alert } from 'react-native';
import styles from './styles';
import WeeAppIcon from '../../assets/images/wee-icon-white-1.png';

function Login(){
    PressLogin = () => {
        Alert.alert("WeeApp", 'Sistema de Login ainda em produção')
    };
    
    return(
       <View style={styles.container}>
           <Image style={styles.weeAppIcon} source={WeeAppIcon}></Image>
           <Text style={styles.text}>Efetue seu <Text style={styles.textbold}>Login</Text></Text>
           <View style={styles.inputBlock}>
                <TextInput placeholder='Seu e-mail cadastrado' style={styles.inputItem}/>
                <TextInput placeholder='Senha' style={styles.inputItem2} secureTextEntry={true}/>
                <TouchableOpacity style={styles.buttonLogin} onPress={ () => {this.PressLogin()} }>
                    <Text style={styles.textButton}>Entrar</Text>
                </TouchableOpacity>
                <Text style={styles.textPassword}>Esqueceu sua senha?</Text>
           </View>
       </View>
    )
};

export default Login;