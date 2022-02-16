import {View, Text, ScrollView, StyleSheet, Pressable} from 'react-native';
import React, {useState} from 'react';
import Tabs from '../components/Tabs';

const Dashboard = props => {
  const [activeTab, setActiveTab] = useState(0);
  const {name, email, address, mobileNo, age} = props.route.params.data;
  const publicData = [name, email, age];
  const privateData = [address, mobileNo];
  return (
    <View style={styles.wrapper}>
      <ScrollView>
        <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />

        {activeTab === 0 && (
          <View>
            {publicData.map((data, index) => (
              <View style={styles.contentWrapper} key={index}>
                <Text style={styles.label}>{data}</Text>
              </View>
            ))}
          </View>
        )}
        {activeTab === 1 && (
          <View>
            {privateData.map((data, index) => (
              <View style={styles.contentWrapper} key={index}>
                <Text style={styles.label}>{data}</Text>
              </View>
            ))}
          </View>
        )}
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
  contentWrapper: {
    marginTop: 30,
    padding: 10,
    backgroundColor: '#fffccc',
    flex: 1,
    borderRadius: 5,
  },
  label: {
    fontSize: 16,
    color: '#393E46',
  },
});

export default Dashboard;
