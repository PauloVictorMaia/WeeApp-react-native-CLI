import React from 'react';
import { View, Text, Image} from 'react-native';
import styles from './styles';
import WeeAppIcon from '../../assets/images/wee-icon-white-1.png';
import SearchIcon from '../../assets/images/loupe.svg';
import { ScrollView } from 'react-native-gesture-handler';
import Nordeste from '../../assets/images/nordeste.jpeg';
import Sul from '../../assets/images/regiaosul.jpg';
import Sudeste from '../../assets/images/sudeste.png';
import Norte from '../../assets/images/regiaonorte.jpg';
import CentroOeste from '../../assets/images/centrooeste.jpg';
import Carnaval from '../../assets/images/carnaval.jpg';
import Historica from '../../assets/images/cidadehistorica.jpg';

function Explore () {
  return(
    <ScrollView>
        <View style={styles.container}>
            <View style={styles.containerTopExplore}>
                <Image style={styles.weeAppIcon} source={WeeAppIcon} />
            </View>

            <View style={styles.content}>
                <Text style={styles.textContent}>explore possíveis destinos !</Text>
                <SearchIcon width='30' height='30' fill='#7E2DC2'  />
            </View>

            <ScrollView style={styles.scrollView} horizontal={true} showsHorizontalScrollIndicator={false}>
                <View style={styles.scrollContainer}>
                    <Image style={styles.exploreImages} source={Nordeste} />
                    <Text style={styles.textScroll}>Nordeste</Text>
                </View>

                <View style={styles.scrollContainer}>
                    <Image style={styles.exploreImages} source={Sul} />
                    <Text style={styles.textScroll}>Sul</Text>
                </View>

                <View style={styles.scrollContainer}>
                    <Image style={styles.exploreImages} source={Sudeste} />
                    <Text style={styles.textScroll}>Sudeste</Text>
                </View>

                <View style={styles.scrollContainer}>
                    <Image style={styles.exploreImages} source={Norte} />
                    <Text style={styles.textScroll}>Norte</Text>
                </View>

                <View style={styles.scrollContainer}>
                    <Image style={styles.exploreImages} source={CentroOeste} />
                    <Text style={styles.textScroll}>Centro-Oeste</Text>
                </View>

                <View style={styles.scrollContainer}>
                    <Image style={styles.exploreImages} source={Carnaval} />
                    <Text style={styles.textScroll}>Carnaval</Text>
                </View>

                <View style={styles.scrollContainer}>
                    <Image style={styles.exploreImages} source={Historica} />
                    <Text style={styles.textScroll}>História</Text>
                </View>
            </ScrollView>
            <ScrollView style={styles.largeScrollView} horizontal={true} showsHorizontalScrollIndicator={false}>
                <View style={styles.scrollContainer}>
                    <Image style={styles.largeExploreImages} source={Historica} />
                    <Text style={styles.textScroll}>História</Text>
                </View>

                <View style={styles.scrollContainer}>
                    <Image style={styles.largeExploreImages} source={Historica} />
                    <Text style={styles.textScroll}>História</Text>
                </View>

                <View style={styles.scrollContainer}>
                    <Image style={styles.largeExploreImages} source={Historica} />
                    <Text style={styles.textScroll}>História</Text>
                </View>
            </ScrollView>
        </View>
    </ScrollView> 
  )
};

export default Explore;