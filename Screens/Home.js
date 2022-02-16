import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';

const Home = props => {
  const [count, setCount] = useState(0);
  const handlePress = () => {
    setCount(count => count + 1);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text1}>
        {/* {props.route.params.data} */}
        Sample Text
      </Text>
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={{margin: 10, backgroundColor: 'brown'}}>
          TouchableOpacity at Work here
        </Text>
        <Text style={{margin: 10}}>Press Me</Text>
      </TouchableOpacity>
      <Text style={styles.text2}>
        {/* {props.route.params.name} */}
        {count}
      </Text>
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
    backgroundColor: 'violet',
    flex: 1,
  },
  button: {
    backgroundColor: 'grey',
  },
});
export default Home;
