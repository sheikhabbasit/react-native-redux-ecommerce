import {
  Image,
  Text,
  View,
  StyleSheet,
  Pressable,
  Dimensions,
} from 'react-native';
import React from 'react';
import Card from '../HOC/Card';
import {useNavigation} from '@react-navigation/native';
import {useTheme} from '../../Hooks/useTheme';

const {width} = Dimensions.get('window');

const ProductItem = props => {
  const {imageSource, name, price, discount} = props.product;
  const {product} = props;
  const navigation = useNavigation();
  const darkMode = useTheme();

  const navigateTo = () => {
    navigation.navigate('Product Details', {product});
  };

  return (
    <Card>
      <Pressable style={styles.wrapper} onPress={navigateTo}>
        <Image style={styles.image} source={imageSource} />
        <View style={styles.detailsContainer}>
          <Text
            numberOfLines={1}
            style={[styles.productName, darkMode ? styles.darkText : null]}>
            {name}
          </Text>
          <Text
            style={[styles.productLabel, darkMode ? styles.darkText : null]}>
            Price: ${price}
          </Text>
          <Text style={[styles.discount, darkMode ? styles.darkText : null]}>
            <Text style={styles.discountLabel}>{discount}</Text> off
          </Text>
        </View>
      </Pressable>
    </Card>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  wrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  detailsContainer: {
    borderRadius: 10,
    width: width / 2.4,
  },
  discount: {
    textAlign: 'center',
    paddingHorizontal: 10,
    alignSelf: 'flex-start',
    fontSize: 14,
    fontWeight: 'bold',
    color: '#eda6c2',
  },
  discountLabel: {
    fontWeight: 'bold',
    color: '#08a626',
    fontSize: 20,
  },
  image: {
    width: 160,
    height: 180,
    margin: 0,
    marginBottom: 10,
    borderRadius: 10,
    opacity: 0.7,
  },
  productName: {
    fontSize: 18,
    color: '#eda6c2',
    fontWeight: 'bold',
    overflow: 'hidden',
  },
  productLabel: {
    fontSize: 15,
    color: '#eda6c2',
    fontWeight: 'bold',
    opacity: 0.7,
  },
  darkText: {
    color: '#fff',
  },
});
