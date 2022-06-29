import React from 'react';
import { View, SafeAreaView, TouchableOpacity, ImageBackground, Text, Image } from 'react-native';
import { Colors } from '../../Constants/Color';
import styles from './styles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { String } from '../../Constants/String';
import moment from 'moment';

interface Props {
  route?: any;
}

const HomeDetail: React.FC<Props> = ({ route, navigation }) => {
  const { musicDetail } = route.params;
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        style={styles.musicImage}
        source={{
          uri: musicDetail.artworkUrl100
        }}
      >
        <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.backBtn}>
          <MaterialIcons name="arrow-back-ios" size={20} color={Colors.white} />
        </TouchableOpacity>
        <View style={styles.txtVw}>
          <Text style={styles.collectionTxt}>{String.Artist}</Text>
          <Text style={styles.artstTxt}>{musicDetail.artistName}</Text>
        </View>
      </ImageBackground>
      <View style={styles.mainBottomVw}>
        <View style={styles.mainTabVw}>
          <View style={styles.tabVw}>
            <Text style={styles.tabDetailTxt}>{String.FollowersTxt}</Text>
            <Text style={styles.tabTitleTxt}>{musicDetail.country}</Text>
          </View>
          <View style={styles.tabVw}>
            <Text style={styles.tabDetailTxt}>{String.FollowingTxt}</Text>
            <Text style={styles.tabTitleTxt}>${musicDetail.trackPrice}</Text>
          </View>
        </View>
        <Text style={styles.albumTxt}>{String.Albums}</Text>
        <View style={styles.mainCardView}>
          <Image source={{
            uri: musicDetail.artworkUrl100
          }} style={styles.artImg} resizeMode={"cover"} />
          <View style={styles.cardTxtVw}>
            <Text style={styles.cardTitleTxt}>{musicDetail.collectionName}</Text>
            <Text style={styles.yrTxt}>{moment(musicDetail.releaseDate).format('YYYY')}</Text>
          </View>
        </View>
      </View>
    </SafeAreaView >
  );
};

export default HomeDetail;
