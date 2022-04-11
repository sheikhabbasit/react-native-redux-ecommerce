import React from 'react';
import {View, Text} from 'react-native';
import FlexedScrollView from '../Components/HOC/FlexedScrollView';
import Component1 from '../Components/Views/StepperComponents/Component1';

const Stepper = () => {
  return (
    <FlexedScrollView variant="white">
      <Component1 />
    </FlexedScrollView>
  );
};

export default Stepper;
