import {Text} from 'react-native';
import React from 'react';

const CustomText = ({
  numberOfLines,
  variant,
  color,
  label,
  size,
  theme,
  overflow,
  opacity,
  children,
}) => {
  return (
    <Text
      numberOfLines={numberOfLines}
      style={{
        fontFamily: `Ubuntu-${variant}`,
        color: theme ? 'white' : color,
        fontSize: size,
        opacity,
        overflow,
      }}>
      {label}
      {children}
    </Text>
  );
};

export default CustomText;
