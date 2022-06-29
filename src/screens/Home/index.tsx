import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  View
} from 'react-native';
import styles from './styles';
import { Props } from './IHome';

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
      </View>
    </SafeAreaView>
  );
};
export default HomeScreen;
