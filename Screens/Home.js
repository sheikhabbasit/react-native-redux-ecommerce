import {View, TextInput, ScrollView, StyleSheet, Pressable} from 'react-native';
import React, {useState} from 'react';
import Tabs from '../Source/Components/Tabs';

const Home = props => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <View style={styles.wrapper}>
      <ScrollView>
        <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <TextInput style={styles.input} />
      </ScrollView>
    </View>
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
