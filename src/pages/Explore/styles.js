import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    containerTopExplore : {
        backgroundColor: '#7E2DC2',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        height: 75,
        alignItems: 'center',
    },
    
    weeAppIcon: {
        height: 43,
        width: 35,
        marginRight:15,
    },

    content: {
      marginTop: 10,
      marginLeft:17,  
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#d9d9d9',
      width: 360,
      borderRadius: 20,

    },

    textContent: {
        color: '#7E2DC2',
        fontWeight: 'bold',
        fontSize: 24,
        width: 250,
    },

    searchIcon: {
        width: 30,
        height: 30,
    },

});

export default styles;