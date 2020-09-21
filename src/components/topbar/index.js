import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';
import BackButton from '../../assets/images/Vector.png';
import WeeAppIcon from '../../assets/images/wee-icon-white-1.png';

function TopBar() {
  return(
      <View style={styles.containerTopBar}>
          <Image style={styles.backButton} source={BackButton} />
          <Text style={styles.textTopBar}>Encontre Seu <Text style={styles.textTopBarBold}>Wee !</Text></Text>
          <Image style={styles.weeAppIcon} source={WeeAppIcon} />
      </View>
  )
};

export default TopBar;