import {View, Text, ScrollView, StyleSheet, Pressable} from 'react-native';
import React, {useState} from 'react';
import Tabs from '../components/Tabs';

const Dashboard = props => {
  const [activeTab, setActiveTab] = useState(0);
  const {name, email, address, mobileNo, age} = props.route.params.data;
  const publicData = [
    {fieldValue: name, label: 'Name'},
    {fieldValue: email, label: 'Email'},
    {fieldValue: age, label: 'Age'},
  ];
  const privateData = [
    {fieldValue: address, label: 'Address'},
    {fieldValue: mobileNo, label: 'Mobile No.'},
  ];
  return (
    <View style={styles.wrapper}>
      <ScrollView>
        <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />

        {activeTab === 0 && (
          <View>
            {publicData.map((data, index) => (
              <View style={styles.contentWrapper} key={data.label}>
                <Text style={styles.contentLabel}>{data.label}:</Text>
                <Text style={styles.label}>{data.fieldValue}</Text>
              </View>
            ))}
          </View>
        )}
        {activeTab === 1 && (
          <View>
            {privateData.map((data, index) => (
              <View style={styles.contentWrapper} key={data.label}>
                <Text style={styles.contentLabel}>{data.label}:</Text>
                <Text style={styles.label}>{data.fieldValue}</Text>
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
  contentLabel: {
    color: '#393E46',
    fontWeight: 'bold',
  },
  label: {
    fontSize: 16,
    color: '#000',
  },
});

export default Dashboard;
