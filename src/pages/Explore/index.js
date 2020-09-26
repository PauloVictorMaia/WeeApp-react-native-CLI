import React from 'react';
import { View, Text, Image} from 'react-native';
import styles from './styles';
import WeeAppIcon from '../../assets/images/wee-icon-white-1.png';
import SearchIcon from '../../assets/images/loupe.svg'

 function Explore () {

  return(
        <View style={styles.container}>
            <View style={styles.containerTopExplore}>
                <Image style={styles.weeAppIcon} source={WeeAppIcon} />
            </View>

            <View style={styles.content}>
                <Text style={styles.textContent}>explore possíveis destinos !</Text>
                <SearchIcon width='30' height='30' fill='#7E2DC2'  />
            </View>
        </View>
  )
};

export default Explore;