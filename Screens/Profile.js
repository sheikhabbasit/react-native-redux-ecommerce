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
  const [show, setShow] = useState(false);
  return (
    <SafeAreaView style={styles.parent}>
      <ScrollView>
        <View style={styles.box}>
          <Text>This is Profile Page</Text>
          {show && <Text>Pressible at Work</Text>}
        </View>
        <Pressable style={styles.box} onPress={() => setShow(!show)}>
          <Text>{show ? 'Hide' : 'Show'}</Text>
          <Text>Pressible</Text>
        </Pressable>
        <View style={styles.box2} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
const styles = StyleSheet.create({
  parent: {
    // backgroundColor: 'blue',
    flex: 1,
  },
  wrapper: {
    backgroundColor: 'green',
    flex: 1,
    paddingHorizontal: 20,
    marginHorizontal: 20,
  },
  box: {
    backgroundColor: 'green',
    height: 100,
    marginBottom: 20,
  },
  box2: {
    backgroundColor: 'brown',
    height: 300,
    marginBottom: 20,
    marginEnd: 20,
    width: 200,
  },
});
