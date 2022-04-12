import React, {useState} from 'react';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TextInput,
  Animated,
} from 'react-native';
import {PanGestureHandler} from 'react-native-gesture-handler';
import Button from '../../HOC/Button';

const {width} = Dimensions.get('window');

const Component1 = ({setActiveIndex}) => {
  const [opacity, setOpacity] = useState(new Animated.Value(1));
  const [transitTo, setTransitTo] = useState(new Animated.Value(0));

  const handleNext = () => {
    Animated.timing(opacity, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true,
    }).start();
    Animated.timing(transitTo, {
      toValue: -width,
      duration: 200,
      useNativeDriver: true,
    }).start(() => {
      setActiveIndex(1);
    });
  };

  return (
    <PanGestureHandler onGestureEvent={handleNext}>
      <Animated.View
        style={[
          styles.parent,
          {opacity, transform: [{translateX: transitTo}]},
        ]}>
        <Text style={styles.heading}>Subscribe to our Monthly Newsletter</Text>
        <TextInput placeholder="Enter Email" style={styles.inputField} />
        <Button
          marginHorizontal={30}
          marginTop={20}
          color="#4F2C73"
          label="Next  ⏭"
          onPress={handleNext}
        />
      </Animated.View>
    </PanGestureHandler>
  );
};

export default Component1;

const styles = StyleSheet.create({
  parent: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    marginTop: 20,
    fontSize: 25,
  },
  inputField: {
    width: '80%',
    backgroundColor: '#ffd',
    padding: 10,
    borderRadius: 5,
    marginTop: 30,
  },
});
