import React, {useRef, useState} from 'react';
import {
  View,
  SafeAreaView,
  Text,
  SectionList,
  StyleSheet,
  FlatList,
} from 'react-native';
import SectionViewItem from '../Components/Views/SectionViewItem';
import {DATA, CountriesList} from '../DummyData/CountryData';

const Countries = () => {
  const [countries, setCountries] = useState(CountriesList);
  const [data, setData] = useState(DATA);
  const listRef = useRef(null);

  const handleScroll = name => {
    const countryIndex = countries.indexOf(name);
    listRef.current.scrollToIndex({index: countryIndex});
  };

  const deleteItem = (item, section, index) => {
    const newData = countries.filter(country => country !== item);
    setCountries(newData);

    const sectionData = [...data];
    const deleteIndex = sectionData.indexOf(section);
    const newSectionArray = sectionData[deleteIndex].data.filter(
      country => country !== item,
    );
    if (newSectionArray.length === 0) {
      sectionData.splice(deleteIndex, 1);
      return setData(sectionData);
    }
    sectionData[deleteIndex].data = newSectionArray;
    setData(sectionData);
  };

  return (
    <SafeAreaView style={styles.container}>
      <SectionList
        sections={data}
        keyExtractor={(item, index) => item + index}
        renderItem={({item, section}) => (
          <SectionViewItem
            item={item}
            section={section}
            onDelete={deleteItem}
            handleScroll={handleScroll}
          />
        )}
        renderSectionHeader={({section: {title}}) => {
          return <Text style={styles.header}>{title}</Text>;
        }}
        extraData={countries}
        stickySectionHeadersEnabled={true}
      />
      <FlatList
        ref={listRef}
        initialScrollIndex={0}
        contentContainerStyle={styles.flatlistContainer}
        data={countries}
        renderItem={({item}) => (
          <View style={styles.textCard}>
            <Text style={styles.text}>{item}</Text>
          </View>
        )}
        keyExtractor={item => item.toString()}
        horizontal
        extraData={countries}
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
