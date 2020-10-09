import React from 'react';
import { View, Text, Image} from 'react-native';
import TopBar from '../../components/topbar';
import Swiper from 'react-native-swiper';
import CarnavalImg from '../../assets/images/carnaval.jpg'
import styles from '../../components/topbar/styles';

function Home() {
    return(
    <>
        <TopBar />
        <View style={styles.container}>
            <Text>teste</Text>
            <Swiper
            style={{height: 200}}
            autoplay={true}
            >
                <Image source={CarnavalImg} />
                <Image source={CarnavalImg} />
            </Swiper> 
        </View>
    </>
    );
};

export default Home;