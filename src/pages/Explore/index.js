import React from 'react';
import { View, Text, Image} from 'react-native';
import styles from './styles';
import BackButton from '../../assets/images/Vector.png';
import WeeAppIcon from '../../assets/images/wee-icon-white-1.png';
import { useNavigation } from '@react-navigation/native';

 function Explore ({title, subtitle}) {

  return(
      <View style={styles.containerTopExplore}>
          <Image style={styles.weeAppIcon} source={WeeAppIcon} />
      </View>
  )
};

export default Explore;