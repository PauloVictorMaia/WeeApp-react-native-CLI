import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#7E2DC2',
        flex: 1,
        alignItems: 'center',
    },
    
    WeeAppIcon: {
        marginTop: 120,
    
    },
      
    text: {
        color: '#00EAE0',
        marginTop: 40,
        fontWeight:"bold",
        fontSize: 20,
        fontFamily:'Josefin Sans'
    },
    
    ButtonBlock: {
        marginTop: 40,
    },
    
    Button: {
        borderBottomWidth: 1,
        paddingTop: 6,
        paddingLeft: 65,
        marginTop: 20,
        width: 250,
        height: 40,
        backgroundColor: '#fff',
        borderRadius: 8,
    },

    TextButton: {
        color: '#7E2DC2',
        fontSize: 20,
        fontWeight: 'bold',
    },  

    ButtonPrimary: {
        backgroundColor: '#00EAE0',
    },

    ButtonSecond: {
        backgroundColor: '#fff',
    },

    TextContainer: {
        marginTop: 100,
        alignItems: "center",
    },

    TextAccount: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 22,
    },

});

export default styles