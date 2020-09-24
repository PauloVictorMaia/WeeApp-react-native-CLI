import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    containerTopBar : {
        backgroundColor: '#7E2DC2',
        flexDirection: 'row',
        justifyContent:'space-between',
        height: 75,
        alignItems: 'center',
    },

    backButton: {
        height: 30,
        width: 15,
        marginLeft: 15,
    },

    textTopBar: {
        fontSize: 23,
        fontWeight:'400',
        color: '#fff',
    },

    weeAppIcon: {
        height: 43,
        width: 35,
        marginRight:15,
    },

    textTopBarBold: {
        fontSize: 23,
        fontWeight: '700',
        color: '#00EAE0',
        marginLeft: -80,
    },  



});

export default styles;