import React from 'react';
import {View, Text} from 'react-native';
import Button from '../Components/HOC/Button';
import FlexedScrollView from '../Components/HOC/FlexedScrollView';

const OtherRoutes = props => {
  return (
    <FlexedScrollView>
      <Button
        color="#062C30"
        label="List of Dog Breeds"
        onPress={() => props.navigation.navigate('Image Genre')}
      />
      <Button
        color="#062C30"
        label="List of Countries"
        onPress={() => props.navigation.navigate('Countries')}
      />
      <Button
        color="#062C30"
        label="Pagination Flatlist"
        onPress={() => props.navigation.navigate('Image With Pagination')}
      />
      <Button
        color="#062C30"
        label="Map"
        onPress={() => props.navigation.navigate('Location Select')}
      />
      <Button
        color="#062C30"
        label="Direct to map"
        onPress={() => props.navigation.navigate('Map')}
      />
      <Button
        color="#062C30"
        label="Animations"
        onPress={() => props.navigation.navigate('Animations')}
      />
      <Button
        color="#062C30"
        label="Stepper"
        onPress={() => props.navigation.navigate('Stepper')}
      />
    </FlexedScrollView>
  );
};

export default OtherRoutes;
