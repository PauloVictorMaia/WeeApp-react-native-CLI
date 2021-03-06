import React from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, Alert } from 'react-native';
import styles from './styles';
import WeeAppIcon from '../../assets/images/wee-icon-white-1.png';
import TopBar from '../../components/topbar';

function Login({navigation}){
    function PressLogin() {
        Alert.alert("WeeApp", 'Sistema de Login ainda em produção')
    };

    return(
    <>
       <TopBar />
       <View style={styles.container}>
           <Image style={styles.weeAppIcon} source={WeeAppIcon}></Image>
           <Text style={styles.text}>Efetue seu <Text style={styles.textbold}>Login</Text></Text>
           <View style={styles.inputBlock}>
                <TextInput placeholder='Seu e-mail cadastrado' style={styles.inputItem}/>
                <TextInput placeholder='Senha' style={styles.inputItem2} secureTextEntry={true}/>
                <TouchableOpacity style={styles.buttonLogin} onPress={PressLogin}>
                    <Text style={styles.textButton}>Entrar</Text>
                </TouchableOpacity>
                <Text style={styles.textPassword}>Esqueceu sua senha?</Text>
                <Text style={styles.textAccount} 
                                onPress={() =>navigation.navigate('Register')}>
                                    Deseja criar uma conta?
                </Text>
           </View>
       </View>
    </>
    )
};

export default Login;