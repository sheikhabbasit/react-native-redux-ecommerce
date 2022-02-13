import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const Home = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.text1}>{props.route.params.data}</Text>
      <Text style={styles.text2}>{props.route.params.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text1: {
    fontSize: 30,
    backgroundColor: 'blue',
    flex: 1,
    marginBottom: 20,
  },
  text2: {
    fontSize: 30,
    backgroundColor: 'yellow',
    flex: 1,
  },
});
export default Home;
