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
import {UserSession} from '../Source/Models/Sessions/UserSession';
import {useIsFocused} from '@react-navigation/native';

const Profile = props => {
  const [loading, setLoading] = useState(true);
  const [userInfo, setUserInfo] = useState({email: '', password: ''});
  const [refreshing, setRefreshing] = useState(false);
  const isFocused = useIsFocused();

  useEffect(() => {
    checkUserSession();
  }, [isFocused]);

  const checkUserSession = async () => {
    const user = await UserSession.getUserLoggedIn();
    if (userInfo.email === user.email && userInfo.password === user.password)
      return;
    setUserInfo({email: user.email, password: user.password});
    setLoading(false);
    setRefreshing(false);
  };

  return (
    <SafeAreaView style={styles.parent}>
      <ActivityIndicator size="large" color="#FFBBBB" animating={loading} />
      {!loading && (
        <ScrollView
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={checkUserSession}
            />
          }
          contentContainerStyle={styles.card}>
          <Text style={styles.textLabel}>
            Email ID: <Text style={styles.credentials}>{userInfo.email}</Text>
          </Text>
          <Text style={styles.textLabel}>
            Password:
            <Text style={styles.credentials}>{userInfo.password}</Text>
          </Text>
        </ScrollView>
      )}
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
