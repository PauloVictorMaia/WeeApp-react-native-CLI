import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { StyleSheet } from 'react-native';
import HomeIcon from '../../assets/images/home.svg';
import SmartPhoneIcon from '../../assets/images/smartphone.svg';
import UserIcon from '../../assets/images/user.svg';



function TabBarCustom({navigation, state}) {
    
    const goTo = (ScreenName) => {
        navigation.navigate(ScreenName);
    };

    return(
        <View style={styles.TabBarContainer }>
            <TouchableOpacity  onPress={() => goTo('Home') }>
                <HomeIcon style={{opacity: state.index===0? 1 : 0.7}} width='30' height='30' fill='#fff' />
            </TouchableOpacity>

            <TouchableOpacity style={styles.CenterItem}  onPress={() => goTo('Explore') }>
                <SmartPhoneIcon style={{opacity: state.index===1? 1 : 0.7}} width='50' height='50' fill='#fff' />
            </TouchableOpacity>

            <TouchableOpacity  onPress={() => goTo('Profile') }>
                <UserIcon style={{opacity: state.index===2? 1 : 0.7}} width='30' height='30' fill='#fff'  />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    TabBarContainer: {
        backgroundColor: '#7E2DC2',
        height: 60,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },

    CenterItem: {
        width: 85,
        height:85,
        backgroundColor: '#bb33ff',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 40,
        borderColor: '#fff',
        borderStyle: 'solid',
        borderColor: '#fff',
        borderWidth: 4,
        marginBottom: 40,
    },
 
});

export default TabBarCustom;