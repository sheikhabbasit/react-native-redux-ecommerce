import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Animated} from 'react-native';
import FlexedScrollView from '../Components/HOC/FlexedScrollView';
import {song} from '../DummyData/Song';

const TextAnimator = () => {
  const [activeLine, setActiveLine] = useState(0);

  const [transitLine1To, setTransitLine1To] = useState(new Animated.Value(0));
  const [decreaseOpacity1, setDecreaseOpacity1] = useState(
    new Animated.Value(0.5),
  );

  const [transitLine2To, setTransitLine2To] = useState(new Animated.Value(0));
  const [decreaseOpacity2, setDecreaseOpacity2] = useState(
    new Animated.Value(1),
  );

  const [transitLine3To, setTransitLine3To] = useState(new Animated.Value(10));
  const [increaseOpacity3, setIncreaseOpacity3] = useState(
    new Animated.Value(0.5),
  );

  useEffect(() => {
    startRolling();
  }, []);

  const startRolling = () => {
    const timer = setInterval(() => {
      setActiveLine(pre => pre + 1);
    }, 1200);

    Animated.loop(
      Animated.sequence([
        Animated.delay(100),
        Animated.parallel([
          Animated.timing(decreaseOpacity1, {
            toValue: 0,
            duration: 1000,
            useNativeDriver: true,
          }),
          Animated.timing(transitLine1To, {
            toValue: -10,
            duration: 1000,
            useNativeDriver: true,
          }),
          Animated.timing(decreaseOpacity2, {
            toValue: 0.3,
            duration: 1000,
            useNativeDriver: true,
          }),
          Animated.timing(transitLine2To, {
            toValue: -30,
            duration: 1000,
            useNativeDriver: true,
          }),
          Animated.timing(increaseOpacity3, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true,
          }),
          Animated.timing(transitLine3To, {
            toValue: -30,
            duration: 1000,
            useNativeDriver: true,
          }),
        ]),
      ]),
      {
        iterations: 10,
      },
    ).start(({finished}) => {
      if (finished) clearInterval(timer);
    });
  };

  return (
    <View style={styles.container}>
      <Animated.Text
        style={[
          styles.fadedLine,
          {
            opacity: decreaseOpacity1,
            transform: [{translateY: transitLine1To}],
          },
        ]}>
        {song[activeLine - 1] ? song[activeLine - 1].text : ''}
      </Animated.Text>
      <Animated.Text
        style={[
          styles.activeLine,
          {
            opacity: decreaseOpacity2,
            transform: [{translateY: transitLine2To}],
          },
        ]}>
        {song[activeLine] ? song[activeLine].text : ''}
      </Animated.Text>
      <Animated.Text
        style={[
          styles.fadedLine,
          {
            opacity: increaseOpacity3,
            transform: [{translateY: transitLine3To}],
          },
        ]}>
        {song[activeLine + 1] ? song[activeLine + 1]?.text : ''}
      </Animated.Text>
    </View>
  );
};

export default TextAnimator;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#062C30',
  },
  fadedLine: {
    fontSize: 14,
    color: '#fff',
    opacity: 0.5,
    marginBottom: 10,
  },
  activeLine: {
    fontSize: 14,
    color: '#fff',
    marginBottom: 10,
  },
});
