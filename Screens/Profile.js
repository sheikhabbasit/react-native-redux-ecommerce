import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Pressable,
} from 'react-native';
import React, {useState} from 'react';

const Profile = () => {
  return (
    <SafeAreaView style={styles.parent}>
      <ScrollView>
        <Text>This is Profile Page</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
const styles = StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: 'green',
  },
});
