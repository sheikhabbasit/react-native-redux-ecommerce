import {Text, StyleSheet, ScrollView, Image, Dimensions} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import React, {useLayoutEffect} from 'react';
import Card from '../Components/HOC/Card';
import Button from '../Components/HOC/Button';
import {useDispatch} from 'react-redux';
import {CartActions} from '../Redux/Actions/CartActions';
import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useTheme} from '../Hooks/useTheme';

const {height, width} = Dimensions.get('window');
const ProductDetails = props => {
  const {product} = props.route.params;
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const darkMode = useTheme();

  useLayoutEffect(() => {
    navigation.setOptions({
      title: '',
      headerLeft: props => (
        <React.Fragment>
          <Ionicons
            name="arrow-back-circle-outline"
            size={30}
            color={darkMode ? 'white' : '#eda6c2'}
            style={{marginEnd: 10}}
            onPress={() => navigation.goBack()}
          />
          <Text
            numberOfLines={1}
            style={[styles.header, darkMode ? styles.darkHeader : null]}>
            {product.name}
          </Text>
        </React.Fragment>
      ),
    });
  });

  const addToCart = () => {
    dispatch({type: CartActions.ADD, data: {product}});
  };

  return (
    <SafeAreaView
      style={[styles.parent, darkMode ? styles.darkBackground : null]}>
      <ScrollView
        style={[styles.container, darkMode ? styles.darkBackground : null]}>
        <Card>
          <Image style={styles.image} source={product.imageSource} />
          <Text style={styles.label}>
            Product Name:{'\n'}
            <Text style={styles.productSpecifics}>{product.name}</Text>
          </Text>
          <Text style={styles.label}>
            Cost:{'\n'}
            <Text style={styles.productSpecifics}>{product.price}</Text>
          </Text>
          <Button onPress={addToCart} label="Add to Cart" />
        </Card>
        <Card style={styles.cardSpecific}>
          <Text style={[styles.label, styles.description]}>Description:</Text>
          <Text style={styles.productDescription}>{product.description}</Text>
        </Card>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({
  parent: {
    backgroundColor: '#eda6c2',
  },
  container: {
    backgroundColor: '#eda6c2',
    padding: 10,
  },
  darkBackground: {
    backgroundColor: '#062C30',
  },
  image: {
    width: '100%',
    height: 250,
    borderRadius: 10,
    opacity: 0.8,
  },
  header: {
    fontSize: 18,
    color: '#eda6c2',
    width: width - 70,
    overflow: 'hidden',
  },
  darkHeader: {
    color: 'white',
  },
  label: {
    color: 'white',
    marginTop: 5,
    fontSize: 15,
  },
  description: {
    marginTop: 0,
    fontWeight: 'bold',
  },
  productSpecifics: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white',
  },
  productDescription: {
    fontSize: 15,
    color: 'white',
  },
});
