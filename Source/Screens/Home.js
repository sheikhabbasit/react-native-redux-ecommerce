import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import React, {useState} from 'react';

const Home = props => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <SafeAreaView style={styles.wrapper}>
      <ScrollView></ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#FFCBCB',
    flex: 1,
    padding: 20,
  },
  input: {
    marginTop: 20,
    backgroundColor: '#fff',
  },
});

export default Home;
