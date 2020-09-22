import React from 'react';
import { View, Text, Image, Button} from 'react-native';
import styles from './styles';
import BackButton from '../../assets/images/Vector.png';
import WeeAppIcon from '../../assets/images/wee-icon-white-1.png';
import {useNavigation} from '@react-navigation/native';

function TopBar({navigation}) {
  const {goBack} = useNavigation();
  function GoBack() {
    goBack();
  };
  
  return(
      <View style={styles.containerTopBar}>
          <Text style={styles.backButton} onPress={GoBack}><Image source={BackButton}/></Text>
          <Text style={styles.textTopBar}>Encontre Seu <Text style={styles.textTopBarBold}>Wee !</Text></Text>
          <Image style={styles.weeAppIcon} source={WeeAppIcon} />
      </View>
  )
};

export default TopBar;