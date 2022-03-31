import {transform} from '@babel/core';
import React, {useState} from 'react';
import {View, Text, Animated, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Button from '../Components/HOC/Button';

const Animations = () => {
  const [animatedValue] = useState(new Animated.Value(0));
  const [buttonLabel, setButtonLabel] = useState('Start');

  const toggleSpinner = () => {
    Animated.timing(animatedValue, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();

    setTimeout(() => {
      Animated.timing(animatedValue, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      }).start();
    }, 1500);
  };

  return (
    <View style={styles.wrapper}>
      <Animated.View
        style={[
          styles.obj,
          {
            transform: [
              {
                rotateX: animatedValue.interpolate({
                  inputRange: [0, 1],
                  outputRange: ['0deg', '360deg'],
                }),
              },
            ],
            transform: [
              {
                rotateY: animatedValue.interpolate({
                  inputRange: [0, 1],
                  outputRange: ['0deg', '360deg'],
                }),
              },
            ],
            transform: [
              {
                rotateZ: animatedValue.interpolate({
                  inputRange: [0, 1],
                  outputRange: ['0deg', '360deg'],
                }),
              },
            ],
          },
        ]}>
        <Ionicons name="ios-add" size={100} color="#000" />
      </Animated.View>
      <Button color={'black'} label={buttonLabel} onPress={toggleSpinner} />
    </View>
  );
};

export default Animations;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  obj: {},
});
