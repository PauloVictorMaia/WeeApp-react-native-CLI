import React from 'react';
import { View, Text, Image} from 'react-native';
import styles from './styles';
import BackButton from '../../assets/images/Vector.png';
import WeeAppIcon from '../../assets/images/wee-icon-white-1.png';
import { useNavigation } from '@react-navigation/native';

function TopBar ({title, subtitle}) {
  
  const {goBack} = useNavigation();
  function GoBack() {
    goBack();
  };

  return(
      <View style={styles.containerTopBar}>
          <Text style={styles.backButton} onPress={GoBack}><Image source={BackButton}/></Text>
          <Text style={styles.textTopBar}>{title}</Text><Text style={styles.textTopBarBold}>{subtitle}</Text>
          <Image style={styles.weeAppIcon} source={WeeAppIcon} />
      </View>
  )
};

export default TopBar;