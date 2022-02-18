import {View, Text, Pressable, StyleSheet} from 'react-native';
import React from 'react';

const Tabs = ({activeTab, setActiveTab}) => {
  const tabs = [
    {name: 'Public Data', index: 0},
    {name: 'Private Data', index: 1},
  ];
  return (
    <View style={styles.navigationWrapper}>
      {tabs.map((tab, index) => (
        <Pressable
          key={tab.name}
          android_ripple={{color: 'white'}}
          style={[styles.navItem, activeTab === tab.index && styles.activeNav]}
          onPress={() => setActiveTab(index)}>
          <Text
            style={[
              styles.navItemLabel,
              activeTab === tab.index && styles.activeLabel,
            ]}>
            {tab.name}
          </Text>
        </Pressable>
      ))}
    </View>
  );
};

export default Tabs;

const styles = StyleSheet.create({
  navigationWrapper: {
    backgroundColor: '#404040',
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
  activeLabel: {
    fontWeight: 'bold',
  },
});
