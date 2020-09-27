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

    scrollView: {
        marginTop: 10,
    },
    
    scrollContainer: {
        justifyContent:'center',
        alignItems:'center',
    },
    
    exploreImages: {
        width: 100,
        height: 100,
        margin: 10,
        borderRadius: 4,
    },

    textScroll: {
        color: '#808080',
        fontWeight: 'bold',
        fontSize: 16,

    },

    largeScrollView: {
        marginTop: 20,
    },

    largeExploreImages: {
        width: 300,
        height: 200,
        margin: 10,
    },

});

export default styles;