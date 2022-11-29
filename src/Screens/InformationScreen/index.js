/* eslint-disable react/react-in-jsx-scope */
import {styles} from './style';
import {connect} from 'react-redux';
import React, {useState} from 'react';
import Button from '../../Components/Button';
import {ROUTERS} from '../../utils/navigation';
const image = require('../../../assets/img/Top-2.png');
import {View, Text, Image, Dimensions, TouchableOpacity} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
//
const infoData = [
  {
    id: 1,
    title: 'Lorem ipsum dolor',
    title2:
      'onsectetur adipiscing elit. Nunc quis vulputate magna, id interdum odio. Sed gravida turpis sed imperdiet imperdiet. Phasellus rutrum urna a nisl vehicula',
  },
  {
    id: 1,
    title: 'Lorem ipsum dolor',
    title2:
      'onsectetur adipiscing elit. Nunc quis vulputate magna, id interdum odio. Sed gravida turpis sed imperdiet imperdiet. Phasellus rutrum urna a nisl vehicula',
  },
  {
    id: 1,
    title: 'Lorem ipsum dolor',
    title2:
      'onsectetur adipiscing elit. Nunc quis vulputate magna, id interdum odio. Sed gravida turpis sed imperdiet imperdiet. Phasellus rutrum urna a nisl vehicula',
  },
  {
    id: 1,
    title: 'Lorem ipsum dolor',
    title2:
      'onsectetur adipiscing elit. Nunc quis vulputate magna, id interdum odio. Sed gravida turpis sed imperdiet imperdiet. Phasellus rutrum urna a nisl vehicula',
  },
];

const InformationScreen = ({navigation}) => {
  //
  const [itemSelected, setItemSelected] = useState(0);

  const handleButtonCreateAccount = () => {
    navigation.navigate(ROUTERS.Register);
  };

  const pagination = () => {
    return (
      <Pagination
        dotsLength={infoData.length}
        activeDotIndex={itemSelected}
        containerStyle={styles.containerStyle}
        dotStyle={styles.dotStyle}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
    );
  };

  const renderItem = ({item, index}) => {
    return (
      <View style={styles.slide}>
        <Text style={{textAlign: 'center', fontSize: 30}}>{item.title}</Text>
        <Text style={{textAlign: 'center'}}>{item.title2}</Text>
      </View>
    );
  };

  const width = Dimensions.get('window').width;
  return (
    <View style={styles.container}>
      <View style={styles.boxImage}>
        <Image style={styles.image} source={image} />
      </View>
      <View style={styles.boxText}>
        <View>
          <Carousel
            onSnapToItem={index => setItemSelected(index)}
            data={infoData}
            renderItem={renderItem}
            sliderWidth={width}
            itemWidth={width}
          />
        </View>
        {itemSelected === 3 ? (
          <View>
            <Button
              text={'Create Account'}
              onPress={handleButtonCreateAccount}
              backgroundColor={'#03082a'}
            />
          </View>
        ) : (
          <View style={styles.paginationButtons}>
            <View style={styles.boxTextButton}>
              <TouchableOpacity>
                <Text style={styles.textButton}>Back</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.boxPagination}>{pagination()}</View>
            <View style={styles.boxTextButton}>
              <TouchableOpacity>
                <Text style={styles.textButton}>Next</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </View>
    </View>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    actions: {
      // setTokenAction: setToken(dispatch),
    },
  };
};
function mapStateToProps(state) {
  return {
    tokenAuth: state.globalReducer.tokenAuth,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(InformationScreen);
