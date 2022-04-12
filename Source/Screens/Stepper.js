import React, {useState} from 'react';
import {View, Text} from 'react-native';
import FlexedScrollView from '../Components/HOC/FlexedScrollView';
import Component1 from '../Components/Views/StepperComponents/Component1';
import Component2 from '../Components/Views/StepperComponents/Component2';
import Component3 from '../Components/Views/StepperComponents/Component3';

const Stepper = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <FlexedScrollView variant="white">
      {activeIndex === 0 && <Component1 setActiveIndex={setActiveIndex} />}
      {activeIndex === 1 && (
        <Component2 activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
      )}
      {activeIndex === 2 && (
        <Component3 activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
      )}
    </FlexedScrollView>
  );
};

export default Stepper;
