import React from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import styles from './styles';
import TopBar from '../../components/topbar/index';

function Register() {
    return(
        <>
        <TopBar title='Faça seu cadastro' />
            <View style={styles.containerRegister}>
                <View styles={styles.InputBlock}>
                    <Text style={styles.textDescription}>E-mail</Text>
                    <TextInput name='InputEmail' 
                    placeholder='Seu melhor e-mail ' 
                    style={styles.inputItem}/>
                </View>
                <View>
                    <Text style={styles.textDescription}>Nome</Text>
                    <TextInput name='Username' 
                    placeholder='Seu nome de usuário ' 
                    style={styles.inputItem}/>
                </View>
                <View>
                    <Text style={styles.textDescription}>Contato</Text>
                    <TextInput name='Fone' 
                    placeholder='(DDD)*****-****' 
                    style={styles.inputItem}/>
                </View>
                <View>
                    <Text style={styles.textDescription}>Senha</Text>
                    <TextInput name='Password' 
                    placeholder='Defina sua senha' 
                    style={styles.inputItem} 
                    secureTextEntry={true}/>
                </View>   
                <View>
                    <Text style={styles.textDescription}>Repetir senha</Text>
                    <TextInput name='RepeatPassword' 
                    placeholder='Repita a senha Definida' 
                    style={styles.inputItem} 
                    secureTextEntry={true}/>
                </View>
                    <TouchableOpacity name='ButtonSubmit' style={styles.ButtonSubmit}>
                    <Text style={styles.textButton}>Cadastrar</Text>
                </TouchableOpacity>

                <Text name='RegisterProblem' style={styles.RegisterProblem}>
                    Problemas no Seu Cadastro?
                </Text>
            </View>
        </>
    );
};

export default Register;
