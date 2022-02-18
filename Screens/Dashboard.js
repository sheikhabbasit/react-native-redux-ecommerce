import {View, TextInput, ScrollView, StyleSheet, Pressable} from 'react-native';
import React, {useState} from 'react';
import Tabs from '../Source/Components/Tabs';

const Dashboard = props => {
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
    backgroundColor: '#393E46',
    flex: 1,
    padding: 20,
  },
  input: {
    backgroundColor: '#fff',
  },
});

export default Dashboard;
