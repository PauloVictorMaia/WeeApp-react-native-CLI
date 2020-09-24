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
                <Text style={styles.userName}>Victor Nery</Text>
            </View> 
            
            <View style={styles.ContentContainer}>
                <View style={styles.hideContainer}>
                    <Text style={styles.hideInformation}>Ocultar informações</Text>
                </View>
                
                <View style={styles.userContent}>
                    <Text style={styles.content}>victornery@gmail.com</Text>
                </View>

                <View style={styles.userContent}>
                    <Text style={styles.content}>(011) 98556-8776</Text>
                </View>

                <Text style={styles.editInformation}>Editar Informações</Text>
            </View>  
        </View>
    </>
    );
};

export default Profile;