import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  FlatList,
  Image
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import styles from './styles';
import { Props } from './IHome';
import { Colors } from '../../Constants/Color';
import { String } from '../../Constants/String';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Images } from '../../../assets/images';
import { ApplicationState, onData } from '../../Redux';
import _ from 'lodash';
import moment from 'moment';

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  const [srchTxt, setSrchTxt] = useState('')
  const [filterOption, setFilterOption] = useState(-1)
  const [musicData, setMusicData] = useState([])

  const dispatch = useDispatch();

  const { data, error } = useSelector(
    (state: ApplicationState) => state.homeReducer,
  );

  useEffect(() => {
    setMusicData(data)
    setFilterOption(0)
    if (data) {
      _filterData(filterOption)
    }
  }, [data]);

  function _filterData(val) {
    if (val === 0) {
      let gfg = _.sortBy([...data],
        [function (o) { return o.collectionName; }]);
      setMusicData(gfg)
    } else if (val === 1) {
      let blogPosts = _.sortBy([...data], function (o) { return new moment(o.releaseDate); }).reverse();
      setMusicData(blogPosts)
    } else {
      return;
    }
  }

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate("HomeDetail", { musicDetail: item })} style={styles.flatCardVw}>
      <Image
        style={styles.musicImage}
        source={{
          uri: item.artworkUrl100,
        }}
      />
      <Text style={styles.nameTxt}>{item.artistName}</Text>
      <Text style={styles.detailTxt}>{item.collectionName}</Text>
    </TouchableOpacity>
  );

  function _searchBar() {
    return (
      <View style={styles.searchVw}>
        <TextInput
          placeholder={"Search..."}
          autoCapitalize="none"
          value={srchTxt}
          onChangeText={text => _setSearchData(text)}
          style={styles.srchInput}
        />
        <TouchableOpacity onPress={() => setSrchTxt('')} style={styles.closeBtn}>
          <MaterialIcons name="close" size={20} color={Colors.black} />
        </TouchableOpacity>
      </View>
    )
  }

  function _setSearchData(text) {
    setSrchTxt(text)
    dispatch(onData(text));
  }

  function _renderNoDataView(image, text, srchTxt) {
    return (
      <View style={styles.noDataVw}>
        <Image
          style={styles.homeImage}
          source={image}
        />
        <Text style={styles.noDataTxt}>{srchTxt ? text.replace(/xyz/g, srchTxt) : text}</Text>
      </View>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      {_searchBar()}
      {srchTxt && musicData.length > 0 ? <View style={styles.topTabVw}>
        <TouchableOpacity onPress={() => { setFilterOption(0), _filterData(0) }} style={styles.topTabBar}>
          <Text style={[styles.topBtnTxt, { color: filterOption === 0 ? Colors.green : Colors.white }]}>{String.ColName}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { setFilterOption(1), _filterData(1) }} style={styles.topTabBar}>
          <Text style={[styles.topBtnTxt, { color: filterOption === 1 ? Colors.green : Colors.white }]}>{String.RelDate}</Text>
        </TouchableOpacity>
      </View> : null}
      <View style={styles.flatVw}>
        {srchTxt ? musicData.length > 0 ? <FlatList
          data={musicData}
          numColumns={2}
          renderItem={renderItem}
          keyExtractor={(item, index) => index}
        /> :
          _renderNoDataView(Images.NoMusic, String.SearchStr, srchTxt)
          :
          _renderNoDataView(Images.HomeMusic, String.homeSrchTxt)}
      </View>
    </SafeAreaView>
  );
};
export default HomeScreen;
