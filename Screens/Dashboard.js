import {View, Text, ScrollView, StyleSheet, Pressable} from 'react-native';
import React, {useState} from 'react';

const Dashboard = props => {
  const [activeTab, setActiveTab] = useState(0);
  const {name, email, address, mobileNo, age} = props.route.params.data;
  return (
    <View style={styles.wrapper}>
      <ScrollView>
        <View style={styles.navigationWrapper}>
          <Pressable
            android_ripple={{color: 'white'}}
            style={[styles.navItem, activeTab === 0 && styles.activeNav]}
            onPress={() => setActiveTab(0)}>
            <Text style={styles.navItemLabel}>Public Data</Text>
          </Pressable>
          <Pressable
            android_ripple={{color: 'white'}}
            style={[styles.navItem, activeTab === 1 && styles.activeNav]}
            onPress={() => setActiveTab(1)}>
            <Text style={styles.navItemLabel}>Private Data</Text>
          </Pressable>
        </View>
        {activeTab === 0 && (
          <View>
            <View style={styles.contentWrapper}>
              <Text style={styles.label}>{name}</Text>
            </View>
            <View style={styles.contentWrapper}>
              <Text style={styles.label}>{email}</Text>
            </View>
            <View style={styles.contentWrapper}>
              <Text style={styles.label}>{age}</Text>
            </View>
          </View>
        )}
        {activeTab === 1 && (
          <View>
            <View style={styles.contentWrapper}>
              <Text style={styles.label}>{address}</Text>
            </View>
            <View style={styles.contentWrapper}>
              <Text style={styles.label}>{mobileNo}</Text>
            </View>
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
  navigationWrapper: {
    backgroundColor: '#3FC1C9',
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  navItem: {
    padding: 10,
    borderColor: 'grey',
    borderWidth: 1,
    width: '50%',
    alignItems: 'center',
  },
  activeNav: {
    backgroundColor: '#3F90a7',
  },
  navItemLabel: {
    color: '#fff',
    fontSize: 16,
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
