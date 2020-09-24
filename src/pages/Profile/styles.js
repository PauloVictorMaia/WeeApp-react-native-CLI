import React from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },

    imageContainer: {
        alignItems: 'center',
        marginTop: 45,
    }, 
    
    userImage: {
        borderRadius: 80,
        width: 130,
        height: 130,
        borderColor: '#7E2DC2',
        borderWidth: 1.5,
    },

    userName: {
        color: '#000',
        fontWeight: 'bold',
        fontSize: 18,
        marginTop: 7,
    },

    hideContainer: {
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },

    hideInformation: {
        color: '#b3b3b3',
        fontWeight: 'bold',
    },

    userContent: {
        width: 300,
        height: 50,
        backgroundColor: '#e6e6e6',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginTop: 10,
    },

    content: {
        color: '#000',
        fontWeight: 'bold',
        fontSize: 18,
    },

    ContentContainer: {
        marginTop: 40,
    },

    editInformation: {
        fontSize: 17,
        marginLeft: 80,
        marginTop: 30,
        fontWeight: 'bold',
    },


});

export default styles;