import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';

const ImageHome = props => {
  const [imageList, setImageList] = useState([]);
  const [loading, setLoading] = useState(false);
  return (
    <View>
      <Text>ImageHome</Text>
    </View>
  );
};

export default ImageHome;
