import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
   container: {
       backgroundColor: '#7E2DC2',
       flex: 1,
       alignItems: 'center'
    },

    weeAppIcon: {
        marginTop: 120,
    },

    text: {
        marginTop: 40,
        fontSize: 25,
        fontWeight: '400',
        color: '#fff'
    },

    textbold: {
        color: '#00EAE0',
        fontWeight: '700', 
    },
    
    inputBlock: {
        marginTop: 40,
        alignItems: 'center',
    },

    inputItem: {
        backgroundColor: '#fff',
        width: 250,
        height: 40,
        borderRadius: 8,
        marginTop: 20,
        paddingLeft: 50,
    },

    inputItem2: {
        backgroundColor: '#fff',
        width: 250,
        height: 40,
        borderRadius: 8,
        marginTop: 20,
        paddingLeft: 100,
    },

    buttonLogin: {
        borderBottomWidth: 1,
        paddingTop: 6,
        paddingLeft: 100,
        marginTop: 60,
        width: 250,
        height: 40,
        backgroundColor: '#00EAE0',
        borderRadius: 8,
    },

    textButton: {
        color: '#7E2DC2',
        fontSize: 20,
        fontWeight: 'bold',
    },

    textPassword: {
        fontSize: 20,
        color: '#fff',
        fontWeight: 'bold',
        marginTop: 90,
    },
});

export default styles;