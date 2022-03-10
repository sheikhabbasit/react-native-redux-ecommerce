import React, {useRef, useState} from 'react';
import {
  View,
  SafeAreaView,
  Text,
  SectionList,
  StyleSheet,
  FlatList,
  Pressable,
} from 'react-native';
import {DATA, CountriesList} from '../DummyData/CountryData';

const Countries = () => {
  const listRef = useRef(null);

  const handleScroll = name => {
    const countryIndex = CountriesList.indexOf(name);
    listRef.current.scrollToIndex({index: countryIndex});
  };

  const Item = ({title}) => (
    <Pressable style={styles.item} onPress={() => handleScroll(title)}>
      <Text style={styles.title}>{title}</Text>
    </Pressable>
  );

  return (
    <SafeAreaView style={styles.container}>
      <SectionList
        sections={DATA}
        keyExtractor={(item, index) => item + index}
        renderItem={({item}) => <Item title={item} />}
        renderSectionHeader={({section: {title}}) => (
          <Text style={styles.header}>{title}</Text>
        )}
      />
      <FlatList
        ref={listRef}
        initialScrollIndex={0}
        contentContainerStyle={styles.flatlistContainer}
        data={CountriesList}
        renderItem={({item}) => (
          <View style={styles.textCard}>
            <Text style={styles.text}>{item}</Text>
          </View>
        )}
        keyExtractor={item => item.toString()}
        horizontal
      />
    </SafeAreaView>
  );
};

export default Countries;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
  },
  header: {
    fontSize: 32,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
  },
  flatlistContainer: {
    borderRadius: 5,
    marginHorizontal: 16,
  },
  textCard: {
    padding: 12,
    backgroundColor: '#9C0F48',
    borderRadius: 5,
    marginBottom: 20,
    marginEnd: 10,
    height: 50,
  },
  text: {
    color: 'white',
  },
});

// import React from 'react';
// import {
//   StyleSheet,
//   Text,
//   View,
//   SafeAreaView,
//   SectionList,
//   StatusBar,
// } from 'react-native';

// const DATA = [
//   {
//     title: 'Main dishes',
//     data: ['Pizza', 'Burger', 'Risotto'],
//   },
//   {
//     title: 'Sides',
//     data: ['French Fries', 'Onion Rings', 'Fried Shrimps'],
//   },
//   {
//     title: 'Drinks',
//     data: ['Water', 'Coke', 'Beer'],
//   },
//   {
//     title: 'Desserts',
//     data: ['Cheese Cake', 'Ice Cream'],
//   },
// ];

// const Item = ({title}) => (
//   <View style={styles.item}>
//     <Text style={styles.title}>{title}</Text>
//   </View>
// );

// const Countries = () => (
//   <SafeAreaView style={styles.container}>
//     <SectionList
//       sections={DATA}
//       keyExtractor={(item, index) => item + index}
//       renderItem={({item}) => <Item title={item} />}
//       renderSectionHeader={({section: {title}}) => (
//         <Text style={styles.header}>{title}</Text>
//       )}
//     />
//   </SafeAreaView>
// );

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingTop: StatusBar.currentHeight,
//     marginHorizontal: 16,
//   },
//   item: {
//     backgroundColor: '#f9c2ff',
//     padding: 20,
//     marginVertical: 8,
//   },
//   header: {
//     fontSize: 32,
//     backgroundColor: '#fff',
//   },
//   title: {
//     fontSize: 24,
//   },
// });

// export default Countries;
