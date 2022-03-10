import {StyleSheet, Text, Pressable} from 'react-native';
import React from 'react';

const SectionViewItem = ({item, section, onDelete, handleScroll}) => {
  return (
    <Pressable style={styles.item} onPress={() => handleScroll(item)}>
      <Text style={styles.item}>{item}</Text>
      <Pressable
        style={styles.deleteBtn}
        onPress={() => onDelete(item, section)}>
        <Text style={styles.text}>Delete</Text>
      </Pressable>
    </Pressable>
  );
};

export default SectionViewItem;

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#f9c2ff',
    padding: 10,
    marginVertical: 8,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  deleteBtn: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
  },
});
