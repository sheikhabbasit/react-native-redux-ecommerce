import {Image, View, StyleSheet, Pressable, Dimensions} from 'react-native';
import React from 'react';
import Card from '../HOC/Card';
import {useNavigation} from '@react-navigation/native';
import {useTheme} from '../../Hooks/useTheme';
import CustomText from '../Typography/CustomText';

const {width, height} = Dimensions.get('window');

const ProductItem = props => {
  const {imageSource, name, price, discount} = props.product;
  const {product} = props;
  const navigation = useNavigation();
  const darkMode = useTheme();

  const navigateTo = () => {
    navigation.navigate('Product Details', {product});
  };

  return (
    <Card theme={darkMode}>
      <Pressable onPress={navigateTo}>
        <Image style={styles.image} source={imageSource} />
        <View style={styles.detailsContainer}>
          <CustomText
            numberOfLines={1}
            theme={darkMode}
            variant="Bold"
            color="#eda6c2"
            label={name}
            size={18}
          />
          <CustomText
            label={`Price: $${price}`}
            theme={darkMode}
            variant="Regular"
            color="#eda6c2"
            size={15}
            opacity={0.7}
            numberOfLines={1}
          />
          <CustomText
            label={
              <CustomText
                label={discount}
                variant="Bold"
                size={20}
                color={'#08a626'}
              />
            }
            variant="Bold"
            color={'green'}
            size={14}
            children=" off"
          />
        </View>
      </Pressable>
    </Card>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  detailsContainer: {
    borderRadius: 10,
    width: width / 2.5,
  },
  image: {
    width: width / 2.5,
    height: height / 5,
    margin: 0,
    marginBottom: 10,
    borderRadius: 10,
    opacity: 0.7,
  },
});
