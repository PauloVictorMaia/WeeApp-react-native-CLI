import React from 'react';
import { View, Text, Image} from 'react-native';
import TopBar from '../../components/topbar';
import UserImage from '../../assets/images/userVictor.jpeg';
import styles from './styles';

function Profile() {
    return(
    <>
        <TopBar title='Seu' subtitle='Perfil !' />
        <View style={styles.container}> 
            <View style={styles.imageContainer}>
                <Image style={styles.userImage} source={UserImage} />
                <Text>Victor Nery</Text>
            </View>   
        </View>
    </>
    );
};

export default Profile;