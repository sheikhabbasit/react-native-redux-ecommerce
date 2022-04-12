import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Dimensions, Animated} from 'react-native';
import {Checkbox} from 'react-native-paper';
import Button from '../../HOC/Button';

const {width} = Dimensions.get('window');

const Component2 = ({activeIndex, setActiveIndex}) => {
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
      <Text style={styles.heading}>Do you agree to our privacy policy?</Text>
      <View style={styles.checkboxContainer}>
        <Checkbox.Item
          label="Yes, I have read the privacy policy"
          status="unchecked"
        />
        <Checkbox.Item
          label="I understand that I'll get monthly newsletters"
          status="unchecked"
        />
        <Checkbox.Item
          label="Yes, I will not block you guys"
          status="unchecked"
        />
      </View>
      <Button
        marginHorizontal={30}
        marginTop={20}
        color="#4F2C73"
        label="⏮  Back "
        onPress={() => setActiveIndex(0)}
      />
      <Button
        marginHorizontal={30}
        marginTop={20}
        color="#4F2C73"
        label="Next  ⏭"
        onPress={() => setActiveIndex(2)}
      />
    </Animated.View>
  );
};

export default Component2;

const styles = StyleSheet.create({
  heading: {
    marginTop: 20,
    fontSize: 25,
    alignSelf: 'center',
    marginBottom: 20,
  },
  parent: {
    justifyContent: 'center',
  },
  checkboxContainer: {
    marginHorizontal: 30,
  },
});
