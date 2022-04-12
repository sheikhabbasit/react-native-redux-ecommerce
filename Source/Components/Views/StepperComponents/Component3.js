import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Dimensions, Animated} from 'react-native';
import Button from '../../HOC/Button';

const {width} = Dimensions.get('window');

const Component3 = ({activeIndex, setActiveIndex}) => {
  const [transitTo, setTransitTo] = useState(new Animated.Value(width));
  const [opacity, setOpacity] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 200,
      useNativeDriver: true,
    }).start();
    Animated.timing(transitTo, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true,
    }).start();
  }, [activeIndex]);

  return (
    <Animated.View
      style={[styles.parent, {opacity, transform: [{translateX: transitTo}]}]}>
      <Text style={styles.heading}>
        Successfully subscribed to the Newsletter..
      </Text>
      <Button
        marginHorizontal={30}
        marginTop={40}
        color="#4F2C73"
        label="Done  ☑  "
        onPress={() => setActiveIndex(0)}
      />
    </Animated.View>
  );
};

export default Component3;

const styles = StyleSheet.create({
  parent: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    marginTop: 20,
    fontSize: 25,
  },
});
