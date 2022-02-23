import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  RefreshControl,
  ActivityIndicator,
} from 'react-native';
import React, {useState, useEffect, useCallback} from 'react';
import {useSelector} from 'react-redux';

const Profile = props => {
  const [refreshing, setRefreshing] = useState(false);
  const {email, password} = useSelector(state => state.app.userInfo);

  useEffect(() => {}, [email, password]);

  return (
    <SafeAreaView style={styles.parent}>
      <ScrollView
        refreshControl={<RefreshControl refreshing={refreshing} />}
        contentContainerStyle={styles.card}>
        <Text style={styles.textLabel}>
          Email ID: <Text style={styles.credentials}>{email}</Text>
        </Text>
        <Text style={styles.textLabel}>
          Password:
          <Text style={styles.credentials}>{password}</Text>
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
const styles = StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: '#FF5C8D',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    backgroundColor: '#FFBBBB',
    padding: 20,
    borderRadius: 15,
  },
  textLabel: {
    color: '#fff',
    fontWeight: 'bold',
  },
  credentials: {
    color: '#9C0F48',
  },
});
