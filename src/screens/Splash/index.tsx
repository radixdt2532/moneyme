import {
  View,
  SafeAreaView,
  Image
} from 'react-native';
import React, { useEffect } from 'react';
import { Props } from './ISplash';
import styles from './styles';
import { Images } from '../../../assets/images';
const Splash: React.FC<Props> = ({ navigation }) => {
  useEffect(() => {
    _goToIntroScreen()
  }, []);

  function _goToIntroScreen() {
    setTimeout(() => {
      navigation.navigate("Intro")
    }, 500);
  }
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.container}>
        <Image source={Images.MoneyMe} style={styles.moneyMeImg} resizeMode={"contain"} />
      </View>
    </SafeAreaView>
  );
};

export default Splash;
